import AboutUsSummary from "./AboutusSummary";

const AboutUsHero = () => {
    return (
        <section className="relative top-0 overflow-hidden ">
        <picture><img src="/images/herobg1.png" className="absolute inset-0 object-cover object-center w-full h-full" alt="background"/></picture>
        <AboutUsSummary/>
    </section>
    );
}

export default AboutUsHero;