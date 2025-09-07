import HomeList from "../components/home/homeList";
import HomeMid from "../components/home/homeMid";
import NewProduct from "../components/home/newProduct";

export default function Home(){
    return(<>
    
        <div className="home">
            <NewProduct/>
        </div>
        <HomeList/>
        <HomeMid/>
        </>
    )
}