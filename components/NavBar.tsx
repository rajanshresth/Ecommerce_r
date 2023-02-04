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
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineMenu /> : <RxCross1 />}
          </button>
        </div>
        <div className="flex flex-between mx-10">
          <h1 className="font-extrabold text-xl mr-6 mb-1 lg:mr-6 text-center ">
            sneakers
          </h1>

          {/* list of Nav */}
          <ul className="hidden lg:flex flex-between gap-2 font-light justify-center items-center">
            <li>
              <Link href={'/'}>Home</Link>
            </li>

            <li>
              <Link href={'/collection'}>Collection</Link>
            </li>

            <li>
              <Link href={'/men'}>Men</Link>
            </li>

            <li>
              <Link href={'/women'}>Women</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex  gap-2 md:gap-[2rem] ">
          <button className="">
            <FaShoppingCart />
          </button>
          <button className="">
            <CgProfile />
          </button>
        </div>
      </nav>
    </>
  );
}
