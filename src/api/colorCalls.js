// import axios from 'axios';
import axiosWithAuth from '../helpers/axiosWithAuth';

export const getColors = () => {
  return axiosWithAuth()
    .get(`/api/colors`)
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
    .put(`/api/colors/${color.id}`, color)
    .then(res => res)
    .catch(err => err)
}

export const deleteAColor = (color) => {
  return axiosWithAuth()
    .delete(`/api/colors/${color.id}`)
    .then(res => res)
    .catch(err => err)
}