import Brand from "../../public/assets/icons/Brand";
import Design from "../../public/assets/icons/Design";
import Development from "../../public/assets/icons/Development";
import Discover from "../../public/assets/icons/Discover";
import Launch from "../../public/assets/icons/Launch";
import Seo from "../../public/assets/icons/Seo";
import UxUi from "../../public/assets/icons/UxUi";
import WebDevelopment from "../../public/assets/icons/WebDevelopment";

const services = [
    {id: 1, title: "UI/UX Design", description: "Intuitive, modern, and user-first interfaces — designed to engage and convert.", icon: <UxUi />},
    {id: 2, title: "Web Development", description: "Robust, scalable, and high-performance web applications — built to last.", icon: <WebDevelopment />},
    {id: 3, title: "Branding", description: "Distinctive, memorable, and impactful branding — designed to resonate.", icon: <Brand />},
    {id: 4, title: "SEO", description: "Data-driven, results-oriented SEO strategies — designed to rank.", icon: <Seo />},
];

const processes = [
    {id: 1, title: "Discovery & Strategy", description: "We dive deep into your goals,  audience, and vision to create a custom strategy that sets the foundation for success.", icon: <Discover />},
    {id: 2, title: "Design & Prototyping", description: "Our design team crafts stunning, user-centered designs, testing them through prototypes to ensure a seamless experience.", icon: <Design />},
    {id: 3, title: "Development & Testing", description: "We bring the designs to life with high-quality code, followed by rigorous testing to ensure everything works perfectly.", icon: <Development />},
    {id: 4, title: "Launch & Support", description: "We After launch, we optimize, monitor, and provide ongoing support to ensure your digital experience continues to evolve and perform.", icon: <Launch />},
];

const works = [
    {
        id: 1,
        title: "TechFlow Solutions",
        description: "A comprehensive digital transformation for a B2B software company looking to modernize their online presence and streamline customer acquisition.",
        problem: "TechFlow's outdated website was driving away potential clients with poor UX, slow load times, and unclear messaging. Their conversion rate was below 1% and lead quality was declining.",
        solution: "We redesigned their entire digital experience with a focus on clear value propositions, intuitive user journeys, and performance optimization. Implemented modern React architecture with server-side rendering for speed.",
        outcome: "Achieved a 340% increase in conversion rates, 65% improvement in page load speeds, and generated 120% more qualified leads within 3 months of launch.",
        icon: 'work1'
    },
    {
        id: 2,
        title: "GreenLeaf Marketplace",
        description: "E-commerce platform development for a sustainable products retailer targeting eco-conscious consumers.",
        problem: "The client needed a scalable e-commerce solution that could handle high traffic during seasonal campaigns while maintaining their brand's environmental values through design.",
        solution: "Built a custom headless e-commerce platform using Next.js and Shopify, featuring advanced filtering, sustainable packaging calculators, and carbon footprint tracking for each purchase.",
        outcome: "Platform handled 500% traffic increase during Earth Day campaign, achieved 4.8/5 customer satisfaction rating, and increased average order value by 85%.",
        icon: 'work2'
    },
    {
        id: 3,
        title: "MedConnect Portal",
        description: "Healthcare patient portal redesign focusing on accessibility and user experience for diverse patient populations.",
        problem: "Existing portal had poor accessibility compliance, confusing navigation, and high abandonment rates, especially among elderly patients and non-English speakers.",
        solution: "Conducted extensive user research with diverse patient groups, implemented WCAG 2.1 AA compliance, multi-language support, and simplified appointment booking flows.",
        outcome: "Increased patient portal adoption by 180%, reduced support tickets by 45%, and achieved 100% WCAG compliance with positive feedback from accessibility audits.",
        icon: 'work3'
    },
    {
        id: 4,
        title: "FinanceFirst Mobile App",
        description: "Mobile-first financial planning app for millennials and Gen Z users seeking simplified investment management.",
        problem: "Traditional financial tools were too complex for young investors. Client needed an intuitive app that could simplify portfolio management and investment education.",
        solution: "Designed a gamified mobile experience with micro-interactions, educational content integration, and AI-powered investment suggestions. Used React Native for cross-platform development.",
        outcome: "Reached 50,000 active users within 6 months, maintained 4.7 app store rating, and users increased their investment contributions by 60% on average.",
        icon: 'work4'
    },
    {
        id: 5,
        title: "EduTech Learning Hub",
        description: "Online learning platform for K-12 students with interactive features and progress tracking for parents and teachers.",
        problem: "Remote learning solutions lacked engagement and provided poor visibility into student progress, leading to decreased learning outcomes during virtual education periods.",
        solution: "Created an interactive learning environment with real-time collaboration tools, gamified progress tracking, and comprehensive analytics dashboards for educators and parents.",
        outcome: "Improved student engagement scores by 75%, increased course completion rates to 89%, and received adoption by over 200 schools within the first year.",
        icon: 'work5'
    },
    {
        id: 6,
        title: "RestaurantPro Management",
        description: "All-in-one restaurant management system integrating POS, inventory, and customer relationship management.",
        problem: "Restaurant chains were using multiple disconnected systems for operations, leading to inefficiencies, data silos, and poor customer experience tracking.",
        solution: "Developed an integrated platform connecting POS systems, inventory management, staff scheduling, and customer analytics with real-time synchronization across all locations.",
        outcome: "Reduced operational costs by 25%, improved inventory accuracy to 98%, and increased customer retention rates by 40% through better service personalization.",
        icon: 'work6'
    }
]

const linksList = [
    {id: 1, title: "Home", link: "/"},
    {id: 2, title: "About", link: "/about"},
    {id: 3, title: "Services", link: "/services"},
    {id: 4, title: "Our Work", link: "/rebel-work"},
    {id: 5, title: "Contact", link: "/contact"},

]

export {
    services,
    processes,
    works,
    linksList
}