import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Carousel";

function Home() {
    return (
        <div className="home" id="top">
            <div className="home__container">
                <Slider />
            </div>
            <div className="home__data">
                <div className="home__row">
                    <Product
                        id="3254354345"
                        title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
                        price={"11.9"}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
                        rating={5} />
                    <Product
                        id="90829332"
                        title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"}
                        price={"239.0"}
                        image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}
                        rating={4} />

                </div>
                <div className="home__row">
                    <Product
                        id={"12321341"}
                        title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
                        price={"199.9"}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
                        rating={3} />

                    <Product
                        id="49538094"
                        title={"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"}
                        price={"98.9"}
                        image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
                        rating={4} />

                    <Product
                        id="4903850"
                        title={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}
                        price={"598.99"}
                        image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}
                        rating={3} />
                </div>

                <div className="home__row">
                    <Product
                        id="23445930"
                        title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"}
                        price={"10948.98"}
                        image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}
                        rating={4} />
                </div>
                {/* ------------------------------------------------- */}
                <div className="home__row">
                    <Product
                        id="32543543495"
                        title={"Amazon Brand - Solimo Strive Office Chair with Chrome Base, Mesh Back, 3D Arms, 2-D Lumbar Support, 3-Lock Synchro Mechanism (Black)"}
                        price={"17.9"}
                        image={"https://m.media-amazon.com/images/I/912uPOU6m5L._AC_UL320_.jpg"}
                        rating={4} />
                    <Product
                        id="908293321"
                        title={"Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"}
                        price={"449.0"}
                        image={"https://m.media-amazon.com/images/I/516LU0H963L._AC_UL320_.jpg"}
                        rating={5} />

                </div>
                <div className="home__row">
                    <Product
                        id={"123213491"}
                        title={"Logitech Pebble Keys 2 K380s, Slim and Portable, Easy-Switch for Windows, macOS, iPadOS, Android, Chrome OS - Tonal Rose"}
                        price={"2199.9"}
                        image={"https://m.media-amazon.com/images/I/61vnuYiLrXL._SL1500_.jpg"}
                        rating={4} />

                    <Product
                        id="495380945"
                        title={"TP-Link Tapo 360° 2MP 1080p Full HD Pan/Tilt Home Security Wi-Fi Smart Camera| Alexa Enabled"}
                        price={"1998.9"}
                        image={"https://m.media-amazon.com/images/I/41KuE9NipqL._SL1000_.jpg"}
                        rating={4} />

                    <Product
                        id="490385044"
                        title={"Tygot Gorilla Tripod/Mini 33 CM (13 Inch) Tripod for Mobile Phone with Phone Mount "}
                        price={"259.99"}
                        image={"https://m.media-amazon.com/images/I/51I+SdOM9NL._SL1500_.jpg"}
                        rating={3} />
                </div>
            </div>

        </div>
    )
}

export default Home;
