(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{243:function(t,e,n){"use strict";var o=n(651);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyDX4IrIw0oPJQSUqVyGfoXQlhtscINLCZU",authDomain:"wttt-b1a05.firebaseapp.com",projectId:"wttt-b1a05",storageBucket:"wttt-b1a05.appspot.com",messagingSenderId:"426388193258",appId:"1:426388193258:web:811b2cb921e563c5077c93",measurementId:"G-ZJKKJB5DP0"}),e.a=o.a},313:function(t,e,n){var content=n(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3c77bcef",content,!0,{sourceMap:!1})},314:function(t,e,n){t.exports=n.p+"img/noImage.912b651.png"},347:function(t,e,n){var content=n(440);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7fd40ed0",content,!0,{sourceMap:!1})},412:function(t,e,n){var content=n(646);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("fc60b780",content,!0,{sourceMap:!1})},413:function(t,e,n){var content=n(648);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("5acfdf1d",content,!0,{sourceMap:!1})},414:function(t,e,n){var content=n(650);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("13b913d2",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";n.r(e);n(312);var o=n(416),r=n(417),c=n(418),d={components:{Search:o.default,Result:r.default,Pickup:c.default},data:function(){return{url:"",word:"",noImage:!1,result:{},show:{result:!1,suggest:!1,suggest_more:!1},voted:{},suggested_items:[],introShow:!0}},methods:{result_from_search:function(t){this.init(),null==t.url?(this.noImage=!0,this.word=t.word):(this.noImage=!1,this.url=t.url,this.word=t.word),this.introShow=!1},result_from_pickup:function(t){this.init(),t.url==n(314)?(this.noImage=!0,this.word=t.word):(this.noImage=!1,this.url=t.url,this.word=t.word),this.introShow=!1},init:function(){this.suggested_items.splice(0),this.show.result=!0,this.show.suggest=!1,this.show.suggest_more=!1}}},l=(n(649),n(27)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Pickup",{on:{result_from_pickup:function(e){return t.result_from_pickup(e,t.result)}}}),t._v(" "),n("div",{staticClass:"main"},[t.introShow?n("div",[n("h1",[t._v("We Think That This")]),t._v(" "),n("p",[t._v("This is an web app to seak a common impression for word.")]),t._v(" "),n("p",[t._v("Let's try searching or clicking a pickup-image.")]),t._v(" "),n("p",[t._v("And you can vote some images which you think it's appropriate for")]),t._v(" "),n("p",[t._v("representation of word.")])]):t._e(),t._v(" "),n("Search",{staticClass:"search",on:{result_from_search:function(e){return t.result_from_search(e,t.result)}}}),t._v(" "),t.show.result?n("Result",{staticClass:"result",attrs:{url:t.url,word:t.word,voted:t.voted,suggested_items:t.suggested_items,show:t.show,noImage:t.noImage}}):t._e()],1)],1)}),[],!1,null,"3a91ccc2",null);e.default=component.exports;installComponents(component,{Pickup:n(418).default,Search:n(416).default,Result:n(417).default})},416:function(t,e,n){"use strict";n.r(e);n(63),n(64);var o=n(243),r={data:function(){return{word:""}},methods:{search:function(){var t=this;o.a.firestore().collection("images").where("word","==",this.word).orderBy("vote","desc").limit(1).get().then((function(e){0===e.size?t.$emit("result_from_search",{word:t.word,url:void 0}):e.forEach((function(e){var data={url:e.data().url,word:e.data().word};t.$emit("result_from_search",data)}))})).catch((function(t){console.log(t)}))}}},c=(n(428),n(27)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search_container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],staticClass:"search_box",attrs:{placeholder:"word"},domProps:{value:t.word},on:{input:function(e){e.target.composing||(t.word=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search_botton",attrs:{type:"button"},on:{click:t.search}},[t._v("search")])])}),[],!1,null,"3673bc12",null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);n(63),n(315),n(103),n(28),n(312),n(316),n(13),n(104),n(36),n(321),n(322),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(64),n(37);var o=n(7),r=n(243),c={components:{Suggest:n(419).default},data:function(){return{suggest_more:!1}},props:["word","url","voted","suggested_items","show","noImage"],methods:{vote:function(t){if(!0!==this.voted[t]){this.voted[t]=!0;var e=r.a.firestore();this.sha256(t).then((function(t){var image=e.collection("images").doc(t);image.get().then((function(t){image.update({vote:t.data().vote+1,timestamp:r.a.firestore.FieldValue.serverTimestamp()}),alert("Thank you for voting!")})).catch((function(t){return console.log(t)}))}))}else alert("You've already voted this image!")},suggest:function(){var t=this;!0!==this.show.suggest&&r.a.firestore().collection("images").where("word","==",this.word).get().then((function(e){e.forEach((function(e){t.suggested_items.push({url:e.data().url})})),t.showSuggest()})).catch((function(t){return console.log(t)}))},suggestByGoogle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.show.suggest_more){e.next=2;break}return e.abrupt("return");case 2:if(""!==t.word){e.next=4;break}return e.abrupt("return");case 4:if(t.suggested_items.splice(0),0,o=n(441),""!==t.word){e.next=9;break}return e.abrupt("return");case 9:t.$axios.$get("/api",{params:{q:t.word,tbm:"isch"}}).then((function(e){o.load(e)("img").each((function(e,element){var n=element.attribs["data-src"];console.log(n),void 0!==n&&t.suggested_items.push({url:n})})),t.showSuggest()})).catch((function(t){return console.log(t)})),t.show.suggest_more=!0;case 11:case"end":return e.stop()}}),e)})))()},showSuggest:function(){this.suggested_items.length>0&&(this.show.suggest=!0)},sha256:function(text){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(new TextEncoder).encode(text),t.next=3,crypto.subtle.digest("SHA-256",e);case 3:return n=t.sent,t.abrupt("return",Array.from(new Uint8Array(n)).map((function(t){return t.toString(16).padStart(2,"0")})).join(""));case 5:case"end":return t.stop()}}),t)})))()}}},d=(n(645),n(27)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"result_container"},[!1===t.noImage?o("p",{staticStyle:{color:"white"}},[t._v('Is this "'+t._s(this.word)+'"?')]):t._e(),t._v(" "),!0===t.noImage?o("p",{staticStyle:{color:"white"}},[t._v('\n        Sorry. This word don\'t have any impression yet.\n        Please click "other" and vote some images.\n    ')]):t._e(),t._v(" "),o("div",{staticClass:"image"},[!0===t.noImage?o("img",{attrs:{src:n(314),alt:"noImage",width:"100%"}}):t._e(),t._v(" "),!1===t.noImage?o("img",{attrs:{src:t.url,alt:"result",width:"100%"}}):t._e()]),t._v(" "),o("div",{staticClass:"button"},[!1===t.noImage?o("button",{attrs:{type:"button"},on:{click:function(e){return t.vote(t.url)}}},[t._v("agree")]):t._e(),t._v(" "),!1===t.noImage?o("button",{attrs:{type:"button"},on:{click:t.suggest}},[t._v("disagree")]):t._e(),t._v(" "),!0===t.noImage||!0===t.show.suggest?o("button",{attrs:{type:"button"},on:{click:t.suggestByGoogle}},[t._v("other")]):t._e()]),t._v(" "),t.show.suggest?o("Suggest",{attrs:{word:t.word,voted:t.voted,suggested_items:t.suggested_items}}):t._e()],1)}),[],!1,null,"372fbf20",null);e.default=component.exports;installComponents(component,{Suggest:n(419).default})},418:function(t,e,n){"use strict";n.r(e);n(63),n(64);var o=n(243),r={data:function(){return{pickup_items:[]}},mounted:function(){var t=this;o.a.firestore().collection("images").orderBy("timestamp","desc").limit(10).get().then((function(e){e.forEach((function(e){t.pickup_items.push({word:e.data().word,url:e.data().url})}))}))},methods:{pick:function(t,e){var data={url:e,word:t};this.$emit("result_from_pickup",data)}}},c=(n(647),n(27)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pickup_container"},t._l(t.pickup_items,(function(e,o){return n("div",{key:e.url,staticClass:"pickup",attrs:{id:"pickup_item"+o},on:{click:function(n){return t.pick(e.word,e.url)}}},[n("img",{attrs:{src:e.url,alt:e.word,width:"200px"}}),t._v(" "),n("label",[t._v(t._s(e.word))])])})),0)}),[],!1,null,"13de7be2",null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);n(63),n(315),n(103),n(28),n(316),n(13),n(104),n(36),n(321),n(322),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(64),n(37);var o=n(7),r=n(243),c={data:function(){return{selected_items:[]}},props:["word","voted","suggested_items"],methods:{voteSelection:function(){var t=this,e=this.word,n=0,o=r.a.firestore();this.selected_items.forEach((function(c){!0===t.voted[c]?alert("You've already voted this image!"):(t.voted[c]=!0,n+=1,t.sha256(c).then((function(t){var image=o.collection("images").doc(t);image.get().then((function(t){image.update({vote:t.data().vote+1})})).catch((function(n){o.collection("images").doc(t).set({url:c,word:e,vote:1,timestamp:r.a.firestore.FieldValue.serverTimestamp()})}))})))})),n>0&&alert("Thank you for voting!")},sha256:function(text){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(new TextEncoder).encode(text),t.next=3,crypto.subtle.digest("SHA-256",e);case 3:return n=t.sent,t.abrupt("return",Array.from(new Uint8Array(n)).map((function(t){return t.toString(16).padStart(2,"0")})).join(""));case 5:case"end":return t.stop()}}),t)})))()}}},d=(n(439),n(27)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suggest_container"},[n("no-ssr",[n("div",{staticClass:"suggest"},t._l(t.suggested_items,(function(e,o){return n("div",{key:e.url,staticClass:"suggest_item",attrs:{src:e.url}},[n("img",{attrs:{src:e.url,alt:"suggested_image"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected_items,expression:"selected_items"}],attrs:{id:"suggest"+o,type:"checkbox"},domProps:{value:e.url,checked:Array.isArray(t.selected_items)?t._i(t.selected_items,e.url)>-1:t.selected_items},on:{change:function(n){var o=t.selected_items,r=n.target,c=!!r.checked;if(Array.isArray(o)){var d=e.url,l=t._i(o,d);r.checked?l<0&&(t.selected_items=o.concat([d])):l>-1&&(t.selected_items=o.slice(0,l).concat(o.slice(l+1)))}else t.selected_items=c}}})])})),0),t._v(" "),n("button",{on:{click:t.voteSelection}},[t._v("vote")])])],1)}),[],!1,null,"64655bf2",null);e.default=component.exports},428:function(t,e,n){"use strict";n(313)},429:function(t,e,n){(e=n(61)(!1)).push([t.i,".search_box[data-v-3673bc12]{width:100%}",""]),t.exports=e},439:function(t,e,n){"use strict";n(347)},440:function(t,e,n){(e=n(61)(!1)).push([t.i,".suggest_container[data-v-64655bf2]{width:100%;height:50vh;display:flex;flex-direction:column}.suggest_container .suggest[data-v-64655bf2]{display:flex;flex-wrap:wrap;justify-content:space-around}.suggest_container .suggest .suggest_item[data-v-64655bf2]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:1vw 0}.suggest_container .suggest .suggest_item img[data-v-64655bf2]{border-radius:10px}",""]),t.exports=e},465:function(t,e){},479:function(t,e){},481:function(t,e){},645:function(t,e,n){"use strict";n(412)},646:function(t,e,n){(e=n(61)(!1)).push([t.i,".result_container[data-v-372fbf20]{width:500px;height:100%;padding-top:2vw;display:flex;flex-direction:column;align-items:center;overflow:scroll;-ms-overflow-style:none;scrollbar-width:none}.result_container .image img[data-v-372fbf20]{border-radius:10px}[data-v-372fbf20]::-webkit-scrollbar{display:none}",""]),t.exports=e},647:function(t,e,n){"use strict";n(413)},648:function(t,e,n){(e=n(61)(!1)).push([t.i,".pickup_container[data-v-13de7be2]{width:100%;height:100%;position:absolute;z-index:100}.pickup_container .pickup[data-v-13de7be2]{position:absolute;z-index:100;cursor:pointer;-webkit-animation:horizontal-data-v-13de7be2 1s ease-in-out infinite alternate;animation:horizontal-data-v-13de7be2 1s ease-in-out infinite alternate}.pickup_container .pickup img[data-v-13de7be2]{border-radius:10px;-webkit-animation:vertical-data-v-13de7be2 1s ease-in-out infinite alternate;animation:vertical-data-v-13de7be2 1s ease-in-out infinite alternate}.pickup_container #pickup_item0[data-v-13de7be2]{left:-5vw;top:20vh}.pickup_container #pickup_item0[data-v-13de7be2],.pickup_container #pickup_item0 img[data-v-13de7be2]{-webkit-animation-delay:0+s;animation-delay:0+s}.pickup_container #pickup_item0 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item1[data-v-13de7be2]{left:20vw;top:80vh}.pickup_container #pickup_item1[data-v-13de7be2],.pickup_container #pickup_item1 img[data-v-13de7be2]{-webkit-animation-delay:1+s;animation-delay:1+s}.pickup_container #pickup_item1 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item2[data-v-13de7be2]{left:10vw;top:10vh}.pickup_container #pickup_item2[data-v-13de7be2],.pickup_container #pickup_item2 img[data-v-13de7be2]{-webkit-animation-delay:2+s;animation-delay:2+s}.pickup_container #pickup_item2 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item3[data-v-13de7be2]{left:30vw;top:5vh}.pickup_container #pickup_item3[data-v-13de7be2],.pickup_container #pickup_item3 img[data-v-13de7be2]{-webkit-animation-delay:3+s;animation-delay:3+s}.pickup_container #pickup_item3 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item4[data-v-13de7be2]{left:40vw;top:70vh}.pickup_container #pickup_item4[data-v-13de7be2],.pickup_container #pickup_item4 img[data-v-13de7be2]{-webkit-animation-delay:4+s;animation-delay:4+s}.pickup_container #pickup_item4 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item5[data-v-13de7be2]{left:0;top:50vh}.pickup_container #pickup_item5[data-v-13de7be2],.pickup_container #pickup_item5 img[data-v-13de7be2]{-webkit-animation-delay:5+s;animation-delay:5+s}.pickup_container #pickup_item5 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item6[data-v-13de7be2]{left:55vw;top:0}.pickup_container #pickup_item6[data-v-13de7be2],.pickup_container #pickup_item6 img[data-v-13de7be2]{-webkit-animation-delay:6+s;animation-delay:6+s}.pickup_container #pickup_item6 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item7[data-v-13de7be2]{left:85vw;top:60vh}.pickup_container #pickup_item7[data-v-13de7be2],.pickup_container #pickup_item7 img[data-v-13de7be2]{-webkit-animation-delay:7+s;animation-delay:7+s}.pickup_container #pickup_item7 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item8[data-v-13de7be2]{left:60vw;top:75vh}.pickup_container #pickup_item8[data-v-13de7be2],.pickup_container #pickup_item8 img[data-v-13de7be2]{-webkit-animation-delay:8+s;animation-delay:8+s}.pickup_container #pickup_item8 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}.pickup_container #pickup_item9[data-v-13de7be2]{left:80vw;top:20vh}.pickup_container #pickup_item9[data-v-13de7be2],.pickup_container #pickup_item9 img[data-v-13de7be2]{-webkit-animation-delay:9+s;animation-delay:9+s}.pickup_container #pickup_item9 label[data-v-13de7be2]{position:absolute;left:50%;top:50%;text-shadow:1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff}@-webkit-keyframes horizontal-data-v-13de7be2{0%{transform:translateX(-3px)}to{transform:translateX(0)}}@keyframes horizontal-data-v-13de7be2{0%{transform:translateX(-3px)}to{transform:translateX(0)}}@-webkit-keyframes vertical-data-v-13de7be2{0%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes vertical-data-v-13de7be2{0%{transform:translateY(-10px)}to{transform:translateY(0)}}",""]),t.exports=e},649:function(t,e,n){"use strict";n(414)},650:function(t,e,n){(e=n(61)(!1)).push([t.i,".container[data-v-3a91ccc2]{width:100%;height:100vh;justify-content:center}.container[data-v-3a91ccc2],.container .main[data-v-3a91ccc2]{display:flex;align-items:center}.container .main[data-v-3a91ccc2]{width:70vw;height:50vh;padding:1vw;background-color:#1a2547;border-radius:50px;justify-content:space-around;z-index:200}.container .main .result[data-v-3a91ccc2],.container .main .search[data-v-3a91ccc2]{width:20vw}.container .main .modal[data-v-3a91ccc2]{margin:0}",""]),t.exports=e},652:function(t,e,n){"use strict";n.r(e);n(243);var o={components:{App:n(415).default}},r=n(27),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("App",{staticClass:"app"})}),[],!1,null,"41b987d1",null);e.default=component.exports;installComponents(component,{App:n(415).default})}}]);