"use client";
import Gallery from "@/components/gallery";
import Layout from "../layout";
import About from "@/components/about";
import Contact from "@/components/contact";
import Link from "next/link";
import Slider from "@/components/slider";

export default function Home() {
  const menus = [
    {
      title: "drinks",
      photo: "./images/americano.jpeg",
      price:
        "From traditional espresso-based drinks to a variety of modern coffee concoctions.",
    },
    {
      title: "foods",
      photo: "./images/ricebowl.jpeg",
      price:
        "A variety of main dishes are ready to accompany your cup of coffee.",
    },
    {
      title: "snacks",
      photo: "./images/dimsum.jpeg",
      price: "We also provide various kinds of snacks ",
    },
  ];

  return (
    <Layout>
      <div className="pt-[100px] font-nunito">
        <div id="slider">
          <Slider />
        </div>
        <div className="px-[80px] md:px-[100px] lg:px-[200px]">
          <div className=" py-6">
            <h4 className="text-center font-semibold text-yellow-700">
              coffee is inspiring
            </h4>
            <h2 className="text-center font-bold font-display text-4xl">
              OUR MENU
            </h2>
            <div className="border-t-8 mt-4 border-yellow-700 w-[80px] mx-auto"></div>
          </div>
          <div className=" pt-14 gap-10 grid grid-cols-1 md:grid-cols-3">
            {menus.map((dr, index) => (
              <div key={index} className="grid gap-4 rounded">
                <div className="  rounded">
                  <Link href={`./#${dr.title}`}>
                    <img
                      src={dr.photo}
                      alt=""
                      className="mx-auto shadow w-[246px] h-[164px]"
                    />
                  </Link>
                </div>
                <div className="mx-auto ">
                  <h1 className="text-center capitalize text-yellow-700 font-semibold text-2xl">
                    {dr.title}
                  </h1>
                  <p className="text-center my-4">{dr.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="about" className="py-10 scroll-smooth ">
          <About />
        </div>
        <div id="gallery" className="py-10">
          <Gallery />
        </div>
        <div id="contact" className="pt-10">
          <Contact />
        </div>
      </div>
    </Layout>
  );
}
