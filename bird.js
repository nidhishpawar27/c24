class Bird {


    constructor(x,y){
    
        var options1 = {
    
            restitution:1,
            density : 0.1,
            friction:0.5
           
           }
           
           this.body= Matter.Bodies.rectangle(x,y,50,50,options1)
             Matter.World.add(myWorld, this.body);
             this.w  = 50;
             this.h =  50;
    
    }
    
    
    
    display(){

        this.body.position.x  = mouseX;
        this.body.position.y = mouseY;
    
        var angle  = this.body.angle;
        push ();
        fill ("red")
        translate (this.body.position.x, this.body.position.y)
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop ();
    }
    
    
    }