import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="flex flex-between lg:gap-x-[12rem] md:gap-x-[11.5rem] lg:m-2 mt-3">
        <div className="lg:hidden flex justify-center items-center mx-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross1 /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* mobile nav */}
        <ul className={
              isOpen
                ? "flex-col flex  fixed inset-0 left-1/2 uppercase bg-gray-100 backdrop-blur-lg gap-8 p-8 lg:hidden"
                : "hidden"
            }>
          <li>
                <Link href={'/Collection'}>Collection</Link>
              </li>
              <li>
              <Link href={'/Men'}>Men</Link>
          </li>

          <li>
            <Link href={'/Women'}>Women</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>


        {/* desktop nav */}
        <div className="flex flex-between mx-10">
          <h1 className="font-extrabold text-xl mr-6 mb-1 lg:mr-6 text-center ">
            <Link href={'/'}>sneakers</Link>
          </h1>
         {/* list of Nav */}
         <ul className="hidden lg:flex flex-between gap-2 font-light justify-center items-center">
            <li>
              <Link href={'/'}>Home</Link>
            </li>

            <li>
              <Link href={'/Collection'}>Collection</Link>
            </li>

            <li>
              <Link href={'/Men'}>Men</Link>
            </li>

            <li>
              <Link href={'/Women'}>Women</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex  gap-2 md:gap-[2rem] ">
          <button className="">
            <Link href={'/Cart'}>
              <FaShoppingCart />
            </Link>
          </button>
          <button className="">
            <Link href={'/Profile'}>
              <CgProfile />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}