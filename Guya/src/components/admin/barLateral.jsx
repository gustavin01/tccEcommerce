import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCheckSquare} from 'react-icons/fa'

export default function BarLateral() {
    return (
        <>
                <li className='nav-item '>                    
                    <a href={"homeadm"} className='nav-link text-white'>
                        <FaSafari/> <span className='ms-1'>Pagina Inicial</span>
                    </a>
                </li>
                
                <li className='nav-item '>                    
                    <a href={"pgcadprodadm"} className='nav-link text-white'>
                        <FaCartArrowDown/> <span className='ms-1'>Add Produtos</span>
                    </a>
                </li>

                <li className='nav-item '>                    
                    <a href={"pgcadclienadm"} className='nav-link text-white'>
                        <FaUserAlt/> <span className='ms-1'>Add Clientes</span>
                    </a>
                </li>

                <li className='nav-item '>                    
                    <a href={"pgadmproduto"} className='nav-link text-white'>
                        <FaTasks/> <span className='ms-1'>Ver Produto</span>
                    </a>
                </li>

                <li className='nav-item '>                    
                    <a href={"pgadmcliente"} className='nav-link text-white'>
                        <FaTasks/> <span className='ms-1'>Ver Cliente</span>
                    </a>
                </li>
        </>
    )
}