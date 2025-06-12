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
    {id: 1, title: "Discovery & Strategy", description: "We dive deep into your goals, audience, and vision to create a custom strategy that sets the foundation for success.", icon: <Discover />},
    {id: 2, title: "Design & Prototyping", description: "Our design team crafts stunning, user-centered designs, testing them through prototypes to ensure a seamless experience.", icon: <Design />},
    {id: 3, title: "Development & Testing", description: "We bring the designs to life with high-quality code, followed by rigorous testing to ensure everything works perfectly.", icon: <Development />},
    {id: 4, title: "Launch & Support", description: "We After launch, we optimize, monitor, and provide ongoing support to ensure your digital experience continues to evolve and perform.", icon: <Launch />},
];

const works = [
    {
        id: 1,
        title: "Estate Royal",
        description: "In the world of digital transactions, businesses need an intuitive, fast, and secure platform to manage payments, customers, and financial insights effortlessly. That’s where PAYSYNC comes in—a powerful payment processing dashboard designed to help businesses streamline transactions while keeping everything in one place.This project is not just a dashboard; it's a seamless experience, designed with clarity, efficiency, and usability at its core. From effortless payment monitoring to advanced financial analytics, PAYSYNC is built to empower businesses with everything they need to manage their payments with ease.",
        problem: "Most luxury real estate platforms suffer from outdated interfaces, poor mobile optimization, weak branding, and lack of personalization. Users — especially those seeking multi-million dollar properties — are left frustrated by cluttered UI, slow performance, and generic content that doesn't build trust.",
        solution: "Estate Royale was designed to be bold, elegant, and efficient. With sharp attention to detail, we built a premium interface that emphasizes clarity, visual harmony, and high-converting UX.",
        outcome: "A visually striking, emotionally engaging, and conversion-focused real estate platform that feels just as premium as the properties it showcases. 1. Listings shine with bold layout and beautiful presentation. 2. Agents now feel real and approachable, building immediate trust. 3. Improved clarity and hierarchy across the entire journey. 4. Brand identity elevated to luxury-class status. 5. Mobile experience fully optimized, no compromises. 6. Positive user feedback praising both aesthetics and ease of use.",
        icon: ['estate-royal', 'estate-royal_2', 'estate-royal_3', 'estate-royal_4', 'estate-royal_5', 'estate-royal_6']
    },
    {
        id: 2,
        title: "PaySync",
        description: "E-commerce platform development for a sustainable products retailer targeting eco-conscious consumers.",
        problem: "The financial tech industry is filled with clunky, outdated interfaces that make managing payments feel like a chore. Many platforms either overcomplicate the process with unnecessary complexity or lack the essential features businesses actually need. My goal was to design a dashboard that is: 1.Simple yet powerful – No unnecessary clutter, just what users need. 2.Visually appealing – Clean, professional, and modern UI. 3.Highly functional – Streamlined workflows for payments, customers, and reports. 4.Secure & reliable – A dashboard that instills trust in users managing financial transactions.",
        solution: "We designed PAYSYNC to offer a smooth and efficient payment management experience. The dashboard provides a clean, structured layout that makes financial data easy to access and act upon. The design incorporates strong UX principles while keeping the interface visually engaging.",
        outcome: "The final design of PAYSYNC delivers an elegant, easy-to-use, and powerful payment management experience. The project was built with scalability in mind, allowing businesses of all sizes to effortlessly track payments, manage clients, and gain deep financial insights. The UI is sleek, the UX is frictionless, and the overall experience ensures users feel in control of their transactions at all times.",
        icon: ['pay-sync'],
    },
    {
        id: 3,
        title: "MedConnect Portal",
        description: "Healthcare patient portal redesign focusing on accessibility and user experience for diverse patient populations.",
        problem: "Existing portal had poor accessibility compliance, confusing navigation, and high abandonment rates, especially among elderly patients and non-English speakers.",
        solution: "Conducted extensive user research with diverse patient groups, implemented WCAG 2.1 AA compliance, multi-language support, and simplified appointment booking flows.",
        outcome: "Increased patient portal adoption by 180%, reduced support tickets by 45%, and achieved 100% WCAG compliance with positive feedback from accessibility audits.",
        icon: ['work3']
    },
    {
        id: 4,
        title: "FinanceFirst Mobile App",
        description: "Mobile-first financial planning app for millennials and Gen Z users seeking simplified investment management.",
        problem: "Traditional financial tools were too complex for young investors. Client needed an intuitive app that could simplify portfolio management and investment education.",
        solution: "Designed a gamified mobile experience with micro-interactions, educational content integration, and AI-powered investment suggestions. Used React Native for cross-platform development.",
        outcome: "Reached 50,000 active users within 6 months, maintained 4.7 app store rating, and users increased their investment contributions by 60% on average.",
        icon: ['work4']
    },
    {
        id: 5,
        title: "EduTech Learning Hub",
        description: "Online learning platform for K-12 students with interactive features and progress tracking for parents and teachers.",
        problem: "Remote learning solutions lacked engagement and provided poor visibility into student progress, leading to decreased learning outcomes during virtual education periods.",
        solution: "Created an interactive learning environment with real-time collaboration tools, gamified progress tracking, and comprehensive analytics dashboards for educators and parents.",
        outcome: "Improved student engagement scores by 75%, increased course completion rates to 89%, and received adoption by over 200 schools within the first year.",
        icon: ['work5']
    },
    {
        id: 6,
        title: "RestaurantPro Management",
        description: "All-in-one restaurant management system integrating POS, inventory, and customer relationship management.",
        problem: "Restaurant chains were using multiple disconnected systems for operations, leading to inefficiencies, data silos, and poor customer experience tracking.",
        solution: "Developed an integrated platform connecting POS systems, inventory management, staff scheduling, and customer analytics with real-time synchronization across all locations.",
        outcome: "Reduced operational costs by 25%, improved inventory accuracy to 98%, and increased customer retention rates by 40% through better service personalization.",
        icon: ['work6']
    }
];

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