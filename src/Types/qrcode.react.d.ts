// src/qrcode.react.d.ts
declare module "qrcode.react" {
  import * as React from "react";

  export interface QRCodeProps {
    /**
     * The value to encode into the QR Code. Can be a string or an array of strings.
     */
    value: string | string[];
    /**
     * The size in pixels to render the QR Code.
     * @default 128
     */
    size?: number;
    /**
     * The error correction level to use.
     * @default "L"
     */
    level?: "L" | "M" | "Q" | "H";
    /**
     * The background color.
     * @default "#FFFFFF"
     */
    bgColor?: string;
    /**
     * The foreground color.
     * @default "#000000"
     */
    fgColor?: string;
    /**
     * Whether to include a margin (deprecated; use marginSize instead)
     * @default false
     */
    includeMargin?: boolean;
    /**
     * The size (in modules) of the margin.
     * @default 0
     */
    marginSize?: number;
    /**
     * The title for accessibility.
     */
    title?: string;
    /**
     * The minimum QR Code version to use.
     * @default 1
     */
    minVersion?: number;
    /**
     * Whether to boost the error correction level if possible.
     * @default true
     */
    boostLevel?: boolean;
    /**
     * Settings for an embedded image.
     */
    imageSettings?: {
      src: string;
      height: number;
      width: number;
      excavate: boolean;
      x?: number;
      y?: number;
      opacity?: number;
      crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    };
  }

  export const QRCodeSVG: React.FC<QRCodeProps>;
  export const QRCodeCanvas: React.FC<QRCodeProps>;
}
