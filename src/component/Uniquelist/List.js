import React from "react"
import {v4 as uuidv4} from 'uuid';
 const arafathList = [
    {   
        id : uuidv4(),
        title : "Arafath",
        desc:"This is Arafath Islam"
    },
    {
        id : uuidv4(),
        title : "Arafath Islam",
        desc:"This is Arafath Islam id -19300038"
    },
    {
        id : uuidv4(),
        title : "Arafath The great programmer",
        desc:"life is all about coding"
    },
    {
        id : uuidv4(),
        title : "Arafath the navbar",
        desc:"navbar and problem solved"
    }

];


export default function List() {
    // console.log(uuidv4())
  return (
    <div>
      {arafathList.map((arafath)=>{
        const {id,title,desc}=arafath
        // return <div key={arafath.id}>
        return <div key={id}>
            <h3>{title}</h3>
            {/* <p>{arafath.desc}</p> */}
            <p>{desc}</p>



        </div>
      })}
    </div>
  )
}

