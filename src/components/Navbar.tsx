import React from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Adjust the path based on your ShadCN setup
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.jpg"
            alt="Furniro Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

    
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Shop"
            >
              shop
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <AiOutlineMenu size={25} />
          </SheetTrigger>
          <SheetContent side="left" className="z-50 bg-white">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="text-gray-700 hover:text-gray-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-gray-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      {/* </div>
    </nav> */}

        {/* Icons - For Large Screens */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/search" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24} />
          </Link>
          <Link href="/favorites" className="text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24} />
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24} />
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24} />
          </Link>
        </div>
      </div>

      {/* Icons - For Small Screens */}
      <div className="md:hidden flex justify-center items-center space-x-6 mt-4">
        <Link href="/search" className="text-gray-700 hover:text-gray-500">
          <IoIosSearch size={24} />
        </Link>
        <Link href="/favorites" className="text-gray-700 hover:text-gray-500">
          <FaRegHeart size={24} />
        </Link>
        <Link href="/cart" className="text-gray-700 hover:text-gray-500">
          <IoCartOutline size={24} />
        </Link>
        <Link href="/profile" className="text-gray-700 hover:text-gray-500">
          <HiOutlineUser size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
