class car
{
    constructor(weight,speed,color)
    {
     this.car=createSprite(50,100,50,50);
     this.car.shapeColor=color;
     this.car.velocityX=speed;
     this.car.width=50;
     this.car.height=50;
     this.car.x=50;
     this.car.y=100;
    }
   
    bounceoff(wall,car)
    {
        console.log(wall.x);
        console.log(this.car.x)
        if(wall.x-this.car.x<this.car.width/2+wall.width/2 
            && this.car.x-wall.x<this.car.width/2+wall.width/2 )
            {
               
                this.car.velocityX=0;
                this.car.shapeColor="blue";
            }
    }

}