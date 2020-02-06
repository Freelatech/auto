(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{68:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,r=l(t(3)),o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};s.get||s.set?Object.defineProperty(a,t,s):a[t]=e[t]}return a.default=e,a}(t(0));l(t(2)),l(t(108));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,a,t,r){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(a||0===l||(a={children:void 0}),a&&o)for(var i in o)void 0===a[i]&&(a[i]=o[i]);else a||(a=o||{});if(1===l)a.children=r;else if(l>1){for(var n=new Array(l),d=0;d<l;d++)n[d]=arguments[d+3];a.children=n}return{$$typeof:s,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const u=e=>{let{to:a}=e,t=c(e,["to"]);return a.includes("http")?o.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/auto/","pages/build-platforms/circleci.html")+a),o.default.createElement("a",d({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const s=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(s),null,a),e.onClick();const o=new CustomEvent("changeLocation",{detail:s});return dispatchEvent(o),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const h=e=>{var a,t;return t=a=class extends o.default.Component{constructor(...e){super(...e),n(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},n(a,"defaultProps",{shouldLoad:!0}),t};h(()=>t.e(32).then(t.bind(null,109))),h(()=>t.e(32).then(t.bind(null,110)));var p=i("h1",{},void 0,"CircleCI"),v=i("p",{},void 0,"The following config declares the ",i("code",{},void 0,"release")," job and uses it in the ",i("code",{},void 0,"build_and_release")," workflow. The ",i("code",{},void 0,"release")," job will run at the end of each build and either release:"),m=i("ul",{},void 0,i("li",{},void 0,"a new ",i("code",{},void 0,"latest")," version from ",i("code",{},void 0,"master")),i("li",{},void 0,"a ",i("code",{},void 0,"canary")," build from a pull request (if your package manager plugin implements them)")),b=i("pre",{},void 0,i("code",{className:"language-yaml"},void 0,i("span",{className:"hljs-attr"},void 0,"version:")," ",i("span",{className:"hljs-number"},void 0,"2"),i("br",{}),i("br",{}),i("span",{className:"hljs-attr"},void 0,"defaults:")," ",i("span",{className:"hljs-meta"},void 0,"&defaults"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  working_directory:")," ",i("span",{className:"hljs-string"},void 0,"~/auto"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  docker:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"    - image:")," ",i("span",{className:"hljs-string"},void 0,"circleci/node:latest-browsers"),i("br",{}),i("br",{}),i("span",{className:"hljs-attr"},void 0,"jobs:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  install:")," ",i("span",{className:"hljs-comment"},void 0,"# your install job"),i("br",{}),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  release:"),i("br",{}),"    ",i("span",{className:"hljs-string"},void 0,"<<:")," ",i("span",{className:"hljs-meta"},void 0,"*defaults"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"    steps:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"      - attach_workspace:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"          at:")," ",i("span",{className:"hljs-string"},void 0,"~/auto"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"      - run:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"          name:")," ",i("span",{className:"hljs-string"},void 0,"Release"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"          command:")," ",i("span",{className:"hljs-string"},void 0,"npx")," ",i("span",{className:"hljs-string"},void 0,"auto")," ",i("span",{className:"hljs-string"},void 0,"shipit"),i("br",{}),i("br",{}),i("span",{className:"hljs-attr"},void 0,"workflows:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  version:")," ",i("span",{className:"hljs-number"},void 0,"2"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"  build_and_release:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"    jobs:"),i("br",{}),i("span",{className:"hljs-bullet"},void 0,"      -")," ",i("span",{className:"hljs-string"},void 0,"install"),i("br",{}),i("br",{}),i("span",{className:"hljs-attr"},void 0,"      - release:"),i("br",{}),i("span",{className:"hljs-attr"},void 0,"          requires:"),i("br",{}),i("span",{className:"hljs-bullet"},void 0,"            -")," ",i("span",{className:"hljs-string"},void 0,"install"),i("br",{}))),f=i("p",{},void 0,"If you are having problems make sure you have done the following:"),g=i("ul",{},void 0,i("li",{},void 0,i("code",{},void 0,"GH_TOKEN")," is set"),i("li",{},void 0,"Any other secrets for plugins are set (Ex; ",i("code",{},void 0,"NPM_TOKEN")," with the NPM plugin)")),j=i("p",{},void 0,"Go to Settings -> Checkout SSH Keys -> ",i("code",{},void 0,"Create and add YOUR_USERNAME user key"),". This will create a key with the ability to push to github."),N=i("code",{},void 0,"auto"),y=i("code",{},void 0,"Ignite"),w=i("code",{},void 0,"reaction");var P=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,v,m,b,i("h2",{id:"troubleshooting"},void 0,"Troubleshooting ",i(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#troubleshooting","aria-hidden":"true"})),f,g,i("h3",{id:"problems-pushing-tags-to-github"},void 0,"Problems pushing tags to github ",i(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#problems-pushing-tags-to-github","aria-hidden":"true"})),j,i("h2",{id:"examples"},void 0,"Examples ",i(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,i(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/auto/blob/master/.circleci/config.yml",className:"external-link"},void 0,N)),i("li",{},void 0,i(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/Ignite/blob/master/.circleci/config.yml",className:"external-link"},void 0,y)),i("li",{},void 0,i(u,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/artsy/reaction/blob/master/.circleci/config.yml",className:"external-link"},void 0,w)))));a.default=P,e.exports=a.default}}]);
//# sourceMappingURL=circleci.js.map