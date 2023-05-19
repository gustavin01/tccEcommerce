import React, { useState } from "react";

export default function BarAdmin() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="collapse navbar-collapse justify-content-md-center" id='navbarm'>
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
            </div>
      </nav>
  </>
  );
}

