"use client";
import { useEffect, useState } from "react";
import Drinks from "@/components/drinks";
import Layout from "./layout";
import Foods from "@/components/foods";
import Snacks from "@/components/snacks";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout>
      <div id="menu" className="pt-[100px]">
        <div
          className={`bg-black w-full fixed z-50 text-white px-[200px] transition-transform duration-300 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto p-2">
            <ul className="grid grid-cols-2 gap-3 justify-evenly">
              <button onClick={() => scrollToSection("menu")}>
                <img
                  src="./images/atas.png"
                  alt=""
                  className="lg:block hidden"
                />
                <img
                  src="./images/up.png"
                  alt=""
                  className="lg:hidden block w-8 h-8"
                />
              </button>
              <div className="flex gap-3 justify-between my-auto align-middle">
                <button
                  onClick={() => scrollToSection("drinks")}
                  className="hover:text-yellow-700 cursor-pointer"
                >
                  Drinks
                </button>
                <button
                  onClick={() => scrollToSection("foods")}
                  className="hover:text-yellow-700 cursor-pointer"
                >
                  Foods
                </button>
                <button
                  onClick={() => scrollToSection("snacks")}
                  className="hover:text-yellow-700 cursor-pointer"
                >
                  Snacks
                </button>
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="bg-gray-100 py-6">
            <h4 className="text-center text-sm text-yellow-700">Assortments</h4>
            <h2 className="text-center font-bold text-4xl">MENU BOOK</h2>
            <div className="border-t-8 mt-4 border-yellow-700 w-[80px] mx-auto"></div>
            <p className="text-center">
              Berbagai macam makanan dan minuman juga cemilan.
            </p>
          </div>
          <div id="drinks">
            <Drinks />
          </div>
          <div id="foods">
            <Foods />
          </div>
          <div id="snacks">
            <Snacks />
          </div>
        </div>
      </div>
    </Layout>
  );
}
