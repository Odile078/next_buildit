const ServicesSummary = () => {
    return (
        <section className="px-6 py-20 space-y-10 bg-white lg:px-auto md:px-10 lg:mx-auto lg:container md:py-28">
            <h1 className="text-4xl font-bold text-center text-brandGreen-dark">Innovative Execution</h1>
            <div className="container grid grid-cols-1 mx-auto sm:grid-cols-3">
                <div className="space-y-4">
                    <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.678833" width="70" height="70" rx="5" fill="#678C92"/>
                        <rect y="0.678833" width="70" height="70" rx="5" fill="url(#paint0_linear_1_172)" fill-opacity="0.2"/>
                        <path d="M35 37.5538V48.8038" stroke="#F4F7FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35 37.5538C36.5533 37.5538 37.8125 36.2946 37.8125 34.7413C37.8125 33.188 36.5533 31.9288 35 31.9288C33.4467 31.9288 32.1875 33.188 32.1875 34.7413C32.1875 36.2946 33.4467 37.5538 35 37.5538Z" stroke="#F4F7FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44.8438 33.3111C42.6535 30.8914 41.4396 27.7197 41.4441 24.4288H28.5559C28.5605 27.7198 27.3465 30.8915 25.1562 33.3112L35 48.8038L44.8438 33.3111Z" stroke="#F4F7FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_172" x1="0" y1="0.678833" x2="70" y2="70.6788" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#678C92"/>
                        <stop offset="1" stop-color="#9ED5DE"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <h3 className="text-2xl font-bold text-brandGreen-dark">Featured Listing</h3>
                    <p className="text-base text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                </div>
                <div className="space-y-4">
                    <picture>
                        <img src="/images/properties.png" alt="properties icon" className="object-cover object-center" />
                    </picture>
                    <h3 className="text-2xl font-bold text-brandGreen-dark">Available Properties</h3>
                    <p className="text-base text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="space-y-4">
                    <picture>
                        <img src="/images/news.png" alt="news icon" className="object-cover object-center" />
                    </picture>
                    <h3 className="text-2xl font-bold text-brandGreen-dark">In the News</h3>
                    <p className="text-base text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                </div>
            </div>
        </section>
    );
}

export default ServicesSummary;