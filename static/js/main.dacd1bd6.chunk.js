(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{47:function(t,e,n){t.exports=n(71)},52:function(t,e,n){},57:function(t,e,n){t.exports=n.p+"static/media/click.afbfadca.mp3"},68:function(t,e,n){t.exports=n.p+"static/media/bell.d48f32db.mp3"},69:function(t,e,n){t.exports=n.p+"static/media/fail.9aa0cbe8.mp3"},71:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(19),a=n.n(i),c=(n(52),n(22)),b=n(13),l=n(18),s=n(20),d=n(30),u={gridSize:3,winningSize:3,timeLimit:10};var p=Object(d.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_GRID_SIZE":return Object(s.a)({},t,{gridSize:e.payload>1e3?1e3:e.payload});case"SET_WINNING_SIZE":return Object(s.a)({},t,{winningSize:e.payload>t.gridSize?t.gridSize:e.payload});case"SET_TIME_LIMIT":return Object(s.a)({},t,{timeLimit:e.payload});default:return t}})),m=n(2),g=n(32),f=n(12);function h(){var t=Object(f.a)(["\n  ","\n  ","\n  ","\n  ","\n"]);return h=function(){return t},t}var v={display:"inline-flex",borderRadius:"0.25rem",":focus":{outline:0},position:"relative",justifyContent:"center"},x={"--bg-opacity":"1",backgroundColor:"rgba(66, 153, 225, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(99, 179, 237, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(66, 153, 225, var(--border-opacity))"},"--border-opacity":"1",borderColor:"rgba(43, 108, 176, var(--border-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))"},y={"--bg-opacity":"1",backgroundColor:"rgba(245, 101, 101, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(252, 129, 129, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(245, 101, 101, var(--border-opacity))"},"--border-opacity":"1",borderColor:"rgba(197, 48, 48, var(--border-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))"},O={fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",borderBottomWidth:"4px"},j={paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",borderBottomWidth:"4px"},w=function(t,e){return Object(m.a)(h(),v,x,"small"===t?j:O,e?y:x)},k=Object(r.forwardRef)((function(t,e){var n=t.children,r=t.icon,o=t.size,i=void 0===o?"normal":o,a=t.danger,c=Object(g.a)(t,["children","icon","size","danger"]);return Object(m.b)("button",Object.assign({css:w(i,!!a),ref:e,type:"button"},c),r,n)})),T=function(){return Object(m.b)("div",{css:{"--text-opacity":"1",color:"rgba(235, 244, 255, var(--text-opacity))",fontSize:"1.125rem",marginLeft:"1rem",marginRight:"1rem","@media (min-width: 768px)":{fontSize:"1.5rem"}}},"TicTacToe v","0.1.6")},C=function(t){var e=t.leftButton;return Object(m.b)("nav",{css:{paddingTop:"0.75rem",paddingBottom:"0.75rem",marginBottom:"1rem",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",borderBottomWidth:"4px","--border-opacity":"1",borderColor:"rgba(90, 103, 216, var(--border-opacity))",display:"flex",width:"100%",paddingLeft:"1rem",paddingRight:"1rem",justifyContent:"center","--bg-opacity":"1",backgroundColor:"rgba(102, 126, 234, var(--bg-opacity))","@media (min-width: 768px)":{paddingTop:"0.5rem",paddingBottom:"0.5rem"}}},Object(m.b)("div",{css:{width:"100%",display:"flex",justifyContent:"center",position:"relative","@media (min-width: 768px)":{width:"66.666667%"},"@media (min-width: 1024px)":{width:"50%"}}},Object(m.b)("div",{css:{position:"absolute",left:"0"}},e),Object(m.b)(T,null)))};function z(){var t=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 20px;\n  ","\n"]);return z=function(){return t},t}function S(){var t=Object(f.a)(["\n  ","\n"]);return S=function(){return t},t}var E=Object(m.a)(S(),{alignItems:"center",display:"flex",flexDirection:"column",height:"100vh"}),B=Object(m.a)(z(),{"--bg-opacity":"1",backgroundColor:"rgba(102, 126, 234, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(90, 103, 216, var(--border-opacity))",borderTopWidth:"2px",display:"flex","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",fontWeight:"300"}),W=function(t){var e=t.children;return Object(m.b)("div",{css:E},e,Object(m.b)("div",{css:B},Object(m.b)("span",null,"Made with\xa0",Object(m.b)("span",{role:"img","aria-label":"love symbol"},"\u2764\ufe0f"),"\xa0 by Tony Song")))};function I(){var t=Object(f.a)(["\n  ","\n  ","\n"]);return I=function(){return t},t}function R(){var t=Object(f.a)(["\n  ","\n  &:hover {\n    > button {\n      outline: none;\n      ","\n      ","\n    }\n  }\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);\n    }\n    50% {\n      transform: translateY(0);\n      animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n"]);return R=function(){return t},t}function L(){var t=Object(f.a)(["\n  ","\n  ","\n  ::after {\n    content: 'o';\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n  }\n  ","\n  ","\n"]);return L=function(){return t},t}function N(){var t=Object(f.a)(["\n  ","\n  ","\n  ::after {\n    content: 'x';\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n  }\n  ","\n  ","\n"]);return N=function(){return t},t}function A(){var t=Object(f.a)(["\n  animation: pulse 0.5s cubic-bezier(0, 0, 0.2, 1) infinite;\n\n  @keyframes pulse {\n    0%,\n    100% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n  }\n"]);return A=function(){return t},t}function _(){var t=Object(f.a)(["\n  ","\n  animation: ping 0.5s cubic-bezier(0, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n\n  @keyframes ping {\n    0% {\n      transform: scale(1);\n      opacity: 1;\n    }\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n"]);return _=function(){return t},t}var M=n(57),H=new Audio(M),P=(new(0,window.AudioContext),Object(m.a)(_(),{pointerEvents:"none",position:"absolute",width:"100%",height:"100%"})),G=Object(m.a)(A()),U={width:"100%",height:"100%",fontSize:"1.25rem",transitionProperty:"background-color, border-color, color, fill, stroke",transitionDuration:"300ms",borderRadius:"0.25rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},D=function(t,e){return Object(m.a)(N(),U,{"--bg-opacity":"1",backgroundColor:"rgba(66, 153, 225, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(99, 179, 237, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(66, 153, 225, var(--border-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"700",borderBottomWidth:"4px","--border-opacity":"1",borderColor:"rgba(43, 108, 176, var(--border-opacity))"},t&&P,e&&G)},X=function(t,e){return Object(m.a)(L(),U,{"--bg-opacity":"1",backgroundColor:"rgba(237, 137, 54, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(246, 173, 85, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(237, 137, 54, var(--border-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",borderBottomWidth:"4px","--border-opacity":"1",borderColor:"rgba(192, 86, 33, var(--border-opacity))"},t&&P,e&&G)},Z=function(t,e){return Object(m.a)(R(),{height:"100%",width:"100%"},e?null:{animation:"bounce 1s infinite","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",cursor:"pointer"},t%2===1?D():X())},Y=Object(m.a)(I(),U,{"--bg-opacity":"1",backgroundColor:"rgba(160, 174, 192, var(--bg-opacity))","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"700",borderBottomWidth:"4px","--border-opacity":"1",borderColor:"rgba(160, 174, 192, var(--border-opacity))",":hover":{"--border-opacity":"1",borderColor:"rgba(160, 174, 192, var(--border-opacity))"},transitionProperty:"background-color, border-color, color, fill, stroke",transitionDuration:"300ms",borderRadius:"0.25rem",cursor:"pointer"}),F=function(t){var e=t.ping,n=t.pulse;return Object(m.b)("div",{css:X(!1,n)},e&&Object(m.b)("div",{css:X(e)}))},V=function(t){var e=t.ping,n=t.pulse,r=t.style;return Object(m.b)("div",{css:D(!1,n),style:r},e&&Object(m.b)("div",{css:D(e)}))},J=function(t){var e=t.turn,n=t.hasWinner,r=t.onClick;return Object(m.b)("div",{css:Z(e,!!n)},Object(m.b)("button",{css:Y,type:"button",onClick:function(){H.play(),!n&&r&&r()}}))};function $(){var t=Object(f.a)(["\n          ","\n          width: 60px;\n          height: 60px;\n          left: 106px;\n          top: 24px;\n        "]);return $=function(){return t},t}function q(){var t=Object(f.a)(["\n          ","\n          width: 60px;\n          height: 60px;\n          left: 32px;\n          top: 20px;\n          transform: rotate(24deg);\n        "]);return q=function(){return t},t}function K(){var t=Object(f.a)(["\n          ","\n          width: 60px;\n          height: 60px;\n          left: -10px;\n          transform: rotate(-24deg);\n        "]);return K=function(){return t},t}function Q(){var t=Object(f.a)(["\n        ","\n        width: 320px;\n        height: 100px;\n        transform: scale(0.8);\n        transform-origin: center center;\n      "]);return Q=function(){return t},t}var tt,et=function(){return Object(m.b)("div",{css:Object(m.a)(Q(),{position:"relative"})},Object(m.b)("div",{css:Object(m.a)(K(),{position:"absolute",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"})},Object(m.b)(F,null)),Object(m.b)("div",{css:Object(m.a)(q(),{position:"absolute",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"})},Object(m.b)(V,null)),Object(m.b)("div",{css:Object(m.a)($(),{position:"absolute",fontWeight:"300","--text-opacity":"1",color:"rgba(45, 55, 72, var(--text-opacity))",textAlign:"center",fontSize:"1.5rem"})},"React\xa0TicTacToe"))},nt={display:"flex",flexDirection:"column",width:"66.666667%","@media (min-width: 768px)":{width:"33.333333%"},"@media (min-width: 1280px)":{width:"16.666667%"}},rt={marginBottom:"0.75rem"};!function(t){t[t.MENU_NEW_GAME=1]="MENU_NEW_GAME",t[t.MENU_ABOUT=2]="MENU_ABOUT"}(tt||(tt={}));var ot=function(){var t=Object(b.f)(),e=function(e){switch(e){case tt.MENU_NEW_GAME:t.push("/newgame");break;case tt.MENU_ABOUT:t.push("/about");break;default:console.error("invalid menu selected")}};return Object(m.b)(W,null,Object(m.b)(C,null),Object(m.b)("div",{css:nt},Object(m.b)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem"}},Object(m.b)(et,null)),Object(m.b)(k,{css:rt,onClick:function(){return e(tt.MENU_NEW_GAME)}},"New Game"),Object(m.b)(k,{onClick:function(){return e(tt.MENU_ABOUT)}},"About")))},it=function(){var t=Object(b.f)(),e=Object(l.c)((function(t){return t.gridSize})),n=Object(l.c)((function(t){return t.winningSize})),r=Object(l.c)((function(t){return t.timeLimit})),o=Object(l.b)();return Object(m.b)(W,null,Object(m.b)(C,{leftButton:Object(m.b)(k,{size:"small",danger:!0,onClick:function(){return t.push("/")}},"Home")}),Object(m.b)("div",{css:{width:"100%",maxWidth:"20rem"}},Object(m.b)("form",{css:{"--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",borderRadius:"0.25rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"1.5rem",paddingBottom:"2rem",marginBottom:"1rem"}},Object(m.b)("div",{css:{marginBottom:"1rem"}},Object(m.b)("label",{css:{display:"block","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",fontSize:"0.875rem",fontWeight:"700",marginBottom:"0.5rem"},htmlFor:"username"},"Grid Size (max: 1000)"),Object(m.b)("input",{type:"number",css:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",appearance:"none",borderWidth:"1px",borderRadius:"0.25rem",width:"100%",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",lineHeight:"1.25",":focus":{outline:0,boxShadow:"0 0 0 3px rgba(66, 153, 225, 0.5)"}},id:"username",min:3,max:1e3,value:e,onChange:function(t){o({type:"SET_GRID_SIZE",payload:Number(t.currentTarget.value)})}})),Object(m.b)("div",{css:{marginBottom:"1rem"}},Object(m.b)("label",{css:{display:"block","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",fontSize:"0.875rem",fontWeight:"700",marginBottom:"0.5rem"},htmlFor:"password"},"Winning condition"),Object(m.b)("input",{css:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",appearance:"none",borderWidth:"1px",borderRadius:"0.25rem",width:"100%",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",marginBottom:"0.75rem",lineHeight:"1.25",":focus":{outline:0,boxShadow:"0 0 0 3px rgba(66, 153, 225, 0.5)"}},id:"password",type:"number",min:3,value:n,onChange:function(t){o({type:"SET_WINNING_SIZE",payload:Number(t.currentTarget.value)})},max:e})),Object(m.b)("div",{css:{marginBottom:"1rem"}},Object(m.b)("label",{css:{display:"block","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",fontSize:"0.875rem",fontWeight:"700",marginBottom:"0.5rem"},htmlFor:"password"},"Time limit each turn"),Object(m.b)("input",{css:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",appearance:"none",borderWidth:"1px",borderRadius:"0.25rem",width:"100%",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem","--text-opacity":"1",color:"rgba(74, 85, 104, var(--text-opacity))",marginBottom:"0.75rem",lineHeight:"1.25",":focus":{outline:0,boxShadow:"0 0 0 3px rgba(66, 153, 225, 0.5)"}},id:"password",type:"number",min:5,value:r,onChange:function(t){o({type:"SET_TIME_LIMIT",payload:Number(t.currentTarget.value)})}})),Object(m.b)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center"}},Object(m.b)("div",{css:{marginTop:"2rem"}},Object(m.b)(k,{onClick:function(){return t.push("/game")}},"Play"))))))},at=n(38);function ct(){var t=Object(f.a)(["\n  ","\n  width: calc(55px * ",");\n  max-width: 100vh;\n  flex: '1 1 auto';\n"]);return ct=function(){return t},t}function bt(){var t=Object(f.a)(["\n    ","\n    ","\n    animation: ping 0.5s cubic-bezier(0, 0, 0.2, 1);\n    animation-fill-mode: forwards;\n\n    @keyframes ping {\n      0% {\n        transform: scale(1);\n        opacity: 1;\n      }\n      75%,\n      100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n  "]);return bt=function(){return t},t}var lt,st=function(){return Object(m.a)(bt(),{pointerEvents:"none","--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",borderRadius:"9999px"},{position:"absolute",width:"16rem",height:"16rem"})},dt=function(t){return Object(m.a)(ct(),{paddingBottom:"2rem"},t)},ut=function(t){var e=t.gameBoard,n=t.hasWinner,r=t.onEmptyPawnclick,o=t.turn,i=void 0===o?0:o,a=e.length,c=function(t,e){if(n){var r=n.positions;if(n.winner)for(var o=0;o<r.length;o+=1)if(r[o][0]===t&&r[o][1]===e)return!0}return!1},b=function(t){var o=t.columnIndex,a=t.key,b=t.rowIndex,l=t.style,s=e[b][o];return"x"===s?Object(m.b)("div",{key:a,css:{padding:"0.25rem"},style:l},Object(m.b)(V,{ping:!0,pulse:c(b,o)})):"o"===s?Object(m.b)("div",{key:a,css:{padding:"0.25rem"},style:l},Object(m.b)(F,{ping:!0,pulse:c(b,o)})):Object(m.b)("div",{key:a,css:{padding:"0.25rem"},style:l},Object(m.b)(J,{hasWinner:!!n&&!!n.winner,turn:i,onClick:function(){(null===n||void 0===n?void 0:n.winner)||r&&r(b,o)}}))};return Object(m.b)("div",{css:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},(null===n||void 0===n?void 0:n.winner)&&Object(m.b)("div",{css:st}),Object(m.b)("div",{css:dt(a),className:"gameContainerx"},Object(m.b)(at.a,null,(function(t){var n=t.width,r=t.height;return Object(m.b)(at.b,{cellRenderer:b,columnWidth:55,columnCount:e.length,height:r,css:{outline:0},rowHeight:55,rowCount:e.length,width:n})}))))},pt=o.a.memo((function(t){var e=t.tictactoe,n=t.onEmptyHolderClick,r=e.gameBoard,o=e.setPawn,i=e.winner,a=e.turn;return Object(m.b)(ut,{hasWinner:i,gameBoard:r,onEmptyPawnclick:function(t,e){o(t,e),n&&n(t,e)},turn:a})}),(function(t,e){return!(t.tictactoe.gameBoard!==e.tictactoe.gameBoard||t.tictactoe.turn!==e.tictactoe.turn)})),mt=n(25),gt=n(21),ft=function(t){return Array(t).fill(null).map((function(){return Array(t).fill("")}))};!function(t){t[t.VERTICAL=1]="VERTICAL",t[t.HORIZONTAL=2]="HORIZONTAL"}(lt||(lt={}));var ht=function(t,e,n){for(var r=0;r<t.length;r+=1)for(var o=0,i=0,a="",c=[],b=0;b<t.length;b+=1){var l=e===lt.HORIZONTAL?t[r][b]:t[b][r],s=e===lt.HORIZONTAL?[r,b]:[b,r];if(""===l&&(o=0,i=0,a="",c=[]),"x"===l&&"x"===a&&(o+=1,c.push(s)),"x"===l&&"x"!==a&&(o=1,i=0,a="x",(c=[]).push(s)),"o"===l&&"o"===a&&(i+=1,c.push(s)),"o"===l&&"o"!==a&&(o=0,i=1,a="o",(c=[]).push(s)),o===n)return{winner:"x",positions:c};if(i===n)return{winner:"o",positions:c}}return{winner:null,positions:[]}},vt=function(t,e){var n=ht(t,lt.HORIZONTAL,e);return n.winner||(n=ht(t,lt.VERTICAL,e)).winner||(n=function(t,e){for(var n=t.length-1;n>=0;n-=1)for(var r=0,o=0,i="",a=[],c=0;c<t.length-n;c+=1){var b=t[n+c][c],l=[n+c,c];if(""===b&&(r=0,o=0,i="",a=[]),"x"===b&&"x"===i&&(r+=1,a.push(l)),"x"===b&&"x"!==i&&(r=1,o=0,i="x",(a=[]).push(l)),"o"===b&&"o"===i&&(o+=1,a.push(l)),"o"===b&&"o"!==i&&(r=0,o=1,i="o",(a=[]).push(l)),r===e)return{winner:"x",positions:a};if(o===e)return{winner:"o",positions:a}}for(var s=0;s<t.length-1;s+=1)for(var d=0,u=0,p="",m=[],g=0;g<t.length-s-1;g+=1){var f=t[g][g+s+1],h=[g,g+s+1];if(""===f&&(d=0,u=0,m=[],p=""),"x"===f&&"x"===p&&(d+=1,m.push(h)),"x"===f&&"x"!==p&&(d=1,u=0,p="x",(m=[]).push(h)),"o"===f&&"o"===p&&(u+=1,m.push(h)),"o"===f&&"o"!==p&&(d=0,u=1,p="o",(m=[]).push(h)),d===e)return{winner:"x",positions:m};if(u===e)return{winner:"o",positions:m}}for(var v=0;v<t.length;v+=1)for(var x=0,y=0,O="",j=[],w=0;w<v+1;w+=1){var k=t[w][v-w],T=[w,v-w];if(""===k&&(x=0,y=0,O="",j=[]),"x"===k&&"x"===O&&(x+=1,j.push(T)),"x"===k&&"x"!==O&&(x=1,y=0,O="x",(j=[]).push(T)),"o"===k&&"o"===O&&(y+=1,j.push(T)),"o"===k&&"o"!==O&&(x=0,y=1,O="o",(j=[]).push(T)),x===e)return{winner:"x",positions:j};if(y===e)return{winner:"o",positions:j}}for(var C=1;C<t.length;C+=1)for(var z=0,S=0,E="",B=[],W=0;W<t.length-C;W+=1){var I=t[C+W][t.length-W-1],R=[C+W,t.length-W-1];if(""===I&&(z=0,S=0,E="",B=[]),"x"===I&&"x"===E&&(z+=1,B.push(R)),"x"===I&&"x"!==E&&(z=1,S=0,E="x",(B=[]).push(R)),"o"===I&&"o"===E&&(S+=1,B.push(R)),"o"===I&&"o"!==E&&(z=0,S=1,E="o",(B=[]).push(R)),z===e)return{winner:"x",positions:B};if(S===e)return{winner:"o",positions:B}}return{winner:null,positions:[]}}(t,e)).winner?n:function(t){for(var e=0;e<t.length;e+=1)for(var n=0;n<t[e].length;n+=1)if(""===t[e][n])return!1;return!0}(t)?{winner:"tie",positions:[]}:{winner:null,positions:[]}},xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=Object(r.useState)({winner:{winner:null,positions:[]},gameBoard:[],playerXScore:0,playerOScore:0,tie:0,turn:1}),o=Object(gt.a)(n,2),i=o[0],a=o[1];Object(r.useEffect)((function(){a(Object(s.a)({},i,{gameBoard:ft(t)}))}),[t]);var c=i.gameBoard,b=i.winner,l=i.playerXScore,d=i.playerOScore,u=i.turn,p=i.tie,m=function(t,n){c[t][n]=u%2?"x":"o",u+=1;var r=vt(c,e);r.winner&&(b=r,"o"===r.winner&&(d+=1),"x"===r.winner&&(l+=1),"tie"===r.winner&&(p+=1)),a(Object(s.a)({},i,{turn:u,gameBoard:Object(mt.a)(c),winner:b,tie:p,playerOScore:d,playerXScore:l}))},g=function(){c=ft(t),b={winner:null,positions:[]},a(Object(s.a)({},i,{gameBoard:c,winner:b}))},f=function(){a(Object(s.a)({},i,{turn:u+1}))};return{gameBoard:c,setPawn:m,playerXScore:l,playerOScore:d,tie:p,turn:u,winner:b,nextTurn:f,retryGame:g,getPlayerTurn:function(){return u%2===0?"o":"x"}}},yt=pt;yt.useTicTacToe=xt;var Ot=yt,jt=n(39),wt={"--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",position:"fixed",borderRadius:"0.5rem",overflow:"hidden",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))",display:"flex",flexDirection:"column",transitionProperty:"all",zIndex:"10",borderWidth:"1px","@media (min-width: 640px)":{maxWidth:"28rem",width:"100%"}},kt=function(t){var e=t.children,n=t.icon,o=t.visible,i=void 0!==o&&o,a=t.buttons,c=void 0===a?[]:a,b=Object(jt.b)((function(){return{top:i?"50px":"-200px"}})),l=Object(gt.a)(b,2),s=l[0],d=l[1];return Object(r.useEffect)((function(){d({top:i?"10px":"-200px"})}),[d,i]),Object(m.b)(jt.a.div,{style:s,css:wt},Object(m.b)("div",{css:{marginTop:"0.75rem",marginBottom:"0.75rem",paddingTop:"1.25rem",paddingBottom:"1rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",display:"flex",alignItems:"center",fontSize:"0.75rem","@media (min-width: 768px)":{fontSize:"1.125rem"}}},Object(m.b)("div",{css:{marginRight:"0.75rem"}},n),Object(m.b)("div",null,e)),Object(m.b)("hr",null),Object(m.b)("div",{css:{display:"flex",justifyContent:"flex-end",marginTop:"0.5rem",marginBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem"}},c))};function Tt(){var t=Object(f.a)(["\n  width: ","%;\n  ","\n"]);return Tt=function(){return t},t}var Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(m.a)(Tt(),t,{"--bg-opacity":"1",backgroundColor:"rgba(102, 126, 234, var(--bg-opacity))",height:"100%",borderRadius:"0.5rem",transitionProperty:"all",transitionDuration:"100ms"})},zt=function(t){var e=t.progress,n=void 0===e?0:e,r=Object(g.a)(t,["progress"]);return Object(m.b)("div",Object.assign({css:{width:"100%",height:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",borderWidth:"1px","--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))",borderRadius:"0.5rem"}},r),Object(m.b)("div",{css:Ct(n)}))},St=function(t){var e=t.scores,n=void 0===e?[]:e;return Object(m.b)("div",{css:{display:"flex",marginBottom:"1rem","--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",borderWidth:"1px",borderRadius:"0.25rem","@media (min-width: 768px)":{marginBottom:"2rem"}}},n.map((function(t){return Object(m.b)("div",{key:t.label,css:{paddingLeft:"0.5rem",paddingRight:"0.5rem",borderRightWidth:"1px",width:"6rem",display:"flex",padding:"0.5rem",flexDirection:"column",alignItems:"center"}},Object(m.b)("div",{css:{"--text-opacity":"1",color:"rgba(76, 81, 191, var(--text-opacity))",fontSize:"1.25rem",fontWeight:"700","@media (min-width: 768px)":{fontSize:"2.25rem"}}},t.score),Object(m.b)("div",{css:{"--text-opacity":"1",color:"rgba(113, 128, 150, var(--text-opacity))",fontWeight:"700",fontSize:"0.75rem"}},t.label))})))},Et=function(t){return o.a.createElement("svg",Object.assign({},t,{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mood-smile",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"12",cy:"12",r:"9"}),o.a.createElement("line",{x1:"9",y1:"10",x2:"9.01",y2:"10"}),o.a.createElement("line",{x1:"15",y1:"10",x2:"15.01",y2:"10"}),o.a.createElement("path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0"}))},Bt=function(t){return o.a.createElement("svg",Object.assign({},t,{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mood-suprised",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"12",cy:"12",r:"9"}),o.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),o.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}),o.a.createElement("circle",{cx:"12",cy:"15",r:"2"}))},Wt=function(t,e){var n=Object(r.useState)(!1),o=Object(gt.a)(n,2),i=o[0],a=o[1],c=Object(r.useState)(0),b=Object(gt.a)(c,2),l=b[0],s=b[1],d=Object(r.useState)(0),u=Object(gt.a)(d,2),p=u[0],m=u[1];Object(r.useEffect)((function(){var n=0;return i&&(n=window.setInterval((function(){s(l+1),m(Math.ceil(100/t*(l+1))),l+1>=t+1&&(a(!1),clearInterval(n),e&&e())}),1e3)),function(){clearInterval(n)}}),[l,t,i,e]);return{startTimer:function(){a(!0)},resetTimer:function(){s(0),m(0),a(!1)},progress:l,percentProgress:p}};function It(){var t=Object(f.a)(["\n  ","\n  animation: ping1 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  left: -6px;\n  top: -30px;\n  @keyframes ping1 {\n    0% {\n      transform: scale(1);\n      opacity: 1;\n    }\n    100% {\n      transform: scale(1.6);\n      opacity: 0;\n    }\n  }\n"]);return It=function(){return t},t}var Rt=Ot.useTicTacToe,Lt=n(68),Nt=n(69),At=Object(m.a)(It(),{position:"absolute"}),_t=new Audio(Nt),Mt=new Audio(Lt),Ht=function(){var t=Object(l.c)((function(t){return t.gridSize})),e=Object(l.c)((function(t){return t.winningSize})),n=Object(l.c)((function(t){return t.timeLimit})),i=Object(b.f)(),a=Rt(t,e),c=a.winner,s=a.retryGame,d=a.playerOScore,u=a.playerXScore,p=a.tie,g=a.nextTurn,f=Wt(n,(function(){_t.play(),f.resetTimer(),f.startTimer(),g()})),h=function(){f.resetTimer(),f.startTimer()};Object(r.useEffect)((function(){f.startTimer()}),[]),Object(r.useEffect)((function(){c.winner&&(f.resetTimer(),Mt.play())}),[c.winner]);var v=[Object(m.b)(k,{size:"small",key:"retry",type:"button",onClick:function(){s(),f.resetTimer(),f.startTimer()}},"Retry"),Object(m.b)(k,{css:{marginLeft:"1rem"},size:"small",key:"home",type:"button",danger:!0,onClick:function(){i.push("/")}},"Back to home")],x=o.a.useMemo((function(){return Object(m.b)(Ot,{tictactoe:a,onEmptyHolderClick:h})}),[a,h]);return Object(m.b)(W,null,Object(m.b)(kt,{visible:!!c.winner,buttons:v,icon:"tie"===c.winner?Object(m.b)(Bt,null):Object(m.b)(Et,null)},"tie"===c.winner?"Uh oh, the game is tie!":Object(m.b)("div",{css:{display:"flex",alignItems:"center"}},Object(m.b)("div",null,"Congratulations, the winner is\xa0",Object(m.b)("div",{css:{width:"3rem",height:"2rem",display:"inline-block",verticalAlign:"middle"}},"x"===c.winner?Object(m.b)(V,null):Object(m.b)(F,null))))),Object(m.b)(C,{leftButton:Object(m.b)(k,{size:"small",danger:!0,onClick:function(){return i.push("/")}},"Home")}),Object(m.b)(St,{scores:[{label:"Scored by X",score:u},{label:"Tie",score:p},{label:"Scored by O",score:d}]}),Object(m.b)("div",{css:{width:"100%",padding:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (min-width: 768px)":{width:"66.666667%"},"@media (min-width: 1024px)":{width:"50%"}}},Object(m.b)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem",position:"relative",width:"100%"}},c.winner?null:Object(m.b)("div",{css:[At,{width:"4rem",marginRight:"1rem",height:"3rem",position:"absolute"}]},"Hurry\xa0up!","x"===a.getPlayerTurn()?Object(m.b)(V,null):Object(m.b)(F,null)),Object(m.b)("div",{css:{width:"4rem",marginRight:"1rem",height:"3rem"}},"x"===a.getPlayerTurn()?Object(m.b)(V,null):Object(m.b)(F,null)),Object(m.b)("div",{css:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},Object(m.b)(zt,{progress:f.percentProgress})))),x)},Pt=function(){var t=Object(b.f)();return Object(m.b)(W,null,Object(m.b)(C,{leftButton:Object(m.b)(k,{size:"small",danger:!0,onClick:function(){return t.push("/")}},"Home")}),Object(m.b)("p",null,"Made by Tony Song"),Object(m.b)("p",null,Object(m.b)("a",{css:{"--text-opacity":"1",color:"rgba(66, 153, 225, var(--text-opacity))",textDecoration:"underline"},href:"https://github.com/tonywei92"},"Github")))},Gt=function(){var t=Object(b.f)();return Object(m.b)(W,null,Object(m.b)(C,{leftButton:Object(m.b)(k,{size:"small",danger:!0,onClick:function(){return t.push("/")}},"Home")}),Object(m.b)("svg",{id:"Capa_1",enableBackground:"new 0 0 497 497",height:"128",viewBox:"0 0 497 497",width:"128",xmlns:"http://www.w3.org/2000/svg"},Object(m.b)("path",{d:"m472.619 411.013v-260.785c0-12.965-10.511-23.476-23.476-23.476h-400.286c-12.965 0-23.476 10.51-23.476 23.476v260.786l223.119 40z",fill:"#26a6fe"}),Object(m.b)("path",{d:"m449.143 126.752h-30c12.965 0 23.476 10.51 23.476 23.476v260.786h30v-260.786c0-12.965-10.511-23.476-23.476-23.476z",fill:"#0593fc"}),Object(m.b)("path",{d:"m60.381 411.013v-235.987c0-7.331 5.943-13.274 13.274-13.274h349.69c7.331 0 13.274 5.943 13.274 13.274v235.987l-186.659 40z",fill:"#fff3ef"}),Object(m.b)("path",{d:"m423.345 161.752h-30c7.331 0 13.274 5.943 13.274 13.274v235.987h30v-235.987c0-7.331-5.943-13.274-13.274-13.274z",fill:"#f1f0f0"}),Object(m.b)("path",{d:"m481.946 460.847h-466.892c-8.314 0-15.054-6.74-15.054-15.054v-22.287c0-6.916 5.606-12.522 12.522-12.522h174.271l63.706 13 59.707-13h174.271c6.916 0 12.522 5.606 12.522 12.522v22.287c.001 8.314-6.739 15.054-15.053 15.054z",fill:"#0593fc"}),Object(m.b)("path",{d:"m484.478 410.984h-30c6.916 0 12.522 5.606 12.522 12.522v22.287c0 8.314-6.74 15.054-15.054 15.054h30c8.314 0 15.054-6.74 15.054-15.054v-22.287c0-6.915-5.606-12.522-12.522-12.522z",fill:"#0172fb"}),Object(m.b)("path",{d:"m285.275 435.916h-73.55c-13.769 0-24.932-11.162-24.932-24.932h123.413c.001 13.769-11.162 24.932-24.931 24.932z",fill:"#0473ce"}),Object(m.b)("path",{d:"m247.145 36.153c-64.97 0-117.639 52.669-117.639 117.639v54.912c0 15.467 12.538 28.005 28.005 28.005h56.035l23.834 53.282c4.34 7.517 15.189 7.517 19.529 0l23.834-53.282h56.035c15.467 0 28.005-12.538 28.005-28.005v-54.911c.001-64.971-52.667-117.64-117.638-117.64z",fill:"#fd6930"}),Object(m.b)("path",{d:"m247.145 36.153c-5.082 0-10.088.323-15 .948 57.887 7.367 102.639 56.803 102.639 116.692v54.911c0 15.467-12.539 28.005-28.005 28.005h30c15.467 0 28.005-12.539 28.005-28.005v-54.911c0-64.971-52.668-117.64-117.639-117.64z",fill:"#fd5426"}),Object(m.b)("g",{fill:"#fff3ef"},Object(m.b)("path",{d:"m185.107 173.139h-21.67c-2.686 0-4.815-1.76-4.815-5.001 0-.741.186-1.76.74-2.778l21.393-41.95c1.389-2.686 3.704-3.705 6.02-3.705 2.5 0 7.223 2.13 7.223 5.464 0 .556-.185 1.111-.463 1.759l-16.392 32.875h7.965v-6.482c0-3.056 3.611-4.352 7.223-4.352s7.224 1.296 7.224 4.352v6.482h3.982c2.964 0 4.445 3.334 4.445 6.668 0 3.333-2.223 6.667-4.445 6.667h-3.982v9.816c0 2.964-3.611 4.445-7.224 4.445-3.611 0-7.223-1.482-7.223-4.445v-9.815z"}),Object(m.b)("path",{d:"m192.33 187.525c-3.539 0-7.348-1.43-7.348-4.57v-9.691h-21.545c-2.955 0-4.94-2.059-4.94-5.126 0-.542.098-1.631.756-2.838l21.391-41.947c1.258-2.433 3.436-3.773 6.131-3.773 2.523 0 7.348 2.176 7.348 5.589 0 .622-.228 1.237-.473 1.809l-16.305 32.701h7.638v-6.357c0-2.066 1.925-4.477 7.348-4.477 5.424 0 7.349 2.412 7.349 4.477v6.357h3.857c2.201 0 4.57 2.126 4.57 6.793 0 3.428-2.264 6.792-4.57 6.792h-3.857v9.691c-.001 3.14-3.811 4.57-7.35 4.57zm-5.556-67.695c-2.598 0-4.695 1.291-5.908 3.637l-21.393 41.949c-.633 1.162-.727 2.204-.727 2.722 0 2.962 1.841 4.876 4.69 4.876h21.795v9.941c0 2.081 2.221 4.32 7.098 4.32s7.099-2.24 7.099-4.32v-9.941h4.107c2.14 0 4.32-3.302 4.32-6.542 0-3.151-1.352-6.543-4.32-6.543h-4.107v-6.607c0-3.12-3.824-4.227-7.099-4.227-3.274 0-7.098 1.107-7.098 4.227v6.607h-8.292l.09-.181 16.392-32.875c.232-.541.45-1.127.45-1.704.001-3.26-4.659-5.339-7.097-5.339z"}),Object(m.b)("path",{d:"m222.424 166.101v-24.54c0-15.928 9.909-21.855 22.689-21.855 12.779 0 22.781 5.927 22.781 21.855v24.54c0 15.928-10.002 21.855-22.781 21.855-12.78 0-22.689-5.927-22.689-21.855zm31.023-24.541c0-6.39-3.148-9.26-8.335-9.26-5.186 0-8.242 2.871-8.242 9.26v24.54c0 6.39 3.057 9.261 8.242 9.261 5.186 0 8.335-2.871 8.335-9.261zm-3.612 12.317c0 2.778-1.759 4.723-4.63 4.723-2.963 0-4.723-1.945-4.723-4.723 0-2.871 1.76-4.63 4.723-4.63 2.871 0 4.63 1.759 4.63 4.63z"}),Object(m.b)("path",{d:"m245.112 188.081c-6.881 0-12.337-1.677-16.218-4.984-4.377-3.73-6.596-9.448-6.596-16.996v-24.54c0-7.547 2.219-13.266 6.596-16.996 3.881-3.308 9.337-4.984 16.218-4.984 14.771 0 22.906 7.806 22.906 21.98v24.54c.001 14.174-8.134 21.98-22.906 21.98zm0-68.251c-6.819 0-12.222 1.657-16.056 4.924-4.318 3.681-6.508 9.335-6.508 16.806v24.54c0 7.471 2.189 13.125 6.508 16.806 3.834 3.268 9.236 4.924 16.056 4.924 6.828 0 12.246-1.657 16.102-4.925 4.35-3.686 6.555-9.34 6.555-16.805v-24.54c0-7.465-2.205-13.12-6.555-16.805-3.856-3.268-9.274-4.925-16.102-4.925zm0 55.657c-5.474 0-8.367-3.246-8.367-9.386v-24.54c0-6.14 2.894-9.385 8.367-9.385 5.534 0 8.46 3.246 8.46 9.385v24.54c0 6.14-2.926 9.386-8.46 9.386zm0-43.062c-5.386 0-8.117 3.074-8.117 9.135v24.54c0 6.062 2.731 9.136 8.117 9.136 5.371 0 8.21-3.159 8.21-9.136v-24.54c0-5.976-2.839-9.135-8.21-9.135zm.093 26.3c-2.945 0-4.848-1.903-4.848-4.848 0-2.978 1.813-4.755 4.848-4.755 2.933 0 4.755 1.822 4.755 4.755 0 2.945-1.866 4.848-4.755 4.848zm0-9.353c-2.879 0-4.598 1.684-4.598 4.505 0 2.794 1.805 4.598 4.598 4.598 2.736 0 4.505-1.805 4.505-4.598 0-2.821-1.684-4.505-4.505-4.505z"}),Object(m.b)("path",{d:"m308.636 173.139h-21.67c-2.685 0-4.815-1.76-4.815-5.001 0-.741.186-1.76.74-2.778l21.393-41.95c1.389-2.686 3.704-3.705 6.02-3.705 2.5 0 7.223 2.13 7.223 5.464 0 .556-.185 1.111-.463 1.759l-16.392 32.875h7.965v-6.482c0-3.056 3.611-4.352 7.223-4.352s7.224 1.296 7.224 4.352v6.482h3.983c2.963 0 4.444 3.334 4.444 6.668 0 3.333-2.223 6.667-4.444 6.667h-3.983v9.816c0 2.964-3.611 4.445-7.224 4.445-3.611 0-7.223-1.482-7.223-4.445v-9.815z"}),Object(m.b)("path",{d:"m315.858 187.525c-3.539 0-7.348-1.43-7.348-4.57v-9.691h-21.545c-2.955 0-4.94-2.059-4.94-5.126 0-.542.099-1.631.756-2.838l21.391-41.947c1.258-2.433 3.435-3.773 6.131-3.773 2.522 0 7.348 2.176 7.348 5.589 0 .622-.227 1.237-.473 1.809l-16.305 32.701h7.638v-6.357c0-2.066 1.925-4.477 7.348-4.477 5.424 0 7.349 2.412 7.349 4.477v6.357h3.858c2.201 0 4.569 2.126 4.569 6.793 0 3.428-2.264 6.792-4.569 6.792h-3.858v9.691c-.001 3.14-3.811 4.57-7.35 4.57zm-5.555-67.695c-2.598 0-4.695 1.291-5.908 3.637l-21.392 41.949c-.633 1.162-.727 2.204-.727 2.722 0 2.962 1.841 4.876 4.69 4.876h21.795v9.941c0 2.081 2.221 4.32 7.098 4.32s7.099-2.24 7.099-4.32v-9.941h4.108c2.14 0 4.319-3.302 4.319-6.542 0-3.151-1.352-6.543-4.319-6.543h-4.108v-6.607c0-3.12-3.824-4.227-7.099-4.227-3.274 0-7.098 1.107-7.098 4.227v6.607h-8.292l.09-.181 16.392-32.875c.232-.541.45-1.127.45-1.704-.001-3.26-4.661-5.339-7.098-5.339z"})),Object(m.b)("path",{d:"m361.455 338.1h-31.483l-1.957-4.091 1.872-3.757h31.728c2.401 0 4.658-1.15 6.069-3.094 1.411-1.943 1.806-4.445 1.061-6.729-5.864-18.005-22.529-30.102-41.469-30.102-15.969 0-30.406 8.602-38.057 22.295h-77.439c-7.65-13.694-22.088-22.295-38.057-22.295-18.94 0-35.605 12.097-41.47 30.103-.743 2.284-.349 4.785 1.063 6.729 1.411 1.943 3.668 3.094 6.069 3.094h31.728l1.872 3.757-1.957 4.091h-31.483c-2.42 0-4.691 1.168-6.1 3.136-1.408 1.968-1.78 4.495-.999 6.785 6.024 17.665 22.612 29.535 41.277 29.535 16.293 0 30.857-8.844 38.399-22.923h76.754c7.542 14.079 22.106 22.923 38.399 22.923 18.665 0 35.253-11.869 41.277-29.535.781-2.29.409-4.817-.999-6.785-1.406-1.969-3.678-3.137-6.098-3.137z",fill:"#c5d3dd"})),Object(m.b)("p",{css:{fontWeight:"700"}},"We can't find the page you're looking"))},Ut=(n(70),function(){return o.a.createElement(l.a,{store:p},o.a.createElement(c.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",exact:!0,component:ot}),o.a.createElement(b.a,{path:"/newgame",exact:!0,component:it}),o.a.createElement(b.a,{path:"/game",exact:!0,component:Ht}),o.a.createElement(b.a,{path:"/about",exact:!0,component:Pt}),o.a.createElement(b.a,{path:"/*",exact:!0,component:Gt}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ut,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.dacd1bd6.chunk.js.map