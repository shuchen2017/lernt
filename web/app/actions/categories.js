import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';

const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const getCategoriesAsync = () => (async (dispatch) => {
  const { data } = await axios.get('/api/categories');
  dispatch(getCategories(data));
});
