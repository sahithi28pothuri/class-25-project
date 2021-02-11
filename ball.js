class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        fill("green"); 
       image(this.image,this.body.position.x,this.body.position.y,22,22);
        
    }
}