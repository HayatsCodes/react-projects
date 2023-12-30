import axios from 'axios';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getMeal = () => {
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching meal:', error);
      throw error; 
    });
};
