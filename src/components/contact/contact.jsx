import React from 'react'
import "./contact.scss";
function Contact() {
  const data = [
    {
      id: 1,
      name: "@A_essam8",
      link: "https://twitter.com/A_essam8",
      img: "assets/contact/twitter.jpg",
      icon: "assets/twitter.png",

    },
    {
      id: 2,
      link: "https://www.facebook.com/swengahmed95/",
      img: "assets/contact/facebook.jpg",
      name: "Ahmed Essam",
      icon: "assets/facebook.png",

      featured: true,
    },
    {
      id: 3,
      name: "ahmed essam",
      link: "https://www.linkedin.com/in/ahmed-essam-3144731b7/",
      img: "assets/contact/linkedin.jfif",
      icon: "assets/linkedin.png",
    },
  ];
  return (
    <div className="testimonials" id="contact">
      <h1>Contact with me</h1>
      <div className="container">
        {data.map((d) => (
          <a className="card connect" href={d.link} rel="noreferrer" target="_blank">
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>

            <div className="bottom">
              <h3>{d.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
