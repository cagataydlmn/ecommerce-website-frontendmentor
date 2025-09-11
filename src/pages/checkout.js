import { useState } from "react";
import Main from "../components/checkout/main";
import Order from "../components/checkout/order";

export default function Checkout() {
  const [validate, setValidate] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handlePay = () => {
    setValidate(true); // inputları kontrol et
  };

  return (
    <div className="checkout">
      <div className="checkouts mx-auto">
        <Main validate={validate} setFormValid={setFormValid} />
        <Order onPay={handlePay} formValid={formValid} />
      </div>
    </div>
  );
}
