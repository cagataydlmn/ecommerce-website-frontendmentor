import { Link, useParams } from "react-router-dom"
import data from "../../data.json";
import { useEffect, useState } from "react";

export default function ProductDetail() {
    const { productid } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (productid) {
            setLoading(true);
            setTimeout(() => {
                const filtered = data.find((item) => item.id === parseInt(productid));
                setProduct(filtered || null);
                setLoading(false);
            }, 1000);
        }
    }, [productid]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!product) {
        return <p>Product not found</p>;
    }
    console.log(product);
    console.log(product.categoryImage.desktop);
    const images = Object.values(product.gallery).map(img =>
        img.desktop.replace("./", "/")
    );
    const miktarartı = () => {
        setQuantity(quantity + 1)
    }
    const miktareksi = () => {
        setQuantity(quantity - 1)
    }
    return (
        <>
            <div className="product__detail">
                <div className="product__detail__image">
                    <img src={product.image.desktop.replace("./", "/")} alt={product.name} />
                </div>
                <div className="product__detail__description">
                    <div className="product__detail__description__title">{product.name}</div>
                    <div className="product__detail__description__description">{product.description}</div>
                    <div className="product__detail__description__price"> ${" "}{product.price}</div>
                    <div className="product__detail__description__quantity">
                        <div className="product__detail__description__quantity__l">
                            <button onClick={miktareksi}>-</button>
                            <div>{quantity}</div>
                            <button onClick={miktarartı}>+</button>
                        </div>
                        <div className="product__detail__description__quantity__r">
                            <button>Satın al</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="product__detail__bottom">

                <div className="product__detail__bottom__features">
                    <div className="product__detail__bottom__features__title">FEATURES</div>

                    <div className="product__detail__bottom__features__desc">
                        {product.features}
                    </div>
                </div>
                <div className="product__detail__bottom__box">
                    <div className="product__detail__bottom__features__title">
                        IN THE BOX
                    </div>
                    <ul>
                        {product.includes.map((inc, index) => (
                            <li key={index}>
                                <div className="quantity">{inc.quantity}X</div>
                                <div className="item">
                                    {inc.item}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="otherImages">
                <div className="left">
                    {images.slice(0, 2).map((src, i) => (
                        <img key={i} src={src} alt={`gallery-${i}`} />
                    ))}
                </div>
                <div className="right">
                    <img src={images[2]} alt="gallery-2" />
                </div>
            </div>
            <div className="alsoLike">
                <h2>YOU MAY ALSO LİKE</h2>
                <div className="alsoLike__product">
                    {/* others */}
                    {product.others.map((other, index) => (
                        <div className="alsoLike__product__detail" key={index}>

                            <img src={other.image.desktop.replace("./", "/")} alt="resims" />
                            <div className="title">
                                <h2>{other.name}</h2>
                                <Link to={`/${other.category}/${other.id}`}>
                                    <button>SEE PRODUCT</button>

                                </Link>
                            </div>


                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
