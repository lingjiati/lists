(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{132:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(20),i=n.n(o),r=(n(132),n(14)),s=n(257),l=n(254),u=(n(44),n(7)),d=n.n(u),j=n(3);var f=function(e){var t=e.schedule,n=e.info,a=e.periods,o=e.day,i=(e.setMax,e.setIndex),r=e.index,u=e.now;return Object(c.useEffect)((function(){return i(0===o||6===o?0:o-1)}),[]),Object(j.jsx)(s.a,{twoLine:!0,children:t[r+1].map((function(e,t){var c=d()(a[t].split("-")[0],"hhmm"),i=d()(a[t].split("-")[1],"hhmm");return Object(j.jsx)(l.c,{graphic:n[e].icon,text:e,secondaryText:a[t],selected:r===o-1&&u.isBefore(i)&&c.subtract(10,"minutes").isBefore(u)})}))})},b=n(43);n(139),n(140);var h=n(78),g=n(80);n(146);var x=function(e){var t=e.page,n=e.setPage,c=e.setMax,o=e.max,i=e.index,u=e.setIndex,d=a.a.useState(!1),f=Object(r.a)(d,2),b=f[0],x=f[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.a,{title:t,navigationIcon:!0,onNav:function(){return x(!0)},actionItems:[{icon:"navigate_before",onClick:function(e){u((function(e){return e-1}))},disabled:0===i},{icon:"navigate_next",onClick:function(e){u((function(e){return e+1}))},disabled:i===o}]}),Object(j.jsx)(h.b,{}),Object(j.jsx)(g.a,{modal:!0,open:b,onClose:function(){return x(!1)},children:Object(j.jsx)(g.b,{children:Object(j.jsxs)(s.a,{wrapFocus:!1,children:[Object(j.jsx)(l.a,{onClick:function(){n("Schedule"),c(4)},selected:"Schedule"===t,children:"Schedule"}),Object(j.jsx)(l.a,{onClick:function(){n("Todos")},selected:"Todos"===t,children:"Todos"})]})})})]})},O=n(81),m=n(255),p=n(79),v=n(123),y=n(119),S=n.n(y),k=(n(153),n(157),n(122)),C=n(256);n(165),n(169),n(171),n(36);var _=function(){return Object(j.jsx)("br",{})},M=n(120),E=n.n(M);var L=function(e){var t=e.setMax,n=e._index,a=(e.setIndex,function(e){return 100*e.year()+e.week()}),o=function(e){return 1e3*e.year()+e.dayOfYear()},i=Object(c.createRef)(),s=Object(c.createRef)(),u=new S.a({type:"date",past:d()(),future:d()().add(3,"years")}),f=Object(c.useState)(),h=Object(r.a)(f,2),g=h[0],x=h[1],y=Object(c.useState)(!1),M=Object(r.a)(y,2),L=M[0],I=M[1],w=a(d()()),q=Object(c.useState)(!1),T=Object(r.a)(q,2),D=T[0],G=T[1],F=Object(c.useState)([]),N=Object(r.a)(F,2),P=N[0],A=N[1],B=Object(c.useState)(""),J=Object(r.a)(B,2),U=J[0],R=J[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&A(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(P))}),[P]);for(var Y=P.filter((function(e){return w<=a(d()(e.date))})).sort((function(e,t){return o(d()(e.date))-o(d()(t.date))})),H=[],z=0,K=-1,Q=0;Q<Y.length;Q++)a(d()(Y[Q].date))>z&&(z=a(d()(Y[Q].date)),H[++K]=[]),H[K].push(Y[Q]);console.log(H,"week");var V=H.map((function(e){for(var t=[],n=0,c=-1,a=0;a<e.length;a++)o(d()(e[a].date))>n&&(n=o(d()(e[a].date)),t[++c]=[]),t[c].push(e[a]);return t}));return console.log(V),t(V.length-1<0?0:V.length-1),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{class:"list",children:0===P.length?null:V[n].map((function(e){return Object(j.jsx)(m.a,{nonInteractive:!0,defaultOpen:!0,handle:Object(j.jsx)(l.a,{children:Object(j.jsx)(b.a,{use:"subtitle2",children:d()(e[0].date).week()===w?d()(e[0].date).format("ddd"):"".concat(d()(e[0].date).format("M"),"/").concat(d()(e[0].date).format("D")," (").concat(d()(e[0].date).format("ddd"),")")})}),children:e.map((function(e){return Object(j.jsx)(E.a,{onClickNHold:function(t,n){n.nativeEvent.preventDefault(),R(e.date),G(!0)},time:.4,children:Object(j.jsxs)(l.a,{children:[e.name,Object(j.jsx)(l.b,{children:Object(j.jsx)(v.a,{checked:e.checked,onChange:function(){return function(e){var t=Object(O.a)(P),n=t.find((function(t){return t.date===e}));n.checked=!n.checked,A(t)}(e.date)}})})]})})}))})}))}),Object(j.jsxs)(C.a,{open:L,onClose:function(e){I(!1)},children:[Object(j.jsx)(C.e,{children:"Add Todo"}),Object(j.jsxs)(C.d,{children:[Object(j.jsx)(p.a,{label:"Name",ref:s,onFocus:function(){return s.current.querySelector(".mdc-floating-label").classList.add("mdc-floating-label--float-above")}}),Object(j.jsx)(_,{}),Object(j.jsx)(p.a,{trailingIcon:{icon:"event",onClick:function(e){e.preventDefault(),document.querySelector(".mddtp-picker__subtitle").classList.remove("mddtp-picker__color--active"),document.querySelector(".mddtp-picker__title").classList.add("mddtp-picker__color--active"),u.toggle(),document.querySelector("#mddtp-date__ok").addEventListener("click",(function(){e.target.parentNode.querySelector("input").value=u.time.format("ddd[,] MMM D"),e.target.parentNode.querySelector(".mdc-floating-label").classList.add("mdc-floating-label--float-above"),x(u.time.format())}))}},ref:i,label:"Date",readOnly:!0})]}),Object(j.jsxs)(C.b,{children:[Object(j.jsx)(C.c,{action:"close",children:"Cancel"}),Object(j.jsx)(C.c,{action:"accept",isDefaultAction:!0,onClick:function(){return function(){var e={date:g,checked:!1,name:s.current.querySelector("input").value};i.current.querySelector("input").value=s.current.querySelector("input").value="",A([].concat(Object(O.a)(P),[e])),console.log(P)}()},children:"Add"})]})]}),Object(j.jsx)(k.a,{raised:!0,icon:"add",onClick:function(){I(!0),i.current.querySelector(".mdc-floating-label").classList.remove("mdc-floating-label--float-above"),s.current.querySelector(".mdc-floating-label").classList.remove("mdc-floating-label--float-above")}}),Object(j.jsx)(C.f,{open:D,onClose:function(e){return"accept"===e.detail.action&&A((function(e){return e.filter((function(e){return e.date!==U}))}))},onClosed:function(){return G(!1)},body:Object(j.jsx)("span",{children:"Do you want to delete the task?"}),title:Object(j.jsx)("span",{children:"Confirm"}),acceptLabel:"Yes"})]})},I=(n(242),{1:["Experiment","Experiment","Technology","Mathematics","Electives","Electives","Undecided"],2:["Mathematics","Mathematics","Music","English","Literature","Geography","Sports"],3:["Physics","Physics","Geology","English","Undecided","Club","Class Activity"],4:["Geology","Literature","Third Language","Geography","Mathematics","English","Art"],5:["Geography","Sports","English","Geology","Literature","Literature","Guidance"]}),w={Experiment:{icon:"science"},Undecided:{icon:"help"},Geology:{icon:"travel_explore"},"Class Meeting":{icon:"question_answer"},Technology:{icon:"build"},Information:{icon:"computer"},Mathematics:{icon:"calculate"},Electives:{icon:"class"},Club:{icon:"group"},Music:{icon:"music_note"},English:{icon:"language"},Literature:{icon:"book"},Geography:{icon:"terrain"},Sports:{icon:"sports_tennis"},Physics:{icon:"analytics"},"Third Language":{icon:"language"},Art:{icon:"palette"},Guidance:{icon:"follow_the_signs"}},q=["8:10 - 9:00","9:10 - 10:00","10:10 - 11:00","11:10 - 12:00","13:10 - 14:00","14:10 - 15:00","15:20 - 16:10"];var T=function(){var e=a.a.useState("Schedule"),t=Object(r.a)(e,2),n=t[0],c=t[1],o=a.a.useState(0),i=Object(r.a)(o,2),s=i[0],l=i[1],u=a.a.useState(4),b=Object(r.a)(u,2),h=b[0],g=b[1],O=a.a.useState(d()()),m=Object(r.a)(O,2),p=m[0],v=m[1];return a.a.useEffect((function(){return setInterval((function(){console.log("mounted"),v(d()())}),2e3)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{page:n,setPage:function(e){c(e),l(0)},setMax:g,setIndex:l,index:s,max:h}),"Schedule"===n?Object(j.jsx)(f,{info:w,schedule:I,day:(new Date).getDay(),periods:q,now:p,setMax:g,setIndex:l,index:s}):Object(j.jsx)(L,{setMax:g,_index:s,setIndex:l})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,261)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),D()}},[[243,1,2]]]);
//# sourceMappingURL=main.e39fff16.chunk.js.map