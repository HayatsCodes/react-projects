import { useState, useEffect } from "react";
import { getMeal } from '../services/services';

const useFetchMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const mealData = await getMeal();
      setMeal(mealData);
    } catch (error) {
      setError(error);
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

  return { meal, loading, error, fetchMeal };
};

export default useFetchMeal;
