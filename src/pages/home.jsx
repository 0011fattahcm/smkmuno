import MainLayout from '../layouts/MainLayout';
import Sampul from '../assets/sampul.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import XL7 from '../assets/xl7.jpg';
import RX1 from '../assets/rx1.jpg';
import RX2 from '../assets/rx2.jpeg';
import RX3 from '../assets/rx3.jpeg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserGraduate,
  FaGlobe,
  FaUser,
  FaGraduationCap,
  FaPaperclip,
  FaLaptop,
} from 'react-icons/fa';

const cards = [
  { icon: <FaUserGraduate />, title: 'Enrollment' },
  { icon: <FaGlobe />, title: 'Overseas Program' },
  { icon: <FaUser />, title: 'About Us' },
  { icon: <FaGraduationCap />, title: 'Alumni' },
];

const features = [
  {
    img: RX2,
    icon: <FaLaptop />,
    title: 'Fasilitas Nyaman',
    desc: 'SMK Muhammadiyah Sumowono terletak di lingkungan alam yang asri dan mendukung proses belajar mengajar secara optimal.',
  },
  {
    img: RX1,
    icon: <FaGraduationCap />,
    title: 'Program Keahlian Unggulan',
    desc: 'Tersedia dua program keahlian yaitu Teknik Sepeda Motor dan Desain & Produksi Busana yang link & match dengan DUDIKA.',
  },
  {
    img: RX3,
    icon: <FaPaperclip />,
    title: 'Sekolah Pencetak Wirausaha',
    desc: 'Mendorong siswa dari ekonomi menengah ke bawah menjadi wirausahawan mandiri berbasis karya dan keterampilan siswa.',
  },
];

