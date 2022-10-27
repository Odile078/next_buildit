import AboutUsSummary from "../About/AboutUsSummary";
import ContactPage from "../Contact";
import ContactForm from "../Contact/ContactForm";
import Partners from "../partners/Partners";
import ProjectsSummary from "../Projects/ProjectsSummary";
import ServicesSummary from "../Services/ServicesSummary";
import Socials from "../socials/Socials";
import HomeHero from "./HomeHero";

const HomePage = () => {
    return (
        <>
        <HomeHero/>
        <ServicesSummary/>
        <section className="px-6 py-20 space-y-16 bg-blue-100 lg:px-auto md:px-10 md:py-28">
            <Partners/>  
            <AboutUsSummary/>          
        </section>
        <ProjectsSummary/>
        <Socials/>
        <ContactPage/>
        </>
    );
}

export default HomePage;