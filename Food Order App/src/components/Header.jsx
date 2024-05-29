import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <button className='text-button' onClick={handleShowCart}>Cart ({totalCartItems})</button>
            </nav>
        </div>
    );
}