(function(){var t={7997:function(t,e,n){"use strict";var i=n(9242),s=n(3396),o=n(7139),r=n(9204);const a={class:"app"},p=(0,s._)("div",{class:"app__icon"},[(0,s._)("img",{src:r,"aria-hidden":"true"})],-1),c={class:"app__nav-button-container"},g={class:"app__nav-list"},u=["onClick"],f=["href"],_={key:1},l=["href"],d={class:"app__header"},m={class:"app__header-title"},h={class:"app__header-title-sub"},b={class:"app__main"},v=["innerHTML"],x={key:1,class:"app__main-gallery"},k=["src"],y={key:2},w=["width","height","src"];function D(t,e,n,i,r,D){return(0,s.wg)(),(0,s.iD)("div",a,[p,(0,s._)("nav",{class:(0,o.C_)(["app__nav",{open:r.mobileNavOpen}])},[(0,s._)("div",c,[(0,s._)("button",{class:"app__nav-button",onClick:e[0]||(e[0]=t=>r.mobileNavOpen=!r.mobileNavOpen),"aria-label":"open navigation"})]),(0,s._)("ul",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(D.$siteContent.sections,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n,class:(0,o.C_)(["app__nav-list-item",{active:r.navOpen[n]}]),onClick:t=>D.openItem(n)},[t.pages?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:0,href:"#/"+t.url,onClick:e[1]||(e[1]=t=>r.mobileNavOpen=!1)},(0,o.zw)(t.title),9,f)),t.pages?((0,s.wg)(),(0,s.iD)("button",_,(0,o.zw)(t.title),1)):(0,s.kq)("",!0),t.pages?((0,s.wg)(),(0,s.iD)("ul",{key:2,class:(0,o.C_)(["app__nav-list-sub",{active:r.navOpen[n]}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.pages,(n=>((0,s.wg)(),(0,s.iD)("li",{key:n.title,class:(0,o.C_)(["app__nav-list-sub-item",{active:r.currentSection===t.url&&r.currentPage===n.url}])},[(0,s._)("a",{href:"#/"+t.url+"/"+n.url,onClick:e[2]||(e[2]=t=>r.mobileNavOpen=!1)},(0,o.zw)(n.title),9,l)],2)))),128))],2)):(0,s.kq)("",!0)],10,u)))),128))])],2),(0,s._)("header",d,[(0,s._)("h1",m,[(0,s._)("div",h,(0,o.zw)(r.currentSection),1),(0,s.Uk)(" "+(0,o.zw)(r.pageData.heading||r.pageData.title),1)])]),(0,s._)("main",b,[r.pageData.text?((0,s.wg)(),(0,s.iD)("p",{key:0,class:"app__main-lede",innerHTML:r.pageData.text},null,8,v)):(0,s.kq)("",!0),r.pageData.images?((0,s.wg)(),(0,s.iD)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.pageData.images,((t,e)=>((0,s.wg)(),(0,s.iD)("img",{class:(0,o.C_)(["app__main-gallery-item",{"app__main-gallery-item--shop":"Shop"===r.currentSection}]),key:e,src:D.getImg(t)},null,10,k)))),128))])):(0,s.kq)("",!0),r.pageData.videoLink?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("iframe",{class:"app__main-video-container",width:r.videoPlayerWidth,height:r.videoPlayerHeight,src:r.pageData.videoLink,title:"Video player",frameborder:"0",allowfullscreen:""},null,8,w)])):(0,s.kq)("",!0)])])}var O={name:"App",data(){return{currentSection:"",currentPage:"",pageData:{},navOpen:[],mobileNavOpen:!1,videoPlayerWidth:720,videoPlayerHeight:405}},inject:["$siteContent"],created(){this.urlChange(),this.navOpen=this.$siteContent.sections.map((t=>t.url===this.currentSection))},mounted(){window.addEventListener("hashchange",this.urlChange)},methods:{urlChange(){const t=window.location.hash.match(/[a-z0-9]+/gi);if(t){const e=this.$siteContent.sections.find((e=>e.url===t[0]));if(e)if(e.pages){if(this.pageData=e.pages.find((e=>e.url===t[1])),this.pageData)return this.currentSection=t[0],this.currentPage=t[1],this.setPageTitle(),void this.setVideoPlayerSize()}else if(this.pageData=e,this.pageData)return this.currentSection=t[0],this.currentPage="",this.setPageTitle(),void this.setVideoPlayerSize()}window.location.hash="#/About"},setPageTitle(){document.title=this.$siteContent.title+" | "+(this.currentPage||this.currentSection)},setVideoPlayerSize(){this.pageData.videoLink&&(this.videoPlayerWidth=window.innerWidth>768?720:window.innerWidth-48,this.videoPlayerHeight=(this.pageData.videoLinkHeight||405)*(this.videoPlayerWidth/720))},openItem(t){this.navOpen=this.navOpen.map((()=>!1)),"number"===typeof t&&(this.navOpen[t]=!0)},getImg(t){return t?n(425)("./"+t):""}}},j=n(89);const C=(0,j.Z)(O,[["render",D]]);var P=C;function S(t){return t.replace(/[^a-z0-9]/gi,"")}fetch("data/siteContent.json").then((t=>t.json().then((t=>{const e=(0,i.ri)(P);t.sections.forEach((t=>{t.url=S(t.title),t.pages&&t.pages.forEach((t=>t.url=S(t.title)))})),e.provide("$siteContent",t),e.mount("#app")}))))},425:function(t,e,n){var i={"./FLEABAG.gif":13,"./another_day.png":2566,"./bad_guy.png":9542,"./bboy_insta.png":4823,"./bboy_insta2.png":8677,"./bboy_insta3.png":1921,"./bboy_insta4.png":9756,"./bee.png":141,"./boogie_man_insta.png":5615,"./botgenius.png":7811,"./calico_1.png":520,"./calico_2.png":5830,"./cheers_4_cover_insta.png":3758,"./cheers_4_page_insta.png":2318,"./cheers_5_cover_insta.png":9966,"./cheers_5_page_insta.png":2064,"./cheers_6_cover_insta.png":6249,"./cheers_6_page_insta.png":4747,"./comin_out.png":4639,"./cov.jpg":8239,"./deadmau5_insta.png":6828,"./editiorial_illustration_final.png":5884,"./few_bits.6.png":750,"./fotb.png":6289,"./gems.gif":3937,"./guessers.1.png":7079,"./guessers.4.png":2786,"./horsey.gif":113,"./hotchoc.png":7381,"./hydrodeo.gif":8953,"./inktober.1.png":7091,"./inktober.2.png":9620,"./inktober1_b.png":8687,"./inktober_1.1.png":3448,"./inktober_1.2.png":3218,"./inktober_1.3.png":4592,"./insta_a.png":623,"./insta_b.png":6449,"./insta_c.png":4900,"./insta_d.png":9691,"./insta_e.png":1712,"./insta_f.png":1831,"./johnny_filthb.png":2726,"./kav-dance-logo.gif":9204,"./kav-dance-logo_old.gif":2002,"./kinks.png":360,"./meatball1.jpg":4090,"./meatball2.jpg":3403,"./mkultrafilm_final.png":7083,"./nice_beano.gif":468,"./phonebooth.gif":1437,"./pip_d.png":9805,"./princessnoke.png":9682,"./rrr.gif":1519,"./sfmmm_a.jpg":4358,"./sfmmm_b.jpg":9042,"./sfmmm_c.jpg":153,"./snoopdogg.png":9082,"./space_skank_insta.png":399,"./sunday_paper_b.gif":8371,"./trench.png":8346,"./wakeywakey.jpg":6735};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id=425},13:function(t,e,n){"use strict";t.exports=n.p+"img/FLEABAG.eabf14a1.gif"},2566:function(t,e,n){"use strict";t.exports=n.p+"img/another_day.7c5571ba.png"},9542:function(t,e,n){"use strict";t.exports=n.p+"img/bad_guy.c9ed4b09.png"},4823:function(t,e,n){"use strict";t.exports=n.p+"img/bboy_insta.22f6ed9c.png"},8677:function(t,e,n){"use strict";t.exports=n.p+"img/bboy_insta2.e7a4483c.png"},1921:function(t,e,n){"use strict";t.exports=n.p+"img/bboy_insta3.a844f0c2.png"},9756:function(t,e,n){"use strict";t.exports=n.p+"img/bboy_insta4.eb0064d9.png"},141:function(t,e,n){"use strict";t.exports=n.p+"img/bee.441960d9.png"},5615:function(t,e,n){"use strict";t.exports=n.p+"img/boogie_man_insta.e4a2e60b.png"},7811:function(t,e,n){"use strict";t.exports=n.p+"img/botgenius.db1ab634.png"},520:function(t,e,n){"use strict";t.exports=n.p+"img/calico_1.2eb7cdcd.png"},5830:function(t,e,n){"use strict";t.exports=n.p+"img/calico_2.772a46d6.png"},3758:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_4_cover_insta.b7a11293.png"},2318:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_4_page_insta.d14df684.png"},9966:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_5_cover_insta.7d34dc82.png"},2064:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_5_page_insta.e519a68f.png"},6249:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_6_cover_insta.634c89e4.png"},4747:function(t,e,n){"use strict";t.exports=n.p+"img/cheers_6_page_insta.f8ba198b.png"},4639:function(t,e,n){"use strict";t.exports=n.p+"img/comin_out.c1f3524a.png"},8239:function(t,e,n){"use strict";t.exports=n.p+"img/cov.b7b814e1.jpg"},6828:function(t,e,n){"use strict";t.exports=n.p+"img/deadmau5_insta.a92f2cb1.png"},5884:function(t,e,n){"use strict";t.exports=n.p+"img/editiorial_illustration_final.e4b0813a.png"},750:function(t,e,n){"use strict";t.exports=n.p+"img/few_bits.6.7ac84ffe.png"},6289:function(t,e,n){"use strict";t.exports=n.p+"img/fotb.2349ce95.png"},3937:function(t,e,n){"use strict";t.exports=n.p+"img/gems.25d3ad18.gif"},7079:function(t,e,n){"use strict";t.exports=n.p+"img/guessers.1.98fed148.png"},2786:function(t,e,n){"use strict";t.exports=n.p+"img/guessers.4.c1587d3f.png"},113:function(t,e,n){"use strict";t.exports=n.p+"img/horsey.fe7e9e59.gif"},7381:function(t,e,n){"use strict";t.exports=n.p+"img/hotchoc.d80569bc.png"},8953:function(t,e,n){"use strict";t.exports=n.p+"img/hydrodeo.e18ce3c9.gif"},7091:function(t,e,n){"use strict";t.exports=n.p+"img/inktober.1.5d621da5.png"},9620:function(t,e,n){"use strict";t.exports=n.p+"img/inktober.2.1c305e41.png"},8687:function(t,e,n){"use strict";t.exports=n.p+"img/inktober1_b.097d291b.png"},3448:function(t,e,n){"use strict";t.exports=n.p+"img/inktober_1.1.39b91243.png"},3218:function(t,e,n){"use strict";t.exports=n.p+"img/inktober_1.2.9ccaffdf.png"},4592:function(t,e,n){"use strict";t.exports=n.p+"img/inktober_1.3.985beac4.png"},623:function(t,e,n){"use strict";t.exports=n.p+"img/insta_a.355e7131.png"},6449:function(t,e,n){"use strict";t.exports=n.p+"img/insta_b.ca387e2c.png"},4900:function(t,e,n){"use strict";t.exports=n.p+"img/insta_c.76058a72.png"},9691:function(t,e,n){"use strict";t.exports=n.p+"img/insta_d.c74617f2.png"},1712:function(t,e,n){"use strict";t.exports=n.p+"img/insta_e.cdae1b25.png"},1831:function(t,e,n){"use strict";t.exports=n.p+"img/insta_f.0d403bf6.png"},2726:function(t,e,n){"use strict";t.exports=n.p+"img/johnny_filthb.4176c3f6.png"},9204:function(t,e,n){"use strict";t.exports=n.p+"img/kav-dance-logo.0f71d03b.gif"},2002:function(t,e,n){"use strict";t.exports=n.p+"img/kav-dance-logo_old.7287f855.gif"},360:function(t,e,n){"use strict";t.exports=n.p+"img/kinks.1afd6d68.png"},4090:function(t,e,n){"use strict";t.exports=n.p+"img/meatball1.f14bc037.jpg"},3403:function(t,e,n){"use strict";t.exports=n.p+"img/meatball2.f51f8d9b.jpg"},7083:function(t,e,n){"use strict";t.exports=n.p+"img/mkultrafilm_final.1f7e5558.png"},468:function(t,e,n){"use strict";t.exports=n.p+"img/nice_beano.7349764d.gif"},1437:function(t,e,n){"use strict";t.exports=n.p+"img/phonebooth.87011d60.gif"},9805:function(t,e,n){"use strict";t.exports=n.p+"img/pip_d.ed611d7b.png"},9682:function(t,e,n){"use strict";t.exports=n.p+"img/princessnoke.5587cf8c.png"},1519:function(t,e,n){"use strict";t.exports=n.p+"img/rrr.b4a7ce62.gif"},4358:function(t,e,n){"use strict";t.exports=n.p+"img/sfmmm_a.21344ebd.jpg"},9042:function(t,e,n){"use strict";t.exports=n.p+"img/sfmmm_b.614636ea.jpg"},153:function(t,e,n){"use strict";t.exports=n.p+"img/sfmmm_c.a3f9e23e.jpg"},9082:function(t,e,n){"use strict";t.exports=n.p+"img/snoopdogg.e3de5c73.png"},399:function(t,e,n){"use strict";t.exports=n.p+"img/space_skank_insta.e5e51d50.png"},8371:function(t,e,n){"use strict";t.exports=n.p+"img/sunday_paper_b.a8bd4faa.gif"},8346:function(t,e,n){"use strict";t.exports=n.p+"img/trench.98e88327.png"},6735:function(t,e,n){"use strict";t.exports=n.p+"img/wakeywakey.57c9acea.jpg"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,o){if(!i){var r=1/0;for(g=0;g<t.length;g++){i=t[g][0],s=t[g][1],o=t[g][2];for(var a=!0,p=0;p<i.length;p++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[p])}))?i.splice(p--,1):(a=!1,o<r&&(r=o));if(a){t.splice(g--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var g=t.length;g>0&&t[g-1][2]>o;g--)t[g]=t[g-1];t[g]=[i,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="https://niallains.github.io/Johnny-Cigarette/dist/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,r=i[0],a=i[1],p=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(p)var g=p(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(g)},i=self["webpackChunkkav_port"]=self["webpackChunkkav_port"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7997)}));i=n.O(i)})();
//# sourceMappingURL=app.1e0f6340.js.map