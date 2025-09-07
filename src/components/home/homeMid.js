import { Link } from "react-router-dom";
import data from "../../data.json";
import Best from "./best";

export default function HomeMid() {
    console.log("products:", data);

    return (
        <div className="mx-auto mid">
            <div className="hero-container">
                <img
                    src="/assets/home/desktop/pattern-circles.svg"
                    alt="Background Pattern"
                    className="hero-bg-svg"
                />

                <img
                    src="/assets/home/desktop/image-speaker-zx9.png"
                    alt="Hero Product"
                    className="hero-bg-img"
                />

                <div className="hero-text">
                    <div className="mx-auto hero-text-detail">
                        <div className="hero-text-detail-name">{data[5].name}</div>
                        <div>{data[5].description}</div>
                        <button>

                            <Link to={`/${data[5].category}/${data[5].id}`}>
                            See Product
                        </Link>
                    </button>
                </div>

            </div>
        </div>
            {/* zx7 speaker */ }
    <div
        className="hero-container-speaker"
        style={{
            backgroundImage: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px"
        }}
    >
        <div className="hero-container-speaker-detail">
            <div className="hero-container-speaker-detail-s">
                <div className="hero-text-detail-name">{data[4].name}</div>
                <button>
                    
                <Link to={`/${data[4].category}/${data[4].id}`}>
                            See Product
                        </Link>                    </button>
            </div>
        </div>
    </div>
    {/* yx1 earphones */ }
            <div className="earphones">
                <div className="earphones_img">
                    <img
                        src="/assets/home/desktop/image-earphones-yx1.jpg"
                        alt="Hero Product"
                    />
                </div>


                <div className="earphones-text">
                    <div className="mx-auto earphones-text-detail">
                        <div className="hero-text-detail-name">{data[0].name}</div>
                        <button>
                        <Link to={`/${data[0].category}/${data[0].id}`}>
                            See Product
                        </Link>
                            </button>
                    </div>

                </div>
            </div>
                <Best/>
        </div >
    )
}