class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        console.log(this.body);
        this.w = width;
        this.h = height;
        

    }

    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       fill("red");
       rectMode(CENTER);
       rect(0,0,this.w,this.h);
       pop();

       

    }

    

}