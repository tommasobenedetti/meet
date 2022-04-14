(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(66),i=n.n(r),s=(n(201),n(51)),c=n(23),l=n(24),u=n(25),d=n(26),h=n(27),f=n.n(h),m=(n(203),n(3)),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h1",{className:"summary",children:e.summary}),Object(m.jsx)("p",{className:"dateTime",children:e.dateTime}),Object(m.jsx)("p",{className:"timeZone",children:e.timeZone}),Object(m.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(m.jsxs)("div",{className:"details-view",children:[Object(m.jsx)("h2",{className:"details-header",children:"About event:"}),Object(m.jsx)("a",{href:e.htmlLink,className:"htmlLink",rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"}),Object(m.jsx)("p",{className:"description",children:e.description})]}),Object(m.jsx)("div",{className:"btn",children:Object(m.jsx)("button",{className:"".concat(t?"show":"hide","-details"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"})})]})}}]),n}(a.Component),v=p,b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("div",{className:"list",children:Object(m.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(v,{event:e})},e.id)}))})})}}]),n}(a.Component),g=b,j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(l.a)(n)}(j),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="green",a}return Object(l.a)(n)}(j),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(l.a)(n)}(j),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:"",showSuggestions:!0});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.locations!==e.locations&&this.setState({suggestions:this.props.locations})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)("label",{className:"citysearch-label",children:"choose a city:"}),Object(m.jsxs)("div",{className:"infoAlert",children:[Object(m.jsx)(w,{text:this.state.infoText}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{className:"see-suggestions-input",children:"See all cities"})})]})]})]})}}]),n}(a.Component),k=x,S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:"32",infoText:""},e.handleInputChange=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",infoText:"Please enter a number between 1 and 32"}):(e.setState({numberOfEvents:n,infoText:""}),e.props.updateNumberOfEvents(t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"NumberOfEvents",children:[Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Number of Events:"}),Object(m.jsx)("input",{type:"number",className:"numberOfEvents",value:this.state.numberOfEvents,onChange:this.handleInputChange}),Object(m.jsx)(y,{text:this.state.infoText})]})}}]),n}(a.Component),T=S;n(205);var Z=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{children:"Welcome to the Meet app"}),Object(m.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{className:"google-btn",children:[Object(m.jsx)("div",{className:"google-icon-wrapper",children:Object(m.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://tommasobenedetti.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},N=n(190),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=n(119),C=n.n(W),A=n(75),M=n.n(A),J=function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))},L=function(){var e=Object(s.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(f.a.mark((function e(){var t,n,a,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(navigator),M.a.start(),!window.location.href.startsWith("http://localhost")){e.next=5;break}return M.a.done(),e.abrupt("return",E);case 5:if(navigator.onLine){e.next=10;break}return console.log("The user is offline"),t=localStorage.getItem("lastEvents"),M.a.done(),e.abrupt("return",JSON.parse(t).events);case 10:return e.next=12,R();case 12:if(!(n=e.sent)){e.next=22;break}return B(),a="https://bokp5t9nbh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=18,C.a.get(a);case 18:return(o=e.sent).data&&(r=J(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),M.a.done(),e.abrupt("return",o.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(s.a)(f.a.mark((function e(t){var n,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://bokp5t9nbh.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(f.a.mark((function e(){var t,n,a,o,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,C.a.get("https://bokp5t9nbh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&I(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=n(357),U=n(361),H=n(362),F=n(186),z=n(187),G=n(78),_=n(191),Y=n(18),V=n(364),P=n(181),X=n(95),K=n(74),Q=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(Y.a)(n,2),r=o[0],i=o[1],s=["#d0427f","#f8a01f","#528272","#f15f4b","#7dbeb8","#5c69a0"];Object(a.useEffect)((function(){i((function(){return c()}))}),[t]);var c=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(m.jsx)(q.a,{height:400,children:Object(m.jsxs)(V.a,{width:400,height:400,children:[Object(m.jsx)(P.a,{data:r,cx:"50%",cy:"50%",innerRadius:20,dataKey:"value",fill:"#8884d8",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:80,children:r.map((function(e,t){return Object(m.jsx)(X.a,{fill:s[t%s.length]},"cell-".concat(t))}))}),Object(m.jsx)(K.a,{layout:"horizontal",verticalAlign:"top",align:"center",height:45})]})})},$=(n(355),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},e.updateNumberOfEvents=function(t){e.setState({numberOfEvents:t},e.updateEvents(e.state.location,t))},e.updateEvents=function(t){arguments.length>1&&void 0!==arguments[1]||e.state.numberOfEvents;D().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:a.slice(0,e.state.numberOfEvents),location:t,currentLocation:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(f.a.mark((function e(){var t,n,a,o,r=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,L(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&D().then((function(e){r.mounted&&r.setState({events:e,locations:J(e)})})),D().then((function(e){console.log(e),r.mounted&&r.setState({events:e.slice(0,r.state.numberOfEvents),locations:J(e)})})),navigator.onLine?this.setState({OfflineText:""}):this.setState({OfflineText:"Sorry but you are offline, this list is not up to date!"}),navigator.onLine?this.setState({OfflineText:""}):this.setState({OfflineText:"Sorry but you are offline, this list is not up to date!"});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;if(void 0===this.state.showWelcomeScreen)return Object(m.jsx)("div",{className:"App"});var t=this.state,n=t.locations,a=t.OfflineText;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{text:a}),Object(m.jsx)(k,{locations:n,numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(m.jsx)(T,{updateNumberOfEvents:function(t){e.updateNumberOfEvents(t)}}),Object(m.jsx)("h4",{children:"Events in each city"}),Object(m.jsxs)("div",{className:"data-vis-wrapper",children:[Object(m.jsx)(Q,{events:this.state.events}),Object(m.jsx)(q.a,{height:400,children:Object(m.jsxs)(U.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(m.jsx)(H.a,{}),Object(m.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(m.jsx)(z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(m.jsx)(G.a,{cursor:{strokeDasharray:"3 3"}}),Object(m.jsx)(_.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(m.jsx)(g,{events:this.state.events,numberOfEvents:this.state.numberOfEvents}),Object(m.jsx)(Z,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){R()}})]})}}]),n}(a.Component)),ee=$,te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(188).config("8401334477d54855b85cc2a5e86518d9").install(),i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),ae()}},[[356,1,2]]]);
//# sourceMappingURL=main.9a64b434.chunk.js.map