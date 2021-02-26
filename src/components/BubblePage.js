import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from 'axios';
import { getColors } from '../api/colorCalls';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // console.log("in BubblePage's useEffect with", axiosWithAuth)

    getColors()
      .then(res => {
        // console.log(res);
        setColorList(res.data)
      })
      .catch(err => {
        console.log("GET ERR in BubblePage", {err});
      })
  },[]);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
