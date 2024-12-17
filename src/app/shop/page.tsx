import React from 'react'
import Image from 'next/image'

const Shop=()=>{
    return(

        <div>
<div className="relative">
      <div className="w-full">
        <Image
          src="/images/hero2.png"
          alt="Hero furniture image"
          width={1440}
          height={100}
          priority
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
        <div>
        <div className="w-full">
        <Image
          src="/images/shophero.png"
          alt="Hero furniture image"
          width={300}
          height={100}
          priority
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
        </div>
        </div>
       
      </div>
   

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

<div className="heroImage">
        <Image
          src="/images/dining.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <h3>Dinning</h3>
</div>

        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          


        <div className="heroImage">
        <Image
          src="/images/living.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <h3>Living</h3>
</div>
  
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          

        <div className="heroImage">
        <Image
          src="/images/bedroom.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <h3>Bedroom</h3>
</div>    
        </div>
      </div>
    </div>
  </div>





</section>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product1.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product2.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        </div>
        
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product3.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product4.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
        
      </div>






      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product5.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product6.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
    
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product7.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="heroImage">
        <Image
          src="/images/product8.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        
      </div>
   
      </div>
    </div>
  </div>
</section>

<div className='flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8'>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>1</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>2</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>3</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>Next</div>
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
export default Shop;

