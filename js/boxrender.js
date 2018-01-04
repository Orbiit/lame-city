const PERSPECTIVE = 1.018;

let canvas, c,
keys = {},
scroll = {
  x: 0,
  y: 0,
  xv: 0,
  yv: 0
},
buildings = [
  {x: 0, y: 0, height: 10, length: 100, width: 100},
  {x: -100, y: 0, height: 15, length: 200, width: 80}
];
function dilateRect(preX, preY, width, height, factor) {
  return [
    dilate(preX, innerWidth / 2, factor),
    dilate(preY, innerHeight / 2, factor),
    width * factor,
    height * factor
  ];
}
function dilate(pre, origin, factor) {
  return (pre - origin) * factor + origin;
}
function boringBuilding(x, y, height, length, width) {
  let scale = 1;
  for (let i = 0; i < height; i++, scale *= PERSPECTIVE) {
    c.fillStyle = i % 2 === 0 ? "#D6D6D6" : "#D6F6FF";
    c.fillRect(...dilateRect(x + scroll.x, y + scroll.y, length, width, scale));
  }
  c.fillStyle = "white";
  c.fillRect(...dilateRect(x + scroll.x, y + scroll.y, length, width, scale));
}
document.addEventListener("keydown", e => {keys[e.keyCode] = true;}, false);
document.addEventListener("keyup", e => {keys[e.keyCode] = false;}, false);
function draw() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.fillStyle = "#B3B3B3";
  c.fillRect(0, 0, innerWidth, innerHeight);
  if (keys[37]) scroll.xv += 1.5;
  if (keys[38]) scroll.yv += 1.5;
  if (keys[39]) scroll.xv -= 1.5;
  if (keys[40]) scroll.yv -= 1.5;
  scroll.x += scroll.xv;
  scroll.xv *= 0.9;
  scroll.y += scroll.yv;
  scroll.yv *= 0.9;
  let scale = 1;
  for (let layer = 0; true; layer++, scale *= PERSPECTIVE) {
    let drawn = 0;
    c.fillStyle = layer % 2 === 0 ? "#D6D6D6" : "#D6F6FF";
    for (let i = 0; i < buildings.length; i++) {
      if (layer < buildings[i].height) {
        c.fillRect(...dilateRect(
          buildings[i].x + scroll.x,
          buildings[i].y + scroll.y,
          buildings[i].length,
          buildings[i].width,
          scale
        ));
        drawn++;
      }
    }
    if (drawn === 0) break;
  }
  window.requestAnimationFrame(draw);
}
window.addEventListener("load", e => {
  canvas = document.querySelector('#CANVAS'),
  c = canvas.getContext('2d');
  draw();
}, false);
