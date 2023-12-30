import { useEffect, useState } from "react";
import axios from 'axios'
import MealCard from "./components/MealCard";

const App = () => {
    const [meal, setMeal] = useState({})

    useEffect(() => {
      let randomMeal;
      axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        randomMeal = res.data
        setMeal(randomMeal)
      })
    }, [])

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="logo">Random Meal Generator.</h1>
          <p className="headline">A new culinary adventure with every click</p>
        </div>
        <MealCard meal={meal}/>
        <button className="new-meal-btn">Generate new meal</button>
      </div>
      <footer>
        Built with Love <span>❤</span> by{" "}
        <a
          href="https://twitter.com/hayats_codes"
          target="_blank"
          rel="noreferrer"
        >
          HayatsCodes
        </a>
      </footer>
    </div>
  );
};

export default App;
