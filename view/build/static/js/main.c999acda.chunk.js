(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{61:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(28),c=n.n(s),i=n(16),o=(n(61),n(6)),l=n(19),h=n(26),j=n(31),d=n(1);var u=function(){return Object(d.jsxs)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:[Object(d.jsx)(j.a.Brand,{as:i.b,to:"/",children:"John Huynh"}),Object(d.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(h.a,{className:"ml-auto",children:[Object(d.jsx)(h.a.Link,{as:i.b,to:"/",children:"Home"}),Object(d.jsx)(h.a.Link,{as:i.b,to:"/photos",children:"Photos"}),Object(d.jsx)(h.a.Link,{as:i.b,to:"/videos",children:"Videos"}),Object(d.jsx)(h.a.Link,{as:i.b,to:"/thoughtsAndPrayers",children:"Thoughts and Prayers"}),Object(d.jsx)(h.a.Link,{className:"d-lg-none text-success",href:"https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer",target:"_blank",rel:"noreferrer",children:"Donate"}),Object(d.jsx)("a",{className:"d-none d-lg-block",href:"https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(l.a,{variant:"success",children:"Donate"})})]})})]})},b=n(56);var m=function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h1",{children:"Live Memorial Service "}),Object(d.jsx)("p",{children:"We will be hosting a memorial service for John on April 30th, 2020 at 3pm. "}),Object(d.jsx)("p",{children:"Please join the Zoom livestream to help us commemorate the amazing life of John Huynh."}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://us02web.zoom.us/j/88911364511?pwd=bEZqRzJFNVlyckdWczdqaXBFSXlJZz09",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(l.a,{variant:"primary",children:"Join the Livestream"})})})]})},p=n(20),x=n(27),f=n(8),O=[{id:0,img:n.p+"static/media/john1.c13895bb.jpg",alt:"john0",title:"title0",desc:"desc0"},{id:1,img:n.p+"static/media/john2.257023b6.jpg",alt:"john1",title:"title1",desc:"desc1"},{id:2,img:n.p+"static/media/john3.4e56a511.jpg",alt:"john2",title:"title2",desc:"desc2"},{id:3,img:n.p+"static/media/john4.406584aa.jpg",alt:"john3",title:"title3",desc:"desc3"},{id:4,img:n.p+"static/media/john5.60db6de1.jpg",alt:"john4",title:"title4",desc:"desc4"}];var g=function(){return Object(d.jsxs)(p.a,{children:[Object(d.jsx)("h3",{children:"Photo Gallery"}),Object(d.jsx)("hr",{}),Object(d.jsx)(x.a,{children:O.map((function(e){return Object(d.jsx)(f.a,{style:{width:"18rem"},children:Object(d.jsx)(f.a.Img,{variant:"top",src:e.img})})}))})]})},v=n(14),y=n.n(v),w=n(23),k=n(21),J=n(24),N=n.n(J);var _=function(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=t[0],r=t[1];function s(){return c.apply(this,arguments)}function c(){return(c=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/notes");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/verification",{id:t});case 2:s();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){s()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Verify Posts Here"}),Object(d.jsx)("hr",{}),Object(d.jsx)(x.a,{children:n&&n.map((function(e){return Object(d.jsx)(f.a,{bg:!e.verified&&"danger",className:!e.verified&&"text-white",children:Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(f.a.Title,{children:e.name}),Object(d.jsx)(f.a.Text,{children:e.message}),Object(d.jsx)(l.a,{id:e._id,onClick:function(e){return function(e){return i.apply(this,arguments)}(e.target.id)},variant:e.verified?"outline-danger":"outline-light",children:e.verified?"Remove":"Verify"})]})},e._id)}))})]})};var T=function(){return Object(d.jsx)(p.a,{children:Object(d.jsx)(_,{})})};var L=function(){return Object(d.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/t6dT4f6eX_o?rel=0&modestbranding=1&autohide=1&showinfo=0",title:"John Gets Baptized",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})};var S=function(){return Object(d.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oa01uppTVTA?rel=0&modestbranding=1&autohide=1&showinfo=0",title:"Our Buddy John",frameBorder:"0",allow:"",allowFullScreen:!0})};var B=function(){return Object(d.jsxs)(p.a,{className:"d-flex flex-column align-items-center",children:[Object(d.jsxs)("div",{className:"d-flex flex-column mb-4",children:[Object(d.jsx)("h3",{className:"mb-3",children:"Memories of John"}),Object(d.jsx)(S,{})]}),Object(d.jsxs)("div",{className:"d-flex flex-column mb-4",children:[Object(d.jsx)("h3",{className:"mb-3",children:"John's Baptism"}),Object(d.jsx)(L,{})]})]})},H=n(17);var C=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(k.a)(s,2),i=c[0],o=c[1],h=Object(a.useState)(!1),j=Object(k.a)(h,2),u=j[0],b=j[1];function m(){return(m=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/notes",{name:n,message:i});case 2:r(""),o(""),b(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)(f.a,{bg:"primary",className:"text-white mb-3",children:Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(f.a.Title,{children:"Share your thoughts and prayers!"}),Object(d.jsxs)(H.a,{children:[Object(d.jsxs)(H.a.Group,{children:[Object(d.jsx)(H.a.Label,{children:"Name"}),Object(d.jsx)(H.a.Control,{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter your name"})]}),Object(d.jsxs)(H.a.Group,{children:[Object(d.jsx)(H.a.Label,{children:"Message"}),Object(d.jsx)(H.a.Control,{as:"textarea",value:i,onChange:function(e){return o(e.target.value)},placeholder:"Enter your thoughts and prayers",rows:3}),Object(d.jsx)(H.a.Text,{className:"text-white",children:"Note: Your name and message may be visible to other website visitors."})]}),u&&Object(d.jsx)("p",{style:{fontSize:"12px"},className:"text-white",children:"Your thought or prayer has been saved. You might see it on the thoughts and prayers page soon!"}),Object(d.jsx)(l.a,{variant:"outline-light",onClick:function(){return m.apply(this,arguments)},children:"Share"})]})]})})};var P=function(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/notes");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Thoughts and Prayers"}),Object(d.jsx)("hr",{}),Object(d.jsxs)(x.a,{children:[Object(d.jsx)(C,{}),n&&n.map((function(e){return Object(d.jsx)(f.a,{children:Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)(f.a.Title,{children:e.name}),Object(d.jsx)(f.a.Text,{children:e.message})]})},e._id)}))]})]})};var F=function(){return Object(d.jsx)(p.a,{fluid:!0,className:"d-flex flex-wrap",children:Object(d.jsx)(P,{})})};var z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Eulogy"}),Object(d.jsx)("p",{className:"text-muted",children:"By: Rumeet Huynh"}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{children:"I have the impossible task of summarizing John Huynh's life. John was loved by everyone, I can say that confidently."}),Object(d.jsx)("p",{children:"He was born in Lancaster , Pennsylvania in 1992 to Long and Anh. He was the oldest of 3 children as the big brother to Binh and Linda. He lived in Pennsylvania until 2014 when he moved out to Washington. He then met his beloved wife, Rumeet, in 2015. John worked in the health insurance industry as well as being a local business owner."}),Object(d.jsx)("p",{children:"John enjoyed music, martial arts, and looking sharp for any occasion. His number one goal in life was to honor his mother and build a successful way to provide for his family."}),Object(d.jsx)("p",{children:"He was always focused on improving the kind of person he was and seeking the truth. This led him to finding and building a relationship with the Lord in 2019. This change affected every aspect of his life going forward and John felt called to live a life that exemplified Christ\u2019s love. He is a loving son, brother, husband, and a true follower of Christ."})]})};var E=function(){return Object(d.jsxs)(p.a,{children:[Object(d.jsx)(z,{}),Object(d.jsx)(P,{})]})};var A=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/photos",component:g}),Object(d.jsx)(o.a,{exact:!0,path:"/videos",component:B}),Object(d.jsx)(o.a,{exact:!0,path:"/thoughtsAndPrayers",component:F}),Object(d.jsx)(o.a,{exact:!0,path:"/verification",component:T}),Object(d.jsx)(o.a,{path:"/",component:E})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(90);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(A,{})})}),document.getElementById("root")),I()}},[[91,1,2]]]);
//# sourceMappingURL=main.c999acda.chunk.js.map