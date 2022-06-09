import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';
import Logo from "../../assets/logo.png";
import { CartContext } from "../../context/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  // const {currentUser, setCurrentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

  useEffect(() => {
    if(isCartOpen){
    document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);
  return (
    <>
      <header>
        <div className="container">
          <div className="navigation">
            <Link className="logo-container" to='/' title="Sabka Bazaar">
              {/* <Logo className="logo" /> */}
              <img src={Logo} alt="Sabka Bazaar" className="logo" />
            </Link>
            <nav className="nav-links-container nav-home-links-container">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/shop">
                Products
              </Link>
            </nav>
            <div className="nav-links-container">
              <nav className="">
                {
                 <Link className="nav-link" to="/sign-in">
                    SignIn
                  </Link>
                }
                <Link className="nav-link pr-0" to="/register">
                  Register
                </Link>
              </nav>

              <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </header>

      <Outlet />
    </>
  )
}
export default Navigation;