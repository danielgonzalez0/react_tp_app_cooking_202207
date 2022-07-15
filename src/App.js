import React, { useEffect, useState } from 'react';
import { isEmpty } from './Utils';
import axios from 'axios';
import Cards from './components/Cards';
import './styles/index.scss';

const App = () => {
  //hooks
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  //logique

  useEffect(() => {
    if (!isEmpty(data)) setIsLoading(false);
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Tomato')
      .then((res) => {
        setData(res.data);
        console.log(data);
      });

    console.log(data);
  }, [data.length, isLoading]);

  //JSX
  return (
    <div className="wrapper">
      <h1>React Cook</h1>
      <input type="text" placeholder="Taper le nom d'un aliment (en anglais)" />
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <div>
          <ul>
            {data.meals.map((meal) => {
              return <Cards key={meal.idMeal} meal={meal} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
