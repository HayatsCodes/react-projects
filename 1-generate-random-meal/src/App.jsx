import MealCard from "./components/MealCard";
import useFetchMeal from "./hooks/useFetchMeal";

const App = () => {
    const {meal, fetchMeal, loading} = useFetchMeal()


  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="logo">Random Meal Generator.</h1>
          <p className="headline">A new culinary adventure with every click</p>
        </div>
        <MealCard meal={meal} loading={loading}/>
        <button className="new-meal-btn" onClick={fetchMeal}>Generate new meal</button>
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
