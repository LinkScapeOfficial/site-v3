#!/usr/bin/env python3
"""Generate the project figures as SVG, a light and a dark file each.

Charts are hand-built so the marks match the site. Series colours were
checked for colour-vision separation and contrast against both surfaces.

    python3 scripts/build_figures.py  ->  public/figures/*.svg
"""

import math
import os

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "figures")

FONT = (
    "Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', "
    "Helvetica, Arial, sans-serif"
)
MONO = "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

THEMES = {
    "light": dict(
        text="#24292f", muted="#57606a", faint="#8c959f",
        grid="#d0d7de", surface="#ffffff", panel="#f6f8fa",
        s1="#0969da", s2="#bc4c00",
    ),
    "dark": dict(
        text="#f0f6fc", muted="#9198a1", faint="#7d8590",
        grid="#30363d", surface="#0d1117", panel="#161b22",
        s1="#218bff", s2="#e16f24",
    ),
}


def svg(width, height, body, t):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'width="{width}" height="{height}" font-family="{FONT}" '
        f'role="img">{body}</svg>'
    )


def text(x, y, s, size=12, fill="#000", weight=400, anchor="start", mono=False):
    family = f' font-family="{MONO}"' if mono else ""
    return (
        f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{fill}" '
        f'font-weight="{weight}" text-anchor="{anchor}"{family}>{s}</text>'
    )


def bar(x, y, w, h, fill, r=4):
    """A bar with rounded far end, square against the baseline."""
    r = min(r, w / 2, h)
    if h <= 0.5:
        return ""
    return (
        f'<path d="M{x:.1f},{y + h:.1f} L{x:.1f},{y + r:.1f} '
        f'Q{x:.1f},{y:.1f} {x + r:.1f},{y:.1f} '
        f'L{x + w - r:.1f},{y:.1f} Q{x + w:.1f},{y:.1f} {x + w:.1f},{y + r:.1f} '
        f'L{x + w:.1f},{y + h:.1f} Z" fill="{fill}"/>'
    )


OOV = [
    ("Token-only baselines", 14.0, 7.4, True),
    ("SubChar-Wubi", 65.2, 45.0, False),
    ("ChineseBERT", 66.2, 48.4, False),
    ("CNM-BERT", 76.0, 56.1, False),
]


def fig_oov(t):
    W, H = 760, 380
    left, top, right, bottom = 172, 74, 40, 46
    plot_w = W - left - right
    plot_h = H - top - bottom
    row_h = plot_h / len(OOV)
    scale = plot_w / 80.0

    b = [f'<rect width="{W}" height="{H}" fill="none"/>']
    b.append(text(0, 22, "Structural probing on out-of-vocabulary characters",
                  16, t["text"], 600))
    b.append(text(0, 42, "Chinese Character Dataset. Higher is better.",
                  12.5, t["muted"]))

    lx = 0
    for label, c in (("Structure F1", t["s1"]), ("Radical F1", t["s2"])):
        b.append(f'<rect x="{lx}" y="{56}" width="10" height="10" rx="2" fill="{c}"/>')
        b.append(text(lx + 15, 65, label, 11.5, t["muted"]))
        lx += 30 + len(label) * 6.4

    for i, (name, s1, s2, capped) in enumerate(OOV):
        y0 = top + i * row_h
        strong = name == "CNM-BERT"
        b.append(text(left - 14, y0 + 20, name, 12.5,
                      t["text"] if strong else t["muted"],
                      600 if strong else 400, "end"))
        for j, (v, c) in enumerate(((s1, t["s1"]), (s2, t["s2"]))):
            # 2px gap between the two fills in a group.
            by = y0 + 8 + j * 17
            b.append(bar(left, by, max(v * scale, 1), 15, c))
            prefix = "≤ " if capped else ""
            b.append(text(left + v * scale + 8, by + 12, f"{prefix}{v:.1f}",
                          11.5, t["muted"], 500, mono=True))
        if i:
            b.append(f'<line x1="{left - 160}" y1="{y0}" x2="{W - right}" '
                     f'y2="{y0}" stroke="{t["grid"]}" stroke-width="1"/>')

    return svg(W, H, "".join(b), t)


SHIFT = [("In-distribution", 1.3), ("Long tail", 4.0), ("Out-of-vocabulary", 9.8)]


def fig_shift(t):
    W, H = 760, 300
    left, top, right, bottom = 0, 88, 40, 40
    plot_w = W - left - right - 150
    col_w = plot_w / len(SHIFT)
    base = H - bottom
    scale = (base - top) / 11.0

    b = [f'<rect width="{W}" height="{H}" fill="none"/>']
    b.append(text(0, 22, "The advantage grows as the data gets harder",
                  16, t["text"], 600))
    b.append(text(0, 42, "Structure F1 gained over the strongest baseline, by split.",
                  12.5, t["muted"]))
    b.append(text(0, 60, "A widening gap is the signature of an architectural prior "
                  "rather than a scaling artefact.", 12.5, t["muted"]))

    b.append(f'<line x1="0" y1="{base}" x2="{W - right}" y2="{base}" '
             f'stroke="{t["grid"]}" stroke-width="1"/>')

    for i, (name, v) in enumerate(SHIFT):
        cx = 60 + i * col_w
        h = v * scale
        b.append(bar(cx, base - h, 92, h, t["s1"]))
        b.append(text(cx + 46, base - h - 12, f"+{v}", 20, t["text"], 600,
                      "middle", mono=True))
        b.append(text(cx + 46, base + 20, name, 12, t["muted"], 400, "middle"))

    return svg(W, H, "".join(b), t)


