import Main from "../components/checkout/main";
import Order from "../components/checkout/order";

export default function Checkout(){
    return(
        <div className="checkout">

            <div className="checkouts mx-auto">

            <Main/>
            <Order/>
            </div>

        </div>
    )
}