import "./faqs.css";
import faq from "../images/faq-img.jpg";
import "./swiper-bundle.min.css";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";

export default function Faq(){
    return(
        <><Navbar/>
        <section id="faq">
        <div className="faq-heading">
            <h3>FAQ</h3>
                <p>Improved <strong>conversion rates</strong>, included <strong>copy-writer</strong> and <strong>beautiful designs
                   <br/> — just a few things our clients love!</strong></p>
        </div>

        <div className="faq-content">
            <div className="faq-box-container">
    
                <div className="faq-box">
                    <div className="faq-box-question active">
                            <h4>What is a “Credit”</h4>
                            <span className="faq-box-icon"></span>
                    </div>
                    <div className="faq-box-answer" >
                        <p>Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>
                    </div>
                </div>
    
                <div className="faq-box">
                    <div className="faq-box-question">
                            <h4>What does “Web Development” mean?</h4>
                            <span className="faq-box-icon"></span>
                    </div>
                    <div className="faq-box-answer">
                        <p>Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>
                    </div>
                </div>
    
                <div className="faq-box">
                    <div className="faq-box-question">
                            <h4>What is a “User”?</h4>
                            <span className="faq-box-icon"></span>
                    </div>
                    <div className="faq-box-answer">
                        <p>Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>
                    </div>
                </div>
    
    
                <div className="faq-box">
                    <div className="faq-box-question">
                            <h4>Do I have to connect ad accounts to use Website?</h4>
                            <span className="faq-box-icon"></span>
                    </div>
                    <div className="faq-box-answer">
                        <p>Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>
                    </div>
                </div>
    
                <div className="faq-box">
                    <div className="faq-box-question">
                            <h4>What do you mean by frontend?</h4>
                            <span className="faq-box-icon"></span>
                    </div>
                    <div className="faq-box-answer">
                        <p>Each creative/banner you download to your computer to use on your campaigns equals to 1 credit. Based on the package you select, you will have 10, 100 or an unlimited number of credits that renews every month.</p>
                    </div>
                </div>
            
            </div>

            <div className="faq-img">
                <img src={faq} />
            </div>

        </div>
    
    </section>
    <Helmet>
        <script>{`
                    var faq = document.getElementsByClassName("faq-box-question");
                    var i;
                    for (i = 0; i < faq.length; i++) {
                        faq[i].addEventListener("click", function () {
                            /* Toggle between adding and removing the "active" class,
                            to highlight the button that controls the panel */
                            this.classList.toggle("active");
                            /* Toggle between hiding and showing the active panel */
                            var body = this.nextElementSibling;
                            if (body.style.maxHeight === "100px") {
                                body.style.maxHeight = "0px";
                            } else {
                                body.style.maxHeight = "100px";
                            }
                        });
                    }
        `}</script>
    </Helmet>

    <Footer />
    </>
    )
}