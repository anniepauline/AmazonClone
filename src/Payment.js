import React, { useState, useEffect } from "react";
import "./Payment.css"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { NavLink } from "react-router-dom";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer"


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe seeker that charges a customer

    }, [basket]);

    const handleSubmit = async (e) => {
        //all the fancy stript stuff
        e.preventDefault();
        setProcessing(true);

        //const payload = await stripe
    }
    const handleChange = (e) => {
        //listen for changes and display errors if exists in input
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout
                    <NavLink to="/checkout">
                        ({basket?.length} items)
                    </NavLink>
                </h1>
                {/* payment section -delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* payment section -review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map((item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price} />
                        )))}
                    </div>
                </div>

                {/* payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* stripe magic goes here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total: {value}
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p> Processing...</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Payment;