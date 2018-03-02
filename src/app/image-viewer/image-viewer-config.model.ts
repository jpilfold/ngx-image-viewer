export interface ImageViewerConfig {
    btnClass?: string;
    zoomFactor?: number;
    containerBackgroundColor?: string;
    wheelZoom?: boolean;
    allowFullscreen?: boolean;

    btnShow?: {
      zoomIn?: boolean;
      zoomOut?: boolean;
      rotateClockwise?: boolean;
      rotateCounterClockwise?: boolean;
      next?: boolean;
      prev?: boolean;
      fullscreen?: boolean;
    };

    btnIcons?: {
        zoomIn?: string;
        zoomOut?: string;
        rotateClockwise?: string;
        rotateCounterClockwise?: string;
        next?: string;
        prev?: string;
        fullscreen?: string;
    };

}
