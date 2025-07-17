import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroBg from '../assets/dpb1.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

const Kontak = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  const kontakInfo = [
    {
      icon: <FaPhoneAlt className="text-blue-600 text-3xl mb-2" />,
      title: 'Telepon',
      detail: '(0298) 713567',
    },
    {
      icon: <FaEnvelope className="text-red-500 text-3xl mb-2" />,
      title: 'Email',
      detail: 'smkmoe.bisa@yahoo.co.id',
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-3xl mb-2" />,
      title: 'Whatsapp',
      detail: '+62 815-7516-1608',
    },
    {
      icon: <FaInstagram className="text-pink-600 text-3xl mb-2" />,
      title: 'Instagram',
      detail: '@smkmuno',
    },
    {
      icon: <FaTiktok className="text-black text-3xl mb-2" />,
      title: 'TikTok',
      detail: '@smkmuno',
    },
    {
      icon: <FaYoutube className="text-red-600 text-3xl mb-2" />,
      title: 'YouTube',
      detail: 'SMK Muno',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-6xl font-bold animate-fadeInLeft">Kontak Kami</h1>
          <p className="text-sm md:text-lg text-gray-200 mt-4 animate-fadeInUp">
            Hubungi SMK Muhammadiyah Sumowono melalui informasi berikut
          </p>
        </div>
      </section>

      {/* Kontak Card */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {kontakInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {item.icon}
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-700 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Alamat */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <FaMapMarkerAlt className="text-blue-800 text-4xl mx-auto mb-2" />
            <h4 className="text-xl font-bold text-blue-900">Alamat Sekolah</h4>
            <p className="text-gray-700 mt-2 text-sm">
              Jl. KH Ahmad Dahlan No.8–9, Kecamatan Sumowono, Kabupaten Semarang, Jawa Tengah
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-24 px-4 md:px-12 lg:px-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Lokasi SMK Muhammadiyah Sumowono"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.096228066278!2d110.31694307454543!3d-7.229864370999459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707ddea3e01d8f%3A0x1e715cf0caf0389c!2sSMK%20Muhammadiyah%20Sumowono!5e0!3m2!1sid!2sid!4v1752745769897!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </MainLayout>
  );
};

export default Kontak;
