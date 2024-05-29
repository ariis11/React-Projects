import { useContext } from "react";

import { currencyFormatter } from "../formatting";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(meal) {
        cartCtx.addItem(meal);
    }

    return (
        <li id={meal.id} className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button" onClick={() => handleAddMealToCart(meal)}>Add to Cart</button>
                </p>
            </article>
        </li>
    );
}