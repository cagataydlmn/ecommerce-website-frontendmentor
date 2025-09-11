import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import { useState, useRef, useEffect } from "react";

export default function Nav() {
    const [modal, setModal] = useState(false);
    const buttonRef = useRef(null);
    const modalRef = useRef(null);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

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
                            <Link to={'/headphones'}>HEADPHONES</Link>
                            <Link to={'/speakers'}>SPEAKERS</Link>
                            <Link to={'/earphones'}>EARPHONES</Link>
                        </ul>
                    </div>
                    <div className="nav__general__icon" style={{ position: "relative" }}>
                        <button onClick={openModal} ref={buttonRef}>
                            <img src="/assets/shared/desktop/icon-cart.svg" alt="Cart" />
                        </button>

                        {modal && (
                            <>
                                <div className="basket__modal" />
                                <div
                                    ref={modalRef}
                                    className="basket__modal__general"
                                >
                                    <div>
                                        <div>CART()</div>
                                        <div>
                                            <button>Remove all</button>
                                        </div>
                                    </div>
                                   
                                    <button>
                                    <div ><Link to="/checkout">CART İCON</Link></div>
                                    </button>
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
