import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '../layouts/MainLayout';
import RX3 from '../assets/sampul.jpg'; // gambar background hero sama dengan halaman Tentang

// Import semua foto seperti sebelumnya...
import Eko from '../assets/guru/Eko Pamuji, S.T.svg';
import Wiyono from '../assets/guru/Wiyono, SE, MM.svg';
import Siti from '../assets/guru/Siti Maesaroh, S.Pd.svg';
import Titik from '../assets/guru/Titik.svg';
import Samsul from '../assets/guru/M. Samsul Nizar, S.Pd.svg';
import Ika from '../assets/guru/Ika Khusnul Khotimah, S.Pd.svg';
import Miftah from '../assets/guru/Miftakhudin, S.Pd.svg';
import Sri from '../assets/guru/Sri Fatmawati, S.Pd.webp';
import Nur from '../assets/guru/Nur Ana, S.Pd.svg';
import Komi from '../assets/guru/Komiyati, S.Pd.webp';
import Gede from '../assets/guru/Gede Gandi Diraineni, S.Pd.svg';
import Musli from '../assets/guru/Muslisin.svg';
import Achmad from '../assets/guru/Achmad Ginanjar, S.Pd.svg';
import NurHarini from '../assets/guru/Nur Harini Khoirun Nisa, S.Pd.webp';
import Subari from '../assets/guru/Subariyanto, S.T.svg';
import Yusab from '../assets/guru/Yusab Sukoco, SPdI.JPG';
import Rukhana from '../assets/guru/Rukhana Zakiyatun.jpeg';
import Hafidz from '../assets/guru/Hafizd Jatiwinarka, S.Pd.svg';
import Nafiastut from '../assets/guru/Nafisatut Diniyah.jpg';
import Farah from '../assets/guru/Farah Fadhlilatuz Zahra, S.Psi.webp';
import Wahid from '../assets/guru/Wahid Muhammad Zukhruf, S.Pd.webp';
import Mela from '../assets/guru/Mela Suniyati.svg';
import Annisa from '../assets/guru/Anisa Eka Aprilia Dani, SM.webp';
import Wahyu from '../assets/guru/Wahyu Tri Mulyono.svg';
import Toyibi from '../assets/guru/Toyibi.svg';

const struktur = [
  { nama: 'Eko Pamuji, S.T', jabatan: 'Kepala Sekolah', foto: Eko },
  { nama: 'Wiyono, SE, MM', jabatan: 'Ketua BKK', foto: Wiyono },

  { nama: 'Siti Maesaroh, S.Pd', jabatan: 'Waka Kurikulum', foto: Siti },
  { nama: 'M. Samsul Nizar, S.Pd', jabatan: 'Waka Kesiswaan', foto: Samsul },
  { nama: 'Ika Khusnul Khotimah, S.Pd', jabatan: 'Waka Humas', foto: Ika },

  { nama: 'Titik Sri Mulyani, S.Pd', jabatan: 'Penjamin Mutu', foto: Titik },
  { nama: 'Miftakhudin, S.Pd', jabatan: 'Ka Perpustakaan', foto: Miftah },
  { nama: 'Subariyanto, S.T', jabatan: 'Ka Tata Usaha', foto: Subari },
  { nama: 'Achmad Ginanjar, S.Pd', jabatan: 'Kabid Sarpras', foto: Achmad },
  { nama: 'Komiyati, S.Pd', jabatan: 'Kepala Konsentrasi Tata Busana', foto: Komi },
  { nama: 'Yusab Sukoco, S.Pd.I', jabatan: 'Kepala Konsentrasi TSM', foto: Yusab },

  { nama: 'Nur Ana, S.Pd', jabatan: 'Bendahara', foto: Nur },
  { nama: 'Rukhana Zakiyatun', jabatan: 'Bendahara Sekolah', foto: Rukhana },

  { nama: 'Sri Fatmawati, S.Pd', jabatan: 'Operator Sekolah', foto: Sri },
  { nama: 'Gede Gandi Diraineni, S.Pd', jabatan: 'Staff Sarpras', foto: Gede },
  { nama: 'Nur Harini Khoirun Nisa, S.Pd', jabatan: 'Staff Kurikulum', foto: NurHarini },
  { nama: 'Hafizd Jatiwinarka, S. Pd', jabatan: 'Staff Tata Usaha ', foto: Hafidz },
  { nama: 'Nafisatut Diniyah', jabatan: 'Staff Tata Usaha', foto: Nafiastut },
  { nama: 'Farah Fadhlilatuz Zahra, S.Psi', jabatan: 'Staff Kesiswaan', foto: Farah },
  {
    nama: 'Wahid Muhammad Zukhruf, S. Pd',
    jabatan: 'Staff Kesiswaan dan Guru Agama',
    foto: Wahid,
  },

  { nama: 'Muslisin', jabatan: 'Ka.Lab TSM', foto: Musli },
  { nama: 'Mela Suniyanti', jabatan: 'Ka.Lab Tata Busana ', foto: Mela },

  {
    nama: 'Anisa Eka Aprilia Dani',
    jabatan: 'Staff Humas dan Pengelola Busines Center',
    foto: Annisa,
  },
  { nama: 'Wahyu Tri Mulyo', jabatan: 'Staff Keamanan', foto: Wahyu },

  { nama: 'Toyibi', jabatan: 'Kebersihan', foto: Toyibi },
];

const StrukturOrganisasi = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${RX3})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1
            className="font-poppins text-3xl md:text-6xl mb-4 font-bold leading-tight animate-fadeInLeft"
            style={{ animationDelay: '700ms' }}
          >
            Struktur Organisasi
          </h1>
          <p
            className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '900ms' }}
          >
            Berikut adalah daftar guru dan staf yang memiliki peran penting dalam struktur
            organisasi SMK Muhammadiyah Sumowono.
          </p>
        </div>
      </section>

      {/* Konten */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        {/* Kepala Sekolah */}
        <div className="max-w-5xl mx-auto mb-16">
          {struktur
            .filter((item) => item.jabatan.toLowerCase().includes('kepala sekolah'))
            .map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-gray-100 rounded-xl shadow-md p-6 text-center"
              >
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-48 h-64 mx-auto object-cover object-top rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900">{item.nama}</h3>
                <p className="text-gray-700">{item.jabatan}</p>
              </div>
            ))}
        </div>

        {/* Grid Jabatan Lain */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {struktur
            .filter((item) => !item.jabatan.toLowerCase().includes('kepala sekolah'))
            .map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-gray-50 shadow rounded-xl overflow-hidden text-center p-4"
              >
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-56 object-cover object-top rounded-lg mb-4"
                  style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
                />
                <h3 className="text-lg font-bold text-blue-900">{item.nama}</h3>
                <p className="text-gray-700 text-sm">{item.jabatan}</p>
              </div>
            ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default StrukturOrganisasi;
