declare module 'react-plotly.js' {
  import * as React from 'react';
  import { Layout, Data, Config } from 'plotly.js';

  export interface PlotParams {
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    useResizeHandler?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onInitialized?: (figure: any) => void;
    onUpdate?: (figure: any) => void;
  }

  const Plot: React.FC<PlotParams>;
  export default Plot;
}
