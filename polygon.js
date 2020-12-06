class polygon{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            friction:1,
            density:1.5,
            isStatic:false


        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("polygon.png")
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
       
    }
    display(){
       var pos=this.body.position
       push()
       translate(pos.x,pos.y)
       imageMode(CENTER)
       image(this.image,0,0,20,20)
       pop()
    }
}