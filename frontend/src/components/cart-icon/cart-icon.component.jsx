import {ReactComponent as ShoppingIcon} from "./../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon =()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <nav aria-label="Cart Icon" className="cart-icon-container" onClick={toggleIsCartOpen}> 
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount} Items</span>
        </nav>
    )
}

export default CartIcon;