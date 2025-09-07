import { useParams } from "react-router-dom"
import CategoryTop from "../components/cateogry/categoryTop"
import HomeList from "../components/home/homeList"
import Best from "../components/home/best"
import CategoryProduct from "../components/cateogry/categoryProduct"

export default function Category() {
    const { category } = useParams()
    console.log(category)

    return (
        <div className="category">
            <CategoryTop />
            <CategoryProduct/>
            <HomeList />
            <div style={{ margin: "0 auto", width: "80%" }}>
                <Best />
            </div>
        </div>
    )
}