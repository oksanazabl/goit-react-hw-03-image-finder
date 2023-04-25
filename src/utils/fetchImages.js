import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/const';

axios.defaults.baseURL = BASE_URL;

function fetchImages(query, page, perPage) {
  const response =axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}

export default fetchImages;