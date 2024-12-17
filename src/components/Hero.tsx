import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
 
 <div className="relative">
      <div className="w-full">
        <Image
          src="/images/Hero.png"
          alt="Hero furniture image"
          width={1440}
          height={100}
          priority
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
        <div className=" bg-[#FFF3E3] 
          w-[60%] max-w-[38rem] md:mx-auto ml-32
          relative md:absolute 
          md:top-[22%] md:left-[51%]
          rounded-[6px] p-4 md:p-[3rem]
          -mt-60 mb-20 md:mt-0">
          <h6 className="font-bold text-gray-500 text-xs sm:text-sm md:text-base">New Arrival</h6>
          <h3 className="text-[#B88E2F] font-poppins font-extrabold 
            text-lg sm:text-2xl md:text-[3.25rem] sm:leading-tight">
            Discover Our <br /> New Collection
          </h3>
          <p className="sm:leading-loose font-poppins font-medium 
            text-xs sm:text-sm md:text-[1rem] my-1 sm:my-3 md:my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] 
            py-1 px-3 sm:py-3 sm:px-8 md:pt-4 md:pr-12 md:pb-4 md:pl-12 
            text-xs sm:text-base text-white
            hover:bg-[#a17d2a] transition-colors duration-300">
            BUY NOW
          </button>
        </div>
      </div>

   <div>
   <h1 className="flex justify-center items-center mt-32">Browse The Range</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

    </>





















  );
}