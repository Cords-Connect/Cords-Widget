(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();var O,f,z,N,I,D={},G=[],te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var o in e)t[o]=e[o];return t}function q(t){var e=t.parentNode;e&&e.removeChild(t)}function ne(t,e,o){var l,r,n,s={};for(n in e)n=="key"?l=e[n]:n=="ref"?r=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?O.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return E(t,s,l,r,null)}function E(t,e,o,l,r){var n={type:t,props:e,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++z};return r==null&&f.vnode!=null&&f.vnode(n),n}function H(t){return t.children}function L(t,e){this.props=t,this.context=e}function S(t,e){if(e==null)return t.__?S(t.__,t.__.__k.indexOf(t)+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?S(t):null}function K(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return K(t)}}function $(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!M.__r++||I!==f.debounceRendering)&&((I=f.debounceRendering)||setTimeout)(M)}function M(){for(var t;M.__r=N.length;)t=N.sort(function(e,o){return e.__v.__b-o.__v.__b}),N=[],t.some(function(e){var o,l,r,n,s,u;e.__d&&(s=(n=(o=e).__v).__e,(u=o.__P)&&(l=[],(r=k({},n)).__v=n.__v+1,W(u,n,r,o.__n,u.ownerSVGElement!==void 0,n.__h!=null?[s]:null,l,s??S(n),n.__h),Y(l,n),n.__e!=s&&K(n)))})}function J(t,e,o,l,r,n,s,u,d,p){var _,h,c,i,a,w,y,v=l&&l.__k||G,g=v.length;for(o.__k=[],_=0;_<e.length;_++)if((i=o.__k[_]=(i=e[_])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?E(null,i,null,null,i):Array.isArray(i)?E(H,{children:i},null,null,null):i.__b>0?E(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=o,i.__b=o.__b+1,(c=v[_])===null||c&&i.key==c.key&&i.type===c.type)v[_]=void 0;else for(h=0;h<g;h++){if((c=v[h])&&i.key==c.key&&i.type===c.type){v[h]=void 0;break}c=null}W(t,i,c=c||D,r,n,s,u,d,p),a=i.__e,(h=i.ref)&&c.ref!=h&&(y||(y=[]),c.ref&&y.push(c.ref,null,i),y.push(h,i.__c||a,i)),a!=null?(w==null&&(w=a),typeof i.type=="function"&&i.__k===c.__k?i.__d=d=Q(i,d,t):d=X(t,i,c,v,a,d),typeof o.type=="function"&&(o.__d=d)):d&&c.__e==d&&d.parentNode!=t&&(d=S(c))}for(o.__e=w,_=g;_--;)v[_]!=null&&ee(v[_],v[_]);if(y)for(_=0;_<y.length;_++)Z(y[_],y[++_],y[++_])}function Q(t,e,o){for(var l,r=t.__k,n=0;r&&n<r.length;n++)(l=r[n])&&(l.__=t,e=typeof l.type=="function"?Q(l,e,o):X(o,l,l,r,l.__e,e));return e}function X(t,e,o,l,r,n){var s,u,d;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(o==null||r!=n||r.parentNode==null)e:if(n==null||n.parentNode!==t)t.appendChild(r),s=null;else{for(u=n,d=0;(u=u.nextSibling)&&d<l.length;d+=1)if(u==r)break e;t.insertBefore(r,n),s=n}return s!==void 0?s:r.nextSibling}function _e(t,e,o,l,r){var n;for(n in o)n==="children"||n==="key"||n in e||U(t,n,null,o[n],l);for(n in e)r&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||o[n]===e[n]||U(t,n,e[n],o[n],l)}function R(t,e,o){e[0]==="-"?t.setProperty(e,o):t[e]=o==null?"":typeof o!="number"||te.test(e)?o:o+"px"}function U(t,e,o,l,r){var n;e:if(e==="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)o&&e in o||R(t.style,e,"");if(o)for(e in o)l&&o[e]===l[e]||R(t.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=o,o?l||t.addEventListener(e,n?V:B,n):t.removeEventListener(e,n?V:B,n);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,o))}}function B(t){this.l[t.type+!1](f.event?f.event(t):t)}function V(t){this.l[t.type+!0](f.event?f.event(t):t)}function W(t,e,o,l,r,n,s,u,d){var p,_,h,c,i,a,w,y,v,g,C,x,F,P,A,m=e.type;if(e.constructor!==void 0)return null;o.__h!=null&&(d=o.__h,u=e.__e=o.__e,e.__h=null,n=[u]),(p=f.__b)&&p(e);try{e:if(typeof m=="function"){if(y=e.props,v=(p=m.contextType)&&l[p.__c],g=p?v?v.props.value:p.__:l,o.__c?w=(_=e.__c=o.__c).__=_.__E:("prototype"in m&&m.prototype.render?e.__c=_=new m(y,g):(e.__c=_=new L(y,g),_.constructor=m,_.render=re),v&&v.sub(_),_.props=y,_.state||(_.state={}),_.context=g,_.__n=l,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(y,_.__s))),c=_.props,i=_.state,h)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&y!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,g)===!1||e.__v===o.__v){for(_.props=y,_.state=_.__s,e.__v!==o.__v&&(_.__d=!1),_.__v=e,e.__e=o.__e,e.__k=o.__k,e.__k.forEach(function(T){T&&(T.__=e)}),C=0;C<_._sb.length;C++)_.__h.push(_._sb[C]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,i,a)})}if(_.context=g,_.props=y,_.__v=e,_.__P=t,x=f.__r,F=0,"prototype"in m&&m.prototype.render){for(_.state=_.__s,_.__d=!1,x&&x(e),p=_.render(_.props,_.state,_.context),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[]}else do _.__d=!1,x&&x(e),p=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++F<25);_.state=_.__s,_.getChildContext!=null&&(l=k(k({},l),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(a=_.getSnapshotBeforeUpdate(c,i)),A=p!=null&&p.type===H&&p.key==null?p.props.children:p,J(t,Array.isArray(A)?A:[A],e,o,l,r,n,s,u,d),_.base=e.__e,e.__h=null,_.__h.length&&s.push(_),w&&(_.__E=_.__=null),_.__e=!1}else n==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=oe(o.__e,e,o,l,r,n,s,d);(p=f.diffed)&&p(e)}catch(T){e.__v=null,(d||n!=null)&&(e.__e=u,e.__h=!!d,n[n.indexOf(u)]=null),f.__e(T,e,o)}}function Y(t,e){f.__c&&f.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(l){l.call(o)})}catch(l){f.__e(l,o.__v)}})}function oe(t,e,o,l,r,n,s,u){var d,p,_,h=o.props,c=e.props,i=e.type,a=0;if(i==="svg"&&(r=!0),n!=null){for(;a<n.length;a++)if((d=n[a])&&"setAttribute"in d==!!i&&(i?d.localName===i:d.nodeType===3)){t=d,n[a]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),n=null,u=!1}if(i===null)h===c||u&&t.data===c||(t.data=c);else{if(n=n&&O.call(t.childNodes),p=(h=o.props||D).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!u){if(n!=null)for(h={},a=0;a<t.attributes.length;a++)h[t.attributes[a].name]=t.attributes[a].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(_e(t,c,h,r,u),_)e.__k=[];else if(a=e.props.children,J(t,Array.isArray(a)?a:[a],e,o,l,r&&i!=="foreignObject",n,s,n?n[0]:o.__k&&S(o,0),u),n!=null)for(a=n.length;a--;)n[a]!=null&&q(n[a]);u||("value"in c&&(a=c.value)!==void 0&&(a!==t.value||i==="progress"&&!a||i==="option"&&a!==h.value)&&U(t,"value",a,h.value,!1),"checked"in c&&(a=c.checked)!==void 0&&a!==t.checked&&U(t,"checked",a,h.checked,!1))}return t}function Z(t,e,o){try{typeof t=="function"?t(e):t.current=e}catch(l){f.__e(l,o)}}function ee(t,e,o){var l,r;if(f.unmount&&f.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||Z(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){f.__e(n,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&ee(l[r],e,o||typeof t.type!="function");o||t.__e==null||q(t.__e),t.__=t.__e=t.__d=void 0}function re(t,e,o){return this.constructor(t,o)}function le(t,e,o){var l,r,n;f.__&&f.__(t,e),r=(l=typeof o=="function")?null:o&&o.__k||e.__k,n=[],W(e,t=(!l&&o||e).__k=ne(H,null,[t]),r||D,D,e.ownerSVGElement!==void 0,!l&&o?[o]:r?null:e.firstChild?O.call(e.childNodes):null,n,!l&&o?o:r?r.__e:e.firstChild,l),Y(n,t)}O=G.slice,f={__e:function(t,e,o,l){for(var r,n,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),s=r.__d),s)return r.__E=r}catch(u){t=u}throw t}},z=0,L.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},o),this.props)),t&&k(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),$(this))},L.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),$(this))},L.prototype.render=H,N=[],M.__r=0;var ie=0;function b(t,e,o,l,r){var n,s,u={};for(s in e)s=="ref"?n=e[s]:u[s]=e[s];var d={type:t,props:u,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ie,__source:r,__self:l};if(typeof t=="function"&&(n=t.defaultProps))for(s in n)u[s]===void 0&&(u[s]=n[s]);return f.vnode&&f.vnode(d),d}function se({Container:t}){const e=t.getAttribute("data-keywords"),o=t.getAttribute("data-description"),l=document.getElementsByTagName("meta"),r=[];for(const n of l){const s=n.getAttribute("name"),u=n.getAttribute("content");(s==="keywords"||s==="description")&&u&&r.push({name:s,content:u})}return b("div",{className:"p-8 border-[2px] border-[#ccc] m-4 rounded-xl",children:[b("h1",{className:"text-3xl mb-4",children:"Widget Test"}),b("h1",{className:"text-lg",children:["Fully built with React and Vite at"," ",b("a",{className:"text-blue-600 underline",href:"https://github.com/billyhawkes/widget",target:"_blank",children:"REPO"}),". So far this widget gets data from the users website into React. The data below can be used to find similar services based on keywords/description."]}),b("h2",{className:"text-lg mb-2 my-4",children:["Custom values: User can input custom keywords and description in the html or via"," ",b("a",{className:"text-blue-600 underline",href:"https://github.com/billyhawkes/cords-wp-plugin",target:"_blank",children:"wordpress plugin"})]}),b("h2",{children:["keywords: ",e]}),b("h2",{children:["description: ",o]}),b("h2",{className:"text-lg mb-2 my-4",children:"Meta tags: finds description and keywords from meta"}),r.map(n=>b("p",{children:[n.name,": ",n.content]}))]})}const j=document.getElementById("widget");le(b(se,{Container:j}),j);
