(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{132:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(20),r=n.n(o),i=(n(132),n(14)),s=n(257),l=n(254),u=(n(44),n(7)),d=n.n(u),j=n(3);var f=n(43);var b=function(e){var t=e.schedule,n=e.info,a=e.periods2,o=e.periods3,r=e.day,i=(e.setMax,e.setIndex),u=e.index,b=e.now;return Object(c.useEffect)((function(){return i(0===r||6===r?0:r-1)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.a,{twoLine:!0,style:{"margin-top":"8px"},children:[Object(j.jsx)(f.a,{use:"subtitle2",style:{"margin-left":"16px"},children:"Tuesday"}),t[2].map((function(e,t){var c=d()(a[t].split("-")[0],"hhmm"),o=d()(a[t].split("-")[1],"hhmm");return Object(j.jsx)(l.c,{graphic:n[e].icon,text:e,secondaryText:a[t],selected:u===r-1&&b.isBefore(o)&&c.subtract(10,"minutes").isBefore(b)})}))]}),Object(j.jsxs)(s.a,{twoLine:!0,style:{"margin-top":"8px"},children:[Object(j.jsx)(f.a,{use:"subtitle2",style:{"margin-left":"16px"},children:"Wednesday"}),t[3].map((function(e,t){var c=d()(o[t].split("-")[0],"hhmm"),a=d()(o[t].split("-")[1],"hhmm");return Object(j.jsx)(l.c,{graphic:n[e].icon,text:e,secondaryText:o[t],selected:u===r-1&&b.isBefore(a)&&c.subtract(10,"minutes").isBefore(b)})}))]})]})},h=(n(139),n(140),n(78)),x=n(80);n(146);var O=function(e){var t=e.page,n=e.setPage,c=e.setMax,o=e.max,r=e.index,u=e.setIndex,d=a.a.useState(!1),f=Object(i.a)(d,2),b=f[0],O=f[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.a,{title:t,navigationIcon:!0,onNav:function(){return O(!0)},actionItems:[{icon:"navigate_before",onClick:function(e){u((function(e){return e-1}))},disabled:0===r},{icon:"navigate_next",onClick:function(e){u((function(e){return e+1}))},disabled:r===o}]}),Object(j.jsx)(h.b,{}),Object(j.jsx)(x.a,{modal:!0,open:b,onClose:function(){return O(!1)},children:Object(j.jsx)(x.b,{children:Object(j.jsxs)(s.a,{wrapFocus:!1,children:[Object(j.jsx)(l.a,{onClick:function(){n("Schedule"),c(4)},selected:"Schedule"===t,children:"Schedule"}),Object(j.jsx)(l.a,{onClick:function(){n("Todos")},selected:"Todos"===t,children:"Todos"})]})})})]})},m=n(81),p=n(255),g=n(79),v=n(123),y=n(119),S=n.n(y),k=(n(153),n(157),n(122)),C=n(256);n(165),n(169),n(171),n(36);var _=function(){return Object(j.jsx)("br",{})},I=n(120),w=n.n(I);var L=function(e){var t=e.setMax,n=e._index,a=(e.setIndex,function(e){return 100*e.year()+e.week()}),o=function(e){return 1e3*e.year()+e.dayOfYear()},r=Object(c.createRef)(),s=Object(c.createRef)(),u=new S.a({type:"date",past:d()(),future:d()().add(3,"years")}),b=Object(c.useState)(),h=Object(i.a)(b,2),x=h[0],O=h[1],y=Object(c.useState)(!1),I=Object(i.a)(y,2),L=I[0],M=I[1],q=a(d()()),E=Object(c.useState)(!1),T=Object(i.a)(E,2),D=T[0],F=T[1],N=Object(c.useState)([]),B=Object(i.a)(N,2),P=B[0],G=B[1],A=Object(c.useState)(""),J=Object(i.a)(A,2),R=J[0],Y=J[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&G(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(P))}),[P]);for(var H=P.filter((function(e){return q<=a(d()(e.date))})).sort((function(e,t){return o(d()(e.date))-o(d()(t.date))})),W=[],z=0,K=-1,Q=0;Q<H.length;Q++)a(d()(H[Q].date))>z&&(z=a(d()(H[Q].date)),W[++K]=[]),W[K].push(H[Q]);console.log(W,"week");var U=W.map((function(e){for(var t=[],n=0,c=-1,a=0;a<e.length;a++)o(d()(e[a].date))>n&&(n=o(d()(e[a].date)),t[++c]=[]),t[c].push(e[a]);return t}));return console.log(U),t(U.length-1<0?0:U.length-1),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{class:"list",children:0===P.length?null:U[n].map((function(e){return Object(j.jsx)(p.a,{nonInteractive:!0,defaultOpen:!0,handle:Object(j.jsx)(l.a,{children:Object(j.jsx)(f.a,{use:"subtitle2",children:d()(e[0].date).week()===q?d()(e[0].date).format("ddd"):"".concat(d()(e[0].date).format("M"),"/").concat(d()(e[0].date).format("D")," (").concat(d()(e[0].date).format("ddd"),")")})}),children:e.map((function(e){return Object(j.jsx)(w.a,{onClickNHold:function(t,n){n.nativeEvent.preventDefault(),Y(e.date),F(!0)},time:.4,children:Object(j.jsxs)(l.a,{children:[e.name,Object(j.jsx)(l.b,{children:Object(j.jsx)(v.a,{checked:e.checked,onChange:function(){return function(e){var t=Object(m.a)(P),n=t.find((function(t){return t.date===e}));n.checked=!n.checked,G(t)}(e.date)}})})]})})}))})}))}),Object(j.jsxs)(C.a,{open:L,onClose:function(e){M(!1)},children:[Object(j.jsx)(C.e,{children:"Add Todo"}),Object(j.jsxs)(C.d,{children:[Object(j.jsx)(g.a,{label:"Name",ref:s,onFocus:function(){return s.current.querySelector(".mdc-floating-label").classList.add("mdc-floating-label--float-above")}}),Object(j.jsx)(_,{}),Object(j.jsx)(g.a,{trailingIcon:{icon:"event",onClick:function(e){e.preventDefault(),document.querySelector(".mddtp-picker__subtitle").classList.remove("mddtp-picker__color--active"),document.querySelector(".mddtp-picker__title").classList.add("mddtp-picker__color--active"),u.toggle(),document.querySelector("#mddtp-date__ok").addEventListener("click",(function(){e.target.parentNode.querySelector("input").value=u.time.format("ddd[,] MMM D"),e.target.parentNode.querySelector(".mdc-floating-label").classList.add("mdc-floating-label--float-above"),O(u.time.format())}))}},ref:r,label:"Date",readOnly:!0})]}),Object(j.jsxs)(C.b,{children:[Object(j.jsx)(C.c,{action:"close",children:"Cancel"}),Object(j.jsx)(C.c,{action:"accept",isDefaultAction:!0,onClick:function(){return function(){var e={date:x,checked:!1,name:s.current.querySelector("input").value};r.current.querySelector("input").value=s.current.querySelector("input").value="",G([].concat(Object(m.a)(P),[e])),console.log(P)}()},children:"Add"})]})]}),Object(j.jsx)(k.a,{raised:!0,icon:"add",onClick:function(){M(!0),r.current.querySelector(".mdc-floating-label").classList.remove("mdc-floating-label--float-above"),s.current.querySelector(".mdc-floating-label").classList.remove("mdc-floating-label--float-above")}}),Object(j.jsx)(C.f,{open:D,onClose:function(e){return"accept"===e.detail.action&&G((function(e){return e.filter((function(e){return e.date!==R}))}))},onClosed:function(){return F(!1)},body:Object(j.jsx)("span",{children:"Do you want to delete the task?"}),title:Object(j.jsx)("span",{children:"Confirm"}),acceptLabel:"Yes"})]})},M=(n(242),{2:["Mathematics","Geology","English"],3:["Geography","Literature","Physics"]}),q={Experiment:{icon:"science"},Geology:{icon:"travel_explore"},"Class Meeting":{icon:"question_answer"},Technology:{icon:"build"},Information:{icon:"computer"},Mathematics:{icon:"calculate"},Electives:{icon:"class"},Club:{icon:"group"},Music:{icon:"music_note"},English:{icon:"language"},Literature:{icon:"book"},Geography:{icon:"terrain"},Sports:{icon:"sports_tennis"},Physics:{icon:"analytics"},"Third Language":{icon:"language"},Art:{icon:"palette"},Guidance:{icon:"follow_the_signs"}},E=["8:10 - 9:20","9:30 - 10:30","14:40 - 15:50"],T=["8:10 - 9:10","10:50 - 12:00","14:40 - 15:50"];var D=function(){var e=a.a.useState("Schedule"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=a.a.useState(0),r=Object(i.a)(o,2),s=r[0],l=r[1],u=a.a.useState(4),f=Object(i.a)(u,2),h=f[0],x=f[1],m=a.a.useState(d()()),p=Object(i.a)(m,2),g=p[0],v=p[1];return a.a.useEffect((function(){return setInterval((function(){console.log("mounted"),v(d()())}),2e3)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{page:n,setPage:function(e){c(e),l(0)},setMax:x,setIndex:l,index:s,max:h}),"Schedule"===n?Object(j.jsx)(b,{info:q,schedule:M,day:(new Date).getDay(),periods2:E,periods3:T,now:g,setMax:x,setIndex:l,index:s}):Object(j.jsx)(L,{setMax:x,_index:s,setIndex:l})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,261)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),F()}},[[243,1,2]]]);
//# sourceMappingURL=main.8c5b663d.chunk.js.map