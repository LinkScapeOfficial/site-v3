import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "@/lib/governance";
import type { ReactNode } from "react";

/** "1.2 Expected Behavior" -> { num: "1.2", label: "Expected Behavior" } */
function splitHeading(children: ReactNode) {
  const text = flatten(children);
  const m = text.match(/^([\dIVXLC.]+)\s+(.*)$/);
  if (!m) return { id: undefined, num: null, label: text };
  return { id: slugifyHeading(m[1], m[2]), num: m[1], label: m[2] };
}

function flatten(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flatten).join("");
  if (typeof node === "object" && "props" in (node as any)) {
    return flatten((node as any).props?.children);
  }
  return "";
}

/** Renders a converted governance document. */
export default function DocBody({ content }: { content: string }) {
  return (
    <div className="prose-linkscape">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2({ children }) {
            const { id, num, label } = splitHeading(children);
            return (
              <h2 id={id}>
                {num ? (
                  <span className="mr-2.5 font-mono text-sm font-normal text-muted-foreground">
                    {num}
                  </span>
                ) : null}
                {label}
              </h2>
            );
          },
          h3({ children }) {
            const { id, num, label } = splitHeading(children);
            return (
              <h3 id={id}>
                {num ? (
                  <span className="mr-2 font-mono text-xs font-normal text-muted-foreground">
                    {num}
                  </span>
                ) : null}
                {label}
              </h3>
            );
          },
          h4({ children }) {
            const { id, num, label } = splitHeading(children);
            return (
              <h4 id={id}>
                {num ? (
                  <span className="mr-2 font-mono text-xs font-normal text-muted-foreground">
                    {num}
                  </span>
                ) : null}
                {label}
              </h4>
            );
          },
          // Tables scroll inside their own box so the page never does.
          table({ children }) {
            return (
              <div className="scroll-x my-6">
                <table className="min-w-[520px]">{children}</table>
              </div>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
