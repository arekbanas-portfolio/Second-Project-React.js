(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/Forest.f6960cf4.mp4"},45:function(e,t,a){e.exports=a(98)},50:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(14),s=a(15),o=a(4),m=a(5),u=a(7),d=a(6),p=a(8),h=(a(50),a(17)),E=function(e){return r.a.createElement("header",{onChange:e.opacity,className:"header"},r.a.createElement("h2",null,"Arkadiusz Bana\u015b"),r.a.createElement("h3",null,"Junior Front-End Developer"),r.a.createElement("ul",{className:"header__socials"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/arek.banas.9?ref=bookmarks"},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/arek-bana%C5%9B-6071a8180/"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/arekbanas-portfolio?tab=repositories"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))),r.a.createElement("div",{className:"header__wave header__wave1"}),r.a.createElement("div",{className:"header__wave header__wave2"}),r.a.createElement("div",{className:"header__wave header__wave3"}),r.a.createElement("div",{className:"header__wave header__wave4"}))},v=a(19),f=function(e){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("div",{onClick:e.click,className:e.active?"hamburger active":"hamburger"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:e.active?"nav-container active":"nav-container"},r.a.createElement("div",{className:"main-nav"},r.a.createElement("ul",{className:e.active?"menu active":"menu"},r.a.createElement("li",null,"MENU"),r.a.createElement("span",{className:e.active?"border active":"border"}),r.a.createElement("li",null,r.a.createElement(v.Link,{onClick:e.click,activeClass:"active",to:"header",spy:!0,smooth:!0,offset:-100,duration:1e3},"STRONA G\u0141\xd3WNA")),r.a.createElement("li",null,r.a.createElement(v.Link,{onClick:e.click,activeClass:"active",to:"about-container",spy:!0,smooth:!0,offset:-100,duration:1e3},"O MNIE")),r.a.createElement("li",null,r.a.createElement(v.Link,{onClick:e.click,activeClass:"active",to:"applications",spy:!0,smooth:!0,offset:-100,duration:1e3},"APLIKACJE")),r.a.createElement("li",null,r.a.createElement(v.Link,{onClick:e.click,activeClass:"active",to:"form-contact-wrapper",spy:!0,smooth:!0,offset:-100,duration:1e3},"KONTAKT"))))))},g=a(10),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).addSection=function(){var e=document.querySelector(".about-container");window.scrollY>e.offsetTop-400?(g.gsap.to(a.myImage,{x:-10,opacity:1,duration:1}),g.gsap.to(a.border,{x:-30,opacity:1,duration:.5}),a.setState({section:!0})):(g.gsap.to(a.myImage,{x:0,opacity:0,duration:.5}),g.gsap.to(a.border,{x:0,opacity:0,duration:.5}),a.setState({section:!1,show:"",index:0}))},a.addLetter=function(){var e=a.state.index,t=a.state.text.charAt(e);e<=a.state.text.length&&a.setState({show:a.state.show+t,index:e+1})},a.cursorAnimation=function(){a.setState({cursor:a.state.cursor,active:!a.state.active})},a.myImage=null,a.border=null,a.state={text:"Jestem Arek. Moim celem jest zosta\u0107 Junior Front-End Developerem. Oto m\xf3j drugi projekt wykonany przy u\u017cyciu biblioteki React - niebawem ulepsz\u0119 go o wersj\u0119 w j\u0119zyku angielskim oraz z pewno\u015bci\u0105 rozbuduj\u0119 o nowe aplikacje. Je\u017celi widzisz we mnie potencja\u0142 - zapraszam do kontaktu.",index:0,show:"",cursor:"|",active:!1,section:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.addSection),this.typeWriter=setInterval(this.addLetter,30),this.cursorTyping=setInterval(this.cursorAnimation,500)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.addSection),clearInterval(this.typeWriter)}},{key:"render",value:function(){var e=this,t=this.state,a=t.show,n=t.active,c=t.cursor,l=t.section;return r.a.createElement("div",{className:"about-container"},r.a.createElement("picture",{ref:function(t){return e.myImage=t},className:"my-image"},r.a.createElement("span",{ref:function(t){return e.border=t},className:"border-image"})),r.a.createElement("article",{className:l?"type-writer active":"type-writer"},a,r.a.createElement("span",{className:n?"cursor active":"cursor"},c)),r.a.createElement("button",{className:"first-project"},r.a.createElement("a",{href:"http://www.arekbanas-portfolio.cba.pl"},"PIERWSZY PROJEKT (jQuery)")))}}]),t}(n.Component),b=a(39),y=a.n(b),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).addLetter=function(){var e=a.state,t=e.technologies,n=e.show,r=e.loopNum,c=e.isDeleting,l=t[r%t.length];a.setState({show:c?l.substring(0,n.length-1):l.substring(0,n.length+1),typingSpeed:c?40:100}),!c&n===l?setTimeout(function(){return a.setState({isDeleting:!0})},500):c&&""===n&&a.setState({isDeleting:!1,loopNum:r+1})},a.cursorAnimation=function(){a.setState({cursor:a.state.cursor,active:!a.state.active})},a.state={technologies:["HTML5","CSS3 (SCSS)","BEM","GSAP","JavaScript (ES6)","jQuery","React.js"],show:"",loopNum:0,isDeleting:!1,typingSpeed:100,cursor:"|",active:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.typeWriter=setInterval(this.addLetter,100),this.cursorTyping=setInterval(this.cursorAnimation,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.typeWriter)}},{key:"render",value:function(){var e=this.state,t=e.cursor,a=e.active;return r.a.createElement("section",{className:"technologies-container"},r.a.createElement("h2",null,"Technologie:"),r.a.createElement("h3",null,this.state.show,r.a.createElement("span",{className:a?"cursor active":"cursor"},t)),r.a.createElement("video",{src:y.a,autoPlay:!0,loop:!0,playsInline:!0,muted:!0}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.setState({value:e.target.value})},a.handleCitySubmit=function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&APPID=").concat("c088de3f8e5b557ade3694c89f7738f4","&units=metric");fetch(t).then(function(e){if(e.ok)return e;throw Error("B\u0142\u0105d po\u0142\u0105czenia")}).then(function(e){return e.json()}).then(function(e){a.setState({loader:!0}),setTimeout(function(){a.setState({loader:!1})},1e3),a.setState({error:!1,result:e.name,temp:e.main.temp,temp_feels:e.main.feels_like,temp_min:e.main.temp_min,temp_max:e.main.temp_max,sunrise:e.sys.sunrise,sunset:e.sys.sunset,pressure:e.main.pressure,wind:e.wind.speed,icon:e.weather[0].icon,icon_alt:e.weather[0].description,city:a.state.value,value:""})}).catch(function(e){a.setState({error:!0,city:a.state.value,value:""})})},a.state={value:"",city:"",result:"",temp:"",temp_feels:"",temp_min:"",temp_max:"",sunrise:"",sunset:"",pressure:"",wind:"",icon:"",icon_alt:"",error:!1,loader:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loader,a=e.error,n=e.sunrise,c=e.sunset,l=e.temp,i=e.temp_feels,s=e.temp_min,o=e.temp_max,m=e.pressure,u=e.wind,d=e.city,p=e.icon,E=e.icon_alt,v=e.result,f=e.value,g=null;if(!a&&d){var _=new Date(1e3*n).toLocaleTimeString(),b=new Date(1e3*c).toLocaleTimeString(),y=Math.floor(l),w=Math.floor(i),N=Math.floor(s),k=Math.floor(o),S=Math.floor(3.6*u),j="https://openweathermap.org/img/w/".concat(p,".png");g=r.a.createElement("div",null,t?r.a.createElement("div",{className:"loader"},r.a.createElement(h.SemipolarLoading,{color:"rgba(255,255,255,0.8)",size:"large"})):r.a.createElement("div",{className:"weather-app__content"},r.a.createElement("h2",null,"Pogoda dla: ",v),r.a.createElement("img",{src:j,alt:E,className:"weather-app__icon"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Wsch\xf3d s\u0142o\u0144ca:"),r.a.createElement("h4",null,_)),r.a.createElement("div",null,r.a.createElement("h3",null,"Zach\xf3d s\u0142o\u0144ca:"),r.a.createElement("h4",null,b)),r.a.createElement("div",null,r.a.createElement("h3",null,"Temperatura:"),r.a.createElement("h4",null,y," \xb0C")),r.a.createElement("div",null,r.a.createElement("h3",null,"Odczuwalna:"),r.a.createElement("h4",null,w," \xb0C")),r.a.createElement("div",null,r.a.createElement("h3",null,"Temp. min.:"),r.a.createElement("h4",null,N," \xb0C")),r.a.createElement("div",null,r.a.createElement("h3",null,"Temp. max:"),r.a.createElement("h4",null,k," \xb0C")),r.a.createElement("div",null,r.a.createElement("h3",null,"Ci\u015bnienie:"),r.a.createElement("h4",null,m," hPa")),r.a.createElement("div",null,r.a.createElement("h3",null,"Wiatr:"),r.a.createElement("h4",null,S," km/h"))))}return r.a.createElement("div",{className:"weather-app"},r.a.createElement("form",{onSubmit:this.handleCitySubmit},r.a.createElement("input",{type:"text",placeholder:"Wpisz miasto",value:f,onChange:this.handleInputChange}),r.a.createElement("button",{className:"button weather-button"},"Wyszukaj")),r.a.createElement("div",{className:"weather-app__result"},""!==d&&a?"Brak informacji o: ".concat(d):g))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggleApp=function(){a.setState({activeApp:!a.state.activeApp})},a.toggleApp2=function(){a.setState({activeApp2:!a.state.activeApp2})},a.handleShow=function(){a.setState({showApp:!a.state.showApp})},a.state={activeApp:!1,activeApp2:!1,showApp:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.activeApp,a=e.activeApp2,n=e.showApp;return r.a.createElement("section",{className:"applications"},r.a.createElement("div",{className:"applications__title"},r.a.createElement("h2",null,"Aplikacje:")),r.a.createElement("div",{className:"card"},r.a.createElement("div",{onClick:this.toggleApp,className:t?"card__face card__face1 active":"card__face card__face1"},r.a.createElement("div",{className:t?"card__content active":"card__content"},r.a.createElement("h3",null,"POGODOWA"))),r.a.createElement("div",{className:t?"card__face card__face2 active":"card__face card__face2"},r.a.createElement("div",{className:t?"card__content active":"card__content"},n?r.a.createElement(N,null):r.a.createElement("p",null,"Aplikacja pogodowa, wykorzystuj\u0105ca dane z API."),r.a.createElement("button",{className:"button weather-button",onClick:this.handleShow},n?"UKRYJ":"POKA\u017b")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{onClick:this.toggleApp2,className:a?"card__face card__face1 active":"card__face card__face1"},r.a.createElement("div",{className:a?"card__content active":"card__content"},r.a.createElement("h3",null,"Recipe App"))),r.a.createElement("div",{className:a?"card__face card__face2 active":"card__face card__face2"},r.a.createElement("div",{className:a?"card__content active":"card__content"},r.a.createElement("p",null,"Wyszukiwarka przepis\xf3w r\xf3wnie\u017c korzystaj\u0105ca z API. (wer. ANG)"),r.a.createElement("button",{className:"button"},r.a.createElement(i.b,{to:"/recipe-app"},"WEJD\u0179"))))))}}]),t}(n.Component),S=a(42),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={username:"",email:"",message:"",send:"",mailSent:!1,error:null,errors:{username:!1,email:!1,message:!1}},a.messages={username_incorrect:"Nazwa u\u017cytkownika musi mie\u0107 conajmniej 3 znaki.",email_incorrect:"Podano nieprawid\u0142owy adres email.",message_incorrect:"Wiadomos\u0107 musi mie\u0107 conajmniej 5 znak\xf3w"},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(S.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.formValidation();t.correct?a.setState({username:"",email:"",message:"",send:"Formularz zosta\u0142 wys\u0142any!",errors:{username:!1,email:!1,message:!1}}):a.setState({errors:{username:!t.username,email:!t.email,message:!t.message}})},a.formValidation=function(){var e=!1,t=!1,n=!1,r=!1;return a.state.username.length>3&&(e=!0),a.state.email.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)&&(t=!0),a.state.message.length>5&&(n=!0),e&&t&n&&(r=!0),{username:e,email:t,message:n,correct:r}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;""!==this.state.send&&setTimeout(function(){return e.setState({send:""})},5e3)}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"form-contact-wrapper"},r.a.createElement("div",{className:"form-contact"},r.a.createElement("h2",null,"Formularz kontaktowy:"),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("label",{htmlFor:"user"},"Imi\u0119:",r.a.createElement("input",{type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.errors.username&&r.a.createElement("span",{className:"error"},this.messages.username_incorrect)),r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),this.state.errors.email&&r.a.createElement("span",{className:"error"},this.messages.email_incorrect)),r.a.createElement("label",{htmlFor:"message"},"Wiadomo\u015b\u0107:",r.a.createElement("textarea",{type:"text",id:"message",name:"message",value:this.state.message,onChange:this.handleChange}),this.state.errors.message&&r.a.createElement("span",{className:"error"},this.messages.message_incorrect)),r.a.createElement("button",{className:"submit-form"},"Wy\u015blij")),this.state.send&&r.a.createElement("h3",null,this.state.send))),r.a.createElement("div",{className:"contact-waves"},r.a.createElement("div",{className:"header__wave header__wave1"}),r.a.createElement("div",{className:"header__wave header__wave2"}),r.a.createElement("div",{className:"header__wave header__wave3"}),r.a.createElement("div",{className:"header__wave header__wave4"})))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).animate=function(){var e=document.querySelector(".footer");a.tl.add("run"),a.tl.to(a.cloudFirst,3,{x:150,y:3,ease:g.Power1.easeInOut}),a.tl.to(a.cloudFirst,2,{x:230,y:-3,delay:-1}),a.tl.to(a.cloudFirst,1,{opacity:.4,delay:-1}),a.tl.to(a.cloudSecond,3,{x:-150,y:-4,ease:g.Power1.easeInOut},"run"),a.tl.to(a.cloudSecond,2,{x:-230,y:4,delay:-2}),a.tl.to(a.cloudSecond,1,{opacity:.4,delay:-1}),a.tl.to(a.lightning,1,{opacity:.4,delay:2},"run"),a.tl.to(a.lightning,1,{opacity:0,delay:-1.7}),window.innerWidth>=768&&window.innerWidth<=992&&window.scrollY>e.offsetTop-600||window.scrollY>e.offsetTop-420||window.scrollY>e.offsetTop-500?(g.gsap.to(a.phoneNumber,{y:-20,opacity:1,duration:1,delay:.5}),g.gsap.to(a.socials,{y:-20,opacity:1,duration:1,delay:1}),a.tl.resume(),a.setState({active:!0})):(g.gsap.to(a.phoneNumber,{y:0,opacity:0,duration:1,delay:.5}),g.gsap.to(a.socials,{y:0,opacity:0,duration:1,delay:1}),a.setState({active:!1}))},a.cloudFirst=null,a.cloudSecond=null,a.lightning=null,a.phoneNumber=null,a.socials=null,a.tl=new g.TimelineLite({paused:!0}),a.state={active:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.animate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.animate)}},{key:"render",value:function(){var e=this;this.state.active;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,r.a.createElement("div",{ref:function(t){return e.cloudFirst=t},className:"footer__cloud footer__cloud-first"}),r.a.createElement("div",{ref:function(t){return e.cloudSecond=t},className:"footer__cloud footer__cloud-second"}),r.a.createElement("div",{ref:function(t){return e.lightning=t},className:"footer__lightning"})),r.a.createElement("div",{className:"footer-content"},r.a.createElement("h2",{ref:function(t){return e.phoneNumber=t},className:"footer-content__phone-number"},r.a.createElement("a",{href:"tel:+48790737819"},"+48 790737819")),r.a.createElement("ul",{ref:function(t){return e.socials=t},className:"footer-content__socials"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/arek.banas.9?ref=bookmarks"},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/arek-bana%C5%9B-6071a8180/"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/arekbanas-portfolio?tab=repositories"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))),r.a.createElement("h5",{className:"footer-content__copyright"},"Arkadiusz Bana\u015b \xa9. Wszelkie prawa zastrze\u017cone")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeOpacity=function(e){var t=document.querySelector("header"),a=1-window.scrollY/t.offsetHeight;t.style.opacity=a,a>1?t.style.opacity=1:a<0&&(t.style.opacity=0)},a.toggleHamburger=function(){a.setState({active:!a.state.active})},a.state={loading:!0,active:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleLoading=setTimeout(function(){return e.setState({loading:!1})},1500),window.addEventListener("scroll",this.changeOpacity)}},{key:"componentWillUnmount",value:function(){this.handleLoading&&clearInterval(this.handleLoading),window.removeEventListener("scroll",this.changeOpacity)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.loading?r.a.createElement(h.SemipolarLoading,{color:"rgba(0,0,0,0.8)",size:"large"}):r.a.createElement("div",{className:"app"},r.a.createElement(f,{click:this.toggleHamburger,active:this.state.active}),r.a.createElement(E,{opacity:this.changeOpacity}),r.a.createElement("main",{className:"desktop-wrapper"},r.a.createElement(_,null),r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement(j,null),r.a.createElement(O,null))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getRecipe=function(e){e.preventDefault();var t=e.target.elements.recipeName.value,n=e.target.elements.quantity.value,r="https://api.spoonacular.com/recipes/search?query=".concat(t,"&number=").concat(n,"&apiKey=").concat("e11d242856524e09ac25fee61073385b");fetch(r).then(function(e){if(e.ok)return e;throw Error("B\u0142\u0105d po\u0142\u0105czenia")}).then(function(e){return e.json()}).then(function(e){a.setState({loader:!0}),setTimeout(function(){a.setState({loader:!1})},1e3),a.setState({recipes:e.results})}).catch(function(e){a.setState({error:!0})})},a.state={recipes:[],error:!1,loader:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);null!==t&&this.setState({recipes:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("recipes",JSON.stringify(this.state.recipes))}},{key:"render",value:function(){var e=this.state,t=e.recipes,a=e.error,n=e.loader;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"recipe-app"},r.a.createElement("h2",null,"Recipe App"),r.a.createElement("h3",null,"When entering the appropriate ingredient, sample recipes will be shown accordingly. The API is from a foreign server, also the names must be in English.")),r.a.createElement("div",{className:"recipe-app__search"},r.a.createElement("form",{onSubmit:this.getRecipe},r.a.createElement("input",{type:"text",name:"recipeName",placeholder:"chicken, salat..."}),r.a.createElement("input",{type:"number",name:"quantity",placeholder:"how much recipes?"}),r.a.createElement("div",{className:"recipe-app__center-btn"},r.a.createElement("button",{className:"recipe-app__button recipe-app__btn"},"SEARCH")))),n?r.a.createElement("div",{className:"recipes-loader"},r.a.createElement(h.SemipolarLoading,{color:"rgba(0,0,0,0.8)",size:"large"})):r.a.createElement("div",{className:"recipe-app__recipes"},t.map(function(e){return a?r.a.createElement("div",{className:"recipe recipe__error"},r.a.createElement("h4",null,"CONNECTING ERROR!")):r.a.createElement("div",{className:"recipe",key:e.id},r.a.createElement("img",{src:"https://spoonacular.com/recipeImages/".concat(e.id,"-312x231.jpg"),alt:e.title}),r.a.createElement("h4",null,e.title.length>20?e.title.substr(0,20)+"...":e.title),r.a.createElement("p",null,"Ready in minutes: ",e.readyInMinutes),r.a.createElement("p",null,"Servings: ",e.servings),r.a.createElement("button",{className:"recipe-app__button"},r.a.createElement(i.b,{to:"/recipe/".concat(e.id)},"SHOW MORE")))})))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={recipe:[],ingredients:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.spoonacular.com/recipes/".concat(this.props.match.params.id,"/information?&apiKey=").concat("e11d242856524e09ac25fee61073385b");fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({recipe:t,ingredients:t.extendedIngredients})})}},{key:"render",value:function(){var e=this.state,t=e.recipe,a=e.ingredients;return r.a.createElement("div",{className:"active-recipe"},r.a.createElement("div",{className:"recipe-app__recipes"},r.a.createElement("div",{className:"recipe"},r.a.createElement("h3",null,t.title),r.a.createElement("img",{src:t.image,alt:t.image}),r.a.createElement("div",{className:"diets"},r.a.createElement("h5",null,"Vegetarian: ",t.vegetarian?r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("h5",null,"Vegan: ",t.vegan?r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("h5",null,"Gluten free: ",t.glutenFree?r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("h5",null,"Dairy free: ",t.dairyFree?r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),r.a.createElement("h4",null,"Preparation time: ",t.readyInMinutes," minutes"),r.a.createElement("div",{className:"ingredients"},r.a.createElement("h4",null,"Extended Ingredients:"),a.map(function(e){return r.a.createElement("div",{key:e.id,className:"ingredients__ingredient"},r.a.createElement("h5",null,e.name),r.a.createElement("img",{src:"https://spoonacular.com/cdn/ingredients_100x100/".concat(e.image),alt:a.aisle}))})),r.a.createElement("h4",null,"Instructions:"),r.a.createElement("p",null,t.instructions),r.a.createElement("button",{className:"recipe-app__button"},r.a.createElement(i.b,{to:"/recipe-app"},"BACK TO RECIPES")))))}}]),t}(n.Component),I=function(){return r.a.createElement(i.a,{basename:"/second-project-react.js"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:C}),r.a.createElement(s.a,{path:"/recipe-app",component:A}),r.a.createElement(s.a,{path:"/recipe/:id",component:z})))};l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7d597067.chunk.js.map