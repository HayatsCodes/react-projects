/* eslint-disable react/prop-types */
import { CiYoutube } from "react-icons/ci";
import mealImage from "../assets/Jollof_Rice_with_Stew.jpg";
const MealCard = ({ meal }) => {
  return (
    <div className="card">
      <div className="meal-header">
        <h2 className="meal-name">{meal.meals[0].strMeal}</h2>
        <p className="meal-description">
          A classic Italian dish made with egg, cheese, pancetta, and pepper.
        </p>
      </div>
      <div className="meal-image-container">
        <img src={mealImage} alt="" className="meal-image" />
      </div>
      <div className="meal-ingredients-container">
        <h3 className="meal-ingredients-header">Ingredients</h3>
        <ul className="meal-ingredients-lists" aria-label="Ingredients">
          <li>200g spaghetti</li>
          <li>100g pancetta</li>
          <li>50g pecorino cheese</li>
          <li>50g parmesan</li>
          <li>3 large eggs</li>
          <li>Freshly ground black pepper</li>
          <li>Salt</li>
        </ul>
      </div>
      <div className="meal-youtube-btn">
        <a href="#" rel="noreferrer" target="_blank">
          <CiYoutube />
          <span>Learn to cook on YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default MealCard;
