class Box{
 constructor(x,y,width,height){
  var box_options = {
    restitution:1, density:1, friction:0.5
  }
  this.boxbody = Matter.Bodies.rectangle (x,y,width,height,box_options);
  this.width=width;
  this.height=height;
  World.add(gameWorld,this.boxbody);
 }
 display(){
push ()
 translate (this.boxbody.position.x,this.boxbody.position.y)
 rotate (this.boxbody.angle);
 rectMode(CENTER);
 fill ("blue");
 rect(0,0,this.width,this.height)
 pop ()
 }
}