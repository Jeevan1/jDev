import {SiReactquery} from "react-icons/si";
import {PiWebhooksLogoFill} from "react-icons/pi";
import {SlGameController} from "react-icons/sl";
import {DiIllustrator} from "react-icons/di";

export const services = [
    {
        id:1 ,
        title: 'Web Design',
        icon: <SiReactquery className="icon"/>,
        desc: `I specialize in creating stunning and functional websites that make a lasting impression. My web design services are tailored to your unique needs, whether you're a small business looking to establish an online presence or a larger organization seeking a website refresh. With a keen eye for design, a focus on user experience, and expertise in the latest web technologies, I craft websites that not only look great but also drive results. Elevate your online presence with my professional web design services today.`
    },
    {
        id:2 ,
        icon: <PiWebhooksLogoFill className="icon"/> ,
        title: 'UI Design',
        desc: `My UI design services are dedicated to crafting visually appealing and intuitive user interfaces. I specialize in creating digital experiences that captivate users and enhance usability. Whether you're developing a mobile app, a website, or software, my expertise lies in designing interfaces that seamlessly blend aesthetics with functionality. With a focus on user-centered design principles, I ensure that every element of the interface is thoughtfully crafted to provide a delightful user experience. Elevate your digital products with my UI design services and make a lasting impression on your audience`
    },
    {
        id:3 ,
        icon: <SlGameController className="icon"/>,
        title: 'Game Design',
        desc: 'sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
    },
    {
        id:4 ,
        icon: <DiIllustrator className="icon"/>,
        title: 'Graphic Design',
        desc: 'I provide expert graphic design services to make your ideas visually captivating and impactful. Elevate your brand and messaging with my creative designs.'
    },
]