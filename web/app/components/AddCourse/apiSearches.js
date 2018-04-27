import axios from 'axios';
import { API_UDEMY_USERNAME, API_UDEMY_PASSWORD } from '../../../apiConfig';

const searchUdemy = async (searchTerm) => {
  const { data } = await axios.get('https://www.udemy.com/api-2.0/courses', {
    params: {
      search: searchTerm,
      category: 'Development',
      'fields[course]': 'title,headline,image_480x270,price,avg_rating,created,url,visible_instructors',
      'fields[user]': 'title',
    },
    auth: {
      username: API_UDEMY_USERNAME,
      password: API_UDEMY_PASSWORD,
    },
  });
  return data.results.map(result => ({
    createdAt: result.created,
    description: result.headline,
    imageUrl: result.image_480x270,
    instructor: result.visible_instructors[0].title,
    link: `https://www.udemy.com${result.url}`,
    price,
    rating: result.avg_rating,
    title,
  }));
}

module.exports = {
  searchUdemy,
};
