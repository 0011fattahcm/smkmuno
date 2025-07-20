import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '../layouts/MainLayout';
import RX3 from '../assets/Sampul.jpg'; // Gambar hero

// Import foto guru dari folder /assets/guru/
import Siti from '../assets/guru/Siti maesaroh, S.Pd.svg';
import Titik from '../assets/guru/Titik.svg';
import Samsul from '../assets/guru/M. Samsul Nizar, S.Pd.svg';
import Ika from '../assets/guru/Ika Khusnul Khotimah, S.Pd.svg';
import Miftah from '../assets/guru/Miftakhudin, S.Pd.svg';
import Sri from '../assets/guru/Sri Fatmawati, S.Pd.webp';
import Agus from '../assets/guru/Agus Setiyono, S.Pd.svg';
import Ani from '../assets/guru/Ani Ika Tasfiriah, S.Pd.svg';
import NurAna from '../assets/guru/Nur Ana, S.Pd.svg';
import Komi from '../assets/guru/Komiyati, S.pd.webp';
import Laila from '../assets/guru/Laila Nurul Fatimah, S.Psi.svg';
import Kiky from '../assets/guru/Kiky Verantiana, A.Md.svg';
import Gede from '../assets/guru/Gede Gandi Diraineni, S.Pd.svg';
import Muslisin from '../assets/guru/Muslisin.svg';
import Achmad from '../assets/guru/Achmad Ginanjar, S.Pd.svg';
import Nur from '../assets/guru/Nur Harini Khoirun Nisa, S.Pd.webp';
import Arif from '../assets/guru/Arif Gusmawan.webp';
import Wahid from '../assets/guru/Wahid Muhammad Zukhruf, S.Pd.webp';
import Yusab from '../assets/guru/Yusab Sukoco, SPdI.JPG';
import Farah from '../assets/guru/Farah Fadhlilatuz Zahra, S.Psi.webp';
import Aji from '../assets/guru/Aji Ayu Lestari, S.Pd.webp';
import Cahyo from '../assets/guru/Cahyo Dwi Prastyo, S.T.webp';

const guruList = [
  { nama: 'Siti Maesaroh, S.Pd', mapel: 'Bahasa Inggris', foto: Siti },
  { nama: 'Miftakhudin, S.Pd', mapel: 'Bahasa Indonesia', foto: Miftah },
  { nama: 'Sri Fatmawati, S.Pd', mapel: 'Bahasa Jawa', foto: Sri },

  { nama: 'Nur Harini Khoirun Nisa, S.Pd', mapel: 'Matematika', foto: Nur },
  { nama: 'Ika Khusnul Khotimah, S.Pd', mapel: 'Matematika', foto: Ika },

  { nama: 'Titik Sri Mulyani, S.Pd', mapel: 'Sejarah', foto: Titik },
  { nama: 'M. Samsul Nizar, S.Pd', mapel: 'IPAS', foto: Samsul },
  { nama: 'Agus Setiyono, S.Pd', mapel: 'Penjas / Olahraga', foto: Agus },
  { nama: 'Ani Ika T, S.Pd', mapel: 'Pendidikan Pancasila', foto: Ani },

  { nama: 'Nur Ana, S.Pd', mapel: 'Produktif Tata Busana', foto: NurAna },
  { nama: 'Komiyati, Spd', mapel: 'Produktif Tata Busana', foto: Komi },
  { nama: 'Kiky Verantiana, A.Md', mapel: 'Produktif Tata Busana', foto: Kiky },
  { nama: 'Gede Gandhi D, S.Pd', mapel: 'Produktif Tata Busana', foto: Gede },

  { nama: 'Cahyo Dwi Prastyo, S.T', mapel: 'Produktif TSM', foto: Cahyo },
  { nama: 'Achmad Ginanjar, S.Pd', mapel: 'Produktif TSM', foto: Achmad },
  { nama: 'Muslisin', mapel: 'Asisten Guru Produktif TSM', foto: Muslisin },
  { nama: 'Arif Gusmawan', mapel: 'Asisten Guru Produktif TSM', foto: Arif },

  { nama: 'Laila Nurul Fatimah, S.Psi', mapel: 'BK', foto: Laila },
  { nama: 'Farah Fadhlilatuz Zahra, S.Psi', mapel: 'BK', foto: Farah },

  { nama: 'Wahid Muhammad Zukhruf, S. Pd', mapel: 'Bahasa Arab', foto: Wahid },
  { nama: 'Yusab Sukoco, S.Pd.I', mapel: 'PAI', foto: Yusab },
  { nama: 'Aji Ayu Lestari, S.Pd', mapel: 'PAI', foto: Aji },
];

const Guru = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero */}
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
            Guru
          </h1>
          <p
            className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '900ms' }}
          >
            Berikut adalah daftar guru beserta mata pelajaran yang diampu di SMK Muhammadiyah
            Sumowono.
          </p>
        </div>
      </section>

      {/* Grid Guru */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {guruList.map((guru, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white shadow-md rounded-xl overflow-hidden text-center p-4 border hover:shadow-lg transition"
            >
              <img
                src={guru.foto}
                alt={guru.nama}
                className="w-full h-56 object-cover object-top rounded-lg mb-4"
              />
              <h3 className="text-blue-900 font-semibold text-lg">{guru.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">{guru.mapel}</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Guru;
