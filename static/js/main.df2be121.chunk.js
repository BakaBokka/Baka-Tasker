(this["webpackJsonpal-test"]=this["webpackJsonpal-test"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(11),o=a.n(r),l=(a(37),a(38),a(9)),i=a.n(l),d=a(7),u=a(14),j=a(13),b=a(10),m=a(60),O=a(65),g=a(61),f=a(62),h=a(64),x=a(20),p=a.n(x),_=(a(40),function(e){return p.a.locale("ru"),p()(e).format("L, h:mm:ss")}),v=function(e){return(e*(1e3/3600)).toFixed(2).toString().replace(/[,.]/g," \u0440\u0443\u0431\u043b\u0435\u0439 ")},N=function(e){var t="0".concat(e%60).slice(-2),a="".concat(Math.floor(e/60)),n="0".concat(+a%60).slice(-2),c="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(c," : ").concat(n," : ").concat(t)},S=a(63);a(41);var k=function(e){var t=Object(c.useState)(""),a=Object(b.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(""),l=Object(b.a)(o,2),i=l[0],d=l[1],u="add"===e.modalType;return Object(c.useEffect)((function(){d(Object(S.a)())}),[s]),Object(n.jsxs)(g.a,{className:"AddTaskModal",show:u,onHide:e.onHide,centered:!0,autoFocus:!1,children:[Object(n.jsx)(g.a.Header,{closeButton:!0,children:Object(n.jsx)(g.a.Title,{children:"What's your new task?"})}),Object(n.jsx)(g.a.Body,{children:Object(n.jsxs)(f.a,{className:"AddTaskModal__form d-flex",autoComplete:"off",children:[Object(n.jsx)(f.a.Group,{className:"AddTaskModal__form-content",controlId:"form",children:Object(n.jsx)(f.a.Control,{className:"AddTaskModal__input",type:"text",placeholder:"Type your task here",value:s,onChange:function(e){return r(e.target.value)}})}),Object(n.jsx)(h.a,{className:"AddTaskModal__button",variant:"primary",type:"submit",onClick:function(t){return function(t){t.preventDefault();var a=new Date;e.addTask({text:s,id:i,date:_(a)}),e.onHide(),r("")}(t)},children:"Add"})]})})]})},y=a(29),T=a(17),I=a(28),w=a(26),C=a.n(w);a(46);var P=function(e){var t=e.columns,a=e.data,s=Object(T.useTable)({columns:t,data:a},T.useFilters,T.useGlobalFilter),r=s.getTableProps,o=s.headerGroups,l=s.rows,i=s.prepareRow,u=s.footerGroups,j=s.state,m=s.visibleColumns,O=s.preGlobalFilteredRows,g=s.setGlobalFilter;function f(e){e.preGlobalFilteredRows;var t=e.globalFilter,a=e.setGlobalFilter,s=Object(c.useState)(t),r=Object(b.a)(s,2),o=r[0],l=r[1],i=Object(T.useAsyncDebounce)((function(e){a(e||void 0)}),200);return Object(n.jsxs)("span",{children:["Filter:"," ",Object(n.jsx)("input",{value:o||"",onChange:function(e){l(e.target.value),i(e.target.value)},placeholder:"Input something here...",style:{fontSize:"1 rem",border:"0"}})]})}var x=function(){var e=document.getElementById("table");console.log(e),C()(e).then((function(e){var t=e.toDataURL("image/png"),a=new I.a("p","px","a4"),n=a.getImageProperties(t),c=a.internal.pageSize.getWidth()-40,s=n.height*c/n.width;a.addImage(t,"JPEG",20,20,c,s),a.save("total.pdf")}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,Object(d.a)(Object(d.a)({className:"CheckoutTable",striped:!0,bordered:!0,hover:!0,size:"xl"},r()),{},{id:"table",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:m.length,style:{textAlign:"left"},children:Object(n.jsx)(f,{preGlobalFilteredRows:O,globalFilter:j.globalFilter,setGlobalFilter:g})})}),o.map((function(e){return Object(n.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))]}),Object(n.jsx)("tbody",{children:l.map((function(e,t){return i(e),Object(n.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(n.jsx)("td",Object(d.a)(Object(d.a)({className:"CheckoutTable__column"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}),Object(n.jsx)("tfoot",{children:u.map((function(e){return Object(n.jsx)("tr",Object(d.a)(Object(d.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsx)("td",Object(d.a)(Object(d.a)({},e.getFooterProps()),{},{children:e.render("Footer")}))}))}))}))})]})),Object(n.jsx)(h.a,{className:"GetTotalModal__button",variant:"primary",type:"submit",onClick:function(t){return function(t){t.preventDefault(),x(),e.onHide()}(t)},children:"Save to PDF"})]})};a(47);var F=function(e){var t="total"===e.modalType,a=Object(c.useMemo)((function(){return e.closedTasks}),[e.closedTasks]),r=Object(c.useMemo)((function(){return[{Header:"Task",accessor:"text"},{Header:"Timer",accessor:"timer"},{Header:"Summ",accessor:"summ",Footer:function(e){var t=s.a.useMemo((function(){return e.rows.reduce((function(e,t){return+t.values.summ.slice(0,-7).replace(/( \u0440\u0443\u0431\u043b\u0435\u0439 )/g,".")/(1e3/3600)+e}),0)}),[e.rows]);return Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)("span",{style:{fontWeight:"bolder"},children:"Total:"})," ","".concat(v(t)," \u043a\u043e\u043f\u0435\u0435\u043a")]})}},{Header:"Date",accessor:"date"}]}),[]);return Object(n.jsxs)(g.a,{className:"GetTotalModal",show:t,onHide:e.onHide,centered:!0,autoFocus:!1,size:"xl",children:[Object(n.jsx)(g.a.Header,{closeButton:!0,children:Object(n.jsx)(g.a.Title,{children:"Sic transit gloria mundi"})}),Object(n.jsx)(g.a.Body,{className:"GetTotalModal__content",children:Object(n.jsx)(P,{data:a,columns:r,onHide:e.onHide})})]})},D=a.p+"static/media/card-text.21416c42.svg";a(48);var J=function(e){return Object(n.jsx)(O.a,{className:"ToDoCard",id:""+e.id,children:Object(n.jsxs)(O.a.Body,{className:"ToDoCard__content d-flex p-2",children:[Object(n.jsxs)("div",{className:"ToDoCard__text-wrap d-flex",children:[Object(n.jsx)("img",{className:"ToDoCard__content-image mr-2",src:D,alt:"card icon"}),Object(n.jsx)(O.a.Title,{className:"ToDoCard__text text-secondary",children:e.todo})]}),Object(n.jsx)(h.a,{className:"ToDoCard__button mr-3 mb-2",size:"lg",id:""+e.id,onClick:function(){var t=new Date;e.startTask({text:e.todo,id:e.id,date:_(t)})},children:"Start"})]})})},H=a.p+"static/media/play-fill.446d2092.svg",K=a.p+"static/media/pause-fill.bba9440f.svg",G=(a(49),function(e){var t=Object(c.useRef)();Object(c.useEffect)((function(){!1===e.isPaused?t.current=setInterval((function(){e.setTimer((function(e){return e+1}))}),1e3):(clearInterval(t.current),localStorage.setItem("timer".concat(e.id),JSON.stringify(e.timer)))}),[e.isPaused]);var a=function(){e.setIsPaused(!e.isPaused)};return window.onbeforeunload=function(t){localStorage.setItem("timer".concat(e.id),JSON.stringify(e.timer))},Object(n.jsx)("div",{className:"Stopwatch",children:Object(n.jsxs)("div",{className:"Stopwatch__content",children:[Object(n.jsx)("p",{className:"Stopwatch__time",children:N(e.timer)}),Object(n.jsx)("div",{className:"buttons",children:e.isPaused?Object(n.jsx)("img",{className:"Stopwatch__image",src:H,alt:"play ico",onClick:a}):Object(n.jsx)("img",{className:"Stopwatch__image",src:K,alt:"pause ico",onClick:a})})]})})});a(50);var B=function(e){var t=localStorage.getItem("timer".concat(e.id))&&localStorage.getItem("timer".concat(e.id))||"",a=Object(c.useState)(+t),s=Object(b.a)(a,2),r=s[0],o=s[1],l=Object(c.useState)(!0),i=Object(b.a)(l,2),d=i[0],u=i[1];return Object(n.jsx)(O.a,{className:"InProgressCard",children:Object(n.jsxs)(O.a.Body,{className:"InProgressCard__content d-flex p-2",children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("img",{className:"InProgressCard__content-image mr-2",src:D,alt:"card icon"}),Object(n.jsx)(O.a.Title,{className:"InProgressCard__text text-secondary",children:e.task})]}),Object(n.jsxs)("div",{className:"InProgressCard__controls d-flex",children:[Object(n.jsx)(G,{id:e.id,isPaused:d,setIsPaused:u,timer:r,setTimer:o}),Object(n.jsx)(h.a,{variant:"success",className:"InProgressCard__button",size:"lg",onClick:function(){var t=new Date;e.resolveTask({text:e.task,id:e.id,date:_(t),timer:N(r),summ:"".concat(v(r)," \u043a\u043e\u043f\u0435\u0435\u043a")}),u(!0)},children:"Resolve"})]})]})})};a(51);var M=function(e){return Object(n.jsx)(O.a,{className:"DoneCard",children:Object(n.jsxs)(O.a.Body,{className:"DoneCard__content d-flex p-2",children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("img",{className:"DoneCard__content-image mr-2",src:D,alt:"card icon"}),Object(n.jsx)(O.a.Title,{className:"DoneCard__text text-secondary",children:e.task})]}),Object(n.jsx)("div",{className:"DoneCard__container d-flex",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"DoneCard__time",children:e.timer}),Object(n.jsx)("span",{className:"DoneCard__summ",children:"".concat(e.summ)})]})})]})})};a(52);var A=function(e){return Object(n.jsxs)(h.a,{className:"CommonButton",variant:"outline-secondary",style:{fontWeight:"bolder"},onClick:e.onClick,children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"CommonButton__image bi bi-plus",viewBox:"0 0 16 16",stroke:"currentColor",strokeWidth:"2",children:Object(n.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})}),e.text]})};a(53),a(54);var R=function(){var e={tasks:localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")||""):[],inProgress:localStorage.getItem("inProgress")?JSON.parse(localStorage.getItem("inProgress")||""):[],done:localStorage.getItem("done")?JSON.parse(localStorage.getItem("done")||""):[],closed:localStorage.getItem("closed")?JSON.parse(localStorage.getItem("closed")||""):[]},t=Object(c.useState)(e),a=Object(b.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(),l=Object(b.a)(o,2),g=l[0],f=l[1],h=function(){var t=Object(j.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("tasks",JSON.stringify([].concat(Object(u.a)(s.tasks),[a])));case 2:r(Object(d.a)(Object(d.a)({},e),{},{tasks:JSON.parse(localStorage.getItem("tasks")||"")}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(j.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.tasks.filter((function(e){return e.id!==a})),t.next=3,localStorage.setItem("tasks",JSON.stringify(n));case 3:r(Object(d.a)(Object(d.a)({},e),{},{tasks:JSON.parse(localStorage.getItem("tasks")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(j.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.inProgress.filter((function(e){return e.id!==a})),t.next=3,localStorage.setItem("inProgress",JSON.stringify(n));case 3:r(Object(d.a)(Object(d.a)({},e),{},{inProgress:JSON.parse(localStorage.getItem("inProgress")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(j.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(a.id),t.next=3,localStorage.setItem("inProgress",JSON.stringify([].concat(Object(u.a)(s.inProgress),[a])));case 3:r(Object(d.a)(Object(d.a)({},e),{},{tasks:JSON.parse(localStorage.getItem("tasks")||""),inProgress:JSON.parse(localStorage.getItem("inProgress")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(a.id),t.next=3,localStorage.setItem("done",JSON.stringify([].concat(Object(u.a)(s.done),[a])));case 3:r(Object(d.a)(Object(d.a)({},e),{},{tasks:JSON.parse(localStorage.getItem("tasks")||""),inProgress:JSON.parse(localStorage.getItem("inProgress")||""),done:JSON.parse(localStorage.getItem("done")||"")})),localStorage.removeItem("timer".concat(a.id));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(j.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("closed",JSON.stringify([].concat(Object(u.a)(s.closed),Object(u.a)(s.done))));case 2:localStorage.removeItem("done"),r(Object(d.a)(Object(d.a)({},e),{},{done:[],closed:JSON.parse(localStorage.getItem("closed")||"")}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=s.tasks&&s.tasks.map((function(e){return Object(n.jsx)(J,{todo:e.text,id:e.id,startTask:_},e.id)})),y=s.inProgress&&s.inProgress.map((function(e){return Object(n.jsx)(B,{task:e.text,id:e.id,resolveTask:v},e.id)})),T=s.done&&s.done.map((function(e){return Object(n.jsx)(M,{task:e.text,id:e.id,timer:e.timer,summ:e.summ},e.id)})),I=function(){f(void 0)};return Object(n.jsxs)("div",{className:"Kanban",children:[Object(n.jsx)(k,{onHide:I,id:1,addTask:h,modalType:g}),Object(n.jsx)(F,{onHide:I,modalType:g,closedTasks:s.closed}),Object(n.jsxs)(m.a,{className:"Kanban__content p-3 d-flex",children:[Object(n.jsxs)(O.a,{className:"Kanban__column",bg:"light",children:[Object(n.jsxs)(O.a.Body,{className:"Kanban__column-content p-2 mb-3",children:[Object(n.jsxs)("div",{className:"Kanban__column-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.tasks&&s.tasks.length}),Object(n.jsx)(O.a.Title,{className:"Kanban__content-title",children:"To do"})]}),S]}),Object(n.jsx)("footer",{className:"Kanban__column-footer",children:Object(n.jsx)(A,{onClick:function(){return f("add")},text:"New Task"})})]}),Object(n.jsx)(O.a,{className:"Kanban__column",bg:"light",children:Object(n.jsxs)(O.a.Body,{className:"Kanban__column-content p-2",style:{height:"100%"},children:[Object(n.jsxs)("div",{className:"Kanban__column-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.inProgress&&s.inProgress.length}),Object(n.jsx)(O.a.Title,{className:"Kanban__content-title",children:"In progress"})]}),y]})}),Object(n.jsxs)(O.a,{className:"Kanban__column",bg:"light",children:[Object(n.jsxs)(O.a.Body,{className:"Kanban__column-content p-2 mb-3",children:[Object(n.jsxs)("div",{className:"Kanban__column-header d-flex",children:[Object(n.jsx)("span",{className:"Kanban__counter",children:s.done&&s.done.length}),Object(n.jsx)(O.a.Title,{className:"Kanban__content-title",children:"Done"})]}),T]}),Object(n.jsx)("footer",{className:"Kanban__column-footer",children:Object(n.jsx)(A,{onClick:function(){f("total"),N()},text:"Get total"})})]})]})]})};var z=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(R,{})})},E=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,439)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(z,{}),document.getElementById("root")),E()}},[[55,1,3]]]);
//# sourceMappingURL=main.df2be121.chunk.js.map