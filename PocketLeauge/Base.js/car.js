class Car {
    constructor(x,y,width,height){
       var options = {
           isStatic: false,
       } 
     
       this.body = Bodies.rectangle(x,y,23,options);

       World.add(world,this.body);
    }

      display() {
          push();
          var pos = this.body.position;
          translate(pos.x,pos.y);
          pop();
      }
}