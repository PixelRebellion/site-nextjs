import { v4 as uuidv4 } from 'uuid';
import Brand from "../../public/assets/icons/Brand";
import Design from "../../public/assets/icons/Design";
import Development from "../../public/assets/icons/Development";
import Discover from "../../public/assets/icons/Discover";
import Launch from "../../public/assets/icons/Launch";
import Seo from "../../public/assets/icons/Seo";
import UxUi from "../../public/assets/icons/UxUi";
import WebDevelopment from "../../public/assets/icons/WebDevelopment";
import NumberOne from '../../public/assets/icons/NumberOne'
import NumberTwo from '../../public/assets/icons/NumberTwo';
import NumberThree from '../../public/assets/icons/NumberThree';
import NumberFour from '../../public/assets/icons/NumberFour';


const services = [
    {id: uuidv4(), title: "UI/UX Design", description: "Intuitive, modern, and user-first interfaces — designed to engage and convert.", icon: <UxUi />},
    {id: uuidv4(), title: "Web Development", description: "Robust, scalable, and high-performance web applications — built to last.", icon: <WebDevelopment />},
    {id: uuidv4(), title: "Branding", description: "Distinctive, memorable, and impactful branding — designed to resonate.", icon: <Brand />},
    {id: uuidv4(), title: "SEO", description: "Data-driven, results-oriented SEO strategies — designed to rank.", icon: <Seo />},
];

const processes = [
    {id: uuidv4(), title: "Discovery & Strategy", description: "We dive deep into your goals, audience, and vision to create a custom strategy that sets the foundation for success.", icon: <Discover />},
    {id: uuidv4(), title: "Design & Prototyping", description: "Our design team crafts stunning, user-centered designs, testing them through prototypes to ensure a seamless experience.", icon: <Design />},
    {id: uuidv4(), title: "Development & Testing", description: "We bring the designs to life with high-quality code, followed by rigorous testing to ensure everything works perfectly.", icon: <Development />},
    {id: uuidv4(), title: "Launch & Support", description: "We After launch, we optimize, monitor, and provide ongoing support to ensure your digital experience continues to evolve and perform.", icon: <Launch />},
];

const works = [
    {
        id: uuidv4(),
        title: "Vårdföretagen",
        description: "Vårdföretaget is a mobile app that connects healthcare consultants with staffing agencies — fast, direct, and without the hassle. Users can create a profile, find assignments, and chat with agencies in real time.",
        problem: "Healthcare staffing is often slow and unclear, filled with unnecessary phone calls and paperwork. We needed a smooth, digital experience tailored for busy consultants.",
        solution: "I designed a clean, mobile-first interface focused on ease of use and transparency. Key features include smart search filters, in-app chat, and instant access to job offers — all in one place.",
        outcome: "The app streamlined the job search process for healthcare consultants, reducing time-to-hire and removing unnecessary friction. Users praised the simple onboarding, fast access to relevant jobs, and how the app gave them more control over their work-life — without the usual agency headaches.",
        icon: ['vardforetag', 'vardforetag_2', 'vardforetag_3']
    },
    {
        id: uuidv4(),
        title: "Game Limiter",
        description: "Game Limiter is a mobile app built to help younger kids develop healthier gaming habits by managing their screen time. It’s designed for parents who want to support their children’s focus and daily routines — especially around school and sleep — without feeling overly controlling.",
        problem: "Many kids lose track of time while gaming, which affects school, sleep, and social life. The challenge was to create a simple, kid-friendly app that lets parents set time limits in a way that feels encouraging rather than restrictive.",
        solution: "I designed a clean, colorful mobile interface focused on ease-of-use and positive reinforcement. Parents can schedule gaming hours, track usage, and gently guide their kids toward better balance — all through a fun, intuitive app experience.",
        outcome: "The app was well received by both parents and kids during testing. Parents reported improved bedtime routines and better focus in school, while kids appreciated the friendly, non-punitive design. The project demonstrated how thoughtful UX can shift behavior — without friction or force.",
        icon: ['gamelimiter', 'gamelimiter_2', 'gamelimiter_3']
    },
    {
        id: uuidv4(),
        title: "Estate Royal",
        description: "Estate Royale is a high-end real estate platform built to serve the premium property market in the UAE and Qatar. Designed with elegance, exclusivity, and user experience at its core, the platform helps buyers, sellers, and renters seamlessly explore prime listings, connect with top-tier agents, and manage property transactions with total confidence. Our goal was clear: create a luxurious, intuitive, and modern digital experience that mirrors the sophistication of the properties we represent.",
        problem: "Most luxury real estate platforms suffer from outdated interfaces, poor mobile optimization, weak branding, and lack of personalization. Users — especially those seeking multi-million dollar properties — are left frustrated by cluttered UI, slow performance, and generic content that doesn't build trust.",
        solution: "Estate Royale was designed to be bold, elegant, and efficient. With sharp attention to detail, we built a premium interface that emphasizes clarity, visual harmony, and high-converting UX.",
        outcome: "A visually striking, emotionally engaging, and conversion-focused real estate platform that feels just as premium as the properties it showcases. 1. Listings shine with bold layout and beautiful presentation. 2. Agents now feel real and approachable, building immediate trust. 3. Improved clarity and hierarchy across the entire journey. 4. Brand identity elevated to luxury-class status. 5. Mobile experience fully optimized, no compromises. 6. Positive user feedback praising both aesthetics and ease of use.",
        icon: ['estate-royal', 'estate-royal_2', 'estate-royal_3', 'estate-royal_4', /*'estate-royal_5', 'estate-royal_6'*/]
    },
    {
        id: uuidv4(),
        title: "Urban Edge",
        description: "UrbanEdge is a modern real estate company with a focus on clean design and a smooth user experience. I built a sleek, conversion-focused landing page that guides users from interest to action — while reflecting the brand’s premium and professional vibe.",
        problem: "Real estate is a crowded market, and the landing page had to stand out while staying functional. The key challenges were creating visual appeal, boosting conversions, and keeping the flow intuitive — without overwhelming users.",
        solution: "I designed a refined, user-first layout with clear content hierarchy, strategic CTAs, and responsive visuals. Every element was crafted to support user engagement while staying true to UrbanEdge’s brand identity.",
        outcome: "The result was a high-performing landing page that increased user interaction and reduced bounce rates. UrbanEdge saw stronger lead generation and a more polished digital presence — proving how intentional design drives real business value.",
        icon: ['urbanedge', 'urbanedge_2', 'urbanedge_3', 'urbanedge_4'],
    },
];

