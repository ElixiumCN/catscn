//rick
// import styled from 'styled-components'
import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import Modal from "./Components/Modal";
import '../pages/App.css';

const App = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [ cats, setCats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8');

        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        // setCats(data)
        const catData = data.map((cat, index) => {
          return {
            // name: faker.name.findName(),
            catImage: cat.url
          }
        })
        setCats(catData);


      } catch (error) {
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div>
      <h1>Images</h1>
      {cats.map((catInfo, index) => {
        return (
          <div key={index}>
            <img src={catInfo.catImage} alt="cat"/>
            <p>{catInfo.name}</p> 
          </div>
        )
      })}
    </div>
  );
}


export default App;
