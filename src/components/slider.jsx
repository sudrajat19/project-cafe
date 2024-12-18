"use client";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/pee.jpeg",
      title: "OUR PLANTATION",
      subtitle: "JAVA-MOCHA ORIGIN",
      desc: "Terletak di lereng gunung Argopuro dengan ketinggian di 600m - 900m, membuat perkebunan ini salah satu penghasil biji kopi terbaik Jawa Timur.",
    },
    {
      image: "/images/coffeecafe.jpeg",
      title: "OUR PLANTATION",
      subtitle: "JAVA-MOCHA ORIGIN",
      desc: "Terletak di lereng gunung Argopuro dengan ketinggian di 600m - 900m, membuat perkebunan ini salah satu penghasil biji kopi terbaik Jawa Timur.",
    },
    {
      image: "/images/monocoffee.jpeg",
      title: "OUR VISION",
      subtitle: "COFFEE EXCELLENCE",
      desc: "Menjadi solusi terdepan dalam bidang logistik untuk mempermudah hidup masyarakat Indonesia.",
    },
    {
      image: "/images/peew.jpeg",
      title: "OUR VISION",
      subtitle: "COFFEE EXCELLENCE",
      desc: "Menjadi solusi terdepan dalam bidang logistik untuk mempermudah hidup masyarakat Indonesia.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
              <h3 className="text-2xl italic mb-4">{slide.subtitle}</h3>
              <p className="max-w-xl mx-auto text-lg">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        &gt;
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
