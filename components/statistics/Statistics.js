import Partners from "../partners/Partners";

const Statistics = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-20 space-y-8 md:py-28 bg-blue-50 md:pt-28 lg:px-auto md:px-10">
            <h3 className="text-base font-medium text-brandGreen-light">Statistics</h3>
            <h2 className="text-4xl font-bold text-brandGreen-dark">Development in numbers</h2>           
            <div className="grid grid-cols-1 gap-4 pt-20 sm:grid-cols-3">
                <div className="flex items-center gap-4 p-6 border-r border-brandGreen-dark">
                    <picture>
                        <img src="/images/location-icon.png" alt="location icon" className="object-cover object-center" />
                    </picture>
                    <h3 className="text-2xl font-bold text-brandGreen-dark">&gt;200</h3>
                    <p className="text-base text-brandGreen">Number</p>

                </div>
                <div className="flex items-center gap-4 p-6 border-r border-brandGreen-dark">
                    <picture>
                        <img src="/images/handshake-icon.png" alt="handshake icon" className="object-cover object-center" />
                    </picture>
                    <h3 className="text-2xl font-bold text-brandGreen-dark">{'>'}70</h3>
                    <p className="text-base text-brandGreen">Number</p>

                </div><div className="flex items-center gap-4 p-6">
                    <picture>
                        <img src="/images/location-icon.png" alt="properties icon" className="object-cover object-center" />
                    </picture>
                    <h3 className="text-2xl font-bold text-brandGreen-dark"> &gt;20</h3>
                    <p className="text-base text-brandGreen">Number</p>

                </div>
            </div>
            <Partners/>
        </div>
    );
}

export default Statistics;