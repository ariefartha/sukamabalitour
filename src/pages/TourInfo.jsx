import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import { Helmet } from "react-helmet-async";

const images = [
  "/sukama_slideshow0.jpg",
  "/sukama_slideshow2.jpg",
];

const TourInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sukama Bali Tour Info And Price</title>
        <meta name="description" content="Our service is special where you will be picked up and dropped off directly at the hotel. equipped with cold mineral water, clean towels, and supported by our amazing team. lunch at the end of the day will be delicious." />
        <link rel="canonical" href="/tourinfo" />
      </Helmet>

      <section className="py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Kiri: Teks dan Tombol */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h3 className="text-3xl font-bold font-title">Tour Info and Price</h3>
            <h2 className="font-bold">Price:</h2>
            <h2 className="text-4xl font-bold font-heading">IDR 450,000</h2>
            <p className="text-justify">
            Sukama bali tour will take you on a memorable adventure. drive through the countryside, our expert guides will share insights into the culture with you. visit three of the best waterfalls in ubud. swim, jump and pose for a special waterfall photo. enjoy a delicious lunch while enjoying the view of the waterfalls.
            </p>
            <p className="text-gray-600 text-justify">
            Our waterfall tour will be conducted in groups of no more than five guests. Enjoy the day with other adventures.
            </p>
            <p className="text-gray-600 text-justify">
            Our service is special where you will be picked up and dropped off directly at the hotel. equipped with cold mineral water, clean towels, and supported by our amazing team. lunch at the end of the day will be delicious.
            </p>
            <p className="text-gray-600 text-justify">
            At Sukama Bali Tour we realize that your vacation time is the most important and should be memorable and amazing.
            </p>
            <Accordion />
          </div>

          {/* Kanan: Slideshow Gambar */}
          <div className="flex-1 w-full">
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl shadow-lg overflow-hidden">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-700 ${index === currentSlide ? "block" : "hidden"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default TourInfo;
