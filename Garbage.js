class Garbage{
    constructor(){
        this.garbage=createSprite(random(-1500*2,1500*2),random(-768*2,768*2),10,10);
        this.ran=Math.round(random(1,14));
        this.g=loadImage("garbage"+this.ran+".png");
        this.garbage.addImage("g",this.g);
        this.garbage.scale=0.05;
    }

    touch(){
        if(this.garbage.isTouching(game.player)){
            this.garbage.x=random(-1500*2,1500*4);
            this.garbage.y=random(-768*2,768*4);
            if(dist(this.garbage.x,this.garbage.y,game.player.x,game.player.y)<700){
                this.garbage.x=random(-1500*2,1500*4);
                this.garbage.y=random(-768*2,768*4);
            }
            score++;
        }
    }
}