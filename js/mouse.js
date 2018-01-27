function pointerFns(downFn, moveFn, upFn, preventDefault = false) {
  function getPointerPos(event) {
    if (event.type.slice(0, 5) === "touch") return [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    else return [event.clientX, event.clientY];
  }
  function pointerDown(e) {
    downFn();
    moveFn(...getPointerPos(e));
    if (preventDefault) e.preventDefault();
  }
  function pointerMove(e) {
    moveFn(...getPointerPos(e));
    if (preventDefault) e.preventDefault();
  }
  function pointerUp(e) {
    moveFn(...getPointerPos(e));
    upFn();
    if (preventDefault) e.preventDefault();
  }
  document.addEventListener("mousedown", pointerDown, false);
  document.addEventListener("touchstart", pointerDown, preventDefault ? {passive: false} : false);
  document.addEventListener("mousemove", pointerMove, false);
  document.addEventListener("touchmove", pointerMove, preventDefault ? {passive: false} : false);
  document.addEventListener("mouseup", pointerUp, false);
  document.addEventListener("touchend", pointerUp, preventDefault ? {passive: false} : false);
}
