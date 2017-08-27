var canvas,c,pixelRatio;
window.addEventListener("load",e=>{
  canvas=document.getElementById('canvas'),
  c=canvas.getContext('2d');
  var focus,
  pixelRatio=(window.devicePixelRatio||1)/(c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1);
  function resizeCanvas() {
    canvas.width=window.innerWidth*pixelRatio;
    canvas.height=window.innerHeight*pixelRatio;
    c.scale(pixelRatio,pixelRatio);
  }
  resizeCanvas();
  window.addEventListener("resize",resizeCanvas,false);
  window.addEventListener("blur",e=>{
    focus="REQUEST:STOP";
  },false);
  window.addEventListener("focus",e=>{
    focus="CURRENT:GO";
    window.requestAnimationFrame(main);
  },false);
  function main() {
    draw();
    if (focus==="REQUEST:STOP") focus="CURRENT:STOP";
    else window.requestAnimationFrame(main);
  }
  window.requestAnimationFrame(main);
},false);
