import logo from "../images/logo.png"
import "./login.css"
import { FaArrowRight } from 'react-icons/fa';
import Navbar from "./navbar";

export default function Login(){
    return(
      <><Navbar/>
        <main>
        <section className="login">
          <div className="wrapper">
            <img src={logo} className="login__logo"/>
  
            <h1 className="login__title">Fazer login</h1>
  
            <label className="login__label">
              <span>nome de usuário</span>
              <input type="text" name="username" className="input"/>
            </label>
      
            <label className="login__label">
              <span>senha</span>
              <input type="password" name="password" className="input"/>
            </label>
      
            <label className="login__label--checkbox">
              <input type="checkbox" className="input--checkbox"/>
              Manter login
            </label>

            <button type="button" className="login__button" disabled>
            <FaArrowRight/>
            </button>
  
            <a href={"cadusuario"} className="login__link">Não tem conta? criar conta</a>
          </div>
          
          </section>
          <section className="wallpaper"/>
            
        </main>
      </>
    )
}