import { useContext } from "react";

import CartContext from "../store/CartContext";
import { currencyFormatter } from "../formatting";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotalPrice = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + (item.quantity * item.price),
        0
    );

    function handleHideCart() {
        userProgressCtx.hideCart();
    }

    function handleShowCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal
            className='cart'
            open={userProgressCtx.progress === 'cart'}
            onClose={userProgressCtx.progress === 'cart' ? handleHideCart : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {
                    cartCtx.items.map(item => (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onIncrease={() => cartCtx.addItem(item)}
                            onDecrease={() => cartCtx.removeItem(item.id)}
                        />
                    ))
                }
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
            <p className="modal-actions">
                <button className="text-button" onClick={handleHideCart}>Close</button>
                {cartCtx.items.length > 0 &&
                    <button className="button" onClick={handleShowCheckout}>Go to Checkout</button>
                }
            </p>
        </Modal>
    );
}