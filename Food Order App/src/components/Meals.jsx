import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
    const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        return <Error title='Failed to fetch meals' message={error} />
    }

    return (
        <div>
            {/* {isFetching && <p>Meals are loading...</p>}
            {!isFetching && meals.length === 0 && <p>No meals are available.</p>}
            {!isFetching && meals.length > 0 && ( */}
                <ul id="meals">
                    {loadedMeals.map(meal => (
                        <MealItem key={meal.id} meal={meal} />
                    ))}
                </ul>
            {/* )} */}
        </div>
    );
}