import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Banner from './components/banner';
import Faq from './components/faqs';
import ProdutoFilter from './components/produtoFilter';
import Testimonials from './components/testimonials';
import Offer from './components/pgOffer';
import ProdAirf from './components/produtodetalhes/prodairf';
import Teste from './components/teste';
import ProdDesc from './components/produtodetalhes/proddesc';
import ProdAch22 from './components/produtodetalhes/prodachi22';
import CadUsuario from './components/cadUsuario';
import AdmLogin from './components/admin/admLogin';
import BarAdmin from './components/admin/barAdmin';
import HomeAdm from './components/admin/homeAdm';
import AdmProduto from './components/admin/admProduto';
import AdmCliente from './components/admin/admCliente';
import PgAdmProduto from './components/admin/pgAdmProduto';
import BarLateral from './components/admin/barLateral';
import PgAdmCliente from './components/admin/pgadmcliente';
import PgOffer from './components/pgOffer';
import PgLancamento from './components/pgLancamento';
import PgCadProdAdm from './components/admin/pgCadProdAdm';
import PgCadClienAdm from './components/admin/pgCadClienAdm';


function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route exact path="/banner" element={<Banner />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/prodfilter" element={<ProdutoFilter />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            <Route exact path="/offer" element={<Offer />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/navbar" element={<Navbar />} />
            <Route exact path="/teste" element={<Teste />} />
            <Route exact path="/prodairf" element={<ProdAirf />} />
            <Route exact path="/proddesc" element={<ProdDesc />} />
            <Route exact path="/prodach22" element={<ProdAch22 />} />
            <Route exact path="/cadusuario" element={<CadUsuario />} />
            <Route exact path="/admlogin" element={<AdmLogin />} />
            <Route exact path="/baradm" element={<BarAdmin />} />
            <Route exact path="/homeadm" element={<HomeAdm />} />
            <Route exact path="/pgOffer" element={<PgOffer />} />
            <Route exact path="/offer" element={<Offer />} />
            <Route exact path="/admproduto" element={<AdmProduto />} />
            <Route exact path="/admcliente" element={<AdmCliente />} />
            <Route exact path="/pgadmproduto" element={<PgAdmProduto />} />
            <Route exact path="/pgadmcliente" element={<PgAdmCliente />} />
            <Route exact path="/barlateral" element={<BarLateral />} />
            <Route exact path="/pglancamento" element={<PgLancamento />} />
            <Route exact path="/pgcadprodadm" element={<PgCadProdAdm />} />
            <Route exact path="/pgcadclienadm" element={<PgCadClienAdm />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
