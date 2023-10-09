import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";


export default function App() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length}):$ <strong>{basket.reduce((amount, item) => Math.trunc(Number(item.price)) + amount, 0)}</strong>
                        </p>
                        <span className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </span>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => navigate('/payment')}>Go to checkout</button>
        </div>
    );
}
