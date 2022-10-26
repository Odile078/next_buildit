const ServicesHero = () => {
    return (
        <section className="relative top-0 overflow-hidden ">
            <picture><img src="/images/herobg3.png" className="absolute inset-0 object-cover object-center w-full h-full" alt="background"/></picture>
             <div className="relative z-20 mx-6 mb-20 mt-28 sm:mx-10 lg:mx-auto lg:container">
                <div className="self-center space-y-6">
                   <h2 className="text-base text-xl text-brandGreen-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. </h2>                  
                    <h1 className="text-4xl font-bold sm:text-6xl text-brandGreen-dark">Owner and investor with a reputation</h1>
                    <p className="text-base text-xl text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. </p>                   
                </div>               
            </div>
        </section>
    );
}

export default ServicesHero;