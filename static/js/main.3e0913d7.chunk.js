(this["webpackJsonpal-test"]=this["webpackJsonpal-test"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a(11),r=a.n(s),o=(a(29),a(30),a(8)),i=a.n(o),l=a(9),d=a(19),u=a(12),j=a(10),b=a(45),m=a(49),O=a(46),g=a(47),f=a(48),x=function(){var e=1;return function(){return e++}}();a(32);var h=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(0),i=Object(j.a)(o,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){d(x())}),[s]),Object(n.jsxs)(O.a,{className:"AddTaskModal",show:e.show,onHide:e.onHide,centered:!0,autoFocus:!0,children:[Object(n.jsx)(O.a.Header,{closeButton:!0,children:Object(n.jsx)(O.a.Title,{children:"What's your new task?"})}),Object(n.jsx)(O.a.Body,{children:Object(n.jsxs)(g.a,{className:"AddTaskModal__form d-flex",autoComplete:"off",children:[Object(n.jsx)(g.a.Group,{className:"AddTaskModal__form-content",controlId:"form",children:Object(n.jsx)(g.a.Control,{type:"text",placeholder:"Type your task here",autoFocus:!0,value:s,onChange:function(e){return r(e.target.value)}})}),Object(n.jsx)(f.a,{className:"AddTaskModal__button",variant:"primary",type:"submit",onClick:function(t){return function(t){t.preventDefault(),e.addTask({text:s,id:l+s}),e.onHide(),r("")}(t)},children:"Add"})]})})]})},p=a.p+"static/media/card-text.21416c42.svg";a(36);var N=function(e){return Object(n.jsx)(m.a,{className:"ToDoCard",id:""+e.id,children:Object(n.jsxs)(m.a.Body,{className:"ToDoCard__content d-flex p-2",children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("img",{className:"ToDoCard__content-image mr-2",src:p,alt:"card icon"}),Object(n.jsx)(m.a.Title,{className:"ToDoCard__text text-secondary",children:e.todo})]}),Object(n.jsx)(f.a,{className:"ToDoCard__button m-3",size:"lg",id:""+e.id,onClick:function(){e.startTask({text:e.todo,id:e.id})},children:"Start"})]})})},_=a.p+"static/media/play-fill.446d2092.svg",v=a.p+"static/media/pause-fill.bba9440f.svg",S=(a(37),function(e){var t=localStorage.getItem("timer".concat(e.id))&&localStorage.getItem("timer".concat(e.id))||"",a=Object(c.useState)(+t),s=Object(j.a)(a,2),r=s[0],o=s[1],i=Object(c.useRef)();Object(c.useEffect)((function(){!1===e.isPaused?i.current=setInterval((function(){o((function(e){return e+1}))}),1e3):(clearInterval(i.current),localStorage.setItem("timer".concat(e.id),JSON.stringify(r)))}),[e.isPaused]);var l=function(){e.setIsPaused(!e.isPaused)};window.onbeforeunload=function(t){localStorage.setItem("timer".concat(e.id),JSON.stringify(r))};return Object(n.jsx)("div",{className:"Stopwatch",children:Object(n.jsxs)("div",{className:"Stopwatch__content",children:[Object(n.jsx)("p",{className:"Stopwatch__time",children:function(){var e="0".concat(r%60).slice(-2),t="".concat(Math.floor(r/60)),a="0".concat(+t%60).slice(-2),n="0".concat(Math.floor(r/3600)).slice(-2);return"".concat(n," : ").concat(a," : ").concat(e)}()}),Object(n.jsx)("div",{className:"buttons",children:e.isPaused?Object(n.jsx)("img",{className:"Stopwatch__image",src:_,alt:"play ico",onClick:l}):Object(n.jsx)("img",{className:"Stopwatch__image",src:v,alt:"pause ico",onClick:l})})]})})});a(38);var I=function(e){var t=Object(c.useState)(!0),a=Object(j.a)(t,2),s=a[0],r=a[1];return Object(n.jsx)(m.a,{className:"InProgressCard",children:Object(n.jsxs)(m.a.Body,{className:"InProgressCard__content d-flex p-2",children:[Object(n.jsxs)("div",{className:"InProgressCard__container d-flex",children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("img",{className:"InProgressCard__content-image mr-2",src:p,alt:"card icon"}),Object(n.jsx)(m.a.Title,{className:"InProgressCard__text text-secondary",children:e.task})]}),Object(n.jsx)(S,{id:e.id,isPaused:s,setIsPaused:r})]}),Object(n.jsx)(f.a,{variant:"success",className:"InProgressCard__button m-3",size:"lg",onClick:function(){e.resolveTask({text:e.task,id:e.id}),r(!0)},children:"Resolve"})]})})};a(39);var k=function(e){var t=localStorage.getItem("timer".concat(e.id))&&localStorage.getItem("timer".concat(e.id))||"",a=1e3/3600*+t;return Object(n.jsx)(m.a,{className:"DoneCard",children:Object(n.jsx)(m.a.Body,{className:"DoneCard__content d-flex p-2",children:Object(n.jsxs)("div",{className:"DoneCard__container d-flex",children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("img",{className:"DoneCard__content-image mr-2",src:p,alt:"card icon"}),Object(n.jsx)(m.a.Title,{className:"DoneCard__text text-secondary",children:e.task})]}),Object(n.jsx)("p",{className:"DoneCard__time",children:function(){var e="0".concat(+t%60).slice(-2),a="".concat(Math.floor(+t/60)),n="0".concat(+a%60).slice(-2),c="0".concat(Math.floor(+t/3600)).slice(-2);return"".concat(c," : ").concat(n," : ").concat(e)}()}),Object(n.jsxs)("span",{className:"DoneCard__summ",children:[" ","".concat(a.toFixed(2).toString().replace(/[,.]/g," \u0440\u0443\u0431\u043b\u0435\u0439 ")," \u043a\u043e\u043f\u0435\u0435\u043a")," "]})]})})})};a(40);var w=function(e){return Object(n.jsxs)(f.a,{className:"NewTaskButton",variant:"outline-secondary",style:{fontWeight:"bolder"},onClick:function(){return e.setShow(!0)},children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"NewTaskButton__image bi bi-plus",viewBox:"0 0 16 16",stroke:"currentColor",strokeWidth:"2",children:Object(n.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})}),"New Task"]})};a(41),a(42);var y=function(){var e={todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")||""):[],inProgress:localStorage.getItem("inProgress")?JSON.parse(localStorage.getItem("inProgress")||""):[],done:localStorage.getItem("done")?JSON.parse(localStorage.getItem("done")||""):[]},t=Object(c.useState)(e),a=Object(j.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(!1),O=Object(j.a)(o,2),g=O[0],f=O[1],x=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("todos",JSON.stringify([].concat(Object(d.a)(s.todos),[a])));case 2:r(Object(l.a)(Object(l.a)({},e),{},{todos:JSON.parse(localStorage.getItem("todos")||"")}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.todos.filter((function(e){return e.id!==a})),t.next=3,localStorage.setItem("todos",JSON.stringify(n));case 3:r(Object(l.a)(Object(l.a)({},e),{},{todos:JSON.parse(localStorage.getItem("todos")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.inProgress.filter((function(e){return e.id!==a})),t.next=3,localStorage.setItem("inProgress",JSON.stringify(n));case 3:r(Object(l.a)(Object(l.a)({},e),{},{todos:JSON.parse(localStorage.getItem("inProgress")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(a.id),t.next=3,localStorage.setItem("inProgress",JSON.stringify([].concat(Object(d.a)(s.inProgress),[a])));case 3:r(Object(l.a)(Object(l.a)({},e),{},{todos:JSON.parse(localStorage.getItem("todos")||""),inProgress:JSON.parse(localStorage.getItem("inProgress")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(a.id),t.next=3,localStorage.setItem("done",JSON.stringify([].concat(Object(d.a)(s.done),[a])));case 3:r(Object(l.a)(Object(l.a)({},e),{},{todos:JSON.parse(localStorage.getItem("todos")||""),inProgress:JSON.parse(localStorage.getItem("inProgress")||""),done:JSON.parse(localStorage.getItem("done")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=s.todos&&s.todos.map((function(e){return Object(n.jsx)(N,{todo:e.text,id:e.id,startTask:v},e.id)})),C=s.inProgress&&s.inProgress.map((function(e){return Object(n.jsx)(I,{task:e.text,id:e.id,resolveTask:S},e.id)})),P=s.done&&s.done.map((function(e){return Object(n.jsx)(k,{task:e.text,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:"Kanban",children:[Object(n.jsx)(h,{show:g,onHide:function(){f(!1)},id:1,addTask:function(e){x(e)}}),Object(n.jsxs)(b.a,{className:"Kanban__content p-3 d-flex",children:[Object(n.jsxs)(m.a,{className:"Kanban__column",bg:"light",children:[Object(n.jsxs)(m.a.Body,{className:"p-2 mb-3",children:[Object(n.jsxs)("div",{className:"Kanban__content-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.todos&&s.todos.length}),Object(n.jsx)(m.a.Title,{className:"Kanban__content-title",children:"To do"})]}),y]}),Object(n.jsx)(w,{setShow:f})]}),Object(n.jsx)(m.a,{className:"Kanban__column",bg:"light",children:Object(n.jsxs)(m.a.Body,{className:"p-2",children:[Object(n.jsxs)("div",{className:"Kanban__content-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.inProgress&&s.inProgress.length}),Object(n.jsx)(m.a.Title,{className:"Kanban__content-title",children:"In progress"})]}),C]})}),Object(n.jsx)(m.a,{className:"Kanban__column",bg:"light",children:Object(n.jsxs)(m.a.Body,{className:"p-2",children:[Object(n.jsxs)("div",{className:"Kanban__content-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.done&&s.done.length}),Object(n.jsx)(m.a.Title,{className:"Kanban__content-title",children:"Done"})]}),P]})})]})]})};var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(y,{})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(n.jsx)(C,{}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.3e0913d7.chunk.js.map