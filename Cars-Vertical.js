class VCar{
    constructor(){
        this.posY=[2587,1909,1030,350,-726,-1700];
        this.r=random(this.posY);
        this.x=this.r;
        this.y=-windowHeight*3;
        if(this.x<-1390){
            this.x=-1700;
        }
        
        this.ran=Math.round(random(1,15));
        this.img=loadImage("car "+this.ran+".png");

        this.pollution=false;

        this.g=0;
    }

    Properties(){

        this.y+=0.13;

        if(this.g===0){
        imageMode(CENTER);
        image(this.img,this.x,this.y,60,30);
        }

        if(this.y>windowHeight*2.5){
            this.g=1;
        }
        if(dist(this.x,this.y,game.player.x,game.player.y)<70){
            this.g=1;
            score--;
        }
        if(this.ran<6){
            this.pollution=true;
        }
    }
}