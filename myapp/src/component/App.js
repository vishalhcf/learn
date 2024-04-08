import React from "react";
import Header from "./Header";
import TopSection from "./TopSection";
import Counter from "./Counter";

import 'bootstrap/dist/css/bootstrap.min.css'
export default function App(){
    return(
        <div>
            <Header/>
            <TopSection/>
            <br></br>
           
            <Counter/>
            
        </div>
    )
}