import { useParams } from "react-router-dom"

export default function CategoryTop(){
    const {category} = useParams()
    console.log("kategori:",category)
    
    return(
        <div className="category__top">
            <div className="category__top__title mx-auto">
                {category}
            </div>
        </div>
    )
}