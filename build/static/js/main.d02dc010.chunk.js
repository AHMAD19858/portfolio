(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),c=s(6),a=s.n(c),n=s(3),o=(s(16),s(17),s(42)),r=s(43),l=s(0);function d(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("a",{href:"#intro",className:"logo",children:"Essam."}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(o.a,{className:"icon"}),Object(l.jsx)("span",{children:"+20 1111 66 22 74"})]}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(r.a,{className:"icon"}),Object(l.jsx)("span",{children:"ahmad.essam58198@gmail.com"})]})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})}var m=function(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(l.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})},j=(s(23),[{id:1,title:"Motoon Academy (mobile app)",img:"assets/projects/motton1.png",link:"https://play.google.com/store/apps/details?id=com.moton_app"},{id:2,title:"Motoon Academy (website)",img:"assets/projects/motton2.png",link:"https://www.motoonacademy.com/"},{id:3,title:"Huda Application",img:"assets/projects/huda.png",link:"https://play.google.com/store/apps/details?id=com.al_huda"},{id:4,title:"Movies App",img:"assets/projects/movies.png"},{id:5,title:"Food Truck App",img:"assets/projects/food.png",link:"https://www.behance.net/gallery/106351527/Food-ordering-applicationReact-Native"},{id:6,title:"To-do App",img:"assets/projects/todo.png",link:"https://github.com/AHMAD19858/ToDoList"}]),p=[{id:1,title:"Motoon Academy (website)",img:"assets/projects/motton2.png",link:"https://www.motoonacademy.com/"}],b=[{id:1,title:"Motoon Academy (mobile app)",img:"assets/projects/motton1.png",link:"https://play.google.com/store/apps/details?id=com.moton_app"},{id:2,title:"Huda Application",img:"assets/projects/huda.png",link:"https://play.google.com/store/apps/details?id=com.al_huda"},{id:3,title:"Food Truck App",img:"assets/projects/food.png",link:"https://www.behance.net/gallery/106351527/Food-ordering-applicationReact-Native"},{id:4,title:"To-do App",img:"assets/projects/todo.png",link:"https://github.com/AHMAD19858/ToDoList"},{id:5,title:"Movies App",img:"assets/projects/movies.png"}];function h(){var e=Object(i.useState)("featured"),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),o=Object(n.a)(a,2),r=o[0],d=o[1];return Object(i.useEffect)((function(){switch(s){case"featured":d(j);break;case"web":d(p);break;case"mobile":d(b);break;default:d(j)}}),[s]),Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"}].map((function(e){return Object(l.jsx)(m,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(l.jsx)("div",{className:"container",children:r.map((function(e){return Object(l.jsxs)("a",{className:"item",href:e.link,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("img",{src:e.img,alt:""}),Object(l.jsx)("h3",{children:e.title})]})}))})]})}s(24);var u=function(){return Object(l.jsxs)("div",{className:"testimonials",id:"contact",children:[Object(l.jsx)("h1",{children:"Contact with me"}),Object(l.jsx)("div",{className:"container",children:[{id:1,name:"@A_essam8",link:"https://twitter.com/A_essam8",img:"assets/contact/twitter.jpg",icon:"assets/twitter.png"},{id:2,link:"https://www.facebook.com/swengahmed95/",img:"assets/contact/facebook.jpg",name:"Ahmed Essam",icon:"assets/facebook.png",featured:!0},{id:3,name:"ahmed essam",link:"https://www.linkedin.com/in/ahmed-essam-3144731b7/",img:"assets/contact/linkedin.jfif",icon:"assets/linkedin.png"}].map((function(e){return Object(l.jsxs)("a",{className:e.featured?"card featured":"card",href:e.link,rel:"noreferrer",target:"_blank",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(l.jsx)("img",{className:"user",src:e.img,alt:""}),Object(l.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(l.jsx)("div",{className:"bottom",children:Object(l.jsx)("h3",{children:e.name})})]})}))})]})};s(25);var g=function(){return Object(l.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(l.jsx)("h1",{children:"Testimonials"}),Object(l.jsx)("div",{className:"container",children:[{id:1,name:"Tom Durden",title:"Senior Developer",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."},{id:2,name:"Alex Kalinski",title:"Co-Founder of DELKA",img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",featured:!0},{id:3,name:"Martin Harold",title:"CEO of ALBI",img:"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem"}].map((function(e){return Object(l.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(l.jsx)("img",{className:"user",src:e.img,alt:""})]}),Object(l.jsx)("div",{className:"center",children:e.desc}),Object(l.jsxs)("div",{className:"bottom",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("h4",{children:e.title})]})]})}))})]})},O=(s(26),s(8));function x(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(O.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["front-end engineer (react | anguler)","mobile engineer (react native)"]})}),[]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:"assets/me.png",alt:""})})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{children:"Hi There, I'm"}),Object(l.jsx)("h1",{children:"Ahmad Essam"}),Object(l.jsxs)("h3",{children:["Software Engineer ",Object(l.jsx)("span",{ref:e})]})]}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(27),s(28);var f=function(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contacts"})})]})})};var v=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{menuOpen:s,setMenuOpen:c}),Object(l.jsx)(f,{menuOpen:s,setMenuOpen:c}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(x,{}),Object(l.jsx)(h,{}),Object(l.jsx)(g,{}),Object(l.jsx)(u,{})]})]})};a.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.d02dc010.chunk.js.map