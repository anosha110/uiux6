import Image from "next/image";
import React from "react";

// import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
const Contact=()=>{
    return(


<div className="relative">
      <div className="w-full">
        <Image
          src="/images/contact.png"
          alt="Hero furniture image"
          width={1440}
          height={100}
          priority
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
</div>
<div className='container mx-auto px-4 py-16 max-w-7xl'>
  <div className='text-center space-y-4 md:w-2/3 lg:w-1/2 mx-auto mb-12'>
    <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Get In Touch With Us</h1>
    <p className='text-gray-600 leading-relaxed'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
  </div>

  <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
    {/* Contact Information */}
    <div className='w-full   md:w-1/3 space-y-8'> 

      <div className='flex   items-start gap-4'>
        <IoLocationSharp className='text-black  text-xl mt-1'/>
        <div>
          <h2 className='font-semibold text-gray-900 mb-2'>Address</h2>
          <p className='text-gray-600'>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      
      
      </div>


      <div className='flex items-start gap-4'>


        <FaPhoneAlt  className='text-black text-xl mt-1'/>
        <div>
          <h2 className='font-semibold text-gray-900 mb-2'>Phone</h2>
          <p className='text-gray-600'>Mobile: +(84) 546-678</p>
          <p className='text-gray-600'>Mobile: +(84) 546-678</p>
        </div>
      
      
      </div>


      <div className='flex items-start gap-4'>
      <IoMdClock  className='text-black text-xl mt-1'/>
        <div>
          <h2 className='font-semibold text-gray-900 mb-2'>Working Times</h2>
          <p className='text-gray-600'>Monday-Friday: 9:00 - 22:0 Saturday-Sunday: 9:00 - 21:00, </p>
          <p className='text-gray-600'>Monday-Friday: 9:00 - 22:0 Saturday-Sunday: 9:00 - 21:00, </p>
        </div>
      
      
      </div>

      {/* ... similar updates for Phone and Working Time sections ... */}
    </div>

    {/* Contact Form */}
    <div className='w-full md:w-1/2 bg-gray-50 rounded-lg p-8'> 
      <form className='space-y-6'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            className='h-10 rounded-lg border-2 w-3/4'
            placeholder='Your Name'
            required
          />
        </div>

        <div>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
          <input 
            type="email"
            name="email"
            id="email"
            className='h-10 rounded-lg border-2 w-3/4'
            placeholder='Your Email'
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
          <input 
            type="text"
            name="subject"
            id="subject"
            className='h-10 rounded-lg border-2 w-3/4'
            placeholder='Subject'
            required
          />
        </div>

        <div>
          <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
          <textarea 
            name="message"
            id="message"
            className='h-20  rounded-lg border-2 w-3/4'
            placeholder='Your Message'
            required
          />
        </div>

        <button className='w-32 bg-slate-400 text-white rounded-[5px]'>
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
<div>
        

        <div className='bg-[#FAF3EA] flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0'>
        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/Trophy.png" width={50} height={70} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>
        
        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/shipping.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>
        
        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/Quility.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>
        
        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/support.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>
        </div>
        
        
        </div>
        
        
        


</div>






    )
}
export default Contact