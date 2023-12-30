import { useState, useEffect } from "react";
import { getMeal } from '../services/services';

const useFetchMeal = () => {
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const mealData = await getMeal();
      setMeal(mealData);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMeal = () => {
    fetchData();
  };

  return { meal, loading, fetchMeal };
};

export default useFetchMeal;
