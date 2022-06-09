import { useContext } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
    const { name, price, imageURL, description } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductTOCart = () => addItemToCart(product);
    return (
        <section className="product-card-container" aria-label={name}>
            <header aria-label="Product Name">{name}</header>
            <img src={`http://localhost:3000/${imageURL}`} alt={`${name}`} />
            <div className="description" aria-label="Product description">
                {description}
            </div>
            <div className="footer">
                <span className="price" aria-label="Item price">MRP Rs.{price}</span>
                <Button aria-label="Buy Now Button" buttonType="primary" onClick={addProductTOCart}>Buy Now <span>@ Rs.{price}</span></Button>
            </div>

        </section>
    )
}

export default ProductCard;