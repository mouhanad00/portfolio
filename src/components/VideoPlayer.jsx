import { forwardRef } from 'react';

const VideoPlayer = forwardRef(({ src, className = "" }, ref) => {
    if (!src) return null;

    return (
        <video
            ref={ref}
            key={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover ${className}`}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
