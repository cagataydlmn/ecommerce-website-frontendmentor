import { Link } from "react-router-dom";
import data from "../../data.json";


export default function NewProduct(){

console.log("products:",data);
const product = data.find(item => item.id === 4);
console.log(product);



    return(
        <div className="newProduct">
                <div className="newProduct__general">
                    <div className="newProduct__general__new">
                        NEW PRODUCT
                    </div>
                    <h1>
                    {product.name}
                    </h1>
                    <div className="newProduct__general__desc">
                        {product.description}
                    </div>
                    <button>
                    <Link to={`/${product.category}/${product.id}`}>
                            See Product
                        </Link>
                    </button>
                </div>
                <img src={product.image.desktop} alt={product.name} />
                </div>
    )
}