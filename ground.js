class Ground{
constructor(){
 var ground = {
isStatic:true, density: 1, friction: 0.5
 };
 this.groundbody = Matter.Bodies.rectangle(400,380,800,20,ground);
 this.width = 800;
this.height = 20;
 World.add(gameWorld,this.groundbody);
}
display(){
    rectMode(CENTER);
    rect(this.groundbody.position.x,this.groundbody.position.y,this.width,this.height);
}
}