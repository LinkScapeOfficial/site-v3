"use client"
import './grid.css';
import React from 'react';

// 1) Breakpoints
const SM_BREAKPOINT = 640;
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;

type Breakpoint = 'sm' | 'md' | 'lg';
function getBreakpoint(width: number): Breakpoint {
  if (width < SM_BREAKPOINT) return 'sm';
  if (width < MD_BREAKPOINT) return 'md';
  return 'lg';
}

function useCurrentBreakpoint(): Breakpoint {
  const [bp, setBp] = React.useState<Breakpoint>('lg');
  
  React.useEffect(() => {
    setBp(getBreakpoint(window.innerWidth));
    function handleResize() {
      setBp(getBreakpoint(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return bp;
}

// 2) Types
type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export interface GridProps {
  rows: ResponsiveValue<number>;
  columns: ResponsiveValue<number>;
  children?: React.ReactNode;
}

export interface CellProps {
  row?: ResponsiveValue<number | string>;
  column?: ResponsiveValue<number | string>;
  rowSpan?: ResponsiveValue<number>;
  columnSpan?: ResponsiveValue<number>;
  solid?: boolean;
  children?: React.ReactNode;
}

export interface CrossProps {
  row: number | 'auto' | '-1';
  column: number | 'auto' | '-1';
}

// 3) Resolving the responsive value
function resolveResponsiveValue<T>(value: ResponsiveValue<T>, bp: Breakpoint): T {
  if (value === null || value === undefined) {
    throw new Error('Responsive value cannot be null or undefined');
  }
  if (typeof value !== 'object') {
    return value;
  }
  if (typeof value === 'object' && 'lg' in value && bp === 'lg' && value.lg !== undefined) return value.lg;
  if (typeof value === 'object' && 'md' in value && bp === 'md' && value.md !== undefined) return value.md;
  if (typeof value === 'object' && 'sm' in value && value.sm !== undefined) return value.sm;
  throw new Error(`No matching responsive value provided for ${JSON.stringify(value)}`);
}

// 4) Helper to parse slash vs. numeric
function getGridLine(line: number | string, span: number | string): string {
  if (typeof line === 'string' && line.includes('/')) {
    return line; // e.g. "1/3"
  }
  return `${line} / span ${span}`;
}

// 5) Cell
export function Cell({
  row = 'auto',
  column = 'auto',
  rowSpan = 1,
  columnSpan = 1,
  solid,
  children
}: CellProps) {
  const bp = useCurrentBreakpoint();
  const finalRow = resolveResponsiveValue(row, bp);
  const finalColumn = resolveResponsiveValue(column, bp);
  const finalRowSpan = resolveResponsiveValue(rowSpan, bp);
  const finalColSpan = resolveResponsiveValue(columnSpan, bp);

  return (
    <div
      className={`rg-grid-cell ${solid ? 'solid-class' : ''}`}
      style={{
        gridRow: getGridLine(finalRow, finalRowSpan),
        gridColumn: getGridLine(finalColumn, finalColSpan)
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// 6) Cross
export function Cross({ row, column }: CrossProps) {
  return (
    <div
      className="rg-grid-cross"
      style={{
        gridRow: row,
        gridColumn: column,
        transform: 'translate(-50%, -50%)'
      } as React.CSSProperties}
    />
  );
}

// 7) Grid
export function Grid({ rows, columns, children }: GridProps) {
  const bp = useCurrentBreakpoint();
  const finalRows = resolveResponsiveValue(rows, bp);
  const finalCols = resolveResponsiveValue(columns, bp);

  // Collect all covered positions (numeric only)
  const coveredPositions = new Set<string>();
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Cell) {
      const { row = 1, column = 1, rowSpan = 1, columnSpan = 1 } = child.props as CellProps;

      // Attempt numeric coverage only if row/column are pure numbers
      const maybeRow = typeof row === 'number' ? row : null;
      const maybeRowSpan = typeof rowSpan === 'number' ? rowSpan : 1;
      const maybeCol = typeof column === 'number' ? column : null;
      const maybeColSpan = typeof columnSpan === 'number' ? columnSpan : 1;

      if (maybeRow != null && maybeCol != null) {
        for (let r = maybeRow; r < maybeRow + maybeRowSpan; r++) {
          for (let c = maybeCol; c < maybeCol + maybeColSpan; c++) {
            coveredPositions.add(`${r}-${c}`);
          }
        }
      }
    }
  });

  return (
    <div
      className="rg-grid"
      style={{
        '--rows': finalRows,
        '--columns': finalCols,
        position: 'relative'
      } as React.CSSProperties}
    >
      <div className="rg-grid-guides">
        {Array.from({ length: finalRows * finalCols }, (_, index) => {
          const x = (index % finalCols) + 1;
          const y = Math.floor(index / finalCols) + 1;
          const positionKey = `${y}-${x}`;
          if (coveredPositions.has(positionKey)) {
            return null;
          }
          return (
            <div
              key={`guide-${index}`}
              className="rg-grid-guide"
              style={{
                '--x': x,
                '--y': y
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
