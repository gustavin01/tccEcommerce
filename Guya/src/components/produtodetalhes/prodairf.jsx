import { Helmet } from "react-helmet";
import airf1 from "../imgproduto/airf1.jpg"
import airf2 from "../imgproduto/airf2.jpg"
import airf3 from "../imgproduto/airf3.jpg"
import airf4 from "../imgproduto/airf4.jpg"
import airf5 from "../imgproduto/airf5.jpg"
import "./produto.css";
import Footer from "../footer";
import Testimonials from "../testimonials";
import Home from "../home";
import Navbar from "../navbar";

export default function ProdAirf() {
  return (
    <><Navbar/>
          <div class="product-page-container">
<span class="link-route">
  <a href={"Home"}>Home</a> {'>'} <a href="#">Air Force 1</a>
</span>
<section id="product-page">
    <div class="product-page-img">
        <div class="product">
            <div>
                <div>
                    <img src={airf1} alt="Product image" js-selector="image-container" />
                </div>
            </div>
                <div>
                    <button class="btnt active" js-class="image-button">
                        <img src={airf1} alt="Product Image" />
                    </button>
                    <button class="btnt inactive" js-class="image-button">
                        <img src={airf2} alt="Product Image" />
                    </button>
                    <button class="btnt inactive" js-class="image-button">
                        <img src={airf3} alt="Product Image" />
                    </button>
                </div>
            </div>
    </div>
    <div class="product-page-details">
        <strong>Chuteira Nike Mercurial Zoom Vapor 15 Elite Campo</strong>
        <span class="product-category">
            Nike - Esporte
        </span>
        <span class="price">R$ 1990,00</span>
        <p class="small-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, labore minima laborum atque blanditiis porro quos est velit quo maiores? Corporis minus quia provident vel obcaecati natus rerum iure impedit!</p>
        
        <div class="cart-btns">
            <a href="#" class="add-cart buy-now">Comprar Agora</a>
            <a href="#" class="add-cart">Carrinho</a>
        </div>
    </div>
</section>

<section class="product-all-info">
    <ul class="product-info-menu">
        <li class="p-info-list active" data-filter="heighlights">Galeria</li>
        <li class="p-info-list" data-filter="materials">Descrição</li>
        <li class="p-info-list" data-filter="howuse">Materials</li>
    </ul>
    <div class="info-container heighlights active">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit quas maiores cum. Itaque voluptas odit ipsam blanditiis! Ducimus nemo velit fuga facere, voluptatibus vero quia qui eum praesentium inventore!</p>
    </div>
    <div class="info-container materials">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit quas maiores cum. Itaque voluptas odit ipsam blanditiis! Ducimus nemo velit fuga facere, voluptatibus vero quia qui eum praesentium inventore!</p>
    </div>
    <div class="info-container howuse">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit quas maiores cum. Itaque voluptas odit ipsam blanditiis! Ducimus nemo velit fuga facere, voluptatibus vero quia qui eum praesentium inventore!</p>
    </div>
    </section>

    </div>
<Testimonials />

<Footer />

    <Helmet>
            <script type="text/javascript">
              {`
                //only one color select
                $(document).ready(function(){
                    $('input:checkbox').click(function(){
                        $('input:checkbox').not(this).prop('checked', false);
                    });
                });
                //product info menu
                $(document).on('click','.product-info-menu li', function(){
                    $(this).addClass('active').siblings().removeClass('active')
                });
                //product-info-filter
                $(document).ready(function(){
                    $('.p-info-list').click(function(){
                        const value = $(this).attr('data-filter');
                        if(value == 'all'){
                            $('.info-container').filter('.'+value).show('1000');
                        }
                        else{
                            $('.info-container').not('.'+value).hide('1000');
                            $('.info-container').filter('.'+value).show('1000');
                        }
                    });
                });
              `}
            </script>
    </Helmet>

    <Helmet>
            <script>
              {`
                (() => {
                  var buttonImages = Array.from(document.querySelectorAll('[js-class="image-button"]'));
                  var imageContainer = document.querySelector('[js-selector="image-container"]');
                  buttonImages.forEach(item => {
                    item.onclick = () => {
                      if(item.className.includes('inactive')) {
                        var active = document.querySelector('.active');
                        active.className = "btnt inactive";
                        item.className = item.className.replace('inactive', 'active');
                        imageContainer.src = item.querySelector('img').src;
                      }
                    }
                  })
                })()
              `}
            </script>
    </Helmet>
    </>
  )
}