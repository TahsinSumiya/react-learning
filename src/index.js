import { buildQueries } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle = "Arafath App"
const name = "Arafath"
const todoDesc ="Arafath islam the cute human with a volcano inside the brain"
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth()

// const headingStyle = {
//   backgroundColor : "black",
//   color : "white",
//   textAlign: "center",
//   fontSize: "3rem",
//   padding : "15px"
// }



root.render(

  <React.StrictMode>
    <>
    {/* <h1 style ={{color: "blue",fontSize:"5rem"}}>{todoTitle}</h1> */}
    {/* <h1 style ={headingStyle}>{todoTitle}</h1> */}
     {/* <h1 className='headingstyle largesize'>{todoTitle}</h1> */}
      <h1 className='headingstyle' >{todoTitle}</h1>
    <div className='card'>
    <h3  className='cardtitle'>{name}</h3>
    <p  className='cardDesc'>{todoDesc}</p>
    {/* <p>arafath islam</p> */}
     {/* <p>{new Date().getFullYear()}</p> 
    <p>{year}</p> */}
    <p  className='cardFooter'>{day + "/" + month + "/" + year}</p>

    </div>
    
    </>
  </React.StrictMode>
);


