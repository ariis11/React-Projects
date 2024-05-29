import { useContext } from "react";

import Modal from "./Modal";
import { currencyFormatter } from "../formatting";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./Input";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { data, isLoading, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig, {});

    const cartTotalPrice = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + (item.quantity * item.price),
        0
    );

    function handleHideCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleFinishCheckout() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
    }

    let actions = (
        <>
            <button className="text-button" type="button" onClick={handleHideCheckout}>Close</button>
            <button className="button" type="submit">Submit Order</button>
        </>
    );

    if (isLoading) {
        actions = <span>Sending order data...</span>;
    }

    if (data && Object.keys(data).length > 0 && !error) {
        return (
            <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinishCheckout}>
                <p>Success!</p>
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <p className="modal-actions">
                    <button className="button" onClick={handleFinishCheckout}>Okay</button>
                </p>
            </Modal>
        );
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleHideCheckout}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>

                <Input label="Full Name" type="text" id="name" required />
                <Input label="E-Mail Address" type="email" id="email" required />
                <Input label="Street" type="text" id="street" required />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" required />
                    <Input label="City" type="text" id="city" required />
                </div>

                {error && <Error title='Failed to submit data' message={error} />}

                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    );
}