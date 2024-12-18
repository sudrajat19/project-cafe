import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white shadow z-50 fixed w-full px-[50px] md:px-[100px] lg:px-[200px]">
      <div className="mx-auto">
        <ul className="grid grid-cols-2 gap-3 justify-evenly ">
          <div className="">
            <img
              src="./images/coffee.png"
              className="w-[100px] h-[100px]"
              alt=""
            />
          </div>
          <div className="flex gap-3  justify-end ">
            <div className="lg:flex hidden gap-3 font-nunito font-bold justify-between my-auto align-middle">
              <Link href={"./home#slider"}>
                <li
                  // onClick={() => scrollToSection("#slider")}
                  className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth"
                >
                  Home
                </li>
              </Link>
              <Link href={"./"}>
                <li className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth">
                  Menu
                </li>
              </Link>
              <Link href={"./home#about"}>
                <li className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth">
                  About
                </li>
              </Link>
              <Link href={"./home#gallery"}>
                <li className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth">
                  Gallery
                </li>
              </Link>
              <Link href={"./home#contact"}>
                <li className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth">
                  Contact
                </li>
              </Link>
              <Link href={"./admin"}>
                <li className="hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded scroll-smooth">
                  Admin
                </li>
              </Link>
            </div>
            <div className="flex justify-end  gap-1 w-11 ">
              <div
                onClick={handleToggle}
                className={` lg:hidden hamburger-menu items-center m-auto ${
                  open ? "change" : ""
                }`}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            {open ? (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                <ul className="space-y-2 px-4">
                  <li className="lg:hidden">
                    <a
                      href="/home"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      Home
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      href="/"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      Menu
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      href="/home#about"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      About
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      href="/home#gallery"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      href="/home#contact"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      href="/admin"
                      className="text-gray-700 hover:bg-yellow-700 hover:text-white cursor-pointer p-1 rounded block"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
