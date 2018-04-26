
const initialState = {
  1234: {
    title: 'learn react the hard way',
    author: 'probably not cole',
    price: 10,
    id: 1234,
  },
  1223: {
    title: 'learn angular the hard way',
    author: 'probably not cole',
    price: 10,
    id: 1223,
  },
};

const coursesReducer = (state = initialState, action) => {
  return state;
};

export default coursesReducer;