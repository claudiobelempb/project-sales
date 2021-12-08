import { Link } from "react-router-dom";
import { ShoppingBasket, Storefront, Search } from "@material-ui/icons";
import "./styles.css";

import { useStateValue } from "../../StateProvider";

function HeaderDefault() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="header__logo">
          <Storefront className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="search" name="" id="" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to={"/checkout"}>
          <div className="nav__item nav__basketCount">
            <ShoppingBasket className="itemBasket" />
            <span className="nav__itemLineTwo ">{basket.lenght}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { HeaderDefault };
