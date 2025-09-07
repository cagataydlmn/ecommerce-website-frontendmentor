import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Nav() {
    return (
        <>        <nav className="nav">
            <div className="nav__general">
                <div className="nav__general__title">audiophile
                </div>
                <div className="nav__general__list"><ul>
                    <Link to={`/`}>HOME</Link>
                    <Link to={'/headphones'}>HEADPHONES</Link>
                    <Link to={'/speakers'}>SPEAKERS</Link>
                    <Link to={'/earphones'}>EARPHONES</Link>
                </ul></div>
                <div className="nav__general__icon"><Link to="/checkout">CART İCON</Link></div>
            </div>
        </nav>
        <Outlet/>
        <Footer/>
        </>

    )
}