const ServicesList = () => {
    return (
        <div className="px-6 py-20 space-y-10 lg:px-auto md:px-10 lg:mx-auto lg:container md:py-28">
           {[1,2,3].map((item,index)=>
           <div key={index} className="grid grid-cols-1 gap-6 space-y-10 bg-white sm:grid-cols-2">
           <div className={ (index%2===0?" ":"order-last ")+"space-y-8"}>
               <h3 className="text-base font-medium text-brandGreen-light">Service</h3>
               <h2 className="text-4xl font-bold text-brandGreen-dark">Featured Listing</h2>
               <p className="text-base font-medium text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris.</p>
               <div className="flex items-end gap-3">
               <p className="p-3 text-base font-medium bg-blue-300 rounded-md text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris.</p>
               <p className="p-3 text-base font-medium bg-blue-300 rounded-md text-brandGreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris.</p>           
               </div>
               <div className="flex flex-wrap items-end">
               <button className="px-6 py-4 text-white rounded-md bg-brandGreen-blurred">see more</button>
               </div>
           </div>
           <picture className="self-center">
               <img className="object-cover object-center" alt="house" src="/images/project-house1.png" />
           </picture>
       </div>
           )}
        </div>
    );
}

export default ServicesList;