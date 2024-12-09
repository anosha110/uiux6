import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="relative">
      {/* Hero Image Section */}
      <div className="w-full">
        <Image
          src="/images/blog.png"
          alt="Hero furniture image"
          width={1440}
          height={100}
          priority
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {/* Blog Post 1 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/laptop.png"
                  alt="Blog post"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/Rectangle.png"
                  alt="Blog post"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/Rectangle1.png"
                  alt="Blog post"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar Section */}
          <aside className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <Image
                    src="/images/blog1.png"
                    alt="Recent post image"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">Understanding design principles</h4>
                    <span className="text-sm text-gray-500">Dec 5, 2024</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Image
                    src="/images/blog2.png"
                    alt="Recent post image"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">The rise of digital marketing</h4>
                    <span className="text-sm text-gray-500">Dec 4, 2024</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Image
                    src="/images/blog3.png"
                    alt="Recent post image"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">How to build better UI</h4>
                    <span className="text-sm text-gray-500">Dec 3, 2024</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Image
                    src="/images/blog4.png"
                    alt="Recent post image"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">How to build better UI</h4>
                    <span className="text-sm text-gray-500">Dec 3, 2024</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Image
                    src="/images/blog5.png"
                    alt="Recent post image"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">How to build better UI</h4>
                    <span className="text-sm text-gray-500">Dec 3, 2024</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
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
  );
};

export default Blog;
