import { Helmet } from "react-helmet";
import merc1 from "../imgproduto/merc1.jpg"
import merc2 from "../imgproduto/merc2.jpg"
import merc3 from "../imgproduto/merc3.jpg"
import merc4 from "../imgproduto/merc4.jpg"
import merc5 from "../imgproduto/merc5.jpg"
import merc6 from "../imgproduto/merc6.jpg"
import merc7 from "../imgproduto/merc7.jpg"

import "./produto.css";
import Footer from "../footer";
import Testimonials from "../testimonials";
import Home from "../home";
import Navbar from "../navbar";

export default function ProdDesc() {
  return (
    <><Navbar/>
          <div class="product-page-container">
<span class="link-route">
  <a href={"Home"}>Home</a> {'>'} <a href="#">Mercurial Zoom</a>
</span>
<section id="product-page">
    <div class="product-page-img">
        <div class="product">
            <div>
                <div>
                    <img src={merc1} alt="Product image" js-selector="image-container" />
                </div>
            </div>
                <div>
                    <button class="btnt active" js-class="image-button">
                        <img src={merc1} alt="Product Image" />
                    </button>
                    <button class="btnt inactive" js-class="image-button">
                        <img src={merc2} alt="Product Image" />
                    </button>
                    <button class="btnt inactive" js-class="image-button">
                        <img src={merc3} alt="Product Image" />
                    </button>
                </div>
            </div>
    </div>
    <div class="product-page-details">
        <strong>Chuteira Nike Mercurial Zoom Vapor 15 Elite Campo</strong>
        <span class="product-category">
            Nike - Casual
        </span>
        <span class="price">R$ 890,00 <del>R$ 1590,00</del></span>
        <p class="small-desc">Cristiano Ronaldo não alcançou seu sonho sozinho. Treinadores, familiares e modelos o ajudaram a se tornar a estrela que ele é hoje. Celebre quem o motivou e deixe as inspirações saberem que são amadas. Com características técnicas avançadas, você poderá dominar nos momentos decisivos.</p>

        <p>Modelos: <del>unico</del></p>

        <>
        <h7>Tamanho: <a href="#">39</a> <a href="#">40</a> <del><a href="#">41</a></del> <a href="#">42</a> <a href="#">43</a> <del><a href="#">44</a></del> <a href="#">45</a></h7>
        </>

        <div class="cart-btns">
            <a href="#" class="add-cart buy-now">Comprar Agora</a>
            <a href="#" class="add-cart">Carrinho</a>
        </div>
        <div class="price-shipping">
            <strong>R$ <del>149,90</del> por 00,00 <br/><span>Corra enquanto da tempo</span> </strong>
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
        <h7>Mostre Seu Amor</h7>
        <p>As flores são um símbolo de onde tudo começou e da jornada percorrida desde então. São uma forma de homenagear aqueles que o influenciaram e ajudaram, de reconhecer aqueles que compartilham seu fogo competitivo. Tons digitais em camadas com mudança de cores e tons metálicos adicionam profundidade a um gráfico de flor distorcido.</p>
        <br/>
        <h7>Sensação Flexível Embaixo do Pé</h7>
        <p>A unidade Zoom Air em 3/4 do comprimento fica em cima da placa e proporciona um nível adicional de sensação de flexibilidade embaixo do pé que te ajuda a se movimentar mais rápido em campo. Ela cria separação quando mais importa - quer esteja marcando gols, sendo o primeiro a chegar na bola ou passando pela defesa.</p>
        <br/>
        <h7>Mergulhe, Decole</h7>
        <p>Travas com estrela de três pontas proporcionam tração multidirecional a cada passo para que você possa mudar de direção rapidamente e com confiança. As travas no calcanhar proporcionam tração e estabilidade na frenagem. Travas centrais proporcionam tração durante partidas explosivas.</p>
        <br/>
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