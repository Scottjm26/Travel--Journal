import React from "react"

export default function Card(props){
    console.log(props)
return( <div className ="main-container">
        
        <img src ={props.data.imageUrl} />
        <div className ="info-container">
        
        <h3 className ="country-name"> 📍 {props.data.location}<span><a href="{props.data.googleMapsUrl}">View on Google Maps</a></span> </h3>
       
        <h1>{props.data.title}</h1>
        <h4>{props.data.startDate} - {props.data.endDate}</h4>
        <p>{props.data.description}</p>
        

        </div>
        </div>

)


}
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"