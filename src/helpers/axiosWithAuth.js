import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  
  return axios.create({
    headers:{
      'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
    },
    baseURL: 'http://localhost:5000',
  });
}

export default axiosWithAuth;

//Task List:
//Build and export a function used to send in our authorization token