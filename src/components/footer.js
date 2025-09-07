import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="mx-auto">
                <div className="footer__general"> 
                    <div className="footer__general__title">
                        audiophile
                    </div>
                    <div className="footer__general__description">
                        Audiophile is an all in one stop to uflfill your audio needs. We're a small team of music lovers and sound specialist who are devoted to helping you get the most out of personal audio. Xome and visit our demo facility - we're open 7 days a week. 
                    </div>
                    <div className="footer__general__copyright">
                        Copyright 2023. All Rights Reserved
                    </div>
                </div>
                <div className="footer__right">
                <Link to="/"onClick={() => window.scrollTo(0, 0)}>HOME</Link>
                <Link to="/headphones" onClick={() => window.scrollTo(0, 0)}>HEADPHONE</Link>
                <Link to="/speakers"onClick={() => window.scrollTo(0, 0)}>SPEAKERS</Link>
                <Link to="/earphhonesonClick={() => window.scrollTo(0, 0)}">EARPHONES</Link>
                </div>
            </div>
        </footer>
    )
}