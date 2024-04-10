import React from "react";
import Header from "./Header";
import TopSection from "./TopSection";
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardData from "./CardData";
export default function App(){
    return(
        <div>
            <Header/>
            <TopSection/>
            <CardData/>
            <br></br>
           
            <Counter/>
            
        </div>
    )
}