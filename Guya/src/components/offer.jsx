import React from 'react';
import "./style.css";
import "./swiper-bundle.min.css";

import n1 from "../images/n1.png"
import n2 from "../images/n2.png"
import n3 from "../images/n3.png"
import n4 from "../images/n4.png"
import n5 from "../images/n5.png"
import n6 from "../images/n6.png"
import n7 from "../images/n7.png"
import n8 from "../images/n8.png"
import n9 from "../images/n9.png"
import n10 from "../images/n10.png"

export default function Offer() {
      return (
        <>
        <section id="popular-product">
                <div className="popular-heading">
                    <h3>Melhores Ofertas</h3>
                    <a>Todas</a>
                </div>

                <div className="popular-container">

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n1} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Hair Shampo For Heathly Hair For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n2} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Natrually Created FaceWash For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n3} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Girls Mix Blue Fake Nail's Avalibale For Buy</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n4} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Shiny Red Nail Polish For Women, Buy Now</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n5} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Bridle Eyes Lashies For Sell With 20% Discount</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n6} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Red Nail Polish For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n7} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Women Red LipStick For Sell, Buy Now</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n8} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">FaceWash For Heathly Skin For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n9} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Hair Shampo For Heathly Hair For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n8} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">FaceWash For Heathly Skin For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n1} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Hair Shampo For Heathly Hair For Women</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>

                    <div className="popular-box">
                        <a href="#" className="popular-box-img">
                            <img src={n3} />
                        </a>
                        <div className="popular-box-text">
                            <a href="#">Mix Color Nail Polish Avalibale For Sell, Buy Now</a>
                            <span className="p-category">Hair Product's</span>
                            <span className="p-price">10$ <del>15$</del></span>
                        </div>
                    </div>
                    </div>
                </section>
            </>
    )
}
