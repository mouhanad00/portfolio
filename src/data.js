/* Mock Data for Projects with Integrated Services */

export const projects = [
    {
        id: 1,
        title: "ÆTHER",
        category: "Commercial Film",
        client: "Tesla Motors",
        role: "Director / DP",
        year: "2025",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop",
        videoUrl: "https://videos.pexels.com/video-files/5091624/5091624-uhd_3840_2160_25fps.mp4",
        featured: true,
        description: "A futuristic vision of sustainable luxury mobility.",
        overview: "We were tasked with redefining the visual language of the Model S Plaid. The goal was to visualize silence and speed simultaneously.",
        credits: {
            director: "Alexander Ross",
            edit: "Studio Noir",
            sound: "Echo Lab"
        },
        serviceDetails: {
            title: "CINEMATIC PRODUCTION",
            description: "Full-scale commercial production including concept development, high-speed cinematography, and precision lighting design.",
            deliverables: ["TV Commercial", "Social Campaign", "Color Grading"]
        }
    },
    {
        id: 2,
        title: "VELVET NOIR",
        category: "Music Video",
        client: "The Weeknd",
        role: "Director",
        year: "2024",
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop",
        videoUrl: "https://videos.pexels.com/video-files/3196026/3196026-uhd_3840_2160_25fps.mp4",
        featured: true,
        description: "A neon-soaked journey through the midnight city.",
        overview: "A narrative-driven music video maximizing practical lighting effects and vintage anamorphic lenses.",
        credits: {
            director: "Alexander Ross",
            dp: "Marcus V",
            color: "Company 3"
        },
        serviceDetails: {
            title: "DIRECTION & VFX",
            description: "Creative direction from storyboard to final master. Integrated VFX work to enhance practical styling.",
            deliverables: ["Music Video", "Teasers", "VFX Supervision"]
        }
    },
    {
        id: 3,
        title: "GOLDEN HOUR",
        category: "Photography",
        client: "Vogue Italia",
        role: "Photographer",
        year: "2024",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop",
        videoUrl: "https://videos.pexels.com/video-files/3205915/3205915-uhd_3840_2160_25fps.mp4",
        featured: false,
        description: "Editorial spread featuring the Spring collection.",
        overview: "Shot on location in Tuscany, capturing the raw elegance of natural light intersecting with haute couture.",
        credits: {
            photographer: "Alexander Ross",
            stylist: "Elena B",
            model: "Kaia G"
        },
        serviceDetails: {
            title: "EDITORIAL PHOTOGRAPHY",
            description: "High-end fashion photography with a focus on natural lighting and narrative-driven composition.",
            deliverables: ["Editorial Spread", "Digital Assets", "Retouching"]
        }
    },
    {
        id: 4,
        title: "SILENT ECHO",
        category: "Short Film",
        client: "Independent",
        role: "Director / Editor",
        year: "2023",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2600&auto=format&fit=crop",
        videoUrl: "https://videos.pexels.com/video-files/3692636/3692636-uhd_3840_2160_25fps.mp4",
        featured: true,
        description: "An award-winning short about isolation and memory.",
        overview: "A study in minimalism and sound design, exploring how silence impacts human connection.",
        credits: {
            director: "Alexander Ross",
            writer: "Sarah J"
        },
        serviceDetails: {
            title: "NARRATIVE FILMMAKING",
            description: "End-to-end film production. Script consulting, directing, and offline/online editing.",
            deliverables: ["Short Film", "Festival Strategy"]
        }
    },
    {
        id: 5,
        title: "CHROMA",
        category: "Post-Production",
        client: "Nike",
        role: "Editor / VFX",
        year: "2024",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        videoUrl: "https://videos.pexels.com/video-files/2795405/2795405-uhd_3840_2160_25fps.mp4",
        featured: false,
        description: "High-energy VFX sequence for the new Air Max campaign.",
        overview: "Connecting raw athleticism with digital art, we created a fluid visual experience that morphs with the beat.",
        credits: {
            agency: "W+K",
            editor: "Alexander Ross"
        },
        serviceDetails: {
            title: "MOTION DESIGN & EDITING",
            description: "Complex motion graphics and rhythmic editing to drive high-energy brand messaging.",
            deliverables: ["Campaign Film", "Social Cuts", "Motion Assets"]
        }
    }
];

export const categories = ["All", "Commercial Film", "Music Video", "Photography", "Short Film", "Post-Production"];
