import Best from "../components/home/best";
import HomeList from "../components/home/homeList";
import ProductDetail from "../components/product/productDetail";

export default function Product(){
    return(
        <div className="">
            <div className="mx-auto">
            <ProductDetail/>

            </div>
            <HomeList/>
            <div>
                <div className="mx-auto">
                <Best/>

                </div>

            </div>
        </div>
    )
}