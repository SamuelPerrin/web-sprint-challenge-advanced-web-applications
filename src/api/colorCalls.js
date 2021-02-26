// import axios from 'axios';
import axiosWithAuth from '../helpers/axiosWithAuth';

export const getColors = () => {
  return axiosWithAuth()
    .get(`http://localhost:5000/api/colors`, {
      headers:{
        'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
      }
    })
    .then(res => {
      console.log("from inside getColors")
      return res
    })
    .catch(err => {
      return err
    })
};

export const putColor = (color) => {
  return axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${color.id}`, color, {
      headers: {
        authorization:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
      }
    })
    .then(res => res)
    .catch(err => err)
}

export const deleteAColor = (color) => {
  return axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`, {
      headers:{
        authorization:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
      }
    })
    .then(res => res)
    .catch(err => err)
}