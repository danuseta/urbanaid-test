/*! For license information please see app~40539509.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkurbanaid=self.webpackChunkurbanaid||[]).push([[653],{1082:function(t,e,n){n(2675),n(9463),n(6412),n(2259),n(8125),n(8706),n(113),n(3792),n(8598),n(2062),n(4782),n(2010),n(4731),n(479),n(875),n(287),n(6099),n(3362),n(7764),n(3500),n(2953);var r=n(8752),a=n(2102),o=n(6296),i=n(4746),s=n(8465),c=n.n(s);n(9340);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){l=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),s=new U(r||[]);return a(i,"_invoke",{value:T(t,n,s)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var f="suspendedStart",g="suspendedYield",v="executing",m="completed",x={};function y(){}function w(){}function b(){}var k={};d(k,i,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(F([])));L&&L!==n&&r.call(L,i)&&(k=L);var A=b.prototype=y.prototype=Object.create(k);function j(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(a,o,i,s){var c=h(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==u(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function T(e,n,r){var a=f;return function(o,i){if(a===v)throw Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var c=S(s,r);if(c){if(c===x)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var u=h(e,n,r);if("normal"===u.type){if(a=r.done?m:g,u.arg===x)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=m,r.method="throw",r.arg=u.arg)}}}function S(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var o=h(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,x;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=b,a(A,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},j(P.prototype),d(P.prototype,s,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new P(p(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(A),d(A,c,"Generator"),d(A,i,(function(){return this})),d(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;B(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},e}function d(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){d(o,r,a,i,s,"next",t)}function s(t){d(o,r,a,i,s,"throw",t)}i(void 0)}))}}var h="https://urbanaid-api.vercel.app",f={users:[],currentPage:1,totalPages:1,limit:10,init:function(){var t=this;return p(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.A.isSuperAdmin()){e.next=4;break}return window.location.href="/admin",e.abrupt("return");case 4:return e.next=6,t.render();case 6:return e.next=8,t.loadUsers();case 8:r.A.afterRender(),t.initializeEventListeners(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.showErrorAlert("Gagal memuat halaman",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},loadUsers:function(){var t=arguments,e=this;return p(l().mark((function n(){var r,a,s,c;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,a=t.length>1&&void 0!==t[1]?t[1]:"",n.prev=2,o.A.show(),n.next=6,fetch("".concat(h,"/superadmin/users?page=").concat(r,"&limit=").concat(e.limit,"&search=").concat(a),{headers:{Authorization:"Bearer ".concat(i.A.getToken()),"Content-Type":"application/json"}});case 6:return s=n.sent,n.next=9,s.json();case 9:if("fail"!==(c=n.sent).status){n.next=12;break}throw new Error(c.message);case 12:e.users=c.data.data,e.currentPage=c.data.page,e.totalPages=c.data.totalPages,e.updateUsersTable(),e.updatePagination(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),e.showErrorAlert("Gagal memuat data pengguna",n.t0);case 22:return n.prev=22,o.A.hide(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])})))()},updateUsersTable:function(){var t=document.querySelector("#users-table tbody");t&&(Array.isArray(this.users)&&0!==this.users.length?t.innerHTML=this.users.map((function(t){return'\n            <tr class="border-b border-gray-200 hover:bg-gray-50">\n                <td class="px-6 py-4 text-[#002F35] whitespace-nowrap">'.concat(t.id||"-",'</td>\n                <td class="px-6 py-4 text-[#002F35] whitespace-nowrap">').concat(t.nama||"-",'</td>\n                <td class="px-6 py-4 text-[#002F35] whitespace-nowrap">').concat(t.email||"-",'</td>\n                <td class="px-6 py-4 text-[#002F35] whitespace-nowrap">\n                    ').concat(t.total_laporan||0,' Laporan\n                </td>\n<td class="px-6 py-4 text-[#002F35] whitespace-nowrap">\n  <div class="flex space-x-2 justify-center"> \n      <button \n          class="view-reports inline-flex items-center justify-center p-2 min-w-[44px] min-h-[44px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"\n          data-id="').concat(t.id,'"\n          title="Lihat Laporan">\n          <span class="material-icons-round text-base">description</span>\n      </button>\n      <button \n          class="edit-user inline-flex items-center justify-center p-2 min-w-[44px] min-h-[44px] bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"\n          data-id="').concat(t.id,'"\n          title="Edit User">\n          <span class="material-icons-round text-base">edit</span>\n      </button>\n      <button \n          class="delete-user inline-flex items-center justify-center p-2 min-w-[44px] min-h-[44px] bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"\n          data-id="').concat(t.id,'"\n          title="Hapus User">\n          <span class="material-icons-round text-base">delete</span>\n      </button>\n  </div>\n</td>\n            </tr>\n        ')})).join(""):t.innerHTML='\n                <tr>\n                    <td colspan="5" class="px-6 py-4 text-center text-gray-500">\n                        Tidak ada data pengguna\n                    </td>\n                </tr>\n            ')},updatePagination:function(){var t=document.querySelector(".pagination-controls");if(t){for(var e='\n            <button \n                class="px-3 py-1 border rounded hover:bg-gray-50 text-sm text-[#002F35] '.concat(1===this.currentPage?"opacity-50 cursor-not-allowed":"",'"\n                ').concat(1===this.currentPage?"disabled":"",'\n                data-page="').concat(this.currentPage-1,'">\n                Previous\n            </button>\n        '),n=1;n<=this.totalPages;n++)e+='\n                <button \n                    class="px-3 py-1 '.concat(this.currentPage===n?"bg-[#002F35] text-white":"border",' rounded hover:bg-opacity-90 text-sm"\n                    data-page="').concat(n,'">\n                    ').concat(n,"\n                </button>\n            ");e+='\n            <button \n                class="px-3 py-1 border rounded hover:bg-gray-50 text-sm text-[#002F35] '.concat(this.currentPage===this.totalPages?"opacity-50 cursor-not-allowed":"",'"\n                ').concat(this.currentPage===this.totalPages?"disabled":"",'\n                data-page="').concat(this.currentPage+1,'">\n                Next\n            </button>\n        '),t.innerHTML=e}},initializeEventListeners:function(){var t,e,n,r=this;null===(t=document.getElementById("searchInput"))||void 0===t||t.addEventListener("input",(function(t){r.loadUsers(1,t.target.value)})),null===(e=document.querySelector("#users-table tbody"))||void 0===e||e.addEventListener("click",(function(t){var e=t.target.closest(".view-reports"),n=t.target.closest(".edit-user"),a=t.target.closest(".delete-user");if(e){var o=e.getAttribute("data-id");r.viewUserReports(o)}if(n){var i=n.getAttribute("data-id");r.showEditUserModal(i)}if(a){var s=a.getAttribute("data-id");r.confirmDeleteUser(s)}})),null===(n=document.querySelector(".pagination-controls"))||void 0===n||n.addEventListener("click",(function(t){var e=t.target.closest("button[data-page]");if(e){var n,a=parseInt(e.getAttribute("data-page")),o=(null===(n=document.getElementById("searchInput"))||void 0===n?void 0:n.value)||"";r.loadUsers(a,o)}}))},viewUserReports:function(t){var e=this;return p(l().mark((function n(){var r,a,s,u,d,p;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o.A.show(),n.next=4,fetch("".concat(h,"/superadmin/users/").concat(t),{headers:{Authorization:"Bearer ".concat(i.A.getToken()),"Content-Type":"application/json"}});case 4:if((r=n.sent).ok){n.next=7;break}throw new Error("Gagal memuat laporan pengguna");case 7:return n.next=9,r.json();case 9:a=n.sent,s=a.data.user,u=a.data.reports,d=function(t){return new Date(t).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"})},p=function(t,e){return"aktif"===e?"pending"===t?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800":"diterima"===t?"bg-green-100 text-green-800":"bg-red-100 text-red-800"},c().fire({title:"Laporan ".concat(s.nama),html:'\n                <div class="text-left">\n                    '.concat(u.length>0?u.map((function(t){return'\n                        <div class="mb-4 p-4 border rounded '.concat("aktif"===t.jenis_laporan?"border-blue-200":"border-gray-200",'">\n                            <div class="flex justify-between items-start">\n                                <div class="font-bold">').concat(t.judul,'</div>\n                                <span class="text-xs px-2 py-1 rounded ').concat("aktif"===t.jenis_laporan?"bg-blue-50 text-blue-600":"bg-gray-50 text-gray-600",'">\n                                    ').concat("aktif"===t.jenis_laporan?"Laporan Aktif":"Riwayat Laporan",'\n                                </span>\n                            </div>\n                            <div class="text-sm text-gray-600">\n                                <div class="mt-1">\n                                    Status: <span class="px-2 py-1 rounded text-xs ').concat(p(t.status,t.jenis_laporan),'">\n                                        ').concat(t.status,'\n                                    </span>\n                                </div>\n                                <div class="mt-1">Jenis: ').concat(t.jenis_infrastruktur,'</div>\n                                <div class="mt-1">Tanggal Kejadian: ').concat(d(t.tanggal_kejadian),"</div>\n                                ").concat("riwayat"===t.jenis_laporan?'\n                                    <div class="mt-1">Tanggal Selesai: '.concat(d(t.tanggal_selesai),'</div>\n                                    <div class="mt-1">Keterangan: ').concat(t.keterangan_laporan,"</div>\n                                "):"",'\n                            </div>\n                            <div class="mt-2 text-sm border-t pt-2">').concat(t.deskripsi,"</div>\n                        </div>\n                    ")})).join(""):'<div class="text-center p-4">Tidak ada laporan</div>',"\n                </div>\n            "),width:"600px",confirmButtonText:"Tutup",customClass:{htmlContainer:"max-h-[70vh] overflow-y-auto"}}),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),e.showErrorAlert("Gagal memuat laporan",n.t0);case 20:return n.prev=20,o.A.hide(),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[0,17,20,23]])})))()},showEditUserModal:function(t){var e=this;return p(l().mark((function n(){var r,a,o;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r=e.users.find((function(e){return e.id===parseInt(t)}))){n.next=4;break}throw new Error("User not found");case 4:return n.next=6,c().fire({title:"Edit Pengguna",html:'\n                    <div class="mb-3">\n                        <input id="swal-input-name" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               placeholder="Nama Lengkap" \n                               value="'.concat(r.nama||"",'"\n                               required>\n                    </div>\n                    <div class="mb-3">\n                        <input id="swal-input-email" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               type="email" \n                               placeholder="Email" \n                               value="').concat(r.email||"",'"\n                               required>\n                    </div>\n                    <div class="mb-3">\n                        <input id="swal-input-password" \n                               class="w-full max-w-xs px-3 py-2 text-sm border rounded" \n                               type="password" \n                               placeholder="Password Baru (opsional)">\n                    </div>\n                '),width:"300px",customClass:{container:"mobile-friendly-modal",popup:"rounded-lg",input:"text-sm"},focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal",preConfirm:function(){var t=document.getElementById("swal-input-name").value,e=document.getElementById("swal-input-email").value,n=document.getElementById("swal-input-password").value;if(!t||!e)return c().showValidationMessage("Nama dan email wajib diisi"),!1;var r={nama:t,email:e};return n&&(r.password=n),r}});case 6:if(a=n.sent,!(o=a.value)){n.next=11;break}return n.next=11,e.updateUser(t,o);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),e.showErrorAlert("Error showing edit modal",n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},updateUser:function(t,e){var n=this;return p(l().mark((function r(){var a,s;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o.A.show(),r.next=4,fetch("".concat(h,"/superadmin/users/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(i.A.getToken()),"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return a=r.sent,r.next=7,a.json();case 7:if(s=r.sent,a.ok){r.next=10;break}throw new Error(s.message||"Gagal memperbarui pengguna");case 10:return r.next=12,n.loadUsers(n.currentPage);case 12:n.showSuccessAlert("Pengguna berhasil diperbarui"),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),n.showErrorAlert("Gagal memperbarui pengguna",r.t0);case 18:return r.prev=18,o.A.hide(),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[0,15,18,21]])})))()},confirmDeleteUser:function(t){var e=this;return p(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().fire({title:"Konfirmasi Hapus",text:"Apakah Anda yakin ingin menghapus pengguna ini? Semua laporan yang terkait akan ikut terhapus.",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, Hapus",cancelButtonText:"Batal"});case 2:if(!n.sent.isConfirmed){n.next=6;break}return n.next=6,e.deleteUser(t);case 6:case"end":return n.stop()}}),n)})))()},deleteUser:function(t){var e=this;return p(l().mark((function n(){var r,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o.A.show(),n.next=4,fetch("".concat(h,"/superadmin/users/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(i.A.getToken()),"Content-Type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:if(a=n.sent,r.ok){n.next=10;break}throw new Error(a.message||"Gagal menghapus pengguna");case 10:return n.next=12,e.loadUsers(e.currentPage);case 12:e.showSuccessAlert("Pengguna berhasil dihapus"),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),e.showErrorAlert("Gagal menghapus pengguna",n.t0);case 18:return n.prev=18,o.A.hide(),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})))()},showSuccessAlert:function(t){c().fire({icon:"success",title:"Sukses!",text:t,timer:2e3,timerProgressBar:!0})},showErrorAlert:function(t,e){c().fire({icon:"error",title:t,text:e.message||"Terjadi kesalahan",confirmButtonText:"OK"})},render:function(){var t=document.getElementById("app");t&&(t.innerHTML='\n            <div class="min-h-screen bg-gray-100">\n                '.concat(r.A.render(),"\n                ").concat(a.A.render(),'\n                \n                <main class="lg:ml-64 p-4 lg:p-8">\n                    <div class="bg-white rounded-lg shadow-lg">\n                        \x3c!-- Header Section --\x3e\n                        <div class="p-6 border-b flex justify-between items-center">\n                            <h1 class="text-xl lg:text-2xl font-bold text-[#002F35]">Manajemen Pengguna</h1>\n                        </div>\n\n                        \x3c!-- Filters Section --\x3e\n                        <div class="p-6 border-b">\n                            <div class="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">\n                                <div class="relative">\n                                    <input type="text" \n                                           id="searchInput"\n                                           placeholder="Cari pengguna..." \n                                           class="pl-10 pr-4 py-2 border rounded-lg w-full lg:w-64">\n                                    <span class="material-icons-round absolute left-3 top-2.5 text-gray-400">search</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        \x3c!-- Table Section --\x3e\n                        <div class="overflow-x-auto p-6">\n                            <table id="users-table" class="w-full table-auto">\n                                <thead class="bg-gray-50">\n                                    <tr class="text-center text-sm font-medium text-[#002F35] border-b">\n                                        <th class="px-6 py-4 whitespace-nowrap">ID</th>\n                                        <th class="px-6 py-4 whitespace-nowrap">Nama</th>\n                                        <th class="px-6 py-4 whitespace-nowrap">Email</th>\n                                        <th class="px-6 py-4 whitespace-nowrap">Total Laporan</th>\n                                        <th class="px-6 py-4 whitespace-nowrap">Aksi</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                </tbody>\n                            </table>\n                        </div>\n\n                        \x3c!-- Pagination Section --\x3e\n                        <div class="p-6 border-t">\n                            <div class="flex flex-col lg:flex-row items-center justify-between gap-4">\n                                <div class="text-sm text-[#002F35]">\n                                    Showing page ').concat(this.currentPage," of ").concat(this.totalPages,'\n                                </div>\n                                <div class="pagination-controls flex gap-2">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        '))},cleanup:function(){o.A.hide()}};e.A=f}}]);
//# sourceMappingURL=app~40539509.bundle.js.map