(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(27)},17:function(e,t,a){},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),i=a.n(s),l=(a(17),a(2)),r=a(3),o=a(5),u=a(4),h=a(6),d=(a(19),a(10)),m=a(1),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={stationSelection:0,navSticky:!1},a.sticky=null,a.handleStationSelect=a.handleStationSelect.bind(Object(m.a)(Object(m.a)(a))),a.handleScroll=a.handleScroll.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){null===this.sticky&&(this.sticky=document.getElementById("navbar").offsetTop),window.pageYOffset>=this.sticky?this.state.navSticky||this.setState({navSticky:!0}):(console.log("small"),this.state.navSticky&&this.setState({navSticky:!1}))}},{key:"handleStationSelect",value:function(e){this.setState(Object(d.a)({},this.state,{stationSelection:e}))}},{key:"render",value:function(){var e=this.props.data;return e?c.a.createElement("div",{className:"Content"},c.a.createElement(y,{data:e,selected:this.state.stationSelection,onClick:this.handleStationSelect,sticky:this.state.navSticky}),c.a.createElement("div",{className:"UserContent"},c.a.createElement("div",{className:"timestamp"},c.a.createElement("div",null,"Data Timestamp: ",e[this.state.stationSelection].Timestamp),c.a.createElement("div",null,"Current Timestamp: *To be completed* ")),c.a.createElement("div",{className:"SelectedContent"},c.a.createElement("div",{className:"TopPortion"},c.a.createElement(k,{data:e[this.state.stationSelection].RVR}),c.a.createElement("div",{className:"Col"},c.a.createElement("div",{className:"subtitle"},"METAR"),c.a.createElement(S,{data:e[this.state.stationSelection].METAR}),c.a.createElement("div",{className:"subtitle"},"TAF"),c.a.createElement(N,{data:e[this.state.stationSelection].TAF}))),c.a.createElement("div",{className:"Col"},c.a.createElement("div",{className:"subtitle"},"NOTAM"),c.a.createElement(f,{data:e[this.state.stationSelection].NOTAM}))))):c.a.createElement("div",{className:"Content"},c.a.createElement("div",{className:"UserContent fullborder"},c.a.createElement("p",null,"Please use the searchbox to initate a search.")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={searchValue:""},a.handleSearchChange=a.handleSearchChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSearchSubmit=a.handleSearchSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleSearchChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"handleSearchSubmit",value:function(e){e.preventDefault(),console.log(window.location),window.location.href=window.location.origin+"/?stations="+this.state.searchValue.toUpperCase()}},{key:"render",value:function(){return c.a.createElement("form",{className:"searchbox"},c.a.createElement("input",{className:"searchbox-input",type:"text",placeholder:"CYMX CYUL...",value:this.state.searchValue,onChange:this.handleSearchChange}),c.a.createElement("button",{type:"submit",className:"searchbox-button",onClick:this.handleSearchSubmit},"Get Info"))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={searchValue:""},a.handleSearchChange=a.handleSearchChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSearchSubmit=a.handleSearchSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleSearchChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"handleSearchSubmit",value:function(e){e.preventDefault();var t=this.state.searchValue.toUpperCase().split(" ");console.log(t),this.props.stationSearch(t)}},{key:"render",value:function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"App-header-content"},c.a.createElement("div",{className:"App-Title"},"Weathered Strip"),c.a.createElement(b,{stationSearch:this.props.stationSearch})))}}]),t}(n.Component);var S=function(e){e.children,e.className;var t,a=e.data;return a&&(t=a.map(function(e,t){return c.a.createElement("div",{className:"NotifText",key:t},e)})),c.a.createElement("div",{className:"Metars"},t)};var f=function(e){e.children,e.className;var t,a=e.data;return a&&(t=a.map(function(e,t){return c.a.createElement("div",{className:"NotifText",key:t},c.a.createElement("div",null,c.a.createElement("strong",null,e.title)),c.a.createElement("div",null,e.notam))})),c.a.createElement("div",{className:"Notams"},t)},E=a(9),O=a.n(E),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:null,stations:null},a.serverRequest=a.serverRequest.bind(Object(m.a)(Object(m.a)(a))),a.getInfo=a.getInfo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"serverRequest",value:function(e,t){var a=new XMLHttpRequest;a.addEventListener("readystatechange",function(){4===this.readyState&&(200===this.status?t(JSON.parse(this.responseText)):window.alert("The server is unreachable..."))}),a.open("GET","http://www.greghamel.com:3001/airport?q=".concat(e)),a.send(null)}},{key:"getInfo",value:function(e){var t=this;e!==this.state.stations&&(console.log(e),this.serverRequest(e,function(a){var n=a;t.setState({data:n,selectedStationIndex:0,stations:e})}))}},{key:"render",value:function(){var e=this.props.url;if(e.search){var t=O.a.parse(e.search).stations;console.log(t),this.getInfo(t)}return c.a.createElement(v,{data:this.state.data})}}]),t}(n.Component);var k=function(e){var t=e.data;return t?c.a.createElement("img",{id:"RVR",src:t,alt:"Aerodrome Chart"}):null};var y=function(e){e.children,e.className;var t=e.data,a=e.selected,n=e.onClick,s=e.sticky?"sticky":null,i=t.map(function(e,t){var s=a===t?"Station Selected":"Station";return c.a.createElement("div",{className:s,key:t,onClick:function(){return n(t)}},e.Station)});return c.a.createElement("div",{id:"navbar",className:s},i)};var N=function(e){e.children,e.className;var t,a=e.data;return a&&(t=a.map(function(e,t){return c.a.createElement("div",{className:"NotifText",key:t},e)})),c.a.createElement("div",{className:"tafs"},t)},w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(j,{url:this.props.url}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,{url:window.location}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.88f1b95e.chunk.js.map