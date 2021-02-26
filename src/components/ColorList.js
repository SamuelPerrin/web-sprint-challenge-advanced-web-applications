import React, { useState } from "react";
import EditMenu from "./EditMenu";
import axios from "axios";
import { putColor, deleteAColor } from '../api/colorCalls';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    
    putColor(colorToEdit)
      .then(res1 => {
        // console.log(res1);
        axios
          .get('http://localhost:5000/api/colors', {
            headers: {
              authorization:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
            }
          })
          .then(res => updateColors(res.data))
          .catch(err => console.log({err}))
      })
      .catch(err => console.log({err}))
  };

  const deleteColor = color => {
    // console.log("deleting", color);
    deleteAColor(color)
      .then(res1 => {
        // console.log(res1)
        axios
          .get('http://localhost:5000/api/colors', {
            headers: {
              authorization:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
            }
          })
          .then(res => updateColors(res.data))
          .catch(err => console.log({err}))
      })
      .catch(err => console.log({err}))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.length ? colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        )) : null}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.