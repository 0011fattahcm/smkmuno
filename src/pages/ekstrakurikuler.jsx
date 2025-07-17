import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Drumband from '../assets/drumband.jpg';
import Fashion1 from '../assets/fashionshow1.jpg';
import Fashion2 from '../assets/fashionshow2.jpg';
import Futsal from '../assets/futsal1.jpg';
import HW1 from '../assets/hw1.jpg';
import HW2 from '../assets/hw2.jpg';
import Sholat from '../assets/sholat1.jpg';
import TapakSuci1 from '../assets/tapaksuci1.jpg';
import TapakSuci2 from '../assets/tapaksuci2.jpg';
import Volley from '../assets/volley.jpg';
import StudyWisata from '../assets/studywisata.jpeg';

import {
  FaMusic,
  FaFutbol,
  FaUsers,
  FaPrayingHands,
  FaPaintBrush,
  FaRunning,
} from 'react-icons/fa';

const Ekstrakurikuler = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  const kegiatan = [
    {
      title: 'Drumband',
      image: Drumband,
      icon: <FaMusic className="text-3xl text-blue-600 mb-2 mx-auto" />,
      desc: 'Meningkatkan kedisiplinan, kekompakan, dan kemampuan bermusik dalam tim marching band sekolah.',
    },
    {
      title: 'Fashion Show & Rancang Busana',
      image: Fashion1,
      icon: <FaPaintBrush className="text-3xl text-pink-600 mb-2 mx-auto" />,
      desc: 'Wadah kreatif untuk menampilkan hasil karya busana siswa jurusan DPK yang menawan dan inovatif.',
    },
    {
      title: 'Kostum Karnaval',
      image: Fashion2,
      icon: <FaUsers className="text-3xl text-yellow-600 mb-2 mx-auto" />,
      desc: 'Siswa mempresentasikan desain busana tematik dalam acara karnaval dan pentas seni lokal.',
    },
    {
      title: 'Futsal',
      image: Futsal,
      icon: <FaFutbol className="text-3xl text-green-600 mb-2 mx-auto" />,
      desc: 'Mengembangkan bakat olahraga, kerja sama tim, dan semangat kompetisi sehat antar pelajar.',
    },
    {
      title: 'Hizbul Wathan',
      image: HW1,
      icon: <FaRunning className="text-3xl text-purple-700 mb-2 mx-auto" />,
      desc: 'Membentuk karakter, kedisiplinan, dan jiwa kepemimpinan melalui kegiatan kepramukaan Muhammadiyah.',
    },
    {
      title: 'Upacara & Baris Berbaris',
      image: HW2,
      icon: <FaUsers className="text-3xl text-red-700 mb-2 mx-auto" />,
      desc: 'Melatih tanggung jawab dan kekompakan melalui kegiatan rutin dan lomba baris-berbaris.',
    },
    {
      title: 'Sholat Berjamaah',
      image: Sholat,
      icon: <FaPrayingHands className="text-3xl text-indigo-600 mb-2 mx-auto" />,
      desc: 'Menanamkan kedisiplinan dan kebiasaan ibadah di lingkungan sekolah melalui sholat bersama.',
    },
    {
      title: 'Tapak Suci',
      image: TapakSuci1,
      icon: <FaRunning className="text-3xl text-orange-600 mb-2 mx-auto" />,
      desc: 'Pencak silat khas Muhammadiyah untuk membentuk mental, spiritual, dan fisik yang tangguh.',
    },
    {
      title: 'Atraksi Tapak Suci',
      image: TapakSuci2,
      icon: <FaRunning className="text-3xl text-red-700 mb-2 mx-auto" />,
      desc: 'Kegiatan unjuk bakat dan seni bela diri dalam panggung acara sekolah maupun eksternal.',
    },
    {
      title: 'Voli',
      image: Volley,
      icon: <FaFutbol className="text-3xl text-blue-800 mb-2 mx-auto" />,
      desc: 'Melatih kekuatan fisik dan sportivitas siswa melalui latihan dan turnamen voli.',
    },
    {
      title: 'Study Wisata',
      image: StudyWisata,
      icon: <FaUsers className="text-3xl text-teal-700 mb-2 mx-auto" />,
      desc: 'Kegiatan edukatif tahunan mengunjungi berbagai daerah di Indonesia untuk memperluas wawasan dan pengalaman siswa.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Drumband})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1 className="text-3xl md:text-6xl font-bold animate-fadeInLeft">
            Ekstrakurikuler & Kegiatan
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-4 animate-fadeInUp">
            Wadah ekspresi, prestasi, dan karakter siswa SMK Muhammadiyah Sumowono
          </p>
        </div>
      </section>

      {/* Grid Kegiatan */}
      <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {kegiatan.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                {item.icon}
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Ekstrakurikuler;
