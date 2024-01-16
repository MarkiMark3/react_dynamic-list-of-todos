(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.activeTodo,s=e.openTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed?Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})}):null}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e){c(e)}(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:(null===s||void 0===s?void 0:s.id)===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.filter,c=e.searchFilter,s=e.setSearchFilter;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),c?Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s("")}})}):null]})]})},h=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.user,c=e.todo,s=e.hide,a=e.activeUser,n=e.activeTodo;return Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),null!==t&&void 0!==t&&t.id?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(!1),a(void 0),n(void 0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:null===t||void 0===t?void 0:t.email,children:null===t||void 0===t?void 0:t.name})]})]})]}):Object(o.jsx)(h,{})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)(),x=Object(n.a)(O,2),v=x[0],f=x[1],p=Object(l.useState)(),N=Object(n.a)(p,2),y=N[0],g=N[1],k=Object(l.useState)("all"),S=Object(n.a)(k,2),T=S[0],C=S[1],w=Object(l.useState)(""),F=Object(n.a)(w,2),_=F[0],L=F[1];Object(l.useEffect)((function(){u("/todos").then(s)}),[]);var B=c.filter((function(e){return""===_||e.title.toLowerCase().includes(_.toLowerCase())})).filter((function(e){return"all"===T||("active"===T?!e.completed:"completed"!==T||e.completed)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{filter:C,searchFilter:_,setSearchFilter:L})}),Object(o.jsx)("div",{className:"block",children:c.length?Object(o.jsx)(r,{todos:B,activeTodo:function(e){var t;(t=e.userId,u("/users/".concat(t))).then((function(e){f(e)})),g(e),m(!d)},openTodo:y}):Object(o.jsx)(h,{})})]})})}),d?Object(o.jsx)(b,{user:v,todo:y,activeUser:f,hide:m,activeTodo:g}):null]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.60fbbb4c.chunk.js.map