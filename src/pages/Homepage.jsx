import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection'
import GallerySection from '../components/GallerySection'
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";

const Homepage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <>
            <div className="relative min-h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/hero2.mp4"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                />

                {/* Tombol Mute / Unmute */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                    {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                </button>

                {/* Overlay + Content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="text-center max-w-md bg-black bg-opacity-70 py-6 px-4 rounded-lg">
                        <h1 className="text-5xl text-white font-bold font-title">Sukama Bali Tour</h1>
                        <p className="py-6 text-white text-lg font-heading">
                            Sukama Bali Tour will take you on an adventure by visiting the best waterfalls in Ubud. Experience the magic of waterfalls in Ubud with us.
                        </p>
                        <Link className="btn btn-primary" to={"/booking-form"}>Book your Tour Now</Link>
                    </div>
                </div>
            </div>

            <div className='text-center my-4 px-4'>
                <h1 className="text-3xl font-bold font-title">Sukama Bali Tour</h1>
                {/* <p className='text-justify lg:text-center pt-4'>
                Sukama Bali Tour will take you on an adventure by visiting the best waterfalls in Ubud, although the waterfall itself is the main attraction, there are still many others to explore.
                </p> */}
                <p className="pt-4 text-justify lg:text-center">
                    We offer trips to popular spots like Goa rangreng Waterfall, Tibumana Waterfall, and Suwat Waterfall.
                </p>
                <p className='text-justify lg:text-center'> Our package includes comfortable transport and a friendly local guide.</p>
            </div>
            <section className="py-4 px-4 bg-base-100" ref={ref} >
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Kiri: Teks dan Tombol */}
                    <motion.div
                        className="flex-1 text-center lg:text-left space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className=" text-3xl font-bold font-title">Sukama Bali Tour</h3>
                        <h2 className="text-3xl font-bold">Overview</h2>
                        <p className=" text-justify">
                            Did you know that in our place in ubud located in the heart of bali? stored culture and beautiful scenery, such as rice fields, waterfalls and cultural diversity and tropical beauty of ubud. the village of ubud rich in culture has been a favorite of tourists for years in bali. ubud offers dance culture, museums, traditional shopping opportunities, and culinary culture. "but do you know the best waterfalls and econics scattered around it?
                        </p>
                        <Link className="btn btn-primary" to={"/tourinfo"}>Get More Info</Link>
                        
                    </motion.div>

                    {/* Kanan: Gambar */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/goarangreng.jpeg"
                            alt="Sukama Bali Tour"
                            className="rounded-xl shadow-lg w-full h-100 object-cover"
                        />
                    </motion.div>
                </div>
            </section>
            <section className="py-4  px-4 bg-base-100" ref={ref}>
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* KIRI: Gambar - tampil dulu di desktop, belakangan di mobile */}
                    <motion.div
                        className="flex-1 lg:order-none order-last"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/sukama2.jpg"
                            alt="Sukama Bali Tour"
                            className="rounded-xl shadow-lg w-full h-100 object-cover"
                        />
                    </motion.div>

                    {/* KANAN: Teks dan Tombol - tampil dulu di mobile, belakangan di desktop */}
                    <motion.div
                        className="flex-1 lg:order-none order-first text-center lg:text-left space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold font-title">Sukama Bali Tour</h3>
                        <h2 className="text-3xl font-bold">Our Tours</h2>
                        <p className="text-justify">
                            Our local driver and guide will share their knowledge about the culture, they and you will pass through several villages, rice fields and in each place you will be able to stop to see it, they will prepare some drinks and show you the best places for you.
                        </p>
                        <p className="text-gray-600 text-justify">
                            The tour will end with a delicious lunch that will be served in a place that has been provided, and it will be done before taking you home.
                        </p>
                        <p className="text-gray-600 text-justify">
                            If you want a private driver to explore Bali, please contact us through the form.
                        </p>
                        <Link className="btn btn-primary" to={"/contact"}>Contact Me</Link>
                    </motion.div>
                </div>
            </section>
            <WhyChooseUs />
            <TestimonialSection />
            <GallerySection />
        </>
    )
}

export default Homepage