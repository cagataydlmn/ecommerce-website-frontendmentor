import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";

export default function Nav() {
  const [modal, setModal] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // Modal dışına tıklayınca kapanması
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modal &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  return (
    <>
      <nav className="nav">
        <div className="nav__general">
          <div className="nav__general__title">audiophile</div>
          <div className="nav__general__list">
            <ul>
              <Link to={`/`}>HOME</Link>
              <Link to={"/headphones"}>HEADPHONES</Link>
              <Link to={"/speakers"}>SPEAKERS</Link>
              <Link to={"/earphones"}>EARPHONES</Link>
            </ul>
          </div>
          <div className="nav__general__icon" style={{ position: "relative" }}>
            <button onClick={openModal} ref={buttonRef}>
              <img src="/assets/shared/desktop/icon-cart.svg" alt="Cart" />
            </button>

            {modal && (
              <>
                <div className="basket__modal" />
                <div ref={modalRef} className="basket__modal__general">
                  <div className="items__top">
                    <div>CART({items.length})</div>
                    <div>
                      <button onClick={() => dispatch(clearCart())}>Remove all</button>
                    </div>
                  </div>

                  {items.map((e) => (
                    <div className="items__content" key={e.id}>
                      <div className="items__content__l">
                        <img
                          src={e.image.desktop.replace("./", "/")}
                          alt={e.name}
                          width={80}
                        />
                        <div>
                          <div>{e.name}</div>
                          <div>$ {e.price}</div>
                        </div>
                      </div>

                      <div className="items__content__r">
                        <button onClick={() => dispatch(decrementQuantity(e.id))}>-</button>
                        <div>{e.quantity}</div>
                        <button onClick={() => dispatch(incrementQuantity(e.id))}>+</button>
                      </div>
                    </div>
                  ))}

                  <div className="total__row">
                    <div>TOTAL</div>
                    <div>
                      ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                    </div>
                  </div>
                <div className="link">

                    <Link to="/checkout">CHECKOUT</Link>
                    </div>

                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
