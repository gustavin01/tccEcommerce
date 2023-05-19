import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCheckSquare} from 'react-icons/fa'
import '../style.css'
import BarAdmin from "./barAdmin";
import Footer from "../footer";
import BarLateral from './barLateral';
import AdmCliente from './admCliente';


export default function PgAdmCliente() {
    return (
    <><BarAdmin/><></>
    <div className='d-flex home'>
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
                <BarLateral />
            </ul>

        </div>
        <div className='content container mt-2'>
            <div className='row'>
                    <div className='col-md-3 text-white col bg-info d-flex 
                        justify-content-around px-1 py-3 rounded'>
                            <a href={"pgadmproduto"}><span>Total Produtos</span><FaCartArrowDown/></a>
                    </div>
                    <div className='col-md-3 text-white col bg-info d-flex 
                        justify-content-around px-1 py-3 rounded'>
                        <a href={"pgadmcliente"}><span>Total Clientes</span><FaCartArrowDown/></a>
                    </div>
                    <div className='col-md-3 text-white col bg-warning d-flex 
                        justify-content-around px-1 py-3 rounded'>
                        <a href={"pgcadprodadm"}><span>Add Produtos</span><FaCartArrowDown/></a>
                    </div>
                    <div className='col-md-3 text-white col bg-warning d-flex 
                        justify-content-around px-1 py-3 rounded'>
                        <a href={"pgcadclienadm"}><span>Add Clientes</span><FaCartArrowDown/></a>
                    </div>
                </div>
            
            
            <div className="d-flex justify-content-between mt-1">
                <h2>Clientes</h2>
                <button className="btn btn-warning">
                    <a href={"pgcadclienadm"}>
                        Add+
                    </a>
                </button>
                
            </div>
            <AdmCliente />

        </div>
    </div>
    <Footer/>
    </>
    
  );
}

