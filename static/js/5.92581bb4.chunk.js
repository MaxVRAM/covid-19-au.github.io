(this["webpackJsonp2019-ncov"]=this["webpackJsonp2019-ncov"]||[]).push([[5],{268:function(e,t,o){"use strict";o.r(t);var a=o(8),n=o(0),r=o.n(n),c=o(266);t.default=function(e){var t=e.province,o=e.newData,i=Object(n.useState)(!0),f=Object(a.a)(i,2),s=f[0],u=f[1];Object(n.useEffect)((function(){u(!1)}),[t]);var A=Object(n.useState)(null),l=Object(a.a)(A,2),p=l[0],d=l[1];return Object(n.useEffect)((function(){for(var e={NSW:"AU-NSW",ACT:"AU-ACT",NT:"AU-NT",WA:"AU-WA",VIC:"AU-VIC",QLD:"AU-QLD",SA:"AU-SA",TAS:"AU-TAS"},t=[["state","Confirmed"]],a=0;a<o.length;a++)t.push([{v:e[o[a][0]],f:o[a][0]},parseInt(o[a][1])]);d(t)}),[t]),s?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement(c.a,{width:window.innerWidth<960?"100%":"auto",left:"auto",align:"right",top:"40%",chartType:"GeoChart",data:p,options:{region:"AU",colorAxis:{colors:["#ffefef","#ffc0b1","#ff8c71","#ef1717"]},backgroundColor:"white",datalessRegionColor:"rgb(216,221,224)",defaultColor:"#f5f5f5",resolution:"provinces"},mapsApiKey:"YOUR_KEY_HERE",rootProps:{"data-testid":"3"}})}}}]);
//# sourceMappingURL=5.92581bb4.chunk.js.map