def cim_signal():
    """A carrier under low-frequency amplitude modulation, with the jitter
    and depth breathing that keep it musical."""
    sr = 2000
    seconds = 3.0
    n = int(sr * seconds)
    time = np.linspace(0, seconds, n)

    carrier = np.sin(2 * np.pi * 220 * time)

    beat = 10.0                      # alpha-band modulation
    depth = 0.45
    breathing = 1 + 0.18 * np.sin(2 * np.pi * 0.25 * time)
    jitter = 0.10 * np.sin(2 * np.pi * 0.7 * time + 1.1)
    envelope = 1 - depth * breathing * (
        0.5 - 0.5 * np.cos(2 * np.pi * (beat * time + jitter))
    )
    return time, carrier * envelope, envelope


def fig_cim(t):
    """Envelope in full, plus a zoom short enough to show the carrier.

    Three seconds of a 220 Hz carrier draws as a solid block at this width, so
    the band shows its extent and the inset shows the waveform.
    """
    W, H = 760, 320
    top, bottom = 92, 52
    time, wave, env = cim_signal()
    main_w = 520
    mid = top + (H - top - bottom) / 2
    amp = (H - top - bottom) / 2 - 6
    sx = main_w / time[-1]

    # Decimate for drawing; same shape, much smaller file.
    step = max(1, len(time) // 900)
    ts, es = time[::step], env[::step]

    upper = " ".join(f"{x * sx:.1f},{mid - v * amp:.1f}" for x, v in zip(ts, es))
    lower = " ".join(
        f"{x * sx:.1f},{mid + v * amp:.1f}" for x, v in zip(ts[::-1], es[::-1])
    )

    b = [f'<rect width="{W}" height="{H}" fill="none"/>']
    b.append(text(0, 22, "Three seconds of the modulation engine", 16, t["text"], 600))
    b.append(text(0, 42, "Output of the actual pipeline: a 220 Hz carrier under "
                  "10 Hz amplitude modulation.", 12.5, t["muted"]))
    b.append(text(0, 60, "The envelope drifts instead of repeating exactly. That "
                  "drift is what keeps it sounding like music.", 12.5, t["muted"]))

    b.append(f'<path d="M{upper} L{lower} Z" fill="{t["s1"]}" fill-opacity="0.18"/>')
    b.append(f'<polyline points="{upper}" fill="none" stroke="{t["s2"]}" '
             f'stroke-width="2" stroke-linejoin="round"/>')
    b.append(f'<polyline points="{lower}" fill="none" stroke="{t["s2"]}" '
             f'stroke-width="2" stroke-linejoin="round"/>')
    b.append(f'<line x1="0" y1="{mid}" x2="{main_w}" y2="{mid}" '
             f'stroke="{t["grid"]}" stroke-width="1"/>')

    for sec in (0, 1, 2, 3):
        b.append(text(sec * sx, H - 30, f"{sec}s", 11, t["faint"], 400,
                      "middle" if sec else "start", mono=True))

    # Inset: 40 ms, where individual carrier cycles are visible.
    ix, iw = main_w + 40, W - main_w - 40
    win = (time >= 1.0) & (time <= 1.04)
    wt, ww = time[win], wave[win]
    isx = iw / (wt[-1] - wt[0])
    pts = " ".join(
        f"{ix + (x - wt[0]) * isx:.1f},{mid - v * amp * 0.82:.1f}"
        for x, v in zip(wt, ww)
    )
    b.append(f'<rect x="{ix}" y="{mid - amp}" width="{iw}" height="{amp * 2}" '
             f'rx="6" fill="{t["panel"]}" stroke="{t["grid"]}"/>')
    b.append(f'<polyline points="{pts}" fill="none" stroke="{t["s1"]}" '
             f'stroke-width="1.4"/>')
    b.append(text(ix, top - 10, "40 ms, zoomed", 11, t["faint"], 500, mono=True))

    b.append(f'<rect x="0" y="{H - 18}" width="10" height="10" rx="2" '
             f'fill="{t["s2"]}"/>')
    b.append(text(15, H - 9, "Envelope", 11.5, t["muted"]))
    b.append(f'<rect x="86" y="{H - 18}" width="10" height="10" rx="2" '
             f'fill="{t["s1"]}" fill-opacity="0.35"/>')
    b.append(text(101, H - 9, "Carrier", 11.5, t["muted"]))
    return svg(W, H, "".join(b), t)


def node(x, y, w, h, label, sub, t, accent=False):
    stroke = t["s1"] if accent else t["grid"]
    fill = t["panel"]
    out = (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{fill}" '
           f'stroke="{stroke}" stroke-width="{1.5 if accent else 1}"/>')
    out += text(x + w / 2, y + (24 if sub else h / 2 + 4), label, 13,
                t["text"], 600, "middle")
    if sub:
        out += text(x + w / 2, y + 42, sub, 11, t["muted"], 400, "middle")
    return out


def arrow(x1, y, x2, t):
    return (f'<line x1="{x1}" y1="{y}" x2="{x2 - 6}" y2="{y}" stroke="{t["faint"]}" '
            f'stroke-width="1.5"/>'
            f'<path d="M{x2 - 7},{y - 4} L{x2},{y} L{x2 - 7},{y + 4}" '
            f'fill="none" stroke="{t["faint"]}" stroke-width="1.5" '
            f'stroke-linejoin="round" stroke-linecap="round"/>')


def flow(title, subtitle, steps, t, accent_last=True):
    W = 760
    H = 190
    b = [f'<rect width="{W}" height="{H}" fill="none"/>']
    b.append(text(0, 22, title, 16, t["text"], 600))
    b.append(text(0, 42, subtitle, 12.5, t["muted"]))

    n = len(steps)
    gap = 26
    w = (W - gap * (n - 1)) / n
    y = 84
    h = 62
    for i, (label, sub) in enumerate(steps):
        x = i * (w + gap)
        b.append(node(x, y, w, h, label, sub, t,
                      accent=accent_last and i == n - 1))
        if i:
            b.append(arrow(x - gap + 3, y + h / 2, x - 3, t))
    return svg(W, H, "".join(b), t)


def fig_linkdown(t):
    return flow(
        "What happens when you click download",
        "The parts that normally require a terminal are bundled and pre-configured.",
        [("Browser add-on", "detects the video"),
         ("yt-dlp", "fetches the streams"),
         ("ffmpeg", "muxes to MP4"),
         ("Your disk", "one file, playable")],
        t,
    )


def fig_ollmao(t):
    return flow(
        "Where your conversation goes",
        "Nowhere. The model runs on your own hardware and the text never leaves it.",
        [("SwiftUI app", "native macOS"),
         ("Ollama", "local runtime"),
         ("Open model", "on your GPU"),
         ("Reply", "no account, no upload")],
        t,
    )


def fig_cnm_arch(t):
    W, H = 760, 240
    b = [f'<rect width="{W}" height="{H}" fill="none"/>']
    b.append(text(0, 22, "Where the structure enters the model", 16, t["text"], 600))
    b.append(text(0, 42, "The backbone, the vocabulary, and the output head are "
                 "untouched, so it drops into an existing pipeline.", 12.5, t["muted"]))

    b.append(node(0, 74, 170, 54, "Character", "e.g. 樹", t))
    b.append(arrow(176, 101, 200, t))
    b.append(node(200, 62, 190, 34, "Token embedding", "", t))
    b.append(node(200, 106, 190, 34, "Tree-MLP over IDS", "", t, accent=True))
    b.append(f'<path d="M396,79 L410,79 Q418,79 418,87 L418,115 Q418,123 410,123 '
             f'L396,123" fill="none" stroke="{t["faint"]}" stroke-width="1.5"/>')
    b.append(arrow(418, 101, 442, t))
    b.append(node(442, 74, 140, 54, "Fusion", "LayerNorm", t))
    b.append(arrow(588, 101, 612, t))
    b.append(node(612, 74, 148, 54, "BERT", "unchanged", t))
    b.append(text(0, 170, "Structure is symbolic and computed once per unique "
                 "character per batch, so training costs about 5% more.",
                 12.5, t["muted"]))
    b.append(text(0, 192, "An out-of-vocabulary character still carries its "
                 "components, which is why the gap widens on rare characters.",
                 12.5, t["muted"]))
    return svg(W, H, "".join(b), t)


def fig_resonaite_arch(t):
    return flow(
        "The loop that closes",
        "The headset reads eight frequency bands once a second and the music answers.",
        [("EEG headset", "8 bands at 1 Hz"),
         ("Metrics", "engagement, alpha"),
         ("CIM engine", "retunes modulation"),
         ("Audio", "shifts as you listen")],
        t,
    )


FIGURES = {
    "cnm-bert-oov": fig_oov,
    "cnm-bert-shift": fig_shift,
    "cnm-bert-arch": fig_cnm_arch,
    "resonaite-cim": fig_cim,
    "resonaite-arch": fig_resonaite_arch,
    "linkdown-flow": fig_linkdown,
    "ollmao-flow": fig_ollmao,
}


def main():
    os.makedirs(OUT, exist_ok=True)
    for name, fn in FIGURES.items():
        for mode, t in THEMES.items():
            path = os.path.join(OUT, f"{name}-{mode}.svg")
            with open(path, "w", encoding="utf-8") as f:
                f.write(fn(t))
            print(f"  {name}-{mode}.svg  {os.path.getsize(path) / 1024:.1f} KB")
    print(f"\n{len(FIGURES) * 2} figures written to public/figures/")


if __name__ == "__main__":
    main()
