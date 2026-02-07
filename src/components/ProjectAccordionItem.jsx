import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ProjectAccordionItem = ({ project, isActive, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isHovered && videoRef.current) {
            videoRef.current.play().catch(e => console.log('Autoplay prevented', e));
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <div
            className={`accordion-item ${isActive ? 'active' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onToggle}
        >
            <div className="accordion-header">
                <div className="accordion-visual">
                    <img src={project.image} alt={project.title} className="accordion-img" />
                    {project.videoUrl && (
                        <video
                            ref={videoRef}
                            src={project.videoUrl}
                            muted
                            loop
                            playsInline
                            className={`accordion-video ${isHovered ? 'visible' : ''}`}
                        />
                    )}
                    <div className="visual-overlay"></div>
                </div>

                <div className="accordion-title-row">
                    <h2 className="accordion-title">{project.title}</h2>
                    <span className="accordion-category">{project.category}</span>
                    <span className="accordion-icon">{isActive ? '−' : '+'}</span>
                </div>
            </div>

            <div
                className="accordion-content"
                style={{
                    height: isActive ? contentRef.current?.scrollHeight + 'px' : '0px',
                    opacity: isActive ? 1 : 0
                }}
            >
                <div className="content-inner" ref={contentRef}>
                    <div className="content-grid">
                        <div className="content-block">
                            <span className="label">ROLE</span>
                            <p>{project.role}</p>
                        </div>
                        <div className="content-block">
                            <span className="label">YEAR</span>
                            <p>{project.year}</p>
                        </div>
                        <div className="content-block description">
                            <p>{project.description}</p>
                        </div>
                        <div className="content-action">
                            <Link to={`/project/${project.id}`} className="view-project-btn">
                                VIEW PROJECT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .accordion-item {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            overflow: hidden;
            cursor: pointer;
            transition: background-color 0.4s ease;
        }

        .accordion-item:hover {
            background-color: rgba(255,255,255,0.02);
        }

        .accordion-header {
            position: relative;
            padding: 4rem 0;
        }

        .accordion-visual {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            width: 40%;
            aspect-ratio: 16/9;
            opacity: 0;
            pointer-events: none;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 0;
            overflow: hidden;
        }

        .accordion-item:hover .accordion-visual {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
        }

        /* Active state brings visual to focus or hides it? 
           Design rule: "Card expands vertically... Reveals project summary"
           Let's keep the visual subtle on hover and focus on text for accordion.
        */

        .accordion-img, .accordion-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }

        .accordion-video {
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .accordion-video.visible {
            opacity: 1;
        }

        .visual-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.2);
        }

        .accordion-title-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            position: relative;
            z-index: 1;
            padding: 0 4vw;
        }

        .accordion-title {
            font-family: var(--font-serif);
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 400;
            margin: 0;
            transition: transform 0.4s ease;
        }

        .accordion-item:hover .accordion-title {
            transform: translateX(20px);
            color: var(--color-gold-metallic);
        }

        .accordion-category {
            font-family: var(--font-sans);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            opacity: 0.5;
        }

        .accordion-icon {
            font-family: var(--font-sans);
            font-size: 2rem;
            color: var(--color-gold-metallic);
        }

        .accordion-content {
            transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
            will-change: height, opacity;
        }

        .content-inner {
            padding: 0 4vw 4rem;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 2fr 1fr;
            gap: 2rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 3rem;
            align-items: flex-start;
        }

        .content-block .label {
            display: block;
            font-family: var(--font-sans);
            font-size: 0.75rem;
            letter-spacing: 0.2em;
            color: var(--color-gold-metallic);
            margin-bottom: 1rem;
        }

        .content-block p {
            font-family: var(--font-sans);
            font-size: 0.9rem;
            opacity: 0.8;
            line-height: 1.6;
        }

        .view-project-btn {
            display: inline-block;
            padding: 1rem 2rem;
            border: 1px solid var(--color-gold-metallic);
            color: var(--color-gold-metallic);
            font-family: var(--font-sans);
            font-size: 0.8rem;
            letter-spacing: 0.2em;
            transition: all 0.3s ease;
            text-align: center;
        }

        .view-project-btn:hover {
            background: var(--color-gold-metallic);
            color: #000;
        }

        @media (max-width: 900px) {
            .content-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            .accordion-visual {
                display: none;
            }
            .accordion-item:hover .accordion-title {
                transform: none;
            }
            .accordion-title-row {
                padding: 0; /* Reset */
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-rows: auto auto;
                gap: 0.5rem;
            }
            .accordion-category {
                grid-column: 1 / -1;
                grid-row: 1;
                margin-bottom: 0.5rem;
            }
            .accordion-title {
                grid-column: 1;
                grid-row: 2;
                font-size: 2.5rem;
            }
            .accordion-icon {
                grid-column: 2;
                grid-row: 2;
            }
        }
      `}</style>
        </div>
    );
};

export default ProjectAccordionItem;
