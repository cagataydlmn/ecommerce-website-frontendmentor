import { Link } from "react-router-dom";

export default function HomeList() {
  return (
    <div>
      <ul className="homeList">
        <li>
          <img
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones"
          />
          <div className="title">HEADPHONES</div>
          <Link to="/headphones" className="shop">SHOP &gt;</Link>
        </li>
        <li>
          <img
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers"
          />
          <div className="title">SPEAKERS</div>
          <Link to="/speakers" className="shop">SHOP &gt;</Link>
        </li>
        <li>
          <img
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones"
          />
          <div className="title">EARPHONES</div>
          <Link to="/earphones" className="shop">SHOP &gt;</Link>
        </li>
      </ul>
    </div>
  );
}
