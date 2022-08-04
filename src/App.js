import React from 'react'
import Card from './component/Card';
import Data from './data.json'
import List from './component/Uniquelist/List';
export default function App() {
    // let items = []
    // for(let x =0;x<Data.length;x++){
    //     items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>)
    // }
//    items = Data.map((item)=> <Card titleText={item.title} descText={item.desc}/>)
  return (
    <div>
      <h1 className='headingStyle'>Arafath App</h1>
      {/* <Card titleText="Arafath Islam" descText="This is 19300038 arafath islam id"/> */}
      {/* <Card titleText={Data[0].title} descText={Data[0].desc}/>
      <Card titleText={Data[1].title} descText={Data[1].desc}/>
      <Card titleText={Data[2].title} descText={Data[2].desc}/>
      <Card titleText={Data[3].title} descText={Data[3].desc}/> */}
      {/* {items} */}
      {/* {Data.map((item,index)=> <Card key={index} titleText={item.title} descText={item.desc}/>)} */}
      <List/>
    </div>
  )
}