const Home = () => {
  const [berita, setBerita] = useState([]);
  const [pengumuman, setPengumuman] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // ⚠️ ini penting: animasi akan jalan SETIAP SCROLL, bukan cuma sekali
      mirror: true, // biar animasi bisa muncul saat scroll naik/turun
    });

    fetch('/api/berita') // Ganti sesuai endpoint kamu
      .then((res) => res.json())
      .then((data) => setBerita(data.slice(0, 3)))
      .catch((err) => console.error('Gagal mengambil berita:', err));

    fetch('/api/pengumuman') // Ganti sesuai endpoint kamu
      .then((res) => res.json())
      .then((data) => setPengumuman(data.slice(0, 3)))
      .catch((err) => console.error('Gagal mengambil pengumuman:', err));
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Sampul})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 text-white px-6 md:px-20 text-left">
          <p
            className="text-lg md:text-xl font-light mb-2 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '200ms' }}
          >
            Sekolah Pusat Keunggulan
          </p>
          <h1
            className="font-poppins text-4xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fadeInLeft"
            style={{ animationDelay: '700ms' }}
          >
            SMK Muhammadiyah <br className="hidden md:block" /> Sumowono
          </h1>
          <a
            href="#pendaftaran"
            className="font-poppins inline-block bg-blue-950 hover:bg-blue-800 transition text-white font-semibold py-3 px-8 rounded-md text-lg shadow opacity-0 animate-fadeInDown"
            style={{ animationDelay: '1300ms' }}
          >
            INFORMASI PENDAFTARAN
          </a>
        </div>
      </section>

      {/* Card Section */}
      <div data-aos="fade-up" className="relative z-20 w-full -mt-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-blue-950 text-white p-2 rounded-2xl text-center flex flex-col items-center justify-center aspect-square shadow-md hover:scale-105 transition duration-300"
            >
              <div className="text-green-400 text-4xl md:text-6xl mb-2">{card.icon}</div>
              <p className="text-sm md:text-lg font-semibold">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Spacer untuk memberi ruang bawah */}
        <div className="h-32"></div>

        {/* ABOUT SECTION */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28 items-center">
          <div data-aos="fade-right">
            <p className="text-green-500 uppercase font-medium mb-2">About Us</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-950 mb-4">
              SMK Muhammadiyah Sumowono
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              SMK Muhammadiyah Sumowono adalah sekolah kejuruan yang berdiri sejak tahun 2009,
              dengan dua kompetensi keahlian yaitu Teknik Sepeda Motor dan Desain & Produksi Busana.
              Berlokasi di kawasan pedesaan yang asri dan dekat dengan destinasi wisata, sekolah ini
              fokus mencetak lulusan beriman, bertakwa, dan profesional, serta membekali siswa untuk
              menjadi wirausahawan tangguh melalui pendidikan berbasis praktik dan kewirausahaan.
            </p>
            <Link to="/tentang">
              <button className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-[#3e131a] transition">
                Lihat Profil Sekolah
              </button>
            </Link>
          </div>
          <img
            data-aos="fade-left"
            src={XL7}
            alt="SMK Muhammadiyah Sumowono"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Pusat Keunggulan */}
        <section className="py-20 bg-gray-50 text-center">
          <p
            data-aos="fade-down"
            className="text-green-500 font-medium uppercase tracking-wide mb-2"
          >
            Sekolah
          </p>
          <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold text-blue-950 mb-12">
            Pusat Keunggulan
          </h2>

          <div
            data-aos="fade-up"
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
                <div className="relative -mt-6 flex justify-center">
                  <div className="bg-blue-950 text-white w-16 h-16 flex items-center justify-center rounded-full text-xl">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="font-bold text-lg mb-2 text-blue-950">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Youtube */}
        <section
          data-aos="zoom-in"
          className="relative w-full bg-cover bg-center py-20"
          style={{ backgroundImage: `url(${Sampul})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />

          {/* Konten iframe */}
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/X3gB0ZqjUiU?si=dOjqRXBpFl5Sm2vC"
                title="Video Profil Sekolah"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Pendaftaran */}
        <section className="w-full bg-gray-100 py-16 md:px-10">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Gambar Kiri */}
            <div data-aos="fade-right">
              <img
                src={RX2}
                alt="Pendaftaran SMK Muhammadiyah Sumowono"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>

            {/* Konten Kanan */}
            <div data-aos="fade-left">
              <p className="text-green-400 font-semibold tracking-widest uppercase mb-2">
                PUSAT KEUNGGULAN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-snug mb-4">
                Pendaftaran Siswa Baru
                <br />
                SMK Muhammadiyah Sumowono
              </h2>
              <p className="text-gray-800 text-base leading-relaxed text-justify mb-6">
                SMK Muhammadiyah Sumowono membuka kesempatan bagi siswa-siswi baru untuk bergabung
                dan berkembang melalui dua program keahlian unggulan: Teknik Sepeda Motor dan Desain
                & Produksi Busana. Dengan dukungan tenaga pengajar profesional dan lingkungan
                belajar yang nyaman, kami berkomitmen mencetak lulusan yang siap kerja, kompeten,
                serta memiliki jiwa wirausaha sesuai dengan nilai-nilai Islam.
              </p>
              <button className="bg-blue-950 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition duration-200">
                Info Pendaftaran
              </button>
            </div>
          </div>
        </section>

        <section data-aos="zoom-in" className="py-16 bg-white px-4 md:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Berita */}
            <div>
              <h2 className="text-green-500 font-semibold text-sm mb-2">BERITA</h2>
              <h3 className="text-3xl font-bold text-blue-950 mb-6">Informasi Terbaru</h3>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex gap-4 mb-6">
                  <img
                    src="https://source.unsplash.com/160x120/?school,education"
                    alt="Berita Thumbnail"
                    className="w-40 h-28 object-cover rounded-md shadow"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">12 Juli 2025</p>
                    <h4 className="font-semibold text-lg text-gray-800">
                      Judul Berita Dummy ke-{idx + 1}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ini deskripsi singkat isi berita sebagai placeholder.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pengumuman */}
            <div>
              <h2 className="text-green-500 font-semibold text-sm mb-2">PENGUMUMAN</h2>
              <h3 className="text-3xl font-bold text-blue-950 mb-6">Pengumuman Terbaru</h3>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-900 text-white text-center px-3 py-2 rounded-md w-16 shrink-0">
                    <p className="text-sm">JUL</p>
                    <p className="text-xl font-bold">15</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">🕒 09:00 WIB</p>
                    <h4 className="font-semibold text-lg text-gray-800">
                      Judul Pengumuman Dummy ke-{idx + 1}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Isi pengumuman singkat untuk testing tampilan frontend.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
