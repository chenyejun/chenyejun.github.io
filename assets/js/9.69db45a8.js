(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{166:function(t,i,e){},181:function(t,i,e){"use strict";var a=e(2),s=e(21),d=e(22),l=e(5),n=[].sort,o=[1,2,3];a(a.P+a.F*(l(function(){o.sort(void 0)})||!l(function(){o.sort(null)})||!e(17)(n)),"Array",{sort:function(t){return void 0===t?n.call(d(this)):n.call(d(this),s(t))}})},182:function(t,i,e){"use strict";var a=e(166);e.n(a).a},197:function(t,i,e){"use strict";e.r(i);e(181);var a=e(88),s=e(89),d={name:"Jigsaw",data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){(new(function(){function t(){Object(a.a)(this,t),this.oFile=document.getElementById("file"),this.oUl=document.getElementsByClassName("ul"),this.oChild=document.getElementsByClassName("child"),this.oImg=document.getElementById("img"),this.ulWidth=window.getComputedStyle(this.oUl[0],!1).width,this.childWidth,this.oUploadFile=document.getElementById("uploadFile"),this.oDisrupt=document.getElementById("disrupt")}return Object(s.a)(t,[{key:"init",value:function(){this.imgEvent(),this.childEvent(),this.disruptEvent(),this.uploadFileEvent(),this.setChildStyle(),this.setBgImg("https://note.youdao.com/yws/api/personal/file/C69044B50F4F4B61B3B0851C7A0ECEE6?method=download&shareKey=6ef39c4f8117acac1b389fd17eeae3fc")}},{key:"imgEvent",value:function(){var t=this;this.oFile.addEventListener("change",function(){var i=window.URL.createObjectURL(this.files[0]);t.oImg.setAttribute("src",i),t.oImg.onload=function(){t.setBgImg(i)}},!1)}},{key:"disruptEvent",value:function(){var t=this;this.oDisrupt.addEventListener("click",function(){t.setChildRandomOrder()},!1)}},{key:"uploadFileEvent",value:function(){var t=this;this.oUploadFile.addEventListener("click",function(){t.oFile.click()},!1)}},{key:"childEvent",value:function(){var t=document.getElementById("empty");this.oUl[0].addEventListener("click",function(i){var e,a,s,d,l,n,o=i.target;if("child"!=o.className)return!1;if(d=t.getAttribute("data-x"),l=t.getAttribute("data-y"),n=window.getComputedStyle(t,!1).order,e=o.getAttribute("data-x"),a=o.getAttribute("data-y"),s=window.getComputedStyle(o,!1).order,Math.abs(e-d)+Math.abs(a-l)==1){var r=[e,d];d=r[0],e=r[1];var c=[a,l];l=c[0],a=c[1];var h=[s,n];n=h[0],s=h[1],t.setAttribute("data-x",d),t.setAttribute("data-y",l),t.style.order=n,o.setAttribute("data-x",e),o.setAttribute("data-y",a),o.style.order=s}},!1)}},{key:"setChildStyle",value:function(){this.childWidth=window.getComputedStyle(this.oChild[0],!1).width,console.log(this.childWidth);for(var t=0;t<this.oChild.length;t++)this.oChild[t].style.height="".concat(this.childWidth),this.oChild[t].style.backgroundSize="".concat(this.ulWidth," auto"),this.setBgpositon(this.oChild[t])}},{key:"setBgpositon",value:function(t){var i=t.getAttribute("data-x")-1,e=t.getAttribute("data-y")-1;t.style.backgroundPosition="".concat(-i*parseInt(this.childWidth),"px ").concat(-e*parseInt(this.childWidth),"px")}},{key:"setBgImg",value:function(t){for(var i=0;i<this.oChild.length-1;i++)this.oChild[i].style.backgroundImage="url(".concat(t,")")}},{key:"setChildRandomOrder",value:function(){var t=[1,2,3,4,5,6,7,8,9],i=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:3}];t.sort(function(){return Math.random()>.5?-1:1});for(var e=0;e<this.oChild.length;e++)this.oChild[e].style.order=t[e],this.oChild[e].setAttribute("data-x",i[t[e]-1].x),this.oChild[e].setAttribute("data-y",i[t[e]-1].y)}}]),t}())).init()}}},l=(e(182),e(0)),n=Object(l.a)(d,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"jigsaw"}},[e("input",{staticClass:"hide",attrs:{type:"file",id:"file"}}),t._v(" "),e("button",{staticClass:"btn",attrs:{id:"uploadFile"}},[t._v("上传图片")]),t._v(" "),e("button",{staticClass:"btn",attrs:{id:"disrupt"}},[t._v("打乱顺序")]),t._v(" "),e("section",{staticClass:"jigsaw highlight"},[e("ul",{staticClass:"ul highlight"},[e("li",{staticClass:"child",staticStyle:{order:"1"},attrs:{"data-x":"1","data-y":"1"}},[t._v("1")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"2"},attrs:{"data-x":"2","data-y":"1"}},[t._v("2")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"3"},attrs:{"data-x":"3","data-y":"1"}},[t._v("3")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"4"},attrs:{"data-x":"1","data-y":"2"}},[t._v("4")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"5"},attrs:{"data-x":"2","data-y":"2"}},[t._v("5")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"6"},attrs:{"data-x":"3","data-y":"2"}},[t._v("6")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"7"},attrs:{"data-x":"1","data-y":"3"}},[t._v("7")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"8"},attrs:{"data-x":"2","data-y":"3"}},[t._v("8")]),t._v(" "),e("li",{staticClass:"child",staticStyle:{order:"9"},attrs:{"data-x":"3","data-y":"3",id:"empty"}},[t._v("9")])]),t._v(" "),e("img",{attrs:{id:"img",src:"https://note.youdao.com/yws/api/personal/file/C69044B50F4F4B61B3B0851C7A0ECEE6?method=download&shareKey=6ef39c4f8117acac1b389fd17eeae3fc",alt:"图片"}})])])}],!1,null,null,null);n.options.__file="note-demo-jigsaw.vue";i.default=n.exports}}]);