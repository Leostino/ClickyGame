(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Darunia","image":"/clickyImages/Darunia.png","clicked":false},{"id":2,"name":"Ganondorf","image":"/clickyImages/ganondorf.png","clicked":false},{"id":3,"name":"Impa","image":"/clickyImages/impa.png","clicked":false},{"id":4,"name":"Link","image":"/clickyImages/link.png","clicked":false},{"id":5,"name":"Nabooru","image":"/clickyImages/nabooru.png","clicked":false},{"id":6,"name":"Ruto","image":"/clickyImages/ruto.png","clicked":false},{"id":7,"name":"Sheik","image":"/clickyImages/sheik.png","clicked":false},{"id":8,"name":"Zelda","image":"/clickyImages/zelda.png","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(3),r=t.n(i),s=(t(14),t(4)),o=t(5),l=t(7),m=t(6),g=t(8);t(15);var d=function(e){return n.a.createElement("div",{className:"container"},e.children)};var u=function(e){return n.a.createElement("h1",{className:"font-weight-bold d-inline ml-3"},e.children)};var f=function(e){return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav justify-content-end"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("h2",{className:"nav-link active font-weight-bold",href:"#"}," ",e.message)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("h3",{className:"nav-link active",href:"#"},"Top Score: ",e.topScore)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("h3",{className:"nav-link active",href:"#"},"Score: ",e.score))))};var k=function(e){return n.a.createElement("div",{className:"d-flex justify-content-between border sticky-top bg-white"},n.a.createElement(u,null,"CLICKY GAME"),n.a.createElement(f,{message:e.message,topScore:e.topScore,score:e.score}))};t(16);var h=function(e){return n.a.createElement("div",{className:"cardDiv"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:e.image,className:"card-img-top",id:e.id,alt:e.name,key:e.id,onClick:function(){return e.clickImage(e.id)}})))},p=t(1),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={images:p,score:0,topScore:0,maxScore:8,isCorrect:!0,message:""},t.clickImage=function(e){console.log(e);var a=t.state.images.filter((function(a){return a.id===e}));a[0].clicked?t.incorrectClick():(a[0].clicked=!0,console.log(a),t.correctClick(),t.shuffleImages(p),t.setState({images:p}))},t.shuffleImages=function(e){e.sort((function(e,a){return.5-Math.random()}))},t.correctClick=function(){t.setState({isCorrect:!0}),t.state.score+1>t.state.topScore&&t.setState({topScore:t.state.topScore+1}),t.state.score+1>=t.state.maxScore?(t.setState({score:t.state.score+1,message:"CONGRATS! YOU WIN!!!",topScore:0}),t.reset()):t.setState({score:t.state.score+1,message:"YOU CLICKED CORRECTLY!"})},t.incorrectClick=function(){t.setState({isCorrect:!1,message:"WRONG! WRONG!! WRONG!!!"}),t.reset()},t.reset=function(){for(var e=t.state.images,a=0;a<e.length;a++)e[a].clicked=!1;t.setState({score:0})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(k,{message:this.state.message,topScore:this.state.topScore,score:this.state.score}),this.state.images.map((function(a){return n.a.createElement(h,{clickImage:e.clickImage,key:a.id,id:a.id,name:a.name,image:a.image})})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f05968ad.chunk.js.map