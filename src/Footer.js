import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">

                <a href="#top">Back to top</a>

            </div>

            <div className="footer__middle">
                <div className="footer__middleCol">
                    <div className="footer_middleCol_title">Get to know Us</div>
                    <ul>
                        <li className="nav_a"><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About Us </a></li>
                        <li className="nav_a"><a href="https://amazon.jobs">Careers</a> </li>
                        <li className="nav_a"><a href="https://amazon.jobs">Press Releases </a></li>
                        <li className="nav_a"><a href="https://www.amazon.science">Amazon Sciences</a> </li>
                    </ul>
                </div>
                <div className="footer__middleColSpace"></div>
                <div className="footer__middleCol">
                    <div className="footer_middleCol_title">Contact with Us</div>
                    <ul>
                        <li><a href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6">FaceBook</a></li>
                        <li><a href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6">Twitter</a> </li>
                        <li><a href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards">Instagram</a> </li>
                    </ul>
                </div>
                <div className="footer__middleColSpace"></div>
                <div className="footer__middleCol">
                    <div className="footer_middleCol_title">Make Money With Us</div>
                    <ul>
                        <li><a href="/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C">Sell On Amazon</a></li>
                        <li><a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT">Sell Under Amazon Accelerator </a></li>
                        <li><a href="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT">Poject and Build your Brand</a> </li>
                        <li><a href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1">Amazon Global Selling</a></li>
                        <li><a href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc">Become an Affiliate</a></li>
                        <li><a href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter">Fulfilment by Amazon</a> </li>
                        <li><a href="https://www.amazonpay.in/merchant">Amazon Pay on Merchant</a></li>
                        <li><a href="https://advertising.amazon.in/?ref=Amz.in">Advertise your products</a></li>
                    </ul>
                </div>
                <div className="footer__middleColSpace"></div>
                <div className="footer__middleCol">
                    <div className="footer_middleCol_title">Let Us Help You</div>
                    <ul>
                        <li><a href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">COVID-19 and Amazon</a></li>
                        <li><a href="/gp/css/homepage.html?ref_=footer_ya">Your Account</a></li>
                        <li><a href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4">Returns Center</a></li>
                        <li><a href="/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc">100% Purchase Protection</a></li>
                        <li><a href="/gp/browse.html?node=6967393031&ref_=footer_mobapp">Amazon App Download</a></li>
                        <li><a href="/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he">Help</a> </li>
                    </ul>
                </div>
            </div>

            <div className="footer__middleBottom">
                <div>
                    <a href="#top">
                        <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                    </a>
                </div>
                <div className="footer__middleBottomCol">
                    <ul>
                        <li><a href="https://www.amazon.com.br/ref=footer_br">Brazil</a></li>
                        <li><a href="https://www.amazon.ca/ref=footer_ca">Canada</a></li>
                        <li><a href="https://www.amazon.cn/ref=footer_cn">China</a></li>
                        <li><a href="https://www.amazon.fr/ref=footer_fr">France</a></li>
                        <li><a href="https://www.amazon.com.br/ref=footer_br">Brazil</a></li>
                        <li><a href="https://www.amazon.de/ref=footer_de">Germany</a></li>
                        <li><a href="https://www.amazon.it/ref=footer_it">Italy</a></li>
                        <li><a href="https://www.amazon.co.jp/ref=footer_jp">Japan</a></li>
                        <li><a href="https://www.amazon.com.mx/ref=footer_mx">Mexico</a></li>
                        <li><a href="https://www.amazon.nl/ref=footer_nl">Netherlands</a></li>
                        <li><a href="https://www.amazon.pl/ref=footer_pl">Poland</a></li>
                        <li><a href="https://www.amazon.sg/ref=footer_sg">Singapore</a></li>
                        <li><a href="https://www.amazon.es/ref=footer_es">Spain</a></li>
                        <li><a href="https://www.amazon.com.tr/ref=footer_tr">Turkey</a></li>
                        <li><a href="https://www.amazon.ae/ref=footer_ae">United Arab Emirites</a></li>
                        <li><a href="https://www.amazon.co.uk/ref=footer_uk">United Kingdom</a></li>
                        <li><a href="https://www.amazon.com/ref=footer_us">United States</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <ul>
                    <li> <a href="/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou">Conditions of Use</a> </li>
                    <li> <a href="/gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba">Interest Based Ads</a> </li>
                    <li> <a href="/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy">Privacy Notice</a> </li>
                </ul>
                <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div >)
}
export default Footer;