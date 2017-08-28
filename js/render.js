var images=[],scroll=0,torender=[];
function image(path) {
  if (!images[path]) {
    images[path]=new Image();
    images[path].src=path;
  }
  return images[path];
}
function draw() {
  if (keys[37]) scroll-=3;
  if (keys[39]) scroll+=3;
  var grad;
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
  c.fillStyle='#7db5af';
  c.fillRect(0,0,window.innerWidth,window.innerHeight);
  c.fillStyle='#66a662';
  c.fillRect(0,window.innerHeight-100,window.innerWidth,100);
  grad=c.createLinearGradient(0,window.innerHeight-30,0,window.innerHeight);
  grad.addColorStop(0,'#d9d9d9');
  grad.addColorStop(1,'#c4c4c4');
  c.fillStyle=grad;
  c.fillRect(0,window.innerHeight-30,window.innerWidth,30);
  c.strokeStyle='#737373';
  c.strokeWidth=2;
  c.beginPath();
  c.moveTo(0,window.innerHeight-30);
  c.lineTo(window.innerWidth,window.innerHeight-30);
  c.stroke();
  for (var being of torender) {
    var t=being.render(new Date());
    if (t.image) c.drawImage(...t.image);
  }
}
