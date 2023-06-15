import { ReactNode } from 'react';
export default function ResponsiveTable(props: {
    headers: string[];
    rows: ReactNode[][];
    mediaWidth: number;
    onRowClick?(rowIndex: number): void;
    wrapperClassName?: string;
    additionalMobileCellClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map