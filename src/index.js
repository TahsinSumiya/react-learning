import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle = "Arafath"
const todoDesc ="a book or other written or printed work, regarded in terms of its content rather than its physical form"
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth()
root.render(
  <React.StrictMode>
    <>
    <h1>{todoTitle}</h1>
    <p>adi</p>
    <p>{todoDesc}</p>
    <p>arafath islam</p>
    {/* <p>{new Date().getFullYear()}</p> */}
    <p>{year}</p>
    <p>{day + "/" + month + "/" + year}</p>
    </>
  </React.StrictMode>
);


