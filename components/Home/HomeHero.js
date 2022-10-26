import Image from "next/image";

const HomeHero = () => {
    return (
        <section className="relative top-0 overflow-hidden ">
            <picture><img src="/images/herobg1.png" className="absolute inset-0 object-cover object-center w-full h-full" alt="background"/></picture>
            <picture><img src="/images/herobg2.png" className="absolute inset-y-0 right-0 z-10 hidden object-cover object-center md:block" alt="background"/></picture>
            <div className="relative z-20 grid grid-cols-1 mx-6 mb-20 mt-28 sm:grid-cols-2 sm:mx-10 lg:mx-auto lg:container">
                <div className="self-center space-y-6">
                    <h1 className="text-4xl font-bold sm:text-6xl text-brandGreen-dark">Development company</h1>
                    <h2 className="text-xl text- text-brandGreen">Forward-thinking real estate developer, owner and investor with a reputation</h2>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 text-white rounded-md bg-brandGreen-dark">Services</button>
                        <button className="px-4 py-2 text-white rounded-md bg-cyan-500">About the company</button>
                    </div>
                </div>
                <div>                  
                    <picture> <img src="/images/house photos.png"alt="house" className="object-cover object-center "/> </picture>                 
                </div>
            </div>
        </section>
    );
}

export default HomeHero;