function draw() {
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
  c.fillStyle='#7db5af';
  c.fillRect(0,0,window.innerWidth,window.innerHeight);
  c.fillStyle='#66a662';
  c.fillRect(0,window.innerHeight-100,window.innerWidth,100);
  c.strokeStyle='#737373';
  c.beginPath();
  c.moveTo(0,window.innerHeight-30);
  c.lineTo(window.innerWidth,window.innerHeight-30);
  c.stroke();
}
