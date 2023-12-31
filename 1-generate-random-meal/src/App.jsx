import { useState } from "react";
import useFetchMeal from "./hooks/useFetchMeal";
import MealCard from "./components/MealCard";
import MealInstructions from "./components/MealInstructions";

const App = () => {
  const { meal, fetchMeal, loading, error } = useFetchMeal();
  const [modalVisibility, setModalVisibility] = useState(false);

  const updateModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const instructions = !loading ? meal?.meals[0].strInstructions : "";

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="logo">Random Meal Generator.</h1>
          <p className="headline">A new culinary adventure with every click</p>
        </div>
        <MealCard
          meal={meal}
          loading={loading}
          error={error}
          updateModalVisibility={updateModalVisibility}
        />
        {!error ? (<button className="new-meal-btn" onClick={fetchMeal}>
          Generate new meal
        </button>) : ""}
        
      </div>
      {modalVisibility && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      )}
      <MealInstructions
        instructions={instructions}
        visibility={modalVisibility}
        updateModalVisibility={updateModalVisibility}
      />
      <footer className="fixed">
        Built with Love <span>❤</span> by{" "}
        <a
          href="https://twitter.com/hayats_codes"
          target="_blank"
          rel="noreferrer"
          className="border-b border-solid border-blue-400 pb-1"
        >
          HayatsCodes
        </a>
      </footer>
    </div>
  );
};

export default App;
