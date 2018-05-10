import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-15dab.firebaseio.com/'
});

export default instance;