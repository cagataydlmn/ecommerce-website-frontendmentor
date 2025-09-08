import { useState } from "react"

export default function Main() {
    const [selectedPayment, setSelectedPayment] = useState("credit");
    return (<>
        <div className="main">
            <h1 className="">CHECKOUT</h1>
            <div className="billing">
                <div className="colorful">BILLING DETAILS</div>
                <div className="billing__top">
                    <div className="billing__top__name">
                        <h3>Name</h3>
                        <input type="text" placeholder="Çağatay Dalaman" />
                    </div>
                    <div className="billing__top__mail">
                        <h3>Email Address</h3>
                        <input type="email" placeholder="cagataydalaman@outlook.com" />
                    </div>
                </div>
                <div className="billing__top__phone">
                    <h3>Phone Number</h3>
                    <input type="tel" placeholder="532 264 58 27" />
                </div>
            </div>
            <div className="shipping">
                <div className="colorful">
                    SHIPPING INFO
                </div>
                <div className="shipping__address">
                    <h3>Address</h3><input placeholder="1137 Williams Avenue" />
                </div>
                <div className="shipping__mid">
                    <div className="shipping__mid__zip">
                        <h3>
                            ZIP Code
                        </h3>
                        <input placeholder="10001" />
                    </div>
                    <div className="shipping__mid__city">
                        <h3>
                            City
                        </h3>
                        <input placeholder="New York" />
                    </div>
                </div>
                <div className="shipping__mid__country">
                    <h3>
                        Country
                    </h3>
                    <input placeholder="United States" />
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
                                <input type="text" placeholder="238521993" />
                            </div>
                            <div>
                                <h3>e-Money PIN</h3>
                                <input type="text" placeholder="6891" />
                            </div>
                        </div>
                    ) : (
                        <div className="cash-info">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                facilisis eros in libero viverra, vel consequat nisl tincidunt.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
    )
}