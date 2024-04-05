import React from "react";

export default function Counter(){
    let count=0;
    function increasecount(){
        console.log(count);
        count=count+1;
        }
        return (
            <>
            <h3>Counter: {count}</h3>
            <button className="btn" onClick={increasecount}>increase</button>
            </>
        )
}