const linksList = [
    {id: uuidv4(), title: "Home", link: "/"},
    {id: uuidv4(), title: "About", link: "/about"},
    {id: uuidv4(), title: "Services", link: "/services"},
    {id: uuidv4(), title: "Our Work", link: "/rebel-work"},
    {id: uuidv4(), title: "Contact", link: "/contact"},
];

const serviceListing = [
    {
      id: uuidv4(),
      title: 'UI/UX Design',
      description: 'We craft elegant, functional interfaces tailored to user needs and business goals. From wireframes to polished visuals — we focus on creating smooth, intuitive journeys across every screen and device.',
      image: 'uxuidesign',
      count: 1
    },
    {
        id: uuidv4(),
        title: 'Web Development',
        description: 'We build fast, scalable websites using both custom code and no/low-code platforms. Whether it’s React, Next.js, WordPress, Webflow, or Framer — we pick the best tools to match your vision and build with performance, flexibility, and future-growth in mind.',
        image: 'webdevelopment',
        count: 2
    },
    {
        id: uuidv4(),
        title: 'Brand Identity',
        description: 'We design bold, strategic brand systems that tell your story with clarity and impact — from logos and color systems to complete brand guidelines that bring consistency across every platform.',
        image: 'brandidentity',
        count: 3
    },
    {
        id: uuidv4(),
        title: 'Mobile App Design & Development',
        description: "We design intuitive, engaging mobile app experiences that feel natural on both iOS and Android. Whether it's a standalone product or an extension of your web platform, we focus on usability, consistency, and performance — all wrapped in a beautiful interface.",
        image: 'appdevelopment',
        count: 4
    },
    {
        id: uuidv4(),
        title: 'SEO',
        description: "We use AI-powered SEO strategies tailored for the new era of search. Through intelligent content creation, on-page precision, and real-time optimization — we help your brand dominate visibility, drive organic traffic, and stay ahead of trends.",
        image: 'seo',
        count: 5
    },
];

const approachInfo = [
  {
    id: uuidv4(),
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your goals, challenges, and audience. Together, we define the roadmap and set the direction with intention.',
    icon: <NumberOne />,
  },
  {
    id: uuidv4(),
    title: 'Design & Concept',
    description: 'We turn insights into creative concepts and intuitive interfaces — building a strong visual identity that aligns with your brand and purpose.',
    icon: <NumberTwo />,
  },
  {
    id: uuidv4(),
    title: 'Build & Refine',
    description: 'Our developers bring the design to life using the most suitable technologies — whether it’s custom code or no-code. We test, iterate, and optimize for performance and scalability.',
    icon: <NumberThree />,
  },
  {
    id: uuidv4(),
    title: 'Launch & Evolve',
    description: 'We launch your product with confidence — and support you beyond the launch with ongoing improvements, SEO, and brand growth.',
    icon: <NumberFour />,
  },
];


export {
    services,
    processes,
    works,
    linksList,
    serviceListing,
    approachInfo
}