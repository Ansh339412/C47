class Building{
    constructor(x,y,w,num){
        if(this.num!==100){
        this.x=x;
        this.y=y;
        this.w=w;
        this.height=450
        this.num=num;
        this.IMG=loadImage("building"+this.num+".jpg");
        }
    }

    img(){
        if(this.num!==100){
        push();
        imageMode(CENTER);
        image(this.IMG,this.x,this.y,this.w,this.height);
        pop();
        }
    }
    
}