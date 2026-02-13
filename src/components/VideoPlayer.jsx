import { forwardRef } from 'react';

const VideoPlayer = forwardRef(({ src, className = "", controls = true, onError }, ref) => {
    if (!src) return null;

    return (
        <video
            ref={ref}
            key={src}
            autoPlay
            muted
            loop
            playsInline
            controls={controls}
            preload="metadata"
            onError={onError}
            className={`w-full h-full object-cover object-top ${className}`}
        >
            <source src={src} />
            Your browser does not support the video tag.
        </video>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
