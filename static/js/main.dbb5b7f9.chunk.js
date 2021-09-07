(this["webpackJsonpexcalidraw-claymate"]=this["webpackJsonpexcalidraw-claymate"]||[]).push([[0],{142:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t(26),r=t.n(a),c=(t(47),t(3)),o=t(8),s=t.n(o),d=(t(71),t(6)),u=t(2),l=t.n(u),m=t(5),b=t(4),f=t(40),g=(t(72),t(9)),p=t(41),v=t.n(p),h=function(e){return new Promise((function(n){var t=new v.a;e.forEach((function(n,i){var a=i+1===e.length;t.addFrame(n.imageData,{delay:a?2e3:500})})),t.on("finished",(function(e){Object(g.a)(e,{fileName:"excalidraw-claymate.gif"}).then(n)})),t.render()}))},j=t(19),x=function(e){return e.filter((function(e){return!e.isDeleted}))},y=function(){var e=Object(m.a)(l.a.mark((function e(n,t){var i,a,r,c,s,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i='<!DOCTYPE html>\n    <html lang="en">\n      <style>\n        svg { width: 100%; height: 100%; }\n        body { margin: 0px; font-size: 24px; }\n        button { background: transparent; border: none; cursor: pointer; padding: 3px; margin: 0px 10px; font-size: inherit;}\n        #container { display: flex; flex-direction: column; height: 100%; }\n        #navigation { display: flex; justify-content: center; align-items: center; padding: 5px; border-top: 1px solid lightgray; background: white; }\n        #leftbuttons { position: absolute; left: 10px; display: flex; }\n        #rightbuttons { position: absolute; right: 10px; display: flex; }\n        #slides { height: calc(100vh - 50px); }\n      </style>\n      <script>\n        let index = 0;\n        let totalScenes = '.concat(n.length,"\n        function updateTitle() {\n          document.getElementById('title').innerText = '' + (index + 1) + ' of ' + totalScenes;\n        }\n        function moveLeft() {\n          if (index > 0) {\n            document.getElementById('scene' + index).style.display = 'none';\n            index -= 1;\n            document.getElementById('scene' + index).style.display = 'block';\n            updateTitle();\n            document.getElementById('scene' + index).setCurrentTime(0);\n          }\n        }\n        function moveRight() {\n          if (index < totalScenes - 1) {\n            document.getElementById('scene' + index).style.display = 'none';\n            index += 1;\n            document.getElementById('scene' + index).style.display = 'block';\n            updateTitle();\n            document.getElementById('scene' + index).setCurrentTime(0);\n          }\n        }\n        function closeNavigation() {\n          document.getElementById('navigation').style.display = 'none';\n          document.getElementById('slides').style.height = '100vh'\n        }\n        function toggleMaximise() {\n          if (document.fullscreenElement === document.body) {\n            document.exitFullscreen();\n          } else {\n            document.body.requestFullscreen();\n          }\n        }\n        ").concat((u=!!t.animate,u?"\n      function togglePausedAnimations() {\n        const svg = document.getElementById('scene' + index);\n        if (svg.animationsPaused()) {\n          for (const svg of document.getElementsByTagName('svg')) {\n            svg.unpauseAnimations();\n          }\n        } else {\n          for (const svg of document.getElementsByTagName('svg')) {\n            svg.pauseAnimations();\n          }\n        }\n      }\n      const beginTimeLists = [];\n      let animateTimer;\n      function stepForwardAnimations() {\n        const svg = document.getElementById('scene' + index);\n        const beginTimeList = beginTimeLists[index];\n        const currentTime = svg.getCurrentTime() * 1000;\n        let nextTime = beginTimeList.find((t) => t > currentTime + 50);\n        console.log(currentTime, beginTimeList, nextTime);\n        if (nextTime) {\n          nextTime -= 1;\n        } else {\n          nextTime = currentTime + 500;\n        }\n        clearTimeout(animateTimer);\n        svg.unpauseAnimations();\n        animateTimer = setTimeout(() => {\n          svg.pauseAnimations();\n          svg.setCurrentTime(nextTime / 1000);\n        }, nextTime - currentTime);\n      }\n      function resetAnimations() {\n        const svg = document.getElementById('scene' + index);\n        svg.setCurrentTime(0);\n      }\n":"\n      function togglePausedAnimations() {}\n      function stepForwardAnimations() {}\n      function resetAnimations() {}\n"),"\n        ").concat("\n  function startRecording() {\n    import('https://unpkg.com/browser-fs-access').then(({ fileSave }) => {\n      navigator.mediaDevices.getDisplayMedia({\n        video: { displaySurface: 'browser' },\n      }).then(function(stream) {\n        navigator.mediaDevices.getUserMedia({\n          audio: true,\n        }).catch(() => null).then(function(audioStream) {\n          if (audioStream) {\n            const audioTrack = audioStream.getAudioTracks()[0];\n            stream.getVideoTracks()[0].onended = () => {\n              audioTrack.stop();\n            };\n            stream.addTrack(audioTrack);\n          }\n          const recorder = new MediaRecorder(stream);\n          recorder.ondataavailable = (e) => {\n            const blob = new Blob([e.data], { type: \"video/webm\" });\n            const opts = { fileName: \"video.webm\", extensions: [\".webm\"] };\n            fileSave(blob, opts).catch(() => {\n              document.getElementById('startrecordingbutton').onclick = () => {\n                fileSave(blob, opts);\n              };\n              window.alert('Click the recording button again to save file');\n            });\n          };\n          recorder.start();\n        });\n      });\n    });\n  }\n","\n        document.addEventListener('DOMContentLoaded', () => {\n          document.getElementById('scene' + index).style.display = 'block';\n          document.getElementById('scene' + index).setCurrentTime(0);\n        });\n        document.addEventListener('keydown', (event) => {\n          if (event.key === 'ArrowRight') {\n            moveRight();\n          }\n          if (event.key === 'ArrowLeft') {\n            moveLeft();\n          }\n          if (event.key.toLowerCase() === 'f') {\n            toggleMaximise();\n          }\n          if (event.key.toLowerCase() === 'p') {\n            togglePausedAnimations();\n          }\n          if (event.key.toLowerCase() === 's') {\n            stepForwardAnimations();\n          }\n          if (event.key.toLowerCase() === 'r') {\n            resetAnimations();\n          }\n        });\n      <\/script>\n      <body>\n      <div id=\"container\">\n      <div id=\"slides\">\n  "),a=0;case 2:if(!(a<n.length)){e.next=15;break}return r=n[a],e.next=6,Object(o.exportToSvg)(r.drawing);case 6:c=e.sent,t.animate&&Object(j.a)(c,x(r.drawing.elements),t.animateOptions),c.id="scene".concat(a),c.style.display="none",i+=c.outerHTML,t.animate&&((s=Object(j.b)(c)).sort((function(e,n){return e-n})),i+="\n        <script>\n          beginTimeLists.push(".concat(JSON.stringify(s),");\n        <\/script>\n      "));case 12:++a,e.next=2;break;case 15:return d=t.animate?'\n    <div id="leftbuttons">\n     <button type="button" onclick="togglePausedAnimations()" title="Play or pause animations">P</button>\n     <button type="button" onclick="stepForwardAnimations()" title="Step forward animations">S</button>\n     <button type="button" onclick="resetAnimations()" title="Reset animations">R</button>\n    </div>\n':"",i+='\n    </div>\n    <div id="navigation">\n      '.concat(d,'\n      <button class="navbutton" type="button" onclick="moveLeft()" title="Previous slide">&#9664;</button>\n      <div id="title">1 of ').concat(n.length,'</div>\n      <button class="navbutton" type="button" onclick="moveRight()" title="Next slide">&#9654;</button>\n      <div id="rightbuttons">\n        <button type="button" onclick="startRecording()" title="Start recording" id="startrecordingbutton">&#x1F3A5;</button>\n        <button type="button" onclick="toggleMaximise()" title="Toggle full-screen">&#x26F6;</button>\n        <button type="button" onclick="closeNavigation()" title="Close this panel">&#x2716;</button>\n      </div>\n    </div>\n  </div></body></html>\n'),e.next=19,Object(g.a)(new Blob([i],{type:"text/html"}),{fileName:"excalidraw-claymate.html"});case 19:case"end":return e.stop()}var u}),e)})));return function(n,t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(l.a.mark((function e(n,t,i){var a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.exportToSvg)(n.drawing);case 2:a=e.sent,t.animate&&Object(j.a)(a,x(n.drawing.elements),t.animateOptions),r=a.outerHTML,i?(c=document.getElementById(i))&&(c.innerHTML=r):(s=window.open("","_blank"))&&(s.document.body.innerHTML=r);case 6:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),w=(t(73),t(0)),k=function(e,n){var t=e.match(new RegExp("".concat(n,":(-?\\d+)")));return null===t?void 0:Number(t[1])||0},S=function(e,n,t,i){var a=Object(c.a)({},e.appState.selectedElementIds);return{elements:e.elements.map((function(e){var r,o=e.id;return n.includes(o)?(r=o.match(new RegExp("".concat(t,":(-?\\d+)")))?o.replace(new RegExp("".concat(t,":(-?\\d+)")),"".concat(t,":").concat(i)):o+"-".concat(t,":").concat(i),o===r?e:(a[r]=a[o],delete a[o],Object(c.a)(Object(c.a)({},e),{},{id:r}))):e})),appState:Object(c.a)(Object(c.a)({},e.appState),{},{selectedElementIds:a})}},C=function(e){var n,t,i=e.animateEnabled,a=e.setAnimateEnabled,r=e.scene,o=e.updateDrawing,s=e.animateOptions,d=e.setAnimateOptions,u=e.previewCurrentScene,l=null!==(n=null===r||void 0===r?void 0:r.drawing.elements)&&void 0!==n?n:[],m=r?Object.keys(null!==(t=r.drawing.appState.selectedElementIds)&&void 0!==t?t:{}).filter((function(e){return r.drawing.appState.selectedElementIds[e]&&l.some((function(n){return n.id===e}))})):[],b=new Set;m.forEach((function(e){b.add(k(e,"animateOrder"))}));var f=!i||!b.size,g=new Set;m.forEach((function(e){g.add(k(e,"animateDuration"))}));var p=!i||!g.size;return Object(w.jsxs)("div",{className:"AnimateConfig",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return a((function(e){return!e}))}}),"Enable animate"]})," ",Object(w.jsx)("button",{disabled:!i,onClick:u,children:"Preview"})]}),Object(w.jsxs)("div",{style:{opacity:f?.3:1},children:["Animate order:"," ",b.size>1?Object(w.jsx)(w.Fragment,{children:"(mixed)"}):Object(w.jsx)("input",{disabled:f,value:1===b.size&&b.values().next().value||0,onChange:function(e){var n=Math.floor(Number(e.target.value));r&&Number.isFinite(n)&&o(S(r.drawing,m,"animateOrder",n))},type:"number",style:{width:40}})]}),Object(w.jsxs)("div",{style:{opacity:p?.3:1},children:["Animate duration (ms):"," ",g.size>1?Object(w.jsx)(w.Fragment,{children:"(mixed)"}):Object(w.jsx)("input",{disabled:p,value:1===g.size&&g.values().next().value||"",onChange:function(e){var n=Math.floor(Number(e.target.value));r&&Number.isFinite(n)&&o(S(r.drawing,m,"animateDuration",n))},placeholder:"Default",style:{width:50}})]}),Object(w.jsxs)("div",{style:{opacity:i?1:.3},children:["Animate pointer:"," ",Object(w.jsx)("input",{disabled:!i,value:s.pointerImg||"",onChange:function(e){d((function(n){return Object(c.a)(Object(c.a)({},n),{},{pointerImg:e.target.value})}))},placeholder:"URL...",style:{width:50}})," ",Object(w.jsxs)("label",{className:"AnimateConfig-button-like ".concat(i?"AnimateConfig-button-like-enabled":"AnimateConfig-button-like-disabled"),children:[Object(w.jsx)("input",{disabled:!i,type:"file",accept:"image/*",onChange:function(e){var n=e.target.files&&e.target.files[0];if(n){var t=new FileReader;t.onload=function(){if("string"===typeof t.result){var e=t.result;d((function(n){return Object(c.a)(Object(c.a)({},n),{},{pointerImg:e})}))}},t.readAsDataURL(n)}},style:{width:0}}),"File"]})]}),Object(w.jsxs)("div",{style:{opacity:i?1:.3},children:["(Pointer width:"," ",Object(w.jsx)("input",{disabled:!i,value:s.pointerWidth||"",onChange:function(e){d((function(n){return Object(c.a)(Object(c.a)({},n),{},{pointerWidth:e.target.value})}))},placeholder:"Num...",style:{width:50}}),")"]})]})},T=Object(i.memo)((function(e){var n=e.scene,t=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(t.current){var e=t.current.getContext("2d");e&&e.putImageData(n.imageData,0,0)}}),[n]),Object(w.jsx)("canvas",{ref:t,width:n.width,height:n.height})})),E=function(e){var n=e.scenes,t=e.currentIndex,a=e.updateScenes,r=e.moveToScene,c=e.addScene,o=e.updateDrawing,s=Object(i.useState)(!1),u=Object(b.a)(s,2),g=u[0],p=u[1],v=Object(i.useState)(!1),j=Object(b.a)(v,2),x=j[0],k=j[1],S=Object(i.useState)({}),E=Object(b.a)(S,2),I=E[0],A=E[1],N=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n,{animate:x,animateOptions:I});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(l.a.mark((function e(){var i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=7;break}return i="",(a=document.getElementById("previewOuter"))&&(i="previewInner"),e.next=6,O(n[t],{animate:x,animateOptions:I},i);case 6:a&&(a.style.display="block");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){0===n.length&&c()}),[n,c]),Object(w.jsxs)("div",{className:"Claymate",children:[Object(w.jsx)("div",{className:"Claymate-scenes",children:n.map((function(e,i){var c="MissingId";return Object(f.isEmpty)(n[i].drawing.elements)||(c=n[i].drawing.elements[0].id),Object(w.jsxs)("div",{className:"Claymate-scene ".concat(i===t?"Claymate-current-scene":""),onClick:function(){return r(i)},"data-testid":c,children:[Object(w.jsx)(T,{scene:e}),Object(w.jsx)("button",{type:"button",className:"Claymate-delete","aria-label":"Delete",disabled:n.length<=1,onClick:function(i){i.stopPropagation(),function(e){var i=n.findIndex((function(n){return n.id===e}));if(i>=0){var r=n.length-1;if(r>0){var c;if(void 0!==t){var o=i===t;if(t>i||o){var s=t;o&&(t===r?s=t-1:0===t&&(s=1)),c={index:t>0?t-1:t,drawing:n[s].drawing}}}a((function(n){return n.filter((function(n){return n.id!==e}))}),c)}}}(e.id)},children:"\u2716"}),Object(w.jsx)("button",{type:"button",className:"Claymate-left","aria-label":"Move Left",disabled:0===i,onClick:function(t){t.stopPropagation(),function(e){var t=n.findIndex((function(n){return n.id===e}));a((function(e){var n=Object(d.a)(e);return n[t-1]=e[t],n[t]=e[t-1],n}),{index:t-1,drawing:n[t].drawing})}(e.id)},children:"\u2b05"}),Object(w.jsx)("button",{type:"button",className:"Claymate-right","aria-label":"Move Right",disabled:i===n.length-1,onClick:function(t){t.stopPropagation(),function(e){var t=n.findIndex((function(n){return n.id===e}));a((function(e){var n=Object(d.a)(e);return n[t+1]=e[t],n[t]=e[t+1],n}),{index:t+1,drawing:n[t].drawing})}(e.id)},children:"\u27a1"})]},e.id)}))}),Object(w.jsx)("div",{className:"Claymate-configs",children:g&&Object(w.jsx)(C,{animateEnabled:x,setAnimateEnabled:k,scene:void 0===t?void 0:n[t],updateDrawing:o,animateOptions:I,setAnimateOptions:A,previewCurrentScene:B})}),Object(w.jsxs)("div",{className:"Claymate-buttons",children:[Object(w.jsx)("button",{type:"button",onClick:c,children:"Add scene"}),Object(w.jsx)("button",{type:"button",onClick:N,disabled:0===n.length,children:"Export GIF"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{type:"button",onClick:function(){return p((function(e){return!e}))},children:g?Object(w.jsx)(w.Fragment,{children:"\u25b8"}):Object(w.jsx)(w.Fragment,{children:"\u25c2"})}),Object(w.jsx)("button",{type:"button",onClick:function(){return L()},disabled:0===n.length,children:"Export HTML"})]}),Object(w.jsx)("button",{type:"button",onClick:function(){a((function(e){return Object(d.a)(e).reverse()}),void 0!==t?{index:n.length-1-t,drawing:n[t].drawing}:void 0)},disabled:n.length<=1,children:"Reverse order"})]})]})},I=t(27),A=t.n(I),N=t(42),L=function(e,n){var t=Object(o.exportToCanvas)({elements:e.elements}),i=n?n.width:t.width,a=n?n.height:t.height;if(i&&a){var r=t.getContext("2d");return r?{id:Object(N.a)(),width:i,height:a,imageData:r.getImageData(0,0,i,a),drawing:e}:void 0}},B="claymate-scenes",D=function(){try{var e,n=JSON.parse(localStorage.getItem(B)||"");if(n&&n.length>0)return n.map((function(n){n.appState.collaborators=new Map;var t=L(n,e?{width:e.width,height:e.height}:void 0);return void 0===e&&(e=t),t}))}catch(a){try{var t=function(){try{var e=JSON.parse(localStorage.getItem("excalidraw-elements")||"");return e.appState.collaborators=new Map,e}catch(n){return null}}();if(t){var i=L(t);if(i)return[i]}}catch(r){}}return null},M=function(){var e=Object(i.useState)(!1),n=Object(b.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)(0),o=Object(b.a)(r,2),s=o[0],u=o[1],l=Object(i.useState)(0),m=Object(b.a)(l,2),f=m[0],g=m[1],p=Object(i.useState)([]),v=Object(b.a)(p,2),h=v[0],j=v[1],x=Object(i.useState)(),y=Object(b.a)(x,2),O=y[0],w=y[1];Object(i.useEffect)((function(){if(!t){var e=D();e&&e.length>0&&(j(e),g(0),w(e[0].drawing))}}),[t,a]),Object(i.useEffect)((function(){!function(e){var n=JSON.stringify(e.map((function(e){return e.drawing})));localStorage.setItem(B,n)}(h)}),[h]);var k,S,C=Object(i.useCallback)((function(e){u((function(e){return e+1})),w(e)}),[]),T=Object(i.useCallback)((function(e){C(h[e].drawing),g(e)}),[C,g,h]),E=Object(i.useCallback)((function(e,n){j(e),n&&(C(n.drawing),g(n.index))}),[g,C,j]),I=void 0!==f&&f<h.length?Object(c.a)(Object(c.a)({},h[f]),{},{drawing:O}):void 0;null!=I&&1!==h.length&&(k=I.width,S=I.height),Object(i.useEffect)((function(){if(null!=f&&O){var e=L(O,void 0===k||void 0===S?void 0:{width:k,height:S});e&&E((function(n){var t=Object(d.a)(n);return t[f]=e,t}),void 0)}}),[O,f,h.length,E,k,S]);var N=Object(i.useCallback)((function(){if(O){var e=L(O,h[0]&&{width:h[0].width,height:h[0].height});e&&E((function(n){return[].concat(Object(d.a)(n),[e])}),{index:h.length,drawing:O})}}),[E,h,O]);return{initialised:t,moveToScene:T,addScene:N,onChange:function(e,n){if(null==O||!A()(e,O.elements)||!A()(n,O.appState)){var t={elements:e.map((function(e){return Object(c.a)({},e)})),appState:Object(c.a)({},n)};w(t)}},drawingVersion:s,currentIndex:f,scenes:h,updateScenes:E,initialData:O}},R="claymate-libraries",F=function(){var e=Object(i.useMemo)((function(){return function(){try{var e=localStorage.getItem(R),n=e?JSON.parse(e):void 0;if(n)return n}catch(t){console.error("Unable to load libraries",t)}}()}),[]),n=Object(i.useRef)(e);return{onLibraryChange:Object(i.useCallback)((function(e){!function(e){var n=JSON.stringify(e);localStorage.setItem(R,n)}(e),n.current=e}),[]),libraryItems:n.current}},P=function(){var e=Object(i.useRef)(null),n=M(),t=n.moveToScene,a=n.addScene,r=n.onChange,o=n.drawingVersion,d=n.currentIndex,u=n.initialData,l=n.scenes,m=n.updateScenes,b=F(),f=b.onLibraryChange,g=b.libraryItems,p=Object(i.useMemo)((function(){return g?Object(c.a)(Object(c.a)({},u),{},{libraryItems:g}):u}),[u,g]);return Object(w.jsxs)("div",{className:"ClaymateApp",children:[Object(w.jsx)(s.a,{ref:e,initialData:p,onChange:r,onLibraryChange:f},o),Object(w.jsx)(E,{scenes:l,currentIndex:d,updateScenes:m,moveToScene:t,addScene:a,updateDrawing:function(n){var t;null===(t=e.current)||void 0===t||t.updateScene(n)}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(w.jsx)(i.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),window.React={createElement:i.createElement}},47:function(e,n,t){},71:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){}},[[142,1,2]]]);
//# sourceMappingURL=main.dbb5b7f9.chunk.js.map