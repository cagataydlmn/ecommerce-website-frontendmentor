import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";

export default function CategoryProduct() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filtered = data.filter((item) => item.category === category);
            setProducts(filtered);
        }
    }, [category]);
    console.log(products);

    return (
        <div className="category__products mx-auto">
            <ul className="category__products__list">
                {products.map((e) => (
                    <li key={e.id}>
                        <Link>
                            <div className="category__products__list__img">
                                <img src={e.categoryImage.desktop} alt={`${e.name} gallery`} />

                            </div>
                            <div className="category__products__list__desc">
                                <div className="category__products__list__desc__detail">
                                    <div className="title">{e.name}</div>
                                    <div className="description">{e.description}</div>
                                    <button>
                                        <Link to={`/${e.category}/${e.id}`}>SEE PRODUCT</Link>
                                        </button>
                                </div>

                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
