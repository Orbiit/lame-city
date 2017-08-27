var mouse={down:false,x:0,y:0},keys={};
window.addEventListener("load",e=>{
  document.addEventListener("mousedown",e=>{
    mouse.down=true,
    mouse.x=e.clientX,
    mouse.y=e.clientY;
  },false);
  document.addEventListener("mousemove",e=>{
    mouse.x=e.clientX,
    mouse.y=e.clientY;
  },false);
  document.addEventListener("mouseup",e=>{
    mouse.down=false,
    mouse.x=e.clientX,
    mouse.y=e.clientY;
  },false);
  document.addEventListener("keydown",e=>{
    keys[e.keyCode]=true;
    if (e.ctrlKey||e.metalKey) keys.ctrl=true;
    if (e.altKey) keys.alt=true;
    if (e.shiftKey) keys.shift=true;
  },false);
  document.addEventListener("keydown",e=>{
    keys[e.keyCode]=false;
    if (!(e.ctrlKey||e.metalKey)) keys.ctrl=false;
    if (!e.altKey) keys.alt=false;
    if (!e.shiftKey) keys.shift=false;
  },false);
},false);
