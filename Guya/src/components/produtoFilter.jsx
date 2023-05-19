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

import "./style.css";
import "./swiper-bundle.min.css";
import { Helmet } from "react-helmet";

export default function ProdutoFilter(){
    return(

            <section id="new_products">
                <div className="new-p-heading">
            <h3>Novos Produtos</h3>
            <ul>
                <li className="filter-list active" data-filter="all">Todos</li>
                <li className="filter-list" data-filter="nike">Nike</li>
                <li className="filter-list" data-filter="adidas">Adidas</li>
                <li className="filter-list" data-filter="puma">Puma</li>
            </ul>
        </div>

        <div className="new-product-container">
            <div className="new-product-box-wrapper nike">
                <div className="new-product-box">
                    <a href="#" className="new-product-img">
                        <span>Nike</span>
                        <img src={n1} />
                    </a>
                    <div className="new-product-text">
                        <a href="#" className="new-product-title">Chuteira Nike Mercurial Zoom Vapor 15 Elite Campo</a>
                        <span>R$ 890,00</span>
                        <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                    </div>
                </div>
            </div>

            <div className="new-product-box-wrapper adidas">
                <div className="new-product-box">
                    <a href="#" className="new-product-img">
                        <img src={n2} />
                        <span>Adidas</span>
                    </a>
                    <div className="new-product-text">
                        <a href="#" className="new-product-title">TÊNIS ADIZERO ADIOS PRO 3.0</a>
                        <span>R$ 1250,00</span>
                        <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                    </div>
                </div>
            </div>

                <div className="new-product-box-wrapper adidas">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <img src={n3} />
                            <span>Adidas</span>
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">TÊNIS CAMPUS YOUTH OF PARIS</a>
                            <span>R$ 1090,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper adidas">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <img src={n4} />
                            <span>Adidas</span>
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">TÊNIS FORUM BOLD X ANDRÉ SARAIVA</a>
                            <span>R$ 2100,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper puma">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <img src={n5} />
                            <span>Puma</span>
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">TÊNIS CAMPUS 00S</a>
                            <span>R$ 1560,00</span>
                            <a href="#" className="new-p-cart-btn">Acionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper nike">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <span>Nike</span>
                            <img src={n6} />
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">Tênis Air Jordan 1 Elevate High Feminino</a>
                            <span>R$ 1980,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper adidas">
                    <div className="new-product-box">
                        <a className="product_page.html" class="new-product-img">
                            <span>Adidas</span>
                            <img src={n7} />
                        </a>
                        <div className="new-product-text">
                            <a href="product_page.html" className="new-product-title">TÊNIS FORUM 84 HIGH</a>
                            <span>R$ 4710,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper puma">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <span>Puma</span>
                            <img src={n8} />
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">TÊNIS FAST-FWD NITRO ELITE RUN 75 MASCULINO</a>
                            <span>R$ 3800,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper puma">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <span>Puma</span>
                            <img src={n9} />
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">TÊNIS DISC BLAZE SNAKE</a>
                            <span>R$ 2400,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

                <div className="new-product-box-wrapper adidas">
                    <div className="new-product-box">
                        <a href="#" className="new-product-img">
                            <span>Adidas</span>
                            <img src={n10} />
                        </a>
                        <div className="new-product-text">
                            <a href="#" className="new-product-title">CHUTEIRA X SPEEDPORTAL.3 FUTSAL</a>
                            <span>R$ 2909,00</span>
                            <a href="#" className="new-p-cart-btn">Adcionar ao Carrinho</a>
                        </div>
                    </div>
                </div>

            </div>

            <Helmet>
         <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
            <script>
                {`
                var selector = '.new-p-heading li';

                $(selector).on('click', function(){
                    $(selector).removeClass('active');
                    $(this).addClass('active');
                });

                $(document).ready(function(){
                    $('.filter-list').click(function(){
                    const value = $(this).attr('data-filter');
                    if(value == 'all'){
                        $('.new-product-box-wrapper').show('1000');
                    }
                    else{
                        $('.new-product-box-wrapper').not('.'+value).hide('1000');
                        $('.new-product-box-wrapper').filter('.'+value).show('1000');
                    }
                    });
                });
                `}
            </script>
        </Helmet>

    </section>
    )
}