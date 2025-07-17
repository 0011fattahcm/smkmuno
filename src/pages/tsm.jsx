import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import TSM1 from '../assets/tsm1.jpg';
import TSM2 from '../assets/tsm2.jpg';
import TSM3 from '../assets/tsm3.jpg';
import TSM4 from '../assets/tsm4.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaMotorcycle, FaBolt, FaCogs } from 'react-icons/fa';

const TeknikSepedaMotor = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${TSM1})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1 className="text-3xl md:text-6xl font-bold animate-fadeInLeft">Teknik Sepeda Motor</h1>
          <p className="text-sm md:text-lg text-gray-200 mt-4 animate-fadeInUp">
            Program Keahlian Teknik Otomotif SMK Muhammadiyah Sumowono
          </p>
        </div>
      </section>

      {/* Deskripsi Jurusan */}
      <section className="px-4 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-justify" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Tentang Program Keahlian</h2>
          <p className="text-gray-700 leading-relaxed">
            Pembelajaran di SMK Muhammadiyah Sumowono berorientasi untuk membekali peserta didik
            agar beriman dan bertakwa kepada Tuhan Yang Maha Esa, berakhlak mulia, sehat, berilmu,
            cakap, kreatif, mandiri, dan menjadi warga negara yang demokratis serta bertanggung
            jawab.
            <br />
            <br />
            Program keahlian Teknik Otomotif, khususnya Teknik Sepeda Motor, menyelenggarakan proses
            pembelajaran berbasis kompetensi dengan pendekatan *link and match* bersama DUDIKA.
            Kompetensi yang diajarkan meliputi:
          </p>
        </div>

        {/* Kompetensi Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-center" data-aos="zoom-in">
            <img src={TSM2} alt="Mesin" className="w-full h-40 object-cover rounded-lg mb-4" />
            <FaTools className="text-3xl text-blue-800 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Pemeliharaan Mesin</h4>
            <p className="text-sm text-gray-600 mt-2">
              Peserta didik mampu melakukan pemeliharaan dan perawatan mesin sepeda motor sesuai
              standar industri.
            </p>
          </div>

          <div
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img src={TSM4} alt="Chasis" className="w-full h-40 object-cover rounded-lg mb-4" />
            <FaMotorcycle className="text-3xl text-red-700 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Perbaikan Chasis</h4>
            <p className="text-sm text-gray-600 mt-2">
              Mampu memperbaiki dan menyetel sistem suspensi, rem, dan rangka motor dengan baik dan
              aman.
            </p>
          </div>

          <div
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={TSM3}
              alt="Kelistrikan"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <FaBolt className="text-3xl text-yellow-500 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Kelistrikan Sepeda Motor</h4>
            <p className="text-sm text-gray-600 mt-2">
              Menguasai sistem kelistrikan kendaraan, mulai dari sistem pengapian hingga sistem
              pengisian.
            </p>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section className="bg-green-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Siap Menjadi Teknisi Profesional</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Lulusan Teknik Sepeda Motor SMK Muhammadiyah Sumowono dipersiapkan untuk siap kerja,
          berwirausaha, atau melanjutkan pendidikan. Kami mencetak tenaga kerja yang adaptif dan
          inovatif!
        </p>
      </section>
    </MainLayout>
  );
};

export default TeknikSepedaMotor;
