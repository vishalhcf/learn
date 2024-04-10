import React from 'react'


export default function CardData() {

     const cardlist=[

        {id:1,Title:"card title ",des:"lorem afshvgcguhfuc",img:"https://up.yimg.com/ib/th?id=OIP.FrEB_Myrf7R4nf0XsducbwHaEK&pid=Api&rs=1&c=1&qlt=95&w=201&h=113"},
        {id:2,Title:"card title ",des:"lorem afshvgcguhfuc",img:"https://up.yimg.com/ib/th?id=OIP.FrEB_Myrf7R4nf0XsducbwHaEK&pid=Api&rs=1&c=1&qlt=95&w=201&h=113"},
        {id:3,Title:"card title ",des:"lorem afshvgcguhfuc",img:"https://up.yimg.com/ib/th?id=OIP._IsQ2c9MvA8e5rnokM9qkQHaIc&pid=Api&rs=1&c=1&qlt=95&w=109&h=124"},
        {id:4,Title:"card title ",des:"lorem afshvgcguhfuc",img:"https://up.yimg.com/ib/th?id=OIP.2rsFJAa5itU6v5dtsGeeMQHaEo&pid=Api&rs=1&c=1&qlt=95&w=198&h=124"},
        {id:5,Title:"card title ",des:"lorem afshvgcguhfuc",img:"https://up.yimg.com/ib/th?id=OIP.2rsFJAa5itU6v5dtsGeeMQHaEo&pid=Api&rs=1&c=1&qlt=95&w=198&h=124"},
     ]

  return (
    <div>
        {cardlist.map((card) =>{
           return <div className="card  w-25" key={card.id}>
             <img src={card.img} class="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">{card.title}</h5>
                   <p className="card-text">{card.des}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        }
        )}
    </div>
  )
}
