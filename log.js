class Log {


    constructor(x,y,h, angle){
    
        var options1 = {
    
            restitution:1,
            density : 0.1,
            friction:0.5
           
           }
     
           this.body= Matter.Bodies.rectangle(x,y,20,h,options1)
             Matter.World.add(myWorld, this.body);
             this.w  = 20;
             this.h =  h;
             Matter.Body.setAngle(this.body, angle)
    
    }
    
    
    
    display(){
    
        var angle  = this.body.angle;
        push ();
        fill("blue")
        translate (this.body.position.x, this.body.position.y)
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop ();
    }
    
    
    }