// src/react-qr-reader.d.ts
declare module "@blackbox-vision/react-qr-reader" {
  import * as React from "react";

  export interface QrReaderProps {
    onResult?: (result: { text: string } | null, error: any) => void;
    delay?: number;
    style?: React.CSSProperties;
    constraints?: MediaStreamConstraints;
  }

  export const QrReader: React.FC<QrReaderProps>;
  export const useQrReader: any;
}
