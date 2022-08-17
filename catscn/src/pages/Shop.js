//rick
import styled from 'styled-components'
import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import Modal from "./Components/Modal";
import '../pages/App.css';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [cats, setCats] = useState([])

// https://rickandmortyapi.com/api/character/
  
  // useEffect only runs once when component is first rendered
  useEffect(() => {
    // asynchronous function so we can wait for data to be fetched
    const fetchData = async () => {
      try {
        setErrorMsg('')
        // wait for fetch request from API endpoint and store rsponse in variable
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
        
        // check to see if the response was successful otherwise throw error
        if(!response.ok){
          throw new Error(response.statusText)
        }
        // parse JSON response into normal javascript
        const data = await response.json();
        setCats(data.results)
      } catch (error) {
        // catch an error that occurs in the try block
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
    // empty array makes sure useEffect only runs when component mounts and not when component re-renders
  }, [])

  // display error message to user if something went wrong
  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="App">
      <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>Open</button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}



<MyAwesomeStuff background="#e76f51"><h1>Cats</h1></MyAwesomeStuff>
<MyAwesomeStuff fontsize="10px" background="#2a9d8f"><h1>Cats</h1></MyAwesomeStuff>
      {cats.map((rickcats, index) => {
        return (
          <div key={index}>
            <p>{rickcats.id}</p>
          </div>
        )
      })}
    </div>
    
  );
}




// const HelloSomething = (cats) => {
//   console.log("hello");
//   return (
//     <MyTesting><h1>{cats.name[0]}</h1></MyTesting>
//   )
// }


// HelloSomething();




const MyAwesomeStuff = styled.nav`
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.fontsize};
  padding: 10px;
  color: white;
`
// const MyTesting = styled.nav`
// background-color: green;
// padding: 10px;
// color: white;
// `



export default Home;
