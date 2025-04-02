import { data, Project as ProjectType } from './data'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);

interface ProjectProps {
  activeProject: number | null
  setActiveProject: (id: number | null) => void
}

export default function Project({ activeProject, setActiveProject }: ProjectProps) {
    
    const [isLeaving, setIsLeaving] = useState(false)
    const activeItem = data.find(item => item.id === activeProject)
    const imgRef = useRef(null)

    const stackLabelRef = useRef(null)
    const stackContentRef = useRef(null)

    const typeLabelRef = useRef(null)
    const typeContentRef = useRef(null)

    const yearLabelRef = useRef(null)
    const yearContentRef = useRef(null)

    const descriptionRef = useRef(null)

    const discoverLineRef = useRef(null)
    const discoverRef = useRef(null)

    const titleRef = useRef(null)

    useGSAP(() => {
        if (activeProject) {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.inOut",
                }
            });

            // État initial
            gsap.set(imgRef.current, {
                opacity: 0,
                scale: 1.2,
            });

            // Animation
            tl.to(imgRef.current, {
                opacity: 1,
                scale: 0.6,
                duration: 1,
            })
            .to(imgRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1,
            })
            .to(imgRef.current, {
                scale: 1,
                duration: 0.2
            });
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(stackContentRef.current, {
                y: -20,
            });

            tlStack.to(stackContentRef.current, {
                y: 0,
                duration: 1
            });
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(stackLabelRef.current, {
                y: -20,
            });

            tlStack.to(stackLabelRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.05 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(typeLabelRef.current, {
                y: -20,
            });

            tlStack.to(typeLabelRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.05 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(typeContentRef.current, {
                y: -20,
            });

            tlStack.to(typeContentRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.1 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(yearContentRef.current, {
                y: -20,
            });

            tlStack.to(yearContentRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.1 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(yearLabelRef.current, {
                y: -20,
            });

            tlStack.to(yearLabelRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    // DESC ANIM
    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.1 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(descriptionRef.current, {
                y: -30,
            });

            tlStack.to(descriptionRef.current, {
                y: 0,
                duration: 1
            })
        }
    }, [activeProject]);

    // DISCOVER ANIMATION
    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.5 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(discoverLineRef.current, {
                scaleY: 0,
                transformOrigin: "top",
            });

            tlStack.to(discoverLineRef.current, {
                scaleY: 1,
                duration: 0.8
            })
        }
    }, [activeProject]);

    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 2.4 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(discoverRef.current, {
                y: -20,
            });

            tlStack.to(discoverRef.current, {
                y: 0,
            })
        }
    }, [activeProject]);

    // TITLE ANIMATION
    useGSAP(() => {
        if (activeProject) {
            const tlStack = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
                delay: 1.8 // Délai pour commencer après l'animation de l'image
            });

            gsap.set(titleRef.current, {
                opacity: 0,
                x: "-25%",
            });

            tlStack.to(titleRef.current, {
                opacity:1,
                x: "-15%",
            })
        }
    }, [activeProject]);

    const handleClose = () => {
        setIsLeaving(true)
        
        setTimeout(() => {
            setActiveProject(null)
            setIsLeaving(false)
        }, 500) 
    }

    if (!activeProject && !isLeaving) return null;

    return (
        <div 
            className={`fixed bottom-0 left-0 z-10 m-10 flex items-center justify-center h-[75%] transition-opacity duration-300 ease-in-out
                ${isLeaving ? "opacity-0" : "opacity-100"} pointer-events-auto`}
            onClick={handleClose}
            style={{ width: "calc(100% - 80px)"}}
        >
            <div 
                className="relative rounded-lg w-full h-full flex items-center justify-center"
            >
                {/* Background Image */}
                <div className="absolute inset-0 flex items-start justify-center">
                    <img 
                        ref={imgRef}
                        src={activeItem?.image} 
                        alt={activeItem?.title}
                        className="w-[55%] h-[70%] object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full w-[60%] flex flex-col justify-between">
                    <h2 ref={titleRef} style={{ color: activeItem?.color}} className="text-[250px]/60 font-sixcaps uppercase text-left -translate-x-[15%] -translate-y-[5%]">{activeItem?.title}</h2>

                    <div className="flex items-end justify-between w-full">
                        <div style={{ color: activeItem?.color}} className="flex flex-row gap-6 text-white uppercase text-xs">
                            <div>
                                <div className="overflow-hidden"><p ref={stackLabelRef}>Stack</p></div>
                                <div className="overflow-hidden"><p ref={typeLabelRef}>For</p></div>
                                <div className="overflow-hidden"><p ref={yearLabelRef}>Year</p></div>
                            </div>
                            <div className="overflow-hidden">
                                <div id="stack" ref={stackContentRef} className="flex flex-row gap-2">
                                    {activeItem?.stack.map((tech, id) => (
                                        <p key={id}>{tech.name}</p>
                                    ))}
                                </div>
                                <div className="overflow-hidden"><p ref={typeContentRef}>{activeItem?.type}</p></div>
                                <div className="overflow-hidden"><p ref={yearContentRef}>{activeItem?.year}</p></div>
                            </div>
                        </div>
                        <a 
                            href={activeItem?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 uppercase font-semibold text-xs px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            style={{ color: activeItem?.color}}
                        >
                            <div className="overflow-hidden"><p ref={discoverRef}>discover</p></div>
                            <div className="bg-white w-[1px] h-15" ref={discoverLineRef} style={{ backgroundColor: activeItem?.color}}></div>
                        </a>
                        <div className="overflow-hidden flex justify-end"><p className="uppercase text-xs max-w-2/3 text-right" style={{ color: activeItem?.color}} ref={descriptionRef}>{activeItem?.description}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}