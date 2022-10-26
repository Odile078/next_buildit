const CallToAction = () => {
    return (
        <div className="container flex flex-wrap justify-between gap-6 py-10 mx-auto mt-6 border-t border-b border-brandGreen-dark sm:px-10 md:px-20">
            <h2 className="text-4xl font-bold text-brandGreen-dark">Call us</h2>   
            <div className="flex flex-wrap gap-6">
                <button className="px-10 py-4 text-base font-bold text-white rounded-md bg-brandGreen-dark">Call</button>
                <button className="px-10 py-4 text-base font-bold bg-blue-300 rounded-md text-brandGreen-dark">Email</button>
            </div>
        </div>
    );
}

export default CallToAction;