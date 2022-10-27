const ServicesHero = () => {
    return (
        <section className="relative top-0 overflow-hidden ">
            <picture><img src="/images/herobg3.png" className="absolute inset-0 object-cover object-center w-full h-full" alt="background"/></picture>
             <div className="relative z-20 mx-6 mb-20 mt-28 sm:mx-10 lg:mx-auto lg:container ">
                <div className="flex flex-col items-center justify-center space-y-6">
                   <h2 className="text-base text-xl text-brandGreen-light">Services </h2>                  
                    <h1 className="text-4xl font-bold text-center sm:text-6xl text-brandGreen-dark">Owner and investor with a <br className="hidden md:inline-block"/> reputation</h1>
                    <p className="text-base text-xl text-center text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br className="hidden md:inline-block"/> elit sem, vestibulum sed leo eu, malesuada pharetra mauris.<br className="hidden md:inline-block"/> Integer rhoncus, eros vel euismod tempor, ipsum magna<br className="hidden md:inline-block"/> tristique nisi, quis ullamcorper enim magna eu orci. Sed <br className="hidden md:inline-block"/> semper ex quis semper aliquet. </p>                   
                </div>               
            </div>
        </section>
    );
}

export default ServicesHero;