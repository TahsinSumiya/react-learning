

import React from "react"


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

function Card(props){
  const {titleText,descText} = props;
  return  <div className='card'>
            {/* <h3  className='cardTitle'>{props. titleText}</h3> */}
            <h3  className='cardTitle'>{titleText}</h3>
            <p  className='cardDesc'>{descText}</p>
          
            <p  className='cardFooter'>{day + "/" + month + "/" + year}</p>

            </div>
}
export default Card;