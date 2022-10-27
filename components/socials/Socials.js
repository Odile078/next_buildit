const Socials = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 pt-20 pb-10 space-y-8 bg-blue-100 md:pt-28 lg:px-auto md:px-10">
            <h3 className="text-base font-medium text-brandGreen-light">Socials</h3>
            <h2 className="text-4xl font-bold text-brandGreen-dark">On Instagram</h2>
            <div className="grid grid-cols-2 gap-5 pt-2 sm:grid-cols-3">
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-1.png" />
                </picture>
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-2.png" />
                </picture>
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-3.png" />
                </picture>
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-4.png" />
                </picture>
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-5.png" />
                </picture>
                <picture className="">
                    <img className="object-cover object-center" alt="house" src="/images/social-house-6.png" />
                </picture>
            </div>
        </div>
    );
}

export default Socials;