import { useState, useEffect } from "react";

export default function Main({ validate, setFormValid }) {
  const [selectedPayment, setSelectedPayment] = useState("credit");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (validate) {
      const newErrors = {};
      if (!inputs.name) newErrors.name = true;
      if (!inputs.email) newErrors.email = true;
      if (!inputs.phone) newErrors.phone = true;
      if (!inputs.address) newErrors.address = true;
      if (!inputs.zip) newErrors.zip = true;
      if (!inputs.city) newErrors.city = true;
      if (!inputs.country) newErrors.country = true;
      if (selectedPayment === "credit") {
        if (!inputs.eMoneyNumber) newErrors.eMoneyNumber = true;
        if (!inputs.eMoneyPin) newErrors.eMoneyPin = true;
      }

      setErrors(newErrors);
      setFormValid(Object.keys(newErrors).length === 0); // form valid mi?
    }
  }, [validate, inputs, selectedPayment, setFormValid]);

  const handleChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="main">
      <h1>CHECKOUT</h1>

      <div className="billing">
        <div className="colorful">BILLING DETAILS</div>
        <div className="billing__top">
          <div className="billing__top__name">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Çağatay Dalaman"
              value={inputs.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{ border: errors.name ? "2px solid red" : "1px solid #ccc" }}
            />
          </div>
          <div className="billing__top__mail">
            <h3>Email Address</h3>
            <input
              type="email"
              placeholder="cagataydalaman@outlook.com"
              value={inputs.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ border: errors.email ? "2px solid red" : "1px solid #ccc" }}
            />
          </div>
        </div>
        <div className="billing__top__phone">
          <h3>Phone Number</h3>
          <input
            type="tel"
            placeholder="532 264 58 27"
            value={inputs.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            style={{ border: errors.phone ? "2px solid red" : "1px solid #ccc" }}
          />
        </div>
      </div>

      <div className="shipping">
        <div className="colorful">SHIPPING INFO</div>
        <div className="shipping__address">
          <h3>Address</h3>
          <input
            placeholder="1137 Williams Avenue"
            value={inputs.address}
            onChange={(e) => handleChange("address", e.target.value)}
            style={{ border: errors.address ? "2px solid red" : "1px solid #ccc" }}
          />
        </div>
        <div className="shipping__mid">
          <div className="shipping__mid__zip">
            <h3>ZIP Code</h3>
            <input
              placeholder="10001"
              value={inputs.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
              style={{ border: errors.zip ? "2px solid red" : "1px solid #ccc" }}
            />
          </div>
          <div className="shipping__mid__city">
            <h3>City</h3>
            <input
              placeholder="New York"
              value={inputs.city}
              onChange={(e) => handleChange("city", e.target.value)}
              style={{ border: errors.city ? "2px solid red" : "1px solid #ccc" }}
            />
          </div>
        </div>
        <div className="shipping__mid__country">
          <h3>Country</h3>
          <input
            placeholder="United States"
            value={inputs.country}
            onChange={(e) => handleChange("country", e.target.value)}
            style={{ border: errors.country ? "2px solid red" : "1px solid #ccc" }}
          />
        </div>
      </div>

      <div className="paymentdetails">
        <div className="paymentdetails__top">
          <div>
            <h3>Payment Method</h3>
          </div>
          <div className="paymentdetails__top__check">
            <div className="paymentdetails__top__check__group">
              <div className="paymentdetails__top__check__group__e">
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  id="credit"
                  checked={selectedPayment === "credit"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label htmlFor="credit">e-Money</label>
              </div>
              <div className="paymentdetails__top__check__group__cash">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  id="cash"
                  checked={selectedPayment === "cash"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
        </div>

        <div className="paymentdetails__content">
          {selectedPayment === "credit" ? (
            <div className="e-money-inputs">
              <div>
                <h3>e-Money Number</h3>
                <input
                  type="text"
                  placeholder="238521993"
                  value={inputs.eMoneyNumber}
                  onChange={(e) => handleChange("eMoneyNumber", e.target.value)}
                  style={{ border: errors.eMoneyNumber ? "2px solid red" : "1px solid #ccc" }}
                />
              </div>
              <div>
                <h3>e-Money PIN</h3>
                <input
                  type="text"
                  placeholder="6891"
                  value={inputs.eMoneyPin}
                  onChange={(e) => handleChange("eMoneyPin", e.target.value)}
                  style={{ border: errors.eMoneyPin ? "2px solid red" : "1px solid #ccc" }}
                />
              </div>
            </div>
          ) : (
            <div className="cash-info">
              <p>
              The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
