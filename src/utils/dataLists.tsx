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
    {id: 1, title: "Work 1", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.", icon: 'work1'},
    {id: 2, title: "Work 2", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.", icon: 'work2'},
    {id: 3, title: "Work 3", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.", icon: 'work3'},
    {id: 4, title: "Work 4", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.", icon: 'work4'},
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