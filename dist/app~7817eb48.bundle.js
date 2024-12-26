/*! For license information please see app~7817eb48.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkurbanaid=self.webpackChunkurbanaid||[]).push([[902],{6230:function(t,n,e){e(2675),e(9463),e(6412),e(2259),e(8125),e(8706),e(3792),e(8598),e(2062),e(4782),e(2010),e(4731),e(479),e(875),e(287),e(6099),e(3362),e(7764),e(3500),e(2953);var r=e(9276),a=e(7849),o=e(6296);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(){s=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(t){d=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),s=new O(r||[]);return a(i,"_invoke",{value:F(t,e,s)}),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",v="suspendedYield",g="executing",m="completed",y={};function b(){}function x(){}function w(){}var k={};d(k,l,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(T([])));L&&L!==e&&r.call(L,l)&&(k=L);var E=w.prototype=b.prototype=Object.create(k);function B(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(a,o,s,l){var c=p(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?n.resolve(d.__await).then((function(t){e("next",t,s,l)}),(function(t){e("throw",t,s,l)})):n.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return e("throw",t,s,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,a){e(t,r,n,a)}))}return o=o?o.then(a,a):a()}})}function F(n,e,r){var a=h;return function(o,i){if(a===g)throw Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var l=P(s,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=g;var c=p(n,e,r);if("normal"===c.type){if(a=r.done?m:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}function P(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function A(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[l];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(i(n)+" is not iterable")}return x.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},B(S.prototype),d(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new S(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},B(E),d(E,u,"Generator"),d(E,l,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(r,a){return s.type="throw",s.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;A(e)}return a}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function l(t,n,e,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(r,a)}var c={developers:[{name:"Andreas Pujo Santoso",position:"Frontend Developer",university:"Universitas Lampung",image:"/images/profile/andreas.jpg",imagePosition:"center top"},{name:"Chiboy Cristian Sibarani",position:"Frontend Developer",university:"Universitas Negeri Surabaya",image:"/images/profile/ciboy.png",imagePosition:"center top"},{name:"Muhammad Danu Seta Wiardana",position:"Backend Developer & Project Manager",university:"Universitas Lampung",image:"/images/profile/danu.jpg",imagePosition:"center top"},{name:"Savana Putra Aditama",position:"Backend Developer",university:"Universitas Negeri Surabaya",image:"/images/profile/savana.jpg",imagePosition:"center top"}],contacts:[{icon:"location_on",title:"Alamat",content:"Jakarta, Indonesia"},{icon:"email",title:"Email",content:"contact@urbanaid.id"},{icon:"phone",title:"Telepon",content:"+628 1234 5678"},{icon:"schedule",title:"Jam Kerja",content:"Senin - Jumat: 08.00 - 17.00 WIB"}],init:function(){var t,n=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{document.getElementById("app").innerHTML=n.render(),AOS.init({duration:1e3,once:!0,offset:100,easing:"ease-out-cubic"}),n.initTilt()}catch(t){}case 1:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){l(o,r,a,i,s,"next",t)}function s(t){l(o,r,a,i,s,"throw",t)}i(void 0)}))})()},initTilt:function(){var t=document.querySelectorAll(".tilt-card");VanillaTilt.init(t,{max:8,speed:400,scale:1.03,glare:!0,"max-glare":.3,transition:!0,easing:"cubic-bezier(.03,.98,.52,.99)"})},createDeveloperCards:function(){return this.developers.map((function(t,n){return'\n            <div class="relative group h-full" data-aos="zoom-in-up" data-aos-delay="'.concat(150*n,'">\n                <div class="absolute -inset-0.5 bg-gradient-to-r from-[#00899B] to-[#002F35] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>\n                <div class="relative bg-white rounded-2xl p-8 h-full flex flex-col tilt-card">\n                    <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#00899B] to-[#002F35] rounded-lg rotate-45"></div>\n                    <div class="relative flex items-center justify-center mt-2 mb-6">\n                        ').concat(t.image?'<div class="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#00899B]/20">\n                                <img \n                                    src="'.concat(t.image,'" \n                                    alt="').concat(t.name,'" \n                                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"\n                                    style="object-position: ').concat(t.imagePosition||"center center",'"\n                                    onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';"\n                                >\n                                <span class="material-icons-round hidden" style="font-size: 128px; color: #00899B; filter: drop-shadow(0 4px 6px rgba(0, 137, 155, 0.2))">account_circle</span>\n                               </div>'):'<div class="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#00899B]/20 flex items-center justify-center">\n                                <span class="material-icons-round" style="font-size: 128px; color: #00899B; filter: drop-shadow(0 4px 6px rgba(0, 137, 155, 0.2))">account_circle</span>\n                               </div>','\n                    </div>\n                    <div class="space-y-3 text-center flex-grow flex flex-col justify-center">\n                        <h3 class="font-bold text-xl text-gray-900">').concat(t.name,'</h3>\n                        <div class="h-0.5 w-12 mx-auto bg-gradient-to-r from-[#00899B] to-[#002F35]"></div>\n                        <p class="text-[#00899B] font-semibold">').concat(t.position,'</p>\n                        <p class="text-gray-600 text-sm">').concat(t.university,"</p>\n                    </div>\n                </div>\n            </div>\n        ")})).join("")},createContactItems:function(){return this.contacts.map((function(t,n){return'\n            <div class="group" data-aos="fade-up" data-aos-delay="'.concat(100*n,'">\n                <div class="relative p-6 rounded-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-white hover:to-gray-50">\n                    <div class="flex items-start gap-4">\n                        <div class="relative">\n                            <div class="absolute inset-0 bg-[#00899B]/20 rounded-xl blur-lg transform group-hover:scale-110 transition duration-500"></div>\n                            <div class="relative bg-white p-3 rounded-xl shadow-lg group-hover:shadow-xl transition duration-500">\n                                <span class="material-icons-round text-3xl text-[#00899B]">').concat(t.icon,'</span>\n                            </div>\n                        </div>\n                        <div class="flex-1 pt-1">\n                            <h3 class="font-bold text-gray-900 mb-2 group-hover:text-[#00899B] transition duration-300">').concat(t.title,'</h3>\n                            <p class="text-gray-700 group-hover:translate-x-1 transition duration-300">').concat(t.content,"</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ")})).join("")},render:function(){return"\n            ".concat((0,r.F)(),'\n            <main class="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">\n                <div class="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">\n                    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00899B]/10 rounded-full blur-3xl"></div>\n                    <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#002F35]/5 rounded-full blur-3xl"></div>\n                </div>\n\n                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">\n                    <div class="text-center mb-16 md:mb-24" data-aos="fade-down">\n                        <div class="inline-block">\n                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00899B] to-[#002F35] mb-6">\n                                Apa Itu UrbanAid?\n                            </h1>\n                            <div class="h-1.5 w-32 mx-auto bg-gradient-to-r from-[#00899B] to-[#002F35] rounded-full"></div>\n                        </div>\n                    </div>\n                    \n                    <div class="relative max-w-7xl mx-auto mb-24" data-aos="fade-up">\n                        <div class="absolute inset-0 bg-gradient-to-r from-[#00899B]/20 to-[#002F35]/20 rounded-3xl blur-2xl transform -rotate-1"></div>\n                        <div class="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-xl">\n                            <div class="absolute -top-6 -left-6 w-12 h-12 bg-[#00899B] rounded-full flex items-center justify-center shadow-lg">\n                                <span class="material-icons-round text-white text-2xl">lightbulb</span>\n                            </div>\n                            <p class="text-gray-700 sm:text-lg mb-8 leading-relaxed text-justify">\n                                UrbanAid adalah sebuah aplikasi berbasis teknologi yang dirancang untuk menjadi solusi praktis dalam menangani pelaporan kerusakan infrastruktur. Dengan UrbanAid, pengguna dapat dengan mudah melaporkan kondisi infrastruktur yang rusak, seperti jalan berlubang, lampu jalan yang mati, atau jembatan yang rusak, secara real-time.\n                            </p>\n                            <p class="text-gray-700 sm:text-lg leading-relaxed text-justify">\n                                UrbanAid hadir untuk menjawab kebutuhan akan sistem pelaporan yang efisien, mendukung perbaikan infrastruktur lebih cepat, dan menciptakan lingkungan yang aman serta nyaman bagi masyarakat. Dengan UrbanAid, setiap warga dapat berkontribusi dalam menjaga kualitas infrastruktur di lingkungan mereka.\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class="mb-24">\n                        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">\n                            <span class="relative inline-block mb-8">\n                                Tim Pengembang\n                                <div class="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00899B] to-[#002F35] rounded-full"></div>\n                            </span>\n                        </h2>\n                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">\n                            ').concat(this.createDeveloperCards(),'\n                        </div>\n                    </div>\n\n                    <div>\n                        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">\n                            <span class="relative inline-block">\n                                Hubungi Kami\n                                <div class="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00899B] to-[#002F35] rounded-full"></div>\n                            </span>\n                        </h2>\n                        <div class="relative max-w-7xl mx-auto" data-aos="fade-up">\n                            <div class="absolute inset-0 bg-gradient-to-r from-[#00899B]/10 to-[#002F35]/10 rounded-3xl blur-2xl transform rotate-1"></div>\n                            <div class="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-xl">\n                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">\n                                    ').concat(this.createContactItems(),"\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </main>\n            ").concat((0,a.w)(),"\n        ")},cleanup:function(){o.A.hide()}};n.A=c}}]);
//# sourceMappingURL=app~7817eb48.bundle.js.map