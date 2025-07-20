import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollTop';
import Home from '../pages/home';
import Tentang from '../pages/tentang';
import VisiMisi from '../pages/visi-misi';
import TeknikSepedaMotor from '../pages/tsm';
import DesainProduksiBusana from '../pages/dpb';
import Ekstrakurikuler from '../pages/ekstrakurikuler';
import Kontak from '../pages/kontak';
import Galeri from '../pages/galeri';
import StrukturOrganisasi from '../pages/struktur-organisasi';
import Guru from '../pages/guru';
import PPDB from '../pages/ppdb';

const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/visi-misi" element={<VisiMisi />} />
      <Route path="/tsm" element={<TeknikSepedaMotor />} />
      <Route path="/dpb" element={<DesainProduksiBusana />} />
      <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
      <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/guru" element={<Guru />} />
      <Route path="/ppdb" element={<PPDB />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
