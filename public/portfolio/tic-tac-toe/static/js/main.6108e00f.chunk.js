(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(13),a(7));a(14);function i(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),r=n[0],c=n[1],o=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return e[r]}return null}var l=function(){return r.a.createElement("div",{className:"App"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(1),m=a(2),d=a(4),h=a(3);var v=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},n}return Object(m.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();i(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(v,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=i(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",null,r.a.createElement("div",{className:"status"},e),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(f,null)),r.a.createElement("button",{className:"replay-btn",onClick:function(){window.location.reload(!1)}},"Play again!")),r.a.createElement("button",{class:"back-btn",onClick:function(){return window.location.href="/portfolio/"}},r.a.createElement("p",null,"Back to Portfolio")))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),o.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6108e00f.chunk.js.map