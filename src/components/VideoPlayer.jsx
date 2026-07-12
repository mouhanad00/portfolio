import { forwardRef } from 'react';

const VideoPlayer = forwardRef(({ src, className = "", controls = true, onError, fitMode = "cover" }, ref) => {
    if (!src) return null;

    const fitClassName = fitMode === 'contain'
        ? 'object-contain object-center'
        : 'object-cover object-top';

    return (
        <video
            ref={ref}
            key={src}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            controls={controls}
            preload="metadata"
            onError={onError}
            className={`w-full h-full ${fitClassName} ${className}`.trim()}
        >
            <source src={src} />
            Your browser does not support the video tag.
        </video>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
