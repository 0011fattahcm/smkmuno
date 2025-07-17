import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import RX3 from '../assets/rx1.jpg';
import XL7 from '../assets/xl7.jpg';
import Sampul from '../assets/sampul.jpg';
import Guru from '../assets/guru.jpeg';
import Wirausaha from '../assets/wirausaha.jpeg';
import Beasiswa from '../assets/beasiswa.jpeg';
import Hadir from '../assets/hadir.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSchool, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';

const Tentang = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // ⚠️ ini penting: animasi akan jalan SETIAP SCROLL, bukan cuma sekali
      mirror: true, // biar animasi bisa muncul saat scroll naik/turun
    });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${RX3})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Konten Tengah */}
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1
            className="font-poppins text-3xl md:text-6xl mb-4 font-bold leading-tight animate-fadeInLeft"
            style={{ animationDelay: '700ms' }}
          >
            Profil
          </h1>

          <p
            className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '900ms' }}
          >
            Sekilas profil dan komitmen SMK Muhammadiyah Sumowono terhadap pendidikan unggul
            berbasis kewirausahaan.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center px-4 md:px-6">
        <div data-aos="fade-left">
          <p className="text-green-500 uppercase font-medium mb-2">SMK Muhammadiyah Sumowono</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-950 mb-4">SEJARAH BERDIRI</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            SMK Muhammadiyah Sumowono berdiri pada tanggal <strong>16 Mei 2009</strong> dengan SK
            Menteri Pendidikan dan Kebudayaan No. <strong>425.1/1187.A Tahun 2009</strong>.
            Diprakarsai oleh Dikdasmen Cabang Muhammadiyah Sumowono, tokoh masyarakat, dan orang tua
            murid, serta mendapat restu dari Kepala Dinas Pendidikan dan Kebudayaan Kabupaten
            Semarang.
            <br />
            <br />
            Sambutan masyarakat sangat positif, terbukti dengan kepercayaan untuk menyekolahkan
            putra-putrinya di SMK Muhammadiyah Sumowono.
            <br />
            <br />
            <span className="block">
              <strong>NPSN</strong>: 20347834
            </span>
            <span className="block">
              <strong>NSS</strong>: 402032209018
            </span>
          </p>
        </div>

        <img
          data-aos="fade-left"
          src={XL7}
          alt="Sekolah Alexandria"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Section 2: Lokasi & Potensi */}
      {/* Section 2: Lokasi & Potensi */}
      <section className="bg-gray-100 min-h-[80vh] py-20 px-4 md:px-12 lg:px-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            data-aos="fade-left"
            src={Sampul}
            alt="Lingkungan Sekolah"
            className="w-full h-full max-h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Lingkungan Strategis & Potensial
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              SMK Muhammadiyah Sumowono berlokasi di Jl. KH Ahmad Dahlan No.8–9, Sumowono, di
              lingkungan pedesaan yang asri dan kondusif bagi proses belajar mengajar. Kedekatannya
              dengan kawasan wisata seperti Candi Gedong Songo, Taman Bunga Celosia, dan Bantir
              Hills memberikan peluang besar untuk pengembangan program kewirausahaan dan kerja sama
              industri kreatif.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Visi Sosial & Beasiswa */}
      <section className="bg-blue-50 min-h-[80vh] py-20 px-4 md:px-12 lg:px-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Komitmen Sosial & Dukungan Pendidikan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 2 */}
            <div
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={Wirausaha}
                alt="Wirausaha Siswa"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <FaUsers className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Wirausaha Siswa</h4>
              <p className="text-gray-600 text-base">
                Menumbuhkan jiwa wirausaha di kalangan siswa dari keluarga menengah ke bawah melalui
                program kreatif.
              </p>
            </div>

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up">
              <img
                src={Guru}
                alt="Fokus Pendidikan"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <FaSchool className="text-4xl text-blue-700 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Fokus Pendidikan</h4>
              <p className="text-gray-600 text-base">
                Semua guru merupakan lulusan sarjana dan mengajar sesuai bidangnya untuk hasil
                pembelajaran yang optimal.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={Beasiswa}
                alt="Beasiswa"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <FaMapMarkedAlt className="text-4xl text-green-700 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Program Beasiswa</h4>
              <p className="text-gray-600 text-base">
                Memberikan bantuan pendidikan kepada siswa kurang mampu agar tetap dapat melanjutkan
                sekolah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Hadir})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Konten Tengah */}
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1
            className="font-poppins text-xl md:text-6xl mb-4 font-bold leading-tight animate-fadeInLeft"
            style={{ animationDelay: '700ms' }}
          >
            Kami Hadir untuk Masyarakat
          </h1>

          <p className="text-gray-300 px-36">
            SMK Muhammadiyah Sumowono berkomitmen untuk menjadi sekolah vokasi yang inklusif,
            produktif, dan mendorong kemandirian siswa dalam berbagai bidang keterampilan dan
            kewirausahaan.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Tentang;
