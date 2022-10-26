import Link from "next/link";

const Footer = () => {
    return (
    <footer className="px-6 py-16 bg-brandGreen-dark lg:px-auto md:px-10">
        <div className="grid grid-cols-1 gap-6 px-6 py-16 text-white bg-brandGreen-dark lg:px-auto md:px-10 sm:grid-cols-2 md:grid-cols-4 lg:mx-auto lg:container">
            <div className="flex flex-col justify-between">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Buildit</h1>
                    <p className="text-base font-medium">Development company, 2022</p>
                </div>
                <p className="text-base font-medium">Site design – ⏰ Alarm</p>
            </div>
            <div className="space-y-6">
                <ul className="space-y-3">
                    <li ><Link href='/'><a className="text-base font-medium hover:opacity-75" >Home</a></Link></li>
                    <li ><Link href='/services'><a className="text-base font-medium hover:opacity-75" >Services</a></Link></li>
                    <li ><Link href='/projects'><a className="text-base font-medium hover:opacity-75" >Project</a></Link></li>
                    <li ><Link  href='/contact'><a className="text-base font-medium hover:opacity-75" >Contact</a></Link></li>
                
                </ul>
                <div className="flex items-center space-x-3">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.93457" y="0.678711" width="40" height="40" rx="6" fill="#678C92"/>
                    <path d="M25.9346 10.6787H15.9346C13.1731 10.6787 10.9346 12.9173 10.9346 15.6787V25.6787C10.9346 28.4401 13.1731 30.6787 15.9346 30.6787H25.9346C28.696 30.6787 30.9346 28.4401 30.9346 25.6787V15.6787C30.9346 12.9173 28.696 10.6787 25.9346 10.6787Z" stroke="#F4F7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.9346 20.0488C25.058 20.881 24.9158 21.731 24.5283 22.4778C24.1408 23.2246 23.5277 23.8302 22.7762 24.2084C22.0247 24.5867 21.173 24.7184 20.3424 24.5847C19.5117 24.451 18.7443 24.0589 18.1494 23.4639C17.5545 22.869 17.1623 22.1016 17.0287 21.271C16.895 20.4403 17.0266 19.5887 17.4049 18.8371C17.7832 18.0856 18.3888 17.4725 19.1356 17.085C19.8824 16.6975 20.7323 16.5554 21.5646 16.6788C22.4135 16.8047 23.1994 17.2002 23.8063 17.8071C24.4131 18.4139 24.8087 19.1998 24.9346 20.0488Z" stroke="#F4F7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.4346 15.1787H26.4446" stroke="#F4F7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.93457" y="0.678711" width="40" height="40" rx="6" fill="#678C92"/>
                    <path d="M26.9346 10.6787H23.9346C22.6085 10.6787 21.3367 11.2055 20.399 12.1432C19.4614 13.0809 18.9346 14.3526 18.9346 15.6787V18.6787H15.9346V22.6787H18.9346V30.6787H22.9346V22.6787H25.9346L26.9346 18.6787H22.9346V15.6787C22.9346 15.4135 23.0399 15.1591 23.2275 14.9716C23.415 14.7841 23.6694 14.6787 23.9346 14.6787H26.9346V10.6787Z" stroke="#F4F7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div>
            <div>
                <ul className="space-y-3">
                    <li ><Link href='/'><a className="text-base font-medium hover:opacity-75" >Home</a></Link></li>
                    <li ><Link href='/services'><a className="text-base font-medium hover:opacity-75" >Services</a></Link></li>
                    <li ><Link href='/projects'><a className="text-base font-medium hover:opacity-75" >Project</a></Link></li>
                    <li ><Link  href='/contact'><a className="text-base font-medium hover:opacity-75" >Contact</a></Link></li>
                
                </ul>
              
            </div>
            <div className="space-y-6">
                <div>
                <p className="text-base font-medium">Get in touch</p>
                <p className="text-base font-medium">60 Manor Station St. Fairport,</p>
                <p className="text-base font-medium">NY 14450</p>
                </div>
                <div>
                <p className="text-base font-medium">708-790-0000</p>
                <p className="text-base font-medium">sales@buildit.site</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;