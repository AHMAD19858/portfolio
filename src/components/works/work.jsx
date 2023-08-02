  
import { useState } from "react";
import "./work.scss";

export default function Work() {

  const data = [
    {
      id: 1,
      icon: "./assets/companies/zad.jpg",
      company:"dd",
      title: "Software engineern",
      year:"Jan 2018 - Present",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
 
      },
    {
      id: 2,
      icon: "./assets/companies/sindion.jfif",
      company:"dd",
      title: "Software engineer",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        year:"Jan 2018 - Present",
   
    },
    {
      id: 3,
      icon: "./assets/companies/hubb.jfif",
      company:"dd",
      title: "Software engineer",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        year:"Jan 2018 - Present",

    },
    {
      id: 4,
      icon: "./assets/companies/dev.jpg",
      company:"dd",
      title: "Software engineer",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        year:"Jan 2018 - Present",

    },
    
  ];


  return (
   <div className="works" id="works">
      <div className="title">
      <h1>Portfolio</h1>
      </div>
     <div className="main" >
{data.map((item)=>{
  return(
    <div className="item">
    <div className="imgContainer">
    <img
                className="company"
                src={item.icon}
                alt=""
              />
    </div>
    <p>{item.title}</p>


    
    <p>
       Company : {item.company}<br/>
       Year : {item.year}<br/>
       Description : {item.desc}<br/>
                            </p>

    
  </div>
  )
})}
    </div>
   </div>
  );
}
