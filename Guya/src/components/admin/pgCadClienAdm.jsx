import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCheckSquare} from 'react-icons/fa'
import '../style.css'
import {MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import BarAdmin from "./barAdmin";
import Footer from "../footer";
import BarLateral from './barLateral';


export default function PgCadClienAdm() {
    return (
    <><BarAdmin/>
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
            
            <br/>
                <hr />
            <br/>
            <MDBInputGroup textBefore='Nome & Usuario'>
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
            </MDBInputGroup>
            <br/>
            <MDBInputGroup textBefore='Cpf'>
                <textarea className='form-control' />
            </MDBInputGroup>
            <br/>
            <MDBInputGroup textBefore='Email & Senha'>
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
            </MDBInputGroup>
            <br/>
            <MDBInputGroup className='mb-3' size='sm' textBefore='Reptir-Senha'>
                <input className='form-control' type='text' />
            </MDBInputGroup>
            <br/>
            <MDBInputGroup className='mb-3' size='sm' textBefore='Telefone'>
                <input className='form-control' type='text' />
            </MDBInputGroup>
            <br/>
            <MDBInputGroup textBefore='Endereço'>
                <textarea className='form-control' />
            </MDBInputGroup>
            <br/>
            <button className="btn btn-warning">Cadastrar</button>
            <br/><br/>

      </div>
    </div>
    <Footer/>
    </>
    
  );
}

