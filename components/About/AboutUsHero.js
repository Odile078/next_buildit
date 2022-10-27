const AboutUsHero = () => {
    return (
        <section className="relative top-0 px-6 pt-32 pb-20 overflow-hidden sm:px-10 md:px-20 ">
            <picture><img src="/images/herobg1.png" className="absolute inset-0 object-cover object-center w-full h-full" alt="background"/></picture>
            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-auto lg:container">
            <picture className="">
                <img className="object-cover object-center w-full" alt="house" src="/images/about-house2.png" />
            </picture>
            <div className="self-center space-y-5">
                <h3 className="text-base font-medium text-brandGreen-light">About us</h3>
                <h2 className="text-4xl font-bold text-brandGreen-dark">Owner and investor with a reputation</h2>
                <p className="text-base font-medium text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
            </div>
        </div>
        </section>    
    );
}

export default AboutUsHero;