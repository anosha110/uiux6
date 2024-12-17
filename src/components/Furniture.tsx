import React from 'react'
import Image from 'next/image';

const Furniture = () => {
  return (
  
      <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="text-gray-600">Share your setup with</p>
        <h2 className="text-3xl font-bold">#FuniroFurniture</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div className="h-[300px] relative">
            <Image 
              src="/images/Rectangle 36.png" 
              alt="Modern workspace setup"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-[200px] relative">
            <Image 
              src="/images/Rectangle 37.png" 
              alt="Vintage chair"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="h-[520px] relative">
          <Image 
            src="/images/Rectangle 45.png" 
            alt="Dining room"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="grid gap-4">
          <div className="h-[250px] relative">
            <Image 
              src="/images/Rectangle 43.png"
              alt="Modern bedroom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[250px] relative">
              <Image 
                src="" 
                alt="Home decor"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="h-[250px] relative">
              <Image 
                src="/images/Rectangle 44.png" 
                alt="Kitchen setup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
 
  );
}

export default Furniture;
