import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Order({ onPay, formValid }) {
  const items = useSelector((state) => state.cart.items);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0) return <p>Sepet boş</p>;

  const clear = () => dispatch(clearCart());
  const goHome = () => {
    clear();
    navigate("/");
  };

  const open_pay = () => {
    onPay();
    if (formValid) setOpenForm(true); 
  };

  return (
    <div className="checkout__order">
      <h2>SUMMARY</h2>
      {items.map((item) => (
        <div key={item.id} className="general">
          <div className="general__image">
            <img src={item.image.desktop.replace("./", "/")} alt={item.name} width={100} />
          </div>
          <div className="general__mid">
            <div className="general__mid__name">{item.name}</div>
            <div>$ {item.price}</div>
          </div>
          <div className="genral__quantity">X{item.quantity}</div>
        </div>
      ))}

      <div className="total">
        <div className="total__general">
          <div className="total__general__title">TOTAL</div>
          <div className="total__general__price">
          $ {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>
        </div>
      </div>

      <button onClick={open_pay}>CONTINUE & PAY</button>

      {openForm && (
        <div className="modal__overlay" onClick={() => setOpenForm(false)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <div>You will receive an email confirmation shortly</div>
            <div className="order__last">
              <div className="order__last__item">
                {items[0] && (
                  <div className="modal__general">
                    <div className="modal__general__image">
                      <img
                        src={items[0].image.desktop.replace("./", "/")}
                        alt={items[0].name}
                        width={100}
                      />
                    </div>
                    <div className="modal__general__mid">
                      <div className="modal__general__mid__name">{items[0].name}</div>
                      <div>$ {items[0].price}</div>
                    </div>
                    <div className="modal__general__quantity">X{items[0].quantity}</div>
                  </div>
                )}

                {items.length > 1 && <div>and {items.length - 1} other more item(s)</div>}
              </div>
              <div className="order__last__total">
                <div>GRAND TOTAL</div>
                ${items.reduce((acc, item) => acc + parseInt(item.total), 50)}
              </div>
            </div>
            <button onClick={goHome}>BACK TO HOME</button>
          </div>
        </div>
      )}
    </div>
  );
}
