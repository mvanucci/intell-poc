import axios from 'axios';

const request = axios.create({
  headers: {
    Authorization: 'Token 9b5288a..c5774',
    "Content-Type": 'application/json'
  }
});

export default request;