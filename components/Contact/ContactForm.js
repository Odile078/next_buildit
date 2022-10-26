const ContactForm = () => {
    return (
        <form className="relative p-6 space-y-6 overflow-hidden shadow-2xl shadow-blue-300">           
            <picture><img src="/images/form-bg.png" alt="form background" className="absolute inset-0 object-cover object-center w-full h-full"/></picture>
            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-3 bg-transparent rounded-lg">
                    <label for="name" class="text-sm text-brandGreen font-normal">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    class="border border-brandGreen rounded-md flex-1 px-6 py-4 m-0 text-base font-normal capitalize transition ease-in-out opacity-80 text-brandGreen focus:text-brandGreen focus:bg-transparent focus:border-brandGreen-light focus:border-2 focus:outline-none"
                    placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-3 bg-transparent rounded-lg">
                    <label for="email" class="text-sm text-brandGreen font-normal">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    class="border border-brandGreen rounded-md flex-1 px-6 py-4 m-0 text-base font-normal capitalize transition ease-in-out opacity-80 text-brandGreen focus:text-brandGreen focus:bg-transparent focus:border-brandGreen-light focus:border-2 focus:outline-none"
                    placeholder=""
                    />
                </div>
            </div>  
            <div className="relative flex flex-col gap-3 bg-transparent rounded-lg">
                    <label for="subject" class="text-sm text-brandGreen font-normal">Subject</label>
                    <input
                    type="text"
                    name="subject"
                    id="subject"
                    class="border border-brandGreen rounded-md flex-1 px-6 py-4 m-0 text-base font-normal capitalize transition ease-in-out opacity-80 text-brandGreen focus:text-brandGreen focus:bg-transparent focus:border-brandGreen-light focus:border-2 focus:outline-none"
                    placeholder=""
                    />
                </div>
            <div className="relative flex flex-col gap-3 bg-transparent rounded-lg">
                    <label for="message" class="text-sm text-brandGreen font-normal">Message</label>
                    <textarea
                        class="border border-brandGreen rounded-md block w-full px-3 py-1.5 text-base font-normal text-brandGreen opacity-80 bg-transparent bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-2 focus:border-brandGreen-light focus:outline-none"
                        id="message"
                        rows="3"
                        placeholder="Message"
                    ></textarea>
            </div>      
            <button className="w-full px-5 py-3 text-base rounded-md bg-brandGreen-dark">Send message</button>               
        </form>
    );
}

export default ContactForm;