class Box extends BaseClass {
  constructor(x, y){
    super(x,y,40,40);
    this.image = loadImage("sprites/box.png");
    this.visibility = 255;
  }
display(){

  console.log(this.body.speed);

  if(this.body.speed < 5){
   
    super.display();
    //this.visibility = this.visibility 

  }else{
    World.remove(world, this.body); 
    push();
    this.visibility = this.visibility - 50;
    tint(255, this.visibility);
    image(this.image,this.body.position.x,this.body.position.y, 50, 50);
    pop();
  }

}


};