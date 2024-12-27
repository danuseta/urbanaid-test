/*! For license information please see app~e6c5cabc.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkurbanaid=self.webpackChunkurbanaid||[]).push([[426],{2142:function(t,e,n){n(2675),n(9463),n(6412),n(2259),n(8125),n(8706),n(113),n(3792),n(8598),n(2062),n(4782),n(2010),n(4731),n(479),n(875),n(287),n(6099),n(3362),n(7764),n(8156),n(3500),n(2953);var r=n(8752),a=n(2102),i=n(6296),o=n(4746),s=n(8465),c=n.n(s);n(9340);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){u=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new O(r||[]);return a(o,"_invoke",{value:T(t,n,s)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var m="suspendedStart",f="suspendedYield",v="executing",x="completed",g={};function w(){}function y(){}function b(){}var A={};d(A,o,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(I([])));E&&E!==n&&r.call(E,o)&&(A=E);var L=b.prototype=w.prototype=Object.create(A);function P(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(a,i,o,s){var c=h(t[a],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==l(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return i=i?i.then(a,a):a()}})}function T(e,n,r){var a=m;return function(i,o){if(a===v)throw Error("Generator is already running");if(a===x){if("throw"===i)throw o;return{value:t,done:!0}}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var c=B(s,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=h(e,n,r);if("normal"===l.type){if(a=r.done?x:f,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=x,r.method="throw",r.arg=l.arg)}}}function B(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,B(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(a,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return y.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:y,configurable:!0}),y.displayName=d(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},P(S.prototype),d(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new S(p(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(L),d(L,c,"Generator"),d(L,o,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;F(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function d(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){d(i,r,a,o,s,"next",t)}function s(t){d(i,r,a,o,s,"throw",t)}o(void 0)}))}}var h="https://urbanaid-api.vercel.app",m={admins:[],currentPage:1,totalPages:1,limit:10,init:function(){var t=this;return p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o.A.isSuperAdmin()){e.next=4;break}return window.location.href="/admin",e.abrupt("return");case 4:return e.next=6,t.render();case 6:return e.next=8,t.loadAdmins();case 8:r.A.afterRender(),t.initializeEventListeners(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.showErrorAlert("Gagal memuat halaman",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},loadAdmins:function(){var t=arguments,e=this;return p(u().mark((function n(){var r,a,s,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,a=t.length>1&&void 0!==t[1]?t[1]:"",n.prev=2,i.A.show(),n.next=6,fetch("".concat(h,"/superadmin/admins?page=").concat(r,"&limit=").concat(e.limit,"&search=").concat(a),{headers:{Authorization:"Bearer ".concat(o.A.getToken()),"Content-Type":"application/json"}});case 6:return s=n.sent,n.next=9,s.json();case 9:if("fail"!==(c=n.sent).status){n.next=12;break}throw new Error(c.message);case 12:e.admins=c.data.data,e.currentPage=c.data.page,e.totalPages=c.data.totalPages,e.updateAdminsTable(),e.updatePagination(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),e.showErrorAlert("Gagal memuat data admin",n.t0);case 22:return n.prev=22,i.A.hide(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])})))()},updateAdminsTable:function(){var t=document.querySelector("#admins-table tbody");t&&(Array.isArray(this.admins)&&0!==this.admins.length?t.innerHTML=this.admins.map((function(t){return'\n    <tr class="border-b border-gray-200 hover:bg-gray-50">\n        <td class="px-6 py-4 text-[#002F35] whitespace-nowrap text-center">\n            '.concat(t.last_login?(e=new Date(t.last_login),n=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),a=e.getDate(),i=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][e.getMonth()],o=e.getFullYear(),"".concat(n,":").concat(r,", ").concat(a," ").concat(i," ").concat(o)):"-",'\n        </td>\n        <td class="px-6 py-4 text-[#002F35] whitespace-nowrap text-center">').concat(t.nama||"-",'</td>\n        <td class="px-6 py-4 text-[#002F35] whitespace-nowrap text-center">').concat(t.email||"-",'</td>\n        <td class="px-6 py-4 text-[#002F35] whitespace-nowrap text-center">').concat(t.role||"-",'</td>\n        <td class="px-6 py-4 text-[#002F35] whitespace-nowrap">\n            <div class="flex space-x-2 justify-center">\n                ').concat("superadmin"!==t.role?'\n                    <button \n                        class="edit-admin inline-flex items-center justify-center p-2 min-w-[44px] min-h-[44px] bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"\n                        data-id="'.concat(t.id,'"\n                        title="Edit Admin">\n                        <span class="material-icons-round text-base">edit</span>\n                    </button>\n                    <button \n                        class="delete-admin inline-flex items-center justify-center p-2 min-w-[44px] min-h-[44px] bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"\n                        data-id="').concat(t.id,'"\n                        title="Hapus Admin">\n                        <span class="material-icons-round text-base">delete</span>\n                    </button>\n                '):"","\n            </div>\n        </td>\n    </tr>\n");var e,n,r,a,i,o})).join(""):t.innerHTML='\n                <tr>\n                    <td colspan="5" class="px-6 py-4 text-center text-gray-500">\n                        Tidak ada data admin\n                    </td>\n                </tr>\n            ')},updatePagination:function(){var t=document.querySelector(".pagination-controls");if(t){for(var e='\n            <button \n                class="px-3 py-1 border rounded hover:bg-gray-50 text-sm text-[#002F35] '.concat(1===this.currentPage?"opacity-50 cursor-not-allowed":"",'"\n                ').concat(1===this.currentPage?"disabled":"",'\n                data-page="').concat(this.currentPage-1,'">\n                Previous\n            </button>\n        '),n=1;n<=this.totalPages;n++)e+='\n                <button \n                    class="px-3 py-1 '.concat(this.currentPage===n?"bg-[#002F35] text-white":"border",' rounded hover:bg-opacity-90 text-sm"\n                    data-page="').concat(n,'">\n                    ').concat(n,"\n                </button>\n            ");e+='\n            <button \n                class="px-3 py-1 border rounded hover:bg-gray-50 text-sm text-[#002F35] '.concat(this.currentPage===this.totalPages?"opacity-50 cursor-not-allowed":"",'"\n                ').concat(this.currentPage===this.totalPages?"disabled":"",'\n                data-page="').concat(this.currentPage+1,'">\n                Next\n            </button>\n        '),t.innerHTML=e}},initializeEventListeners:function(){var t=this,e=document.getElementById("searchInput");e&&e.addEventListener("input",(function(e){t.loadAdmins(1,e.target.value)}));var n=document.getElementById("addAdminBtn");n&&n.addEventListener("click",(function(){t.showAddAdminModal()}));var r=document.querySelector("#admins-table tbody");r&&r.addEventListener("click",function(){var e=p(u().mark((function e(n){var r,a,i,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.closest("button")){e.next=3;break}return e.abrupt("return");case 3:if(!r.classList.contains("edit-admin")){e.next=12;break}if(a=parseInt(r.dataset.id),!(i=t.admins.find((function(t){return t.id===a})))){e.next=10;break}return e.next=10,t.showEditAdminModal(i);case 10:e.next=16;break;case 12:if(!r.classList.contains("delete-admin")){e.next=16;break}return o=r.dataset.id,e.next=16,t.confirmDeleteAdmin(o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var a=document.querySelector(".pagination-controls");a&&a.addEventListener("click",(function(n){var r=n.target.closest("button[data-page]");if(r){var a=parseInt(r.dataset.page),i=(null==e?void 0:e.value)||"";t.loadAdmins(a,i)}}))},showEditAdminModal:function(t){var e=this;return p(u().mark((function n(){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().fire({title:"Edit Admin",html:'\n                    <div class="mb-3">\n                        <input id="swal-input-name" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               placeholder="Nama Lengkap" \n                               value="'.concat(t.nama||"",'"\n                               required>\n                    </div>\n                    <div class="mb-3">\n                        <input id="swal-input-email" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               type="email" \n                               placeholder="Email" \n                               value="').concat(t.email||"",'"\n                               required>\n                    </div>\n                    <div class="mb-3">\n                        <input id="swal-input-password" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               type="password" \n                               placeholder="Password Baru (opsional)">\n                    </div>\n                    <div class="mb-3">\n                        <select id="swal-input-role" class="w-full max-w-xs px-3 py-2 text-sm border rounded">\n                            <option value="admin" ').concat("admin"===t.role?"selected":"",">Admin</option>\n                        </select>\n                    </div>\n                "),width:"300px",customClass:{container:"mobile-friendly-modal",popup:"rounded-lg",input:"text-sm"},showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal",focusConfirm:!1,preConfirm:function(){var t=document.getElementById("swal-input-name").value,e=document.getElementById("swal-input-email").value,n=document.getElementById("swal-input-password").value,r=document.getElementById("swal-input-role").value;if(!t||!e)return c().showValidationMessage("Nama dan email wajib diisi"),!1;var a={nama:t,email:e,role:r};return n&&(a.password=n),a}});case 3:if(r=n.sent,!(a=r.value)){n.next=8;break}return n.next=8,e.updateAdmin(t.id,a);case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),e.showErrorAlert("Error showing edit modal",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},showAddAdminModal:function(){var t=this;return p(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().fire({title:"Tambah Admin Baru",html:'\n          <div class="mb-3">\n            <input id="swal-input-name" \n                   class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                   placeholder="Nama Lengkap"\n                   required>\n          </div>\n          <div class="mb-3">\n            <input id="swal-input-email" \n                   class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                   type="email" \n                   placeholder="Email"\n                   required>\n          </div>\n          <div class="mb-3">\n            <input id="swal-input-password" \n                   class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                   type="password" \n                   placeholder="Password"\n                   required>\n          </div>\n          <div class="mb-3">\n            <select id="swal-input-role" class="w-full max-w-xs px-3 py-2 text-sm border rounded">\n              <option value="admin">Admin</option>\n            </select>\n          </div>\n        ',width:"300px",customClass:{container:"mobile-friendly-modal",popup:"rounded-lg",input:"text-sm"},showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal",focusConfirm:!1,preConfirm:function(){var t=document.getElementById("swal-input-name").value,e=document.getElementById("swal-input-email").value,n=document.getElementById("swal-input-password").value,r=document.getElementById("swal-input-role").value;return t&&e&&n?{nama:t,email:e,password:n,role:r}:(c().showValidationMessage("Semua field harus diisi"),!1)}});case 3:if(n=e.sent,!(r=n.value)){e.next=8;break}return e.next=8,t.addAdmin(r);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.showErrorAlert("Error menampilkan modal tambah admin",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addAdmin:function(t){var e=this;return p(u().mark((function n(){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i.A.show(),n.next=4,fetch("".concat(h,"/superadmin/admins"),{method:"POST",headers:{Authorization:"Bearer ".concat(o.A.getToken()),"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=n.sent,n.next=7,r.json();case 7:if(a=n.sent,r.ok){n.next=10;break}throw new Error(a.message||"Gagal menambahkan admin");case 10:return n.next=12,e.loadAdmins(e.currentPage);case 12:e.showSuccessAlert("Admin berhasil ditambahkan"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),e.showErrorAlert("Gagal menambahkan admin",n.t0);case 18:return n.prev=18,i.A.hide(),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})))()},updateAdmin:function(t,e){var n=this;return p(u().mark((function r(){var a,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i.A.show(),r.next=4,fetch("".concat(h,"/superadmin/admins/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(o.A.getToken()),"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return a=r.sent,r.next=7,a.json();case 7:if(s=r.sent,a.ok){r.next=10;break}throw new Error(s.message||"Gagal memperbarui admin");case 10:return r.next=12,n.loadAdmins(n.currentPage);case 12:n.showSuccessAlert("Admin berhasil diperbarui"),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),n.showErrorAlert("Gagal memperbarui admin",r.t0);case 18:return r.prev=18,i.A.hide(),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[0,15,18,21]])})))()},confirmDeleteAdmin:function(t){var e=this;return p(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().fire({title:"Konfirmasi Hapus",text:"Apakah Anda yakin ingin menghapus admin ini?",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, Hapus",cancelButtonText:"Batal"});case 2:if(!n.sent.isConfirmed){n.next=6;break}return n.next=6,e.deleteAdmin(t);case 6:case"end":return n.stop()}}),n)})))()},deleteAdmin:function(t){var e=this;return p(u().mark((function n(){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i.A.show(),n.next=4,fetch("".concat(h,"/superadmin/admins/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(o.A.getToken()),"Content-Type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:if(a=n.sent,r.ok){n.next=10;break}throw new Error(a.message||"Gagal menghapus admin");case 10:return n.next=12,e.loadAdmins(e.currentPage);case 12:e.showSuccessAlert("Admin berhasil dihapus"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),e.showErrorAlert("Gagal menghapus admin",n.t0);case 18:return n.prev=18,i.A.hide(),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})))()},showSuccessAlert:function(t){c().fire({icon:"success",title:"Sukses!",text:t,timer:2e3,timerProgressBar:!0})},showErrorAlert:function(t,e){c().fire({icon:"error",title:t,text:e.message||"Terjadi kesalahan",confirmButtonText:"OK"})},render:function(){var t=document.getElementById("app");t&&(t.innerHTML='\n            <div class="min-h-screen bg-gray-100">\n                '.concat(r.A.render(),"\n                ").concat(a.A.render(),'\n                \n                <main class="lg:ml-64 p-4 lg:p-8">\n                    <div class="bg-white rounded-lg shadow-lg">\n                        \x3c!-- Header Section --\x3e\n                        <div class="p-6 border-b flex justify-between items-center">\n                            <h1 class="text-xl lg:text-2xl font-bold text-[#002F35]">Manajemen Admin</h1>\n                            <button \n                                id="addAdminBtn" \n                                class="px-4 py-2 bg-[#002F35] text-white rounded-lg hover:bg-opacity-90 transition-colors">\n                                Tambah Admin\n                            </button>\n                        </div>\n\n                        \x3c!-- Filters Section --\x3e\n                        <div class="p-6 border-b">\n                            <div class="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">\n                                <div class="relative">\n                                    <input type="text" \n                                           id="searchInput"\n                                           placeholder="Cari admin..." \n                                           class="pl-10 pr-4 py-2 border rounded-lg w-full lg:w-64">\n                                    <span class="material-icons-round absolute left-3 top-2.5 text-gray-400">search</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        \x3c!-- Table Section --\x3e\n                        <div class="overflow-x-auto p-6">\n<table id="admins-table" class="w-full table-auto">\n    <thead class="bg-gray-50">\n        <tr class="text-center text-sm font-medium text-[#002F35] border-b">\n            <th class="px-6 py-4 whitespace-nowrap text-center">Last Login</th>\n            <th class="px-6 py-4 whitespace-nowrap text-center">Nama</th>\n            <th class="px-6 py-4 whitespace-nowrap text-center">Email</th>\n            <th class="px-6 py-4 whitespace-nowrap text-center">Role</th>\n            <th class="px-6 py-4 whitespace-nowrap text-center">Aksi</th>\n        </tr>\n    </thead>\n    <tbody>\n    </tbody>\n</table>\n                            </table>\n                        </div>\n\n                        \x3c!-- Pagination Section --\x3e\n                        <div class="p-6 border-t">\n                            <div class="flex flex-col lg:flex-row items-center justify-between gap-4">\n                                <div class="text-sm text-[#002F35]">\n                                    Showing page ').concat(this.currentPage," of ").concat(this.totalPages,'\n                                </div>\n                                <div class="pagination-controls flex gap-2">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        '))},cleanup:function(){i.A.hide()}};e.A=m}}]);
//# sourceMappingURL=app~e6c5cabc.bundle.js.map