import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import LowestPriceImg from './../../assets/lowest-price.png';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen, cartTotal, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const navigate = useNavigate();
    const handleCartClose = () => {
        setIsCartOpen(false);
        navigate("/shop")
    }
    return (
        <div className='cart-dropdown-overlay'>
            <div className='container'>
            <section className='cart-dropdown-container' aria-label='Shopping Cart Dropdown'>
                <header>
                    My Cart ({cartCount} items)
                    <span className='remove-button float-right' onClick={toggleIsCartOpen}>&#10005;</span>
                </header>
                <section className='cart-items' aria-label='Cart Items'>

                    {(cartItems.length>0) ? 
                        (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />))
                        : ( <div className='empty-cart-container'><h3>No items in your cart</h3> <p>Your favorite items are just a click away</p></div>)
                    }
                </section>
            
                    {(cartItems.length>0) ? 
                         ( <div className='lowest-price-container'>
                         <div className='lowest-price-div'>
                             <img src={LowestPriceImg} alt="Lowest Price" />
                             <div>You won't find it cheaper anywhere </div>\
                         </div>
                     </div>)
                        :  ""
                    }
            <footer aria-label='Shopping Cart Footer'>
            {(cartItems.length>0) ? 
                         (<>
                            <p>Promo code can be applied on payment page</p>
                            <Button buttonType="primary" aria-label="Checkout Button" >
                                <div>
                                    <span>Proceed to Checkout</span>
                                    <span>Rs. {cartTotal} &#10095;</span>
        
                                </div>
                            </Button>
                            </>
                        )
                        :  (
                            <button  aria-pressed="false"  className='lnkButton' aria-label='Start Shopping Button' onClick={handleCartClose}>Start Shopping</button>
                        )
                    }
                    </footer>
               
            </section>
            </div>
        </div>
    )
}

export default CartDropdown;