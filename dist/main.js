(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{T:()=>o});const t=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Caps Lock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","ArrowUp","Shift","Ctrl","Win","Alt","Space","Alt","Ctrl","ArrowLeft","ArrowLeftDown","ArrowRight","Del"];class i{constructor(e,t,i){this.keycode=e,this.keyLetter=t,this.number=i,this.button=document.createElement("button"),this.button.classList.add("key"),"ControlLeft"===e||"ControlRight"===e||"AltLeft"===e||"AltRight"===e||"MetaLeft"===e?this.button.classList.add("key-size-2"):"Tab"===e||"Backslash"===e?this.button.classList.add("key-size-3"):"Backspace"===e||"CapsLock"===e||"Enter"===e?this.button.classList.add("key-size-4"):"ShiftLeft"===e||"ShiftRight"===e?this.button.classList.add("key-size-5"):"Space"===e?this.button.classList.add("key-size-6"):this.button.classList.add("key-size-1"),this.button.innerHTML="ArrowUp"===e?"&#129045;":"ArrowLeft"===e?"&#129044;":"ArrowDown"===e?"&#129047;":"ArrowRight"===e?"&#129046;":"ShiftLeft"===e||"ShiftRight"===e?t+" &#8682;":"Enter"===e?e+" &#8626;":"Backspace"===e?e+" &#129044;":t,document.querySelector(".keyboard-div").append(this.button)}addKeyboardListener(){this.button.addEventListener("keydown",(()=>{console.log(this.button),this.button.classList.add("key_active")}))}removeKeyboardListener(){this.button.addEventListener("keyup",(()=>{console.log(this.button),this.button.classList.remove("key_active")}))}}(new class{constructor(){}create(){const e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e.classList.add("header-div"),t.classList.add("text-area-div"),i.classList.add("keyboard-div"),o.classList.add("footer-div"),document.body.append(e),document.body.append(t),document.body.append(i),document.body.append(o)}}).create();const o=[];["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight","Delete"].forEach(((e,s)=>{o[s]=new i(e,t[s],s),o[s].addKeyboardListener(),o[s].removeKeyboardListener()})),document.addEventListener("keydown",(()=>{if(event.isTrusted){let e;o.forEach((t=>{event.preventDefault(),t.keycode===event.code&&(e=t)})),e.button.classList.add("key_active")}})),document.addEventListener("keyup",(()=>{if(event.isTrusted){let e;o.forEach((t=>{t.keycode===event.code&&(e=t)})),e.button.classList.remove("key_active")}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9VLEdBQ3JCaEIsU0FBU2tCLEtBQUtaLE9BQU9XLE1EYm5CSixTQUVOLE1BQU1NLEVBQWEsR0RGRixDQUFDLFlBQWEsU0FBVSxTQUFVLFNBQVUsU0FBVSxTQUFVLFNBQVUsU0FBVSxTQUFVLFNBQVUsU0FDdkgsUUFBUyxRQUFTLFlBQWEsTUFBTyxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUM5RyxjQUFlLGVBQWdCLFlBQWEsV0FBWSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQ2hILE9BQVEsWUFBYSxRQUFTLFFBQVMsWUFBYSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLFFBQVMsU0FDckgsUUFBUyxVQUFXLGFBQWMsY0FBZSxXQUFZLFVBQVcsUUFBUyxXQUFZLGVBQWdCLFlBQzdHLFlBQWEsYUFBYyxVQ0RwQkMsU0FBUSxDQUFDekIsRUFBU0UsS0FDekJzQixFQUFXdEIsR0FBVSxJQUFJSixFQUFJRSxFQUFTSCxFQUFhSyxHQUFTQSxHQUM1RHNCLEVBQVd0QixHQUFRVSxzQkFDbkJZLEVBQVd0QixHQUFRYyw0QkVUbkJYLFNBQVNRLGlCQUFpQixXQUFXLEtBQ25DLEdBQUlhLE1BQU1DLFVBQVcsQ0FDbkIsSUFBSUMsRUFDSkosRUFBV0MsU0FBUUksSUFDakJILE1BQU1JLGlCQUNGRCxFQUFVN0IsVUFBWTBCLE1BQU1LLE9BQzlCSCxFQUFhQyxNQUdqQkQsRUFBV3hCLE9BQU9HLFVBQVVDLElBQUksa0JBSXBDSCxTQUFTUSxpQkFBaUIsU0FBUyxLQUNqQyxHQUFJYSxNQUFNQyxVQUFXLENBQ25CLElBQUlDLEVBQ0pKLEVBQVdDLFNBQVFJLElBQ2JBLEVBQVU3QixVQUFZMEIsTUFBTUssT0FDOUJILEVBQWFDLE1BR2pCRCxFQUFXeEIsT0FBT0csVUFBVVUsT0FBTyxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnB1Y2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwdWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnB1Y2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnB1Y2stZGVtby8uL3NyYy9jbGFzc2VzL2tleS5qcyIsIndlYnBhY2s6Ly93ZWJwdWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicHVjay1kZW1vLy4vc3JjL2NsYXNzZXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vd2VicHVjay1kZW1vLy4vc3JjL2NsYXNzZXMvZ2xvYmFsRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IHtcclxuICBrZXljb2RlcyxcclxuICBrZXlMZXR0ZXJzRW4sXHJcbiAgS2V5XHJcbn07XHJcblxyXG5jb25zdCBrZXljb2RlcyA9IFsnQmFja3F1b3RlJywgJ0RpZ2l0MScsICdEaWdpdDInLCAnRGlnaXQzJywgJ0RpZ2l0NCcsICdEaWdpdDUnLCAnRGlnaXQ2JywgJ0RpZ2l0NycsICdEaWdpdDgnLCAnRGlnaXQ5JywgJ0RpZ2l0MCcsXHJcbiAgJ01pbnVzJywgJ0VxdWFsJywgJ0JhY2tzcGFjZScsICdUYWInLCAnS2V5UScsICdLZXlXJywgJ0tleUUnLCAnS2V5UicsICdLZXlUJywgJ0tleVknLCAnS2V5VScsICdLZXlJJywgJ0tleU8nLCAnS2V5UCcsXHJcbiAgJ0JyYWNrZXRMZWZ0JywgJ0JyYWNrZXRSaWdodCcsICdCYWNrc2xhc2gnLCAnQ2Fwc0xvY2snLCAnS2V5QScsICdLZXlTJywgJ0tleUQnLCAnS2V5RicsICdLZXlHJywgJ0tleUgnLCAnS2V5SicsICdLZXlLJyxcclxuICAnS2V5TCcsICdTZW1pY29sb24nLCAnUXVvdGUnLCAnRW50ZXInLCAnU2hpZnRMZWZ0JywgJ0tleVonLCAnS2V5WCcsICdLZXlDJywgJ0tleVYnLCAnS2V5QicsICdLZXlOJywgJ0tleU0nLCAnQ29tbWEnLCAnUGVyaW9kJyxcclxuICAnU2xhc2gnLCAnQXJyb3dVcCcsICdTaGlmdFJpZ2h0JywgJ0NvbnRyb2xMZWZ0JywgJ01ldGFMZWZ0JywgJ0FsdExlZnQnLCAnU3BhY2UnLCAnQWx0UmlnaHQnLCAnQ29udHJvbFJpZ2h0JywgJ0Fycm93TGVmdCcsXHJcbiAgJ0Fycm93RG93bicsICdBcnJvd1JpZ2h0JywgJ0RlbGV0ZSddO1xyXG5jb25zdCBrZXlMZXR0ZXJzRW4gPSBbJ2AnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLCAnQmFja3NwYWNlJywgJ1RhYicsICdxJywgJ3cnLCAnZScsICdyJywgJ3QnLCAneScsXHJcbiAgJ3UnLCAnaScsICdvJywgJ3AnLCAnWycsICddJywgJ1xcXFwnLCAnQ2FwcyBMb2NrJywgJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJywgJzsnLCAnXFwnJywgJ0VudGVyJywgJ1NoaWZ0JyxcclxuICAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICcsJywgJy4nLCAnLycsICdBcnJvd1VwJywgJ1NoaWZ0JywgJ0N0cmwnLCAnV2luJywgJ0FsdCcsICdTcGFjZScsICdBbHQnLCAnQ3RybCcsICdBcnJvd0xlZnQnLFxyXG4gICdBcnJvd0xlZnREb3duJywgJ0Fycm93UmlnaHQnLCAnRGVsJ107XHJcblxyXG5jbGFzcyBLZXkge1xyXG4gIGNvbnN0cnVjdG9yKGtleWNvZGUsIGtleUxldHRlciwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLmtleWNvZGUgPSBrZXljb2RlO1xyXG4gICAgdGhpcy5rZXlMZXR0ZXIgPSBrZXlMZXR0ZXI7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXknKTtcclxuICAgIGlmIChrZXljb2RlID09PSAnQ29udHJvbExlZnQnIHx8IGtleWNvZGUgPT09ICdDb250cm9sUmlnaHQnIHx8IGtleWNvZGUgPT09ICdBbHRMZWZ0JyB8fCBrZXljb2RlID09PSAnQWx0UmlnaHQnIHx8IGtleWNvZGUgPT09ICdNZXRhTGVmdCcpIHtcclxuICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgna2V5LXNpemUtMicpO1xyXG4gICAgfSBlbHNlIGlmIChrZXljb2RlID09PSAnVGFiJyB8fCBrZXljb2RlID09PSAnQmFja3NsYXNoJykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXktc2l6ZS0zJyk7XHJcbiAgICB9IGVsc2UgaWYgKGtleWNvZGUgPT09ICdCYWNrc3BhY2UnIHx8IGtleWNvZGUgPT09ICdDYXBzTG9jaycgfHwga2V5Y29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXktc2l6ZS00Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGtleWNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGtleWNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXktc2l6ZS01Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGtleWNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgna2V5LXNpemUtNicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgna2V5LXNpemUtMScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleWNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSAnJiMxMjkwNDU7JztcclxuICAgIH0gZWxzZSBpZiAoa2V5Y29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gJyYjMTI5MDQ0Oyc7XHJcbiAgICB9IGVsc2UgaWYgKGtleWNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9ICcmIzEyOTA0NzsnO1xyXG4gICAgfSBlbHNlIGlmIChrZXljb2RlID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gJyYjMTI5MDQ2Oyc7XHJcbiAgICB9IGVsc2UgaWYgKGtleWNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGtleWNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSBrZXlMZXR0ZXIgKyAnICYjODY4MjsnO1xyXG4gICAgfSBlbHNlIGlmIChrZXljb2RlID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9IGtleWNvZGUgKyAnICYjODYyNjsnO1xyXG4gICAgfSBlbHNlIGlmIChrZXljb2RlID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSBrZXljb2RlICsgJyAmIzEyOTA0NDsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0ga2V5TGV0dGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5Ym9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtZGl2Jyk7XHJcbiAgICBrZXlib2FyZERpdi5hcHBlbmQodGhpcy5idXR0b24pO1xyXG4gIH1cclxuICBhZGRLZXlib2FyZExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5idXR0b24pO1xyXG4gICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXlfYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVtb3ZlS2V5Ym9hcmRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvbik7XHJcbiAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2tleV9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTsiLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL2NsYXNzZXMvZmllbGRcIjtcclxuaW1wb3J0IHsga2V5Y29kZXMsIGtleUxldHRlcnNFbiwgS2V5IH0gZnJvbSBcIi4vY2xhc3Nlcy9rZXlcIjtcclxuaW1wb3J0IHsgYWRkS2V5Ym9hcmRMaXN0ZW5lciB9IGZyb20gXCIuL2NsYXNzZXMvZ2xvYmFsRXZlbnRzXCI7XHJcblxyXG5jb25zdCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xyXG5cclxuZmllbGQuY3JlYXRlKCk7XHJcblxyXG5jb25zdCBidXR0b25zQXJyID0gW107XHJcblxyXG5rZXljb2Rlcy5mb3JFYWNoKChrZXljb2RlLCBudW1iZXIpID0+IHtcclxuICBidXR0b25zQXJyW251bWJlcl0gPSBuZXcgS2V5KGtleWNvZGUsIGtleUxldHRlcnNFbltudW1iZXJdLCBudW1iZXIpO1xyXG4gIGJ1dHRvbnNBcnJbbnVtYmVyXS5hZGRLZXlib2FyZExpc3RlbmVyKCk7IFxyXG4gIGJ1dHRvbnNBcnJbbnVtYmVyXS5yZW1vdmVLZXlib2FyZExpc3RlbmVyKCk7IFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGJ1dHRvbnNBcnIgfTtcclxuXHJcbiAgYWRkS2V5Ym9hcmRMaXN0ZW5lcigpOyIsImV4cG9ydCB7IEZpZWxkIH07XHJcblxyXG5jbGFzcyBGaWVsZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGV4dEFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGtleWJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWRpdicpO1xyXG4gICAgdGV4dEFyZWFEaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1hcmVhLWRpdicpO1xyXG4gICAga2V5Ym9hcmREaXYuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQtZGl2Jyk7XHJcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWRpdicpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlckRpdik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0ZXh0QXJlYURpdik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChrZXlib2FyZERpdik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXJEaXYpO1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IHsgYWRkS2V5Ym9hcmRMaXN0ZW5lciB9O1xyXG5pbXBvcnQgeyBidXR0b25zQXJyIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gYWRkS2V5Ym9hcmRMaXN0ZW5lcigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmlzVHJ1c3RlZCkge1xyXG4gICAgICBsZXQgdGhpc0J1dHRvbjtcclxuICAgICAgYnV0dG9uc0Fyci5mb3JFYWNoKGJ1dHRvbk9iaiA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoYnV0dG9uT2JqLmtleWNvZGUgPT09IGV2ZW50LmNvZGUpIHtcclxuICAgICAgICAgIHRoaXNCdXR0b24gPSBidXR0b25PYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpc0J1dHRvbi5idXR0b24uY2xhc3NMaXN0LmFkZCgna2V5X2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgIGlmIChldmVudC5pc1RydXN0ZWQpIHtcclxuICAgICAgbGV0IHRoaXNCdXR0b247XHJcbiAgICAgIGJ1dHRvbnNBcnIuZm9yRWFjaChidXR0b25PYmogPT4ge1xyXG4gICAgICAgIGlmIChidXR0b25PYmoua2V5Y29kZSA9PT0gZXZlbnQuY29kZSkge1xyXG4gICAgICAgICAgdGhpc0J1dHRvbiA9IGJ1dHRvbk9iajtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzQnV0dG9uLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdrZXlfYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJrZXlMZXR0ZXJzRW4iLCJLZXkiLCJjb25zdHJ1Y3RvciIsImtleWNvZGUiLCJrZXlMZXR0ZXIiLCJudW1iZXIiLCJ0aGlzIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsImFkZEtleWJvYXJkTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUtleWJvYXJkTGlzdGVuZXIiLCJyZW1vdmUiLCJjcmVhdGUiLCJoZWFkZXJEaXYiLCJ0ZXh0QXJlYURpdiIsImtleWJvYXJkRGl2IiwiZm9vdGVyRGl2IiwiYm9keSIsImJ1dHRvbnNBcnIiLCJmb3JFYWNoIiwiZXZlbnQiLCJpc1RydXN0ZWQiLCJ0aGlzQnV0dG9uIiwiYnV0dG9uT2JqIiwicHJldmVudERlZmF1bHQiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==