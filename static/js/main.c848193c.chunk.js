(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(37)},30:function(e,n,t){},35:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(13),r=t.n(c),l=(t(30),t(9)),u=t(12),s=t(23),i=t(15),h="choose_en",m="choose_ru",E="deselect";var d={lang:"en",choose:null,en:{chooseLang:"Please choose language",button:{en:"English",rus:"Russian"},search:{placeholder:"Search on YouTube."}},ru:{chooseLang:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0438\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",button:{en:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",rus:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},search:{placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"}}};t(35);var b=t(10),g=t(8);var p=Object(l.b)(function(e){return{en:e.en,ru:e.ru,choose:e.choose}},function(e){return{}})(function(e){return console.log(e),o.a.createElement("div",null,null===e.choose?o.a.createElement("p",null,e.en.chooseLang):o.a.createElement("p",null,e.ru.chooseLang))});var f=Object(l.b)(function(e){return{}},function(e){return{chooseEn:function(){return e({type:h})},chooseRus:function(){return e({type:m})},deselect:function(){return e({type:E})}}})(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement(b.b,{to:"/langs",onClick:e.deselect},"Choose Language"))),o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/langs",render:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(b.b,{to:"/",onClick:e.chooseEn},"English"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(b.b,{to:"/ru",onClick:e.chooseRu},"Russian"))}}),o.a.createElement(g.a,{path:"/",component:p}),o.a.createElement(g.a,{path:"/ru",component:p})))}),v=Object(u.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case h:return Object(i.a)({},e,{choose:!1});case m:return Object(i.a)({},e,{choose:!0});case E:return Object(i.a)({},e,{choose:null});default:return e}},Object(u.a)(s.a));var w=function(){return o.a.createElement(l.a,{store:v},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b.a,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.c848193c.chunk.js.map