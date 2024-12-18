"use client";
import { useState } from "react";

export default function Gallery() {
  const menus = [
    { alt: "Spaghetti", src: "./images/satu.jpeg" },
    { alt: "Spaghetti", src: "./images/dua.jpeg" },
    { alt: "Spaghetti", src: "./images/tiga.jpeg" },
    { alt: "Spaghetti", src: "./images/empat.jpeg" },
    { alt: "Spaghetti", src: "./images/lima.jpeg" },
    { alt: "Spaghetti", src: "./images/enam.jpeg" },
    { alt: "Spaghetti", src: "./images/tujuh.jpeg" },
    { alt: "Spaghetti", src: "./images/delapan.jpeg" },
    { alt: "Spaghetti", src: "./images/coffee.png" },
    { alt: "Spaghetti", src: "./images/sepuluh.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? menus.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === menus.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-[50px] md:px-[100px] lg:px-[200px]">
      <div className="py-6">
        <h4 className="text-center font-semibold text-yellow-700">Moments</h4>
        <h2 className="text-center font-bold font-display text-4xl">Gallery</h2>
        <div className="border-t-8 mt-4 border-yellow-700 w-[80px] mx-auto"></div>
      </div>
      <div className="pt-14 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {menus.map((dr, index) => (
          <div key={index} className="grid cursor-pointer gap-4 rounded">
            <img
              src={dr.src}
              alt={dr.alt}
              onClick={() => openImage(index)}
              className="mx-auto lg:w-[178px] lg:h-[118px] md:w-[200px] md:h-[130px] sm:w-[220px] sm:h-[150px] w-[240px] h-[170px] hover:scale-110 transition-transform duration-300 shadow rounded"
            />
          </div>
        ))}
      </div>

      {/* Overlay Zoomed Image */}
      {currentIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-5xl font-bold hover:scale-110"
          >
            &lt;
          </button>

          {/* Zoomed Image */}
          <img
            src={menus[currentIndex].src}
            alt={menus[currentIndex].alt}
            className="max-w-[90%] max-h-[80%] rounded"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-5xl font-bold hover:scale-110"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
