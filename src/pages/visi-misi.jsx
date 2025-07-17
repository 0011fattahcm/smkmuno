import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RX3 from '../assets/rx3.jpeg';
import { FaLightbulb, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const VisiMisi = () => {
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
            Visi, Misi & Tujuan
          </h1>
          <p
            className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '900ms' }}
          >
            Komitmen SMK Muhammadiyah Sumowono dalam membentuk generasi profesional yang
            berlandaskan syariat Islam.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24 px-6 md:px-24 min-h-[80vh]">
        <div className="max-w-6xl mx-auto space-y-20">
          <div data-aos="fade-up">
            {/* Tujuan Pendidikan - Card */}
            <div
              className="bg-blue-50 p-8 rounded-2xl shadow-md space-y-6 mb-20"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-blue-800">1. Tujuan Pendidikan</h3>
              <p className="text-gray-700">
                Tujuan Sekolah Menengah Kejuruan Muhammadiyah Sumowono adalah:
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    a. Menghasilkan manusia yang memiliki kesadaran berketuhanan yang tinggi.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    b. Menghasilkan lulusan yang kompeten di bidangnya dan siap bersaing dalam era
                    globalisasi.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaBriefcase className="text-4xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    c. Menghasilkan lulusan yang siap kerja dan mampu menciptakan lapangan kerja
                    baru.
                  </p>
                </div>
              </div>
            </div>

            {/* Visi */}
            <div
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-white shadow space-y-3 mb-20"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-blue-800">2. Visi Satuan Pendidikan</h3>
              <p className="text-gray-700">
                SMK Muhammadiyah Sumowono mempunyai visi sebagai berikut:
              </p>
              <p className="text-blue-800 font-semibold italic">
                Melahirkan Sumber Daya Manusia yang beriman, bertaqwa dan profesional di bidangnya,
                sesuai dengan syariat islam.
              </p>
            </div>

            {/* Misi */}
            <div
              className="bg-blue-50 p-8 rounded-2xl shadow-md space-y-6 mb-20"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-blue-800">3. Misi Satuan Pendidikan</h3>
              <p className="text-gray-700">
                SMK Muhammadiyah Sumowono selalu berkomitmen untuk memberikan pelayanan yang optimal
                dalam layanan pendidikan Program Keahlian Teknik Otomotif dan Tata Busana kepada
                peserta didik. Sehubungan dengan hal tersebut misi yang dicanangkan sebagai berikut:
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white rounded-xl shadow p-4">
                  <p className="text-sm text-gray-700">a. Membentuk kepribadian yang unggul</p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                  <p className="text-sm text-gray-700">
                    b. Menyiapkan Sumber Daya Manusia yang kompeten dan menguasai teknologi
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                  <p className="text-sm text-gray-700">
                    c. Meningkatkan mutu sekolah menuju sekolah mandiri
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                  <p className="text-sm text-gray-700">
                    d. Menyiapkan dan mendidik wirausahawan tangguh dan bermoral sesuai syariat
                    islam
                  </p>
                </div>
              </div>
            </div>

            {/* Tujuan Satuan Pendidikan */}
            <div
              className="bg-blue-50 p-8 rounded-2xl shadow-md space-y-6 mb-20"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-blue-800">4. Tujuan Satuan Pendidikan</h3>
              <p className="text-gray-700">
                Tujuan Sekolah Menengah Kejuruan Muhammadiyah Sumowono adalah:
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    a. Menghasilkan manusia yang memiliki kesadaran berketuhanan yang tinggi.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    b. Menghasilkan lulusan yang kompeten di bidangnya dan siap bersaing dalam era
                    globalisasi.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 text-center">
                  <FaBriefcase className="text-4xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-700">
                    c. Menghasilkan lulusan yang siap kerja dan mampu menciptakan lapangan kerja
                    baru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VisiMisi;
