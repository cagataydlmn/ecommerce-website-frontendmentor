export default function Main() {
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
                    <div><h3>Payment Method</h3></div>
                    <div className="paymentdetails__top__check">
                        <div className="paymentdetails__top__check__group">
                            <div className="paymentdetails__top__check__group__e">
                                <input type="radio" name="payment" value="credit" id="credit" />
                                <label htmlFor="credit">e-Money</label>
                            </div>
                            <div className="paymentdetails__top__check__group__cash">
                                <input type="radio" name="payment" value="paypal" id="paypal" />
                                <label htmlFor="paypal">Cash on Delivery</label>
                            </div>

                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}