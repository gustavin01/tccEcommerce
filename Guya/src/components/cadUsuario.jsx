import logo from "../images/logo.png"
import "./login.css"
import { FaArrowRight } from 'react-icons/fa';
import Navbar from "./navbar";

export default function CadUsuario(){
    return(
      <><Navbar/>
        <main>
        <section className="login">
          <div className="wrapper">
            <img src={logo} className="login__logo"/>
  
            <h1 className="login__title">Fazer cadastro</h1>
  
            <label className="login__label">
              <span>nome de usuário</span>
              <input type="text" name="username" className="input"/>
            </label>

            <label className="login__label">
              <span>Email</span>
              <input type="text" name="email" className="input"/>
            </label>

            <label className="login__label">
              <span>Telefone</span>
              <input type="text" name="telefone" className="input"/>
            </label>
      
            <label className="login__label">
              <span>Senha</span>
              <input type="password" name="password" className="input"/>
            </label>

            <label className="login__label">
              <span>Reptir senha</span>
              <input type="password" name="password2" className="input"/>
            </label>

            <button type="button" className="login__button" disabled>
            <FaArrowRight/>
            </button>
  
            <a href={"login"} className="login__link">Ja tem uma conta? fazer login</a>
          </div>
          
          </section>
          <section className="wallpaper"/>
            
        </main>
      </>
    )
}