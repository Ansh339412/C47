class Pedestrian{
    constructor(){
        this.body=createSprite(random(-1500*2,1500*2),random(-768*2,768*2),20,20);
        this.body.scale=0.05;
        this.ran=0;
    }

    display(){
        if(frameCount%50===0){
            push();
            this.ran=Math.round(random(1,4));
            switch(this.ran){
                case 1:this.body.setVelocity(0,-3)
                this.body.addAnimation("up",up);
                this.body.changeAnimation("up",up);
                break;
                case 2:this.body.setVelocity(0,3)
                this.body.addAnimation("down",down);
                this.body.changeAnimation("down",down);
                break;
                case 3:this.body.setVelocity(-3,0)
                this.body.addAnimation("left",left);
                this.body.changeAnimation("left",left);
                break;
                case 4:this.body.setVelocity(3,0)
                this.body.addAnimation("right",right);
                this.body.changeAnimation("right",right);
                break;
                default:break;
            }
            pop();
        }
    }
}