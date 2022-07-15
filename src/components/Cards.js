import React, { useState } from 'react';

const Cards = ({ meal }) => {
  //hooks
  const [mealPopup, setMealPopup] = useState(false);

  //logique
  const handlePopup = () => {
    setMealPopup(!mealPopup);
  };

  //JSX
  return (
    <>
      <li className="cards" onClick={() => handlePopup()}>
        <h2>{meal.strMeal}</h2>
        <h3>Origin : {meal.strArea}</h3>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>

        {mealPopup && (
          <div className="popup-container">
            <div className="container">
              <h2>{meal.strMeal}</h2>
              <h3>Origin : {meal.strArea}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Cards;
