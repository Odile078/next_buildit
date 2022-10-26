const AboutUsSummary = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-auto lg:container">
            <picture className="self-center">
                <img className="object-cover object-center" alt="house" src="/images/about-house1.png" />
            </picture>
            <div className="space-y-8">
                <h3 className="text-base font-medium text-brandGreen-light">About us</h3>
                <h2 className="text-4xl font-bold text-brandGreen-dark">Owner and investor with a reputation</h2>
                <p className="text-base font-medium text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
                <button className="px-6 py-4 text-white rounded-md bg-brandGreen-blurred">Explore</button>
            </div>
        </div>
    );
}

export default AboutUsSummary;