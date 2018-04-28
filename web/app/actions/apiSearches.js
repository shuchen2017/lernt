import axios from 'axios';
import { API_UDEMY_USERNAME, API_UDEMY_PASSWORD } from '../../apiConfig';

export const searchUdemy = async (searchTerm) => {
  const { data } = await axios.get('https://www.udemy.com/api-2.0/courses', {
    params: {
      search: searchTerm,
      category: 'Development',
      'fields[course]':
        'title,headline,image_480x270,price,url,visible_instructors,primary_subcategory',
      'fields[user]': 'title',
    },
    auth: {
      username: API_UDEMY_USERNAME,
      password: API_UDEMY_PASSWORD,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  return data.results.map(result => ({
    category: result.primary_subcategory.title,
    description: result.headline,
    imageUrl: result.image_480x270,
    instructor: result.visible_instructors[0].title,
    url: `https://www.udemy.com${result.url}`,
    price: Number(result.price.slice(1)),
    title: result.title,
  }));
};
