import { FETCH_COURSES } from '../components/Courses/actions';

const initialState = {
  1234: {
    title: 'learn react the hard way',
    author: 'probably not cole',
    price: 10,
    id: 1234,
    description: 'pretty neat! - cole',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  1223: {
    title: 'learn angular the hard way',
    author: 'probably not cole',
    price: 10,
    id: 1223,
    description: 'angular is ass - definitely cole',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return Object.assign({}, state, { ...action.courses });
    default:
      return state;
  }
};

export default coursesReducer;
