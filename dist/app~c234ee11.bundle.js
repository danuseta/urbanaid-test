/*! For license information please see app~c234ee11.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkurbanaid=self.webpackChunkurbanaid||[]).push([[20],{3301:function(t,n,e){e(2675),e(9463),e(6412),e(2259),e(8125),e(8706),e(2008),e(3792),e(8598),e(2062),e(4782),e(2010),e(4731),e(479),e(875),e(287),e(6099),e(3362),e(7764),e(3500),e(2953);var r=e(4299),a=e(1702),o=e(6296);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(){s=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(t){d=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof g?n:g,i=Object.create(o.prototype),s=new F(r||[]);return a(i,"_invoke",{value:B(t,e,s)}),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",x={};function g(){}function w(){}function b(){}var k={};d(k,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(R([])));E&&E!==e&&r.call(E,c)&&(k=E);var S=b.prototype=g.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(a,o,s,c){var l=p(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?n.resolve(d.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):n.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return e("throw",t,s,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,a){e(t,r,n,a)}))}return o=o?o.then(a,a):a()}})}function B(n,e,r){var a=h;return function(o,i){if(a===y)throw Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var c=O(s,r);if(c){if(c===x)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var l=p(n,e,r);if("normal"===l.type){if(a=r.done?m:v,l.arg===x)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=m,r.method="throw",r.arg=l.arg)}}}function O(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,O(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,x;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,x):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function A(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function D(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function R(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(i(n)+" is not iterable")}return w.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},_(j.prototype),d(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new j(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),d(S,u,"Generator"),d(S,c,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=R,F.prototype={constructor:F,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(r,a){return s.type="throw",s.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),x},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),D(e),x}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;D(e)}return a}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:R(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}function c(t,n,e,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(r,a)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){c(o,r,a,i,s,"next",t)}function s(t){c(o,r,a,i,s,"throw",t)}i(void 0)}))}}var u={data:[],init:function(){var t=this;return l(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=document.querySelector(".content-wrapper"))){n.next=11;break}return n.next=4,r.default.getRiwayatByUser();case 4:return t.data=n.sent,window.riwayatData=t.data,n.next=8,t.render();case 8:e.innerHTML=n.sent,window.RiwayatLaporan=t,t.initializeAOS();case 11:case"end":return n.stop()}}),n)})))()},initializeAOS:function(){AOS.init({duration:1e3,once:!0,offset:50,delay:100})},render:function(){var t=this;return l(s().mark((function n(){var e,a,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.default.getRiwayatByUser();case 3:if(t.data=n.sent,e=t.data.filter((function(t){return"diterima"===t.status})),a=t.data.filter((function(t){return"ditolak"===t.status})),o='\n                <h2 class="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900" data-aos="fade-up">\n                    <span class="material-icons-round text-[#00899B] text-xl">dashboard</span>\n                    Riwayat Laporan\n                </h2>\n            ',t.data.length){n.next=9;break}return n.abrupt("return",'\n                    <div class="max-w-7xl mx-auto px-4 py-6 pb-8">\n                        <div class="w-full">\n                            '.concat(o,'\n                            \n                            <div class="text-center space-y-4" data-aos="fade-up">\n                                <div class="max-w-sm mx-auto mb-2">\n                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="w-full h-auto">\n                                        <style>\n                                            @keyframes float {\n                                                0% { transform: translateY(0px); }\n                                                50% { transform: translateY(-20px); }\n                                                100% { transform: translateY(0px); }\n                                            }\n                                            .float { animation: float 3s ease-in-out infinite; }\n                                        </style>\n                                        <rect width="500" height="500" fill="white"/>\n                                        <g class="float">\n                                            <path d="M150 150h200v250H150z" fill="#00899B" opacity="0.1"/>\n                                            <path d="M180 180h140v30H180z" fill="#00899B" opacity="0.2"/>\n                                            <path d="M180 230h140v10H180z" fill="#002F35" opacity="0.1"/>\n                                            <path d="M180 250h140v10H180z" fill="#002F35" opacity="0.1"/>\n                                            <path d="M180 270h140v10H180z" fill="#002F35" opacity="0.1"/>\n                                            <path d="M180 320h60v60h-60z" fill="#00899B"/>\n                                            <path d="M195 335l15 15 15-15" stroke="white" stroke-width="3" fill="none"/>\n                                        </g>\n                                        <path d="M150 420h200M200 440h100" stroke="#E0E0E0" stroke-width="3"/>\n                                    </svg>\n                                </div>\n                                <h3 class="text-xl font-semibold text-gray-800">Belum Ada Riwayat Laporan</h3>\n                                <p class="text-gray-600 max-w-md mx-auto">\n                                    Anda belum memiliki riwayat laporan. \n                                    Buat laporan baru untuk melaporkan permasalahan infrastruktur di sekitar Anda.\n                                </p>\n                                <button onclick="window.location.href=\'/pelaporan\'" \n                                        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00899B] to-[#002F35] text-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">\n                                    <span class="material-icons-round mr-2">add_circle</span>\n                                    Buat Laporan Baru\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                '));case 9:return n.abrupt("return",'\n                <div class="max-w-7xl mx-auto px-4 py-8">\n                    <div class="w-full">\n                        '.concat(o,'\n                        \n                        <div class="flex justify-end mb-8 mt-6" data-aos="fade-up" data-aos-delay="100">\n                            <div class="relative inline-block w-64">\n                                <select \n                                    onchange="RiwayatLaporan.filterReports(this.value)"\n                                    class="block w-full bg-white border-2 border-gray-200 text-gray-900 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00899B] focus:border-[#00899B] appearance-none text-base"\n                                >\n                                    <option value="all">Semua Laporan (').concat(t.data.length,')</option>\n                                    <option value="diterima">Diterima (').concat(e.length,')</option>\n                                    <option value="ditolak">Ditolak (').concat(a.length,')</option>\n                                </select>\n                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">\n                                    <span class="material-icons-round text-xl">expand_more</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class="space-y-8">\n                            ').concat(t.data.map((function(n,e){return t.createReportCard(n,e)})).join(""),"\n                        </div>\n                    </div>\n                </div>\n            "));case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",'\n                <div class="max-w-7xl mx-auto px-4 py-8 text-center">\n                    <p class="text-base text-red-600" data-aos="fade-up">Gagal memuat data riwayat: '.concat(n.t0.message,"</p>\n                </div>\n            "));case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))()},createReportCard:function(t,n){var e=this.getStatusIcon(t.status),r=this.getStatusClass(t.status);return'\n            <div class="group relative" data-aos="fade-up" data-aos-delay="'.concat(100*n,'" data-status="').concat(t.status,'">\n                <div class="absolute inset-0 bg-gradient-to-r from-[#00899B]/20 to-[#002F35]/20 rounded-3xl blur-2xl transform -rotate-1"></div>\n                <div class="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-xl mb-6">\n                    <div class="flex items-center mb-6">\n                        <span class="material-icons-round text-xl ').concat(r.text,' mr-2">').concat(e,'</span>\n                        <span class="').concat(r.bg," ").concat(r.text,' px-4 py-1 rounded-full text-sm font-semibold">\n                            ').concat(t.status.charAt(0).toUpperCase()+t.status.slice(1),'\n                        </span>\n                    </div>\n                    \n                    <div class="relative flex flex-col md:flex-row md:gap-6">\n                        <div class="flex-grow order-1 md:order-none">\n                            <div class="space-y-4">\n                                <h3 class="text-xl font-semibold text-gray-900">').concat(t.judul,'</h3>\n                                \n                                <div class="flex items-center text-gray-700">\n                                    <span class="material-icons-round text-[#00899B] text-base mr-2">account_balance</span>\n                                    <span class="text-base">').concat(t.jenis_infrastruktur,'</span>\n                                </div>\n                                \n                                <div class="flex items-center text-gray-700">\n                                    <span class="material-icons-round text-[#00899B] text-base mr-2">event</span>\n                                    <span class="text-base">').concat(this.formatDate(t.tanggal_kejadian),'</span>\n                                </div>\n                                \n                                <div class="flex items-center text-gray-700 line-clamp-2">\n                                    <span class="material-icons-round text-[#00899B] text-base mr-2">location_on</span>\n                                    <span class="text-base line-clamp-2">').concat(t.alamat,'</span>\n                                </div>\n                                \n                                <div class="text-gray-700 line-clamp-2">\n                                    <span class="material-icons-round text-[#00899B] text-base mr-2 align-text-top">description</span>\n                                    ').concat(t.deskripsi,'\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class="order-2 mt-6 md:mt-0 flex items-center">\n                            <button onclick="RiwayatLaporan.showDetail(\'').concat(t.id,'\')"\n                                class="flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#00899B] to-[#002F35] text-white text-base font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"\n                            >\n                                <span class="material-icons-round text-xl">visibility</span>\n                                <span>Detail</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ')},formatDate:function(t){return new Date(t).toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},getStatusIcon:function(t){switch(t){case"diterima":return"check_circle";case"ditolak":return"cancel";default:return"info"}},getStatusClass:function(t){switch(t){case"diterima":return{bg:"bg-emerald-100",text:"text-emerald-800"};case"ditolak":return{bg:"bg-red-100",text:"text-red-800"};default:return{bg:"bg-gray-100",text:"text-gray-800"}}},showDetail:function(t){try{if(!t)return;var n=(0,a.o)(t);if(!n)throw new Error("Failed to hash ID");var e="/pelaporan/riwayat/".concat(n);window.App.navigateTo(e)}catch(t){}},filterReports:function(t){document.querySelectorAll("[data-status]").forEach((function(n){n.classList.contains("filter-btn")||("all"===t||n.dataset.status===t?n.classList.remove("hidden"):n.classList.add("hidden"))}))},cleanup:function(){o.A.hide()}};window.RiwayatLaporan=u,n.A=u}}]);
//# sourceMappingURL=app~c234ee11.bundle.js.map