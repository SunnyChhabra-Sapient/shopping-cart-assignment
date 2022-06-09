import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageURL, price } = cartItem;
    const { addItemToCart, removeItemToCart } = useContext(CartContext)

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    return (
        <div className='cart-item-container'>
            <img src={`http://localhost:3000${imageURL}`} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <div className='price-div'>
                    <div className='quantity' >
                        <div className='arrow' onClick={removeItemHandler}>
                            &minus;
                        </div>
                        <span className='value'>{quantity}</span>
                        <div className='arrow' onClick={addItemHandler}>
                            &#43;
                        </div>
                        <span className='value'>x</span>
                        <span className='price'>
                            Rs.{price}
                        </span>

                    </div>
                    <div>
                        <span className='float-right'>
                            Rs. {quantity * price}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem;