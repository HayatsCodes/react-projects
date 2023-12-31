/* eslint-disable react/prop-types */
import { CiYoutube, CiRead } from "react-icons/ci";

import MealCardLoader from "./MealCardLoader";
import ErrorCard from "./ErrorCard";

const MealCard = ({ meal, loading, updateModalVisibility, error }) => {
  if (loading) {
    return <MealCardLoader />;
  }

  if (error) {
    return <ErrorCard />;
  }

  const {
    strMeal,
    strMealDescription,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strYoutube,
  } = meal.meals[0];

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  ].filter((ingredient) => ingredient);

  return (
    <div className="card">
      <div className="meal-header">
        <h2 className="meal-name">{strMeal}</h2>
        <p className="meal-description">{strMealDescription}</p>
      </div>
      <div className="meal-image-container">
        <img src={strMealThumb} alt="" className="meal-image" height="100" />
      </div>
      <div className="meal-ingredients-container">
        <h3 className="meal-ingredients-header">Ingredients</h3>
        <ul className="meal-ingredients-lists" aria-label="Ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="meal-btn cursor-pointer"
        onClick={(event) => {
          event.preventDefault();
          updateModalVisibility();
        }}
      >
        <a type="button">
          <CiRead />
          <span>Read cooking instructions</span>
        </a>
      </div>
      {strYoutube ? (
        <>
          <p className="mb-1 -mt-2 md:font-bold md:text-xl">Or</p>
          <div className="meal-btn">
            <a href={strYoutube} rel="noreferrer" target="_blank">
              <CiYoutube />
              <span>Learn to cook on YouTube</span>
            </a>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MealCard;
