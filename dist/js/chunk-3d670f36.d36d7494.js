(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d670f36"],{"552f":function(e,t,c){"use strict";c("93d2")},"5a14":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=Object(n["i"])("Home");function a(e,t,c,a,i,o){var s=Object(n["B"])("Button"),u=Object(n["B"])("router-link"),b=Object(n["B"])("Loader"),d=Object(n["B"])("EpisodeCard");return Object(n["t"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(u,{to:"/",custom:""},{default:Object(n["I"])((function(e){var t=e.navigate;return[Object(n["j"])(s,{onClick:t},{default:Object(n["I"])((function(){return[r]})),_:2},1032,["onClick"])]})),_:1}),a.loading?(Object(n["t"])(),Object(n["e"])(b,{key:0})):Object(n["f"])("",!0),Object(n["j"])(d,{episode:a.episode},null,8,["episode"])],64)}var i=c("1da1"),o=(c("96cf"),c("5502")),s=c("6c02"),u=(c("b0c0"),{class:"episodeCard"}),b={class:"episodeDetails"},d={class:"info"},j=Object(n["h"])("h2",null,"Info",-1),O=Object(n["h"])("b",null,"Release date:",-1),l={class:"chars"},p=Object(n["h"])("h2",null,"Characters",-1),f={class:"images"},h=["src","alt"];function m(e,t,c,r,a,i){var o=Object(n["B"])("router-link");return Object(n["t"])(),Object(n["g"])("div",u,[Object(n["h"])("h1",null,Object(n["D"])(c.episode.name),1),Object(n["h"])("div",b,[Object(n["h"])("div",d,[j,Object(n["h"])("p",null,[O,Object(n["i"])(" "+Object(n["D"])(c.episode.air_date),1)])]),Object(n["h"])("div",l,[p,Object(n["h"])("div",f,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(r.chars,(function(e){return Object(n["t"])(),Object(n["e"])(o,{key:e.id,to:{name:"Character",params:{id:e.id,name:e.name}}},{default:Object(n["I"])((function(){return[Object(n["h"])("img",{src:e.image,alt:e.name},null,8,h)]})),_:2},1032,["to"])})),128))])])])])}var v={props:["episode"],setup:function(){var e=Object(o["b"])(),t=Object(n["c"])((function(){return e.getters["episode/chars"]}));return{chars:t}}},g=(c("552f"),c("6b0d")),k=c.n(g);const w=k()(v,[["render",m]]);var B=w,C=c("555f"),I=c("2a7d"),_={components:{EpisodeCard:B,Loader:C["a"],Button:I["a"]},setup:function(){var e=Object(o["b"])(),t=Object(s["c"])(),c=Object(n["c"])((function(){return e.getters["loading"]})),r=Object(n["c"])((function(){return e.getters["episode/episode"]}));return Object(n["r"])(Object(i["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,e.dispatch("episode/loadEpisode",t.params.id);case 2:case"end":return c.stop()}}),c)})))),{episode:r,loading:c}}};const D=k()(_,[["render",a]]);t["default"]=D},"93d2":function(e,t,c){}}]);
//# sourceMappingURL=chunk-3d670f36.d36d7494.js.map