import ContactForm from "./ContactForm";

const ContactPage = () => {
    return (
        <section className="bg-blue-50">
             <div className="grid grid-cols-1 px-6 pt-20 pb-10 space-y-8 md:grid-cols-2 lg:mx-auto lg:container md:pt-28 lg:px-auto md:px-10">           
            <div className="flex flex-col justify-between space-y-16">
                <div className="space-y-6">
                    <h3 className="text-base font-medium text-brandGreen-light">Socials</h3>
                    <h2 className="text-4xl font-bold text-brandGreen-dark">On Instagram</h2>
                    <div></div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <picture>
                            <img alt="phone icon" src="/images/phone-icon.png" className=""/>
                        </picture>
                        <div>
                            <p className="text-base font-medium text-brandGreen-dark">Tel</p> 
                            <p className="text-xl font-bold text-brandGreen-dark">708-790-0000</p>                        
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <picture>
                            <img alt="phone icon" src="/images/email-icon.png" className=""/>
                        </picture>
                        <div>
                            <p className="text-base font-medium text-brandGreen-dark">Email</p> 
                            <p className="text-xl font-bold text-brandGreen-dark">sales@buildit.site</p>                        
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <picture>
                            <img alt="phone icon" src="/images/email-icon.png" className=""/>
                        </picture>
                        <div>
                            <p className="text-base font-medium text-brandGreen-dark">Office</p> 
                            <p className="text-xl font-bold text-brandGreen-dark">60 Manor Station St.<br/> Fairport, NY 14450</p>                        
                        </div>
                    </div>
                </div> 
            </div>  
            <ContactForm/>             
        </div>
        </section>
       
    );
}

export default ContactPage;