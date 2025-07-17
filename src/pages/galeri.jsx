import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaPhotoVideo } from 'react-icons/fa';

// Import semua gambar kegiatan
import studywisata from '../assets/studywisata.jpeg';
import futsal1 from '../assets/futsal1.jpg';
import tapaksuci1 from '../assets/tapaksuci1.jpg';
import tapaksuci2 from '../assets/tapaksuci2.jpg';
import tari from '../assets/tari.jpeg';
import sholat1 from '../assets/sholat1.jpg';
import volley from '../assets/volley.jpg';
import drumband from '../assets/drumband.jpg';
import fashion1 from '../assets/fashionshow1.jpg';
import fashion2 from '../assets/fashionshow2.jpg';
import hw1 from '../assets/hw1.jpg';
import hw2 from '../assets/hw2.jpg';
import sampul from '../assets/sampul.jpg';
import rx1 from '../assets/rx1.jpg';
import rx2 from '../assets/rx2.jpeg';
import rx3 from '../assets/rx3.jpeg';
import tsm1 from '../assets/tsm1.jpg';
import tsm2 from '../assets/tsm2.jpg';
import tsm3 from '../assets/tsm3.jpg';
import tsm4 from '../assets/tsm4.jpeg';
import xl6 from '../assets/xl6.jpg';
import xl7 from '../assets/xl7.jpg';
import wirausaha from '../assets/wirausaha.jpeg';

const allImages = [
  sampul,
  studywisata,
  futsal1,
  tapaksuci1,
  tapaksuci2,
  tari,
  sholat1,
  volley,
  drumband,
  fashion1,
  fashion2,
  hw1,
  hw2,
  rx1,
  rx2,
  rx3,
  tsm1,
  tsm2,
  tsm3,
  tsm4,
  xl6,
  xl7,
  wirausaha,
];

const Galeri = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${studywisata})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold animate-fadeInDown">Galeri Sekolah</h1>
          <p className="text-sm md:text-lg text-gray-300 mt-4 animate-fadeInUp">
            Momen terbaik siswa SMK Muhammadiyah Sumowono
          </p>
        </div>
      </section>

      {/* Icon Section */}
      <section className="py-12 bg-gray-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <FaPhotoVideo className="text-5xl text-blue-600 mb-4 mx-auto animate-bounce" />
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800">Momen dalam Bingkai</h2>
          <p className="mt-3 text-gray-600">
            Dokumentasi kegiatan belajar, lomba, seni, keagamaan, dan study wisata.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24 bg-white">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {allImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Galeri ${idx}`}
              className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImg(img)}
              data-aos="zoom-in"
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Zoomed"
            className="max-h-[90vh] max-w-4xl rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      )}
    </MainLayout>
  );
};

export default Galeri;
