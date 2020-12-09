class Paper{
    constructor(x,y){
    
        var options = {
           isStatic:false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
        }
        Matter.Bodies.circle(x, y, radius,options)
        this.radius = 10;
        World.add(world,this.body)
    }
    display(){
    
    var pos = this.body.position;
    pos.x = 150;
    pos.y = 640;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER)
    strokeWeight(3)
    stroke("white")
    fill("blue")
    
    pop()
    }
    }