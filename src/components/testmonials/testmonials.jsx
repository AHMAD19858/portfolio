import React from 'react'
import "./testmonials.scss";
import omar from "../../assets/omar.jpg"
import rewan from "../../assets/friends/rewan.jfif"

function testmonials() {
  const data = [
    {
      id: 1,
      name: "Omar Ahmed",
      title: "Front-end Engineer",
      img: omar,
      desc:
        "Ahmed is a hard-working, continue to developing and committed person. He always looks forward to the next and maintain constant upgrade of his knowledge.",
    },
    {
      id: 2,
      name: "Rewan Gameel",
      title: "Software Enginner",
      img: rewan,
      desc:
        "Besides being super cooperative and helpful, Ahmed is a delight to work with and a skilled developer, goal oriented and self motivated. It was a pleasure working alongside with him.",
      featured: true,
    },
/*     {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    }, */
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default testmonials
