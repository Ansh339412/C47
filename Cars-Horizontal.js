class HCar{
    constructor(){
        this.posX=[-1220,-681,300,850,1383];
        this.r=Math.round(random(1,this.posX.length));
        this.x=-1500*3;
        this.y=this.posX[this.r-1];
        this.ran=Math.round(random(1,15));
        this.img=loadImage("car"+this.ran+".png");

        this.pollution=false;

        this.g=0;
    }

    Properties(){

        this.x+=0.13;

        if(this.g===0){
        imageMode(CENTER);
        image(this.img,this.x,this.y,30,30);
        }

        if(this.x>1500*2.5){
            this.g=1
        }
        if(dist(this.x,this.y,game.player.x,game.player.y)<70){
            this.g=1
            score--;
        }
        if(this.ran>26){
            this.pollution=true;
        }
    }
}