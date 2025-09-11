import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";  
import { addToCart } from "../../store/cartSlice";  

export default function ProductDetail() {
    const { productid } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch(); 
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

    const images = Object.values(product.gallery).map(img =>
        img.desktop.replace("./", "/")
    );

    const miktarartı = () => setQuantity(quantity + 1);
    const miktareksi = () => quantity > 1 && setQuantity(quantity - 1);

    const handleAddToCart = () => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image,
            total:product.price * quantity
        };
        dispatch(addToCart(item));
        console.log("eklendi");
        alert("eklendi")
        
        
    };
    console.log(product);
    
    return (
        <>
            <div className="product__detail">
                <div className="product__detail__image">
                    <img src={product.image.desktop.replace("./", "/")} alt={product.name} />
                </div>
                <div className="product__detail__description">
                    <div className="product__detail__description__title">{product.name}</div>
                    <div className="product__detail__description__description">{product.description}</div>
                    <div className="product__detail__description__price">${product.price}</div>
                    <div className="product__detail__description__quantity">
                        <div className="product__detail__description__quantity__l">
                            <button onClick={miktareksi}>-</button>
                            <div>{quantity}</div>
                            <button onClick={miktarartı}>+</button>
                        </div>
                        <div className="product__detail__description__quantity__r">
                            <button onClick={handleAddToCart}>ADD TO CART</button>
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
                                <div className="item">{inc.item}</div>
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
                <h2>YOU MAY ALSO LIKE</h2>
                <div className="alsoLike__product">
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
    );
}
