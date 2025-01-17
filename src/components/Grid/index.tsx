import './grid.css';
import React, { ReactNode } from 'react';

interface GridProps {
  rows: number;
  columns: number;
  children?: ReactNode;
}

interface CellProps {
  row?: number | 'auto';
  column?: number | 'auto';
  rowSpan?: number;
  columnSpan?: number;
  children?: ReactNode;
}

interface CrossProps {
  row: number | 'auto' | '-1';
  column: number | 'auto' | '-1';
}

function Cell({ row = 'auto', column = 'auto', rowSpan = 1, columnSpan = 1, children }: CellProps) {
  return (
    <div
      className="rg-grid-cell"
      style={{
        gridRow: `${row} / span ${rowSpan}`,
        gridColumn: `${column} / span ${columnSpan}`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function Cross({ row, column }: CrossProps) {
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

export function Grid({ rows, columns, children }: GridProps) {
  // Collect all covered grid positions
  const coveredPositions = new Set<string>();

  // Convert React children to an array for iteration
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Cell) {
      const { row = 1, column = 1, rowSpan = 1, columnSpan = 1 } = child.props as CellProps;
      const startRow = typeof row === 'number' ? row : 1;
      const startCol = typeof column === 'number' ? column : 1;
      for (let r = startRow; r < startRow + rowSpan; r++) {
        for (let c = startCol; c < startCol + columnSpan; c++) {
          coveredPositions.add(`${r}-${c}`);
        }
      }
    }
  });

  return (
    <div
      className="rg-grid"
      style={{
        '--rows': rows,
        '--columns': columns,
        position: 'relative'
      } as React.CSSProperties}
    >
      <div className="rg-grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          const positionKey = `${y}-${x}`;

          // Skip rendering this guide if the position is covered by a spanning cell
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

// Attach subcomponents
Grid.Cell = Cell;
Grid.Cross = Cross;

export type { GridProps, CellProps, CrossProps };
