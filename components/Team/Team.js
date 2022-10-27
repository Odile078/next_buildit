import CallToAction from "../cta/CallToAction";

const Team = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-20 space-y-8 bg-blue-100 md:py-28 md:pt-28 lg:px-auto md:px-10">
            <h3 className="text-base font-medium text-brandGreen-light">Our team</h3>
            <h2 className="text-4xl font-bold text-brandGreen-dark">Let’s meet</h2>           
            <div className="grid grid-cols-2 gap-8 pt-2 sm:grid-cols-3">
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team1.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team2.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team3.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team4.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team5.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team6.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team7.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team8.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>
                <div className="rounded-md shadow-2xl shadow-blue-300">
                    <picture className="">
                        <img className="object-cover object-center" alt="house" src="/images/team9.png" />
                    </picture>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50">
                        <h3 className="text-base font-bold text-brandGreen-dark">Name Surname</h3>
                        <p className="text-base font-medium text-brandGreen">Worker</p>
                    </div>
                </div>          
            </div>
            <CallToAction/>
        </div>
    );
}

export default Team;