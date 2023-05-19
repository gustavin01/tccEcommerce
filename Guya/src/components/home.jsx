import s1 from "../images/s1.jpg"
import s2 from "../images/s2.jpg"
import s3 from "../images/s3.jpg"
import h1 from "../images/h1.jpg"

import "./style.css";
import "./swiper-bundle.min.css";
import Footer from "./footer";
import Banner from "./banner"

import React, { Component } from 'react';
import ProdutoFilter from "./produtoFilter"
import Testimonials from "./testimonials"
import ProdAirf from "./produtodetalhes/prodairf"
import ProdDesc from "./produtodetalhes/proddesc"
import ProdAch22 from "./produtodetalhes/prodachi22"
import Navbar from "./navbar";
import Offer from "./offer";



export default function Home(){
    return(
        <><Navbar /><>
        <section id="main">
            <Banner />
        </section>
        
        <section className="product-grid-3">
                <div className="product-grid-box product-grid-box1">
                    <img src={s1} />
                    <div className="product-grid-text">
                        <strong>Air Force 1 Mid x Off-White™</strong>
                        <span>Coleção Nike</span>
                        <a href={"ProdAirf"}>Comprar Agora</a>
                    </div>
                </div>

                <div className="product-grid-box product-grid-box2">
                <img src={s2} />
                    <div className="product-grid-text">
                        <strong>Chuteira Nike Mercurial Zoom Vapor 15 Elite Campo</strong>
                        <span>Coleção Nike</span>
                        <a href={"ProdDesc"}>Comprar Agora</a>
                    </div>
                </div>

                <div className="product-grid-box product-grid-box3">
                <img src={s3} />
                    <div className="product-grid-text">
                        <strong>CHINELO ADILETTE 22</strong>
                        <br></br><br></br>
                        <span>Coleção Adidas</span>
                        <a href={"ProdAch22"}>Comprar Agora</a>
                    </div>
                </div>   
            </section>
            
            <ProdutoFilter />

            <section className="product-grid-half">
                <div className="product-grid-box product-grid-box4">
                <img src={h1} />
                    <div className="product-grid-text">
                        <strong>Exclusivo Nike: Guya</strong>
                        <span>Coleção Nike</span>
                        <a href={"ProdDesc"}>Comprar Agora</a>
                    </div>
                </div>

                <div className="product-grid-box product-grid-box1">
                <img src={s1} />
                    <div className="product-grid-text">
                        <strong>Air Force 1 Mid x Off-White™</strong>
                        <span>Coleção Nike</span>
                        <a href={"ProdAirf"}>Comprar Agora</a>
                    </div>
                </div>

                <div className="product-grid-box product-grid-box3">
                    <img src={s3} />
                    <div className="product-grid-text">
                        <strong>CHINELO ADILETTE 22</strong>
                        <span>Coleção Adidas</span>
                        <a href={"ProdAch22"}>Comprar Agora</a>
                    </div>
                </div>
            </section>

            <Offer />
        </>
            <Testimonials />
            
            <Footer />
        </>
        )
    }