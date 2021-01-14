class Ground {


    constructor(x,y,w,h){
    
        var options1 = {
    
          isStatic:true
           
           }
           
           this.body= Matter.Bodies.rectangle(x,y,w,h,options1)
             Matter.World.add(myWorld, this.body);
             this.w  = w;
             this.h =  h;
    
    }
    
    
    
    display(){
    
        var angle  = this.body.angle;
        push ();
       
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop ();
    }
    
    
    }