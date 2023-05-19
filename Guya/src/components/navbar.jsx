import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./style.css";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <section>
      <div className="nav-top-bar2">
        <span>INVERNO DE GUYA confira nossa seleção</span>
      </div>
      <nav className="navigation">
        <a href={"home"} className="logo">
          <img src={logo} />
        </a>
        <ul className="menu">
          <li>
            <a href={"home"}>Inicio</a>
          </li>
          <li>
            <a href={"pglancamento"}>Lancamento</a>
          </li>
          <li>
            <a href={"pgOffer"}>Ofertas</a>
          </li>
          <li>
            <a href={"Faq"}>Perguntas</a>
          </li>
          <li>
            <a href={"#"}>Sobre nós</a>
          </li>
        </ul>
        <div className="nav-btns">
          <div className="nav-search-box">
            <input type="text" placeholder="Pesquisar" required />
          </div>
          <a href="#" className="nav-search">
            <FaSearch />
          </a>

          <div className="nav-user">
            <FaUserAlt className="nav-user-dropdown" />
            <div className="nav-user-dropdown-content">
              <a href="#">Meus Pedidos</a>
              <a href={"login"}>Entrar</a>
              <a href={"cadusuario"}>Registrar</a>
              <a href={"admlogin"}>Admin</a>
              <a href={"home"}>Sair</a>
            </div>
          </div>

          <a href="#" className="nav-cart">
            <FaShoppingCart />
            <span>0</span>
          </a>
        </div>
      </nav>
    </section>
  );
}

