export interface ImageViewerConfig {
    btnClass?: string;
    zoomFactor?: number;
    containerBackgroundColor?: string;
    wheelZoom?: boolean;
    allowFullscreen?: boolean;

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
