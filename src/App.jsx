import React from 'react'
import './App.css'
import data from "./data.jsx"
import Card from "./Card.jsx"
import Header from "./Header.jsx"
  

export default function App() {
  console.log(data)
  const newData = data.map(function(data){return( <Card 
    key ={data.title}
    data ={data}
    />)
})


return(

  <div>
   <Header />
  {newData}

  </div>
)
}
