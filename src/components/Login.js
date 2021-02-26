import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginValues, setLoginValues] = useState({username:'', password:''});
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // useEffect(()=>{
  //   axios
  //     .delete(`http://localhost:5000/api/colors/1`, {
  //       headers:{
  //         'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  //       }
  //     })
  //     .then(res=>{
  //       axios.get(`http://localhost:5000/api/colors`, {
  //         headers:{
  //           'authorization': ""
  //         }
  //       })
  //       .then(res=> {
  //         console.log(res);
  //       });
  //       console.log(res);
  //     })
  // });

  const handleChange = e => {
    setLoginValues({...loginValues, [e.target.name]:e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', loginValues)
      .then(res => {
        console.log(res);
        setErrorMessage('');
        localStorage.setItem('token',JSON.stringify(res.data.payload));
        setLoginValues({username:'', password:''});
        history.push('/bubbles');
      })
      .catch(err => {
        console.log('ERROR', {err});
        setErrorMessage(err.response.data.error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>username
          <input
            name='username'
            type='text'
            value={loginValues.username}
            onChange={handleChange}
          />
        </label>
        <label>password
          <input
            name='password'
            type='password'
            value={loginValues.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
      {errorMessage ? <p style={{color:'red'}}>Username or Password not valid.</p> : null}
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.