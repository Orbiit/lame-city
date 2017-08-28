class NPC {
  constructor(texturePath) {
    this.texture=image(texturePath);
    this.x=Math.floor(Math.random()*100);
    this.left=!Math.floor(Math.random()*2);
  }
  render(time) {
    if (this.left) this.x-=0.1;
    else this.x+=0.1;
    if (Math.floor(Math.random()*500)===0) this.left=!this.left;
    return {
      image:[this.texture,0,this.left*64+Math.floor((time/100)%4)*16,16,16,this.x-scroll,window.innerHeight-116,16,16]
    };
  }
}
