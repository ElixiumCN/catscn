import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [ cats, setCats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        // setCats(data)
        const catData = data.map((cat, index) => {
          return {
            name: faker.name.findName(),
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
      <h1>Cats4Lyf</h1>
      {cats.map((catInfo, index) => {
        return (
          <div key={index}>
            <img src={catInfo.catImage} alt="a photo of a cat" />
            <p>{catInfo.name}</p> 
          </div>
        )
      })}
    </div>
  );
}

export default App; 