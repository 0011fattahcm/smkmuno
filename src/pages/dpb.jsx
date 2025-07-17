import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import DPK1 from '../assets/dpb1.jpeg';
import DPK2 from '../assets/dpb2.jpg';
import DPK3 from '../assets/dpb3.jpg';
import DPK4 from '../assets/dpb4.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie, FaIndustry, FaPencilRuler, FaTshirt } from 'react-icons/fa';

const DesainProduksiBusana = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${DPK1})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1 className="text-3xl md:text-6xl font-bold animate-fadeInLeft">
            Desain & Produksi Busana
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-4 animate-fadeInUp">
            Program Keahlian Fesyen SMK Muhammadiyah Sumowono
          </p>
        </div>
      </section>

      {/* Deskripsi Jurusan */}
      <section className="px-4 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-justify" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Tentang Program Keahlian</h2>
          <p className="text-gray-700 leading-relaxed">
            Program keahlian Desain dan Produksi Busana menyelenggarakan proses pembelajaran yang
            berorientasi pada peserta didik dan penguasaan kompetensi yang *link and match* dengan
            DUDIKA. Kompetensi meliputi pemahaman profil technopreneur, peluang usaha/profesi
            fesyen, proses bisnis industri busana, serta perkembangan teknologi dan isu global di
            bidang fesyen.
            <br />
            <br />
            Siswa juga dibekali keterampilan teknis seperti teknik dasar produksi industri busana,
            dasar fashion design, menggambar mode, dasar pola, teknik menjahit, dan dasar branding &
            marketing.
          </p>
        </div>

        {/* Kompetensi Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-center" data-aos="zoom-in">
            <img
              src={DPK2}
              alt="Technopreneur"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <FaUserTie className="text-3xl text-pink-600 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Profil Technopreneur</h4>
            <p className="text-sm text-gray-600 mt-2">
              Mengenal karakter dan potensi wirausaha dalam dunia fesyen dan industri kreatif.
            </p>
          </div>

          <div
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={DPK3}
              alt="Industri Fesyen"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <FaIndustry className="text-3xl text-indigo-700 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Proses Industri Fesyen</h4>
            <p className="text-sm text-gray-600 mt-2">
              Memahami siklus produksi, proses bisnis, dan teknologi yang digunakan dalam industri
              busana.
            </p>
          </div>

          <div
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={DPK4}
              alt="Desain dan Jahit"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <FaPencilRuler className="text-3xl text-yellow-600 mb-2 mx-auto" />
            <h4 className="text-lg font-bold">Desain & Produksi</h4>
            <p className="text-sm text-gray-600 mt-2">
              Membuat desain busana, pola, serta menguasai teknik dasar menjahit dan pemasaran
              produk.
            </p>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section className="bg-green-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ciptakan Karya Fesyen Berkualitas</h2>
        <p className="max-w-3xl mx-auto text-gray-200">
          Lulusan Desain & Produksi Busana SMK Muhammadiyah Sumowono siap bersaing di industri
          kreatif, membangun brand sendiri, atau melanjutkan ke pendidikan tinggi di bidang fesyen.
        </p>
      </section>
    </MainLayout>
  );
};

export default DesainProduksiBusana;
