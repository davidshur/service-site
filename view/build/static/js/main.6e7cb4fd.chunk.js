(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{61:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),s=n.n(c),i=n(17),o=(n(61),n(6)),l=n(15),h=n(20),j=n(26),d=n(31),u=n(1);var b=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];function c(){r(!1)}return Object(u.jsxs)(d.a,{collapseOnSelect:!0,expanded:n,expand:"lg",bg:"light",variant:"light",children:[Object(u.jsx)(d.a.Brand,{as:i.b,to:"/",children:"In Memory of John Huynh"}),Object(u.jsx)(d.a.Toggle,{onClick:function(){r(!n)},"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(j.a,{className:"ml-auto",children:[Object(u.jsx)(j.a.Link,{onClick:c,as:i.b,to:"/",children:"Home"}),Object(u.jsx)(j.a.Link,{onClick:c,as:i.b,to:"/photos",children:"Photos"}),Object(u.jsx)(j.a.Link,{onClick:c,as:i.b,to:"/videos",children:"Videos"}),Object(u.jsx)(j.a.Link,{onClick:c,as:i.b,to:"/thoughtsAndPrayers",children:"Thoughts and Prayers"}),Object(u.jsx)(j.a.Link,{onClick:c,className:"d-lg-none text-success",href:"https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer",target:"_blank",rel:"noreferrer",children:"Donate"}),Object(u.jsx)("a",{onClick:c,className:"ml-2 d-none d-lg-block",href:"https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(h.a,{variant:"success",children:"Donate"})})]})})]})},m=n(56),x=n.p+"static/media/banner_background.b7aa7c08.jpg";var p=function(){return Object(u.jsxs)(m.a,{className:"d-flex flex-column align-items-center",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(".concat(x,")"),backgroundSize:"cover",backgroundPosition:"center"},children:[Object(u.jsx)("h1",{className:"text-white",children:"Live Memorial Service "}),Object(u.jsxs)("p",{className:"text-white",children:["We will be hosting a memorial service for John on ",Object(u.jsx)("strong",{children:"April 30th, 2021 at 3pm."})," "]}),Object(u.jsx)("p",{className:"text-white",children:"Please join the Zoom livestream to help us commemorate the amazing life of John Huynh. A recording will be uploaded after the event for those who are unable to attend the live stream."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://youtu.be/AXuSxts3CIk",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(h.a,{variant:"primary",children:"Join the Livestream"})})})]})},f=n(21),O=n(27),g=n(8),v=[{id:0,img:n.p+"static/media/john1.c13895bb.jpg",alt:"john0",title:"title0",desc:"desc0"},{id:1,img:n.p+"static/media/john2.257023b6.jpg",alt:"john1",title:"title1",desc:"desc1"},{id:2,img:n.p+"static/media/john3.4e56a511.jpg",alt:"john2",title:"title2",desc:"desc2"},{id:3,img:n.p+"static/media/john4.406584aa.jpg",alt:"john3",title:"title3",desc:"desc3"},{id:4,img:n.p+"static/media/john5.60db6de1.jpg",alt:"john4",title:"title4",desc:"desc4"}];var y=function(){return Object(u.jsxs)(f.a,{children:[Object(u.jsx)("h3",{children:"Photo Gallery"}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:v.map((function(e){return Object(u.jsx)(g.a,{style:{width:"18rem"},children:Object(u.jsx)(g.a.Img,{variant:"top",src:e.img})})}))})]})},w=n(14),k=n.n(w),C=n(23),N=n(24),_=n.n(N);var S=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];function c(){return s.apply(this,arguments)}function s(){return(s=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/verify");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("/api/verify",{id:t});case 2:c();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){c()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Verify Posts Here"}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:n&&n.map((function(e){return Object(u.jsx)(g.a,{bg:e.verified?"":"danger",className:e.verified?"":"text-white",children:Object(u.jsxs)(g.a.Body,{children:[Object(u.jsx)(g.a.Title,{children:e.name}),Object(u.jsx)(g.a.Text,{children:e.message}),!e.verified&&Object(u.jsx)(h.a,{id:e._id,onClick:function(e){return function(e){return i.apply(this,arguments)}(e.target.id)},variant:"outline-light",children:"Verify"})]})},e._id)}))})]})};var T=function(){return Object(u.jsx)(f.a,{children:Object(u.jsx)(S,{})})};var J=function(){return Object(u.jsx)("iframe",{width:"100%",src:"https://www.youtube.com/embed/t6dT4f6eX_o?rel=0&modestbranding=1&autohide=1&showinfo=0",title:"John Gets Baptized",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})};var L=function(){return Object(u.jsx)("iframe",{width:"100%",src:"https://www.youtube.com/embed/oa01uppTVTA?rel=0&modestbranding=1&autohide=1&showinfo=0",title:"Our Buddy John",frameBorder:"0",allow:"",allowFullScreen:!0})};var B=function(){return Object(u.jsxs)(f.a,{fluid:!0,className:"d-flex flex-column align-items-center",children:[Object(u.jsxs)("div",{className:"d-flex flex-column mb-4",children:[Object(u.jsx)("h3",{className:"mb-3",children:"Memories of John"}),Object(u.jsx)(L,{})]}),Object(u.jsxs)("div",{className:"d-flex flex-column mb-4",children:[Object(u.jsx)("h3",{className:"mb-3",children:"John's Baptism"}),Object(u.jsx)(J,{})]})]})},H=n(18);var P=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(!1),d=Object(l.a)(j,2),b=d[0],m=d[1];function x(){return(x=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("/api/notes",{name:n,message:i});case 2:r(""),o(""),m(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)(g.a,{bg:"primary",className:"text-white mb-3",children:Object(u.jsxs)(g.a.Body,{children:[Object(u.jsx)(g.a.Title,{children:"Share your thoughts and prayers!"}),Object(u.jsxs)(H.a,{children:[Object(u.jsxs)(H.a.Group,{children:[Object(u.jsx)(H.a.Label,{children:"Name"}),Object(u.jsx)(H.a.Control,{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter your name"})]}),Object(u.jsxs)(H.a.Group,{children:[Object(u.jsx)(H.a.Label,{children:"Message"}),Object(u.jsx)(H.a.Control,{as:"textarea",value:i,onChange:function(e){return o(e.target.value)},placeholder:"Enter your thoughts and prayers",rows:3}),Object(u.jsx)(H.a.Text,{className:"text-white",children:"Note: Your name and message may be visible to other website visitors."})]}),b&&Object(u.jsx)("p",{style:{fontSize:"12px"},className:"text-white",children:"Your thought or prayer has been saved. You might see it on the thoughts and prayers page soon!"}),Object(u.jsx)(h.a,{variant:"outline-light",onClick:function(){return x.apply(this,arguments)},children:"Share"})]})]})})};var I=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/notes");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Thoughts and Prayers"}),Object(u.jsx)("hr",{}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(P,{}),n&&n.map((function(e){return Object(u.jsx)(g.a,{children:Object(u.jsxs)(g.a.Body,{children:[Object(u.jsx)(g.a.Title,{children:e.name}),Object(u.jsx)(g.a.Text,{children:e.message})]})},e._id)}))]})]})};var A=function(){return Object(u.jsx)(f.a,{fluid:!0,className:"d-flex flex-wrap",children:Object(u.jsx)(I,{})})};var F=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Eulogy"}),Object(u.jsx)("p",{className:"text-muted",children:"By: Rumeet Huynh"}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"I have the impossible task of summarizing John Huynh's life. John was loved by everyone, I can say that confidently."}),Object(u.jsx)("p",{children:"He was born in Lancaster , Pennsylvania in 1992 to Long and Anh. He was the oldest of 3 children as the big brother to Binh and Linda. He lived in Pennsylvania until 2014 when he moved out to Washington. He then met his beloved wife, Rumeet, in 2015. John worked in the health insurance industry as well as being a local business owner."}),Object(u.jsx)("p",{children:"John enjoyed music, martial arts, and looking sharp for any occasion. His number one goal in life was to honor his mother and build a successful way to provide for his family."}),Object(u.jsx)("p",{children:"He was always focused on improving the kind of person he was and seeking the truth. This led him to finding and building a relationship with the Lord in 2019. This change affected every aspect of his life going forward and John felt called to live a life that exemplified Christ\u2019s love. He is a loving son, brother, husband, and a true follower of Christ."})]})};var E=function(){return Object(u.jsxs)(f.a,{children:[Object(u.jsx)(F,{}),Object(u.jsx)(I,{})]})};var z=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(p,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/photos",component:y}),Object(u.jsx)(o.a,{exact:!0,path:"/videos",component:B}),Object(u.jsx)(o.a,{exact:!0,path:"/thoughtsAndPrayers",component:A}),Object(u.jsx)(o.a,{exact:!0,path:"/verify",component:T}),Object(u.jsx)(o.a,{path:"/",component:E})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(90);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(z,{})})}),document.getElementById("root")),M()}},[[91,1,2]]]);
//# sourceMappingURL=main.6e7cb4fd.chunk.js.map