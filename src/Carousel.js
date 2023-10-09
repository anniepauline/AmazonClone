import React from "react";
import "./Carousel";

function Carousel() {
    return (
        <div id="myCarousel" class="carousel slide  carousel-fade border-bottom-0" data-ride="carousel" className="carousel">
            <div class="carousel-inner">
                <div class="item active">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="Los Angeles" />
                </div>
                <div class="item active">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="Los Angeles" />
                </div>

                <div class="item">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="Chicago" />
                </div>

                <div class="item">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="New york" />
                </div>
                <div class="item">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/KSD_Hero_PC_EN_2X._CB577182508_.jpg" alt="New Brunswik" />
                </div>
                <div class="item">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_Cricket._CB576818469_.jpg" s alt="New Brunswik" />
                </div>
            </div>

            <a class="left carousel-control celwidget" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control celwidget" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;