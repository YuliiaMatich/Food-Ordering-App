import { useState, useEffect, useCallback } from 'react';

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback (async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-6301a-default-rtdb.firebaseio.com/meals.json");
      

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);

      const loadedMeals = [];

      for (const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }

      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])


  useEffect(()=> {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const mealList = meals.map((meal) => (
    <MealItem
      meal={meal}
      id={meal.id}
      key={meal.id}
      // name={meal.name}
      // description={meal.description}
      // price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
