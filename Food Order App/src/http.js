export async function fetchAvailableMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const meals = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch meals.');
    }

    return meals;
}

export async function createNewOrder(order) {
    const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        body: JSON.stringify({ order }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || 'Failed to create new order.');
    }

    return resData.message;
}