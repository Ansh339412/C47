class Game{
    constructor(){
        form=new Form();
        this.player=createSprite(1500/2,600/2,100,100);
        this.player.addAnimation("stand",stand);
        this.player.scale=0.05;

        this.g=[];
        for(var i=0;i<11;i++){
            this.g.push(new Garbage());
        }
        this.zoomIn=createButton("+");
        this.zoomOut=createButton("-");

        
        this.Hcars=[];
        this.Vcars=[];

        this.pos=createElement('h2');

        this.pedestrians=[];
        

        this.citizen=new Pedestrian();

        this.buildings=[];
        this.buildings.push(new Building(2540-300,-1175+450/2,600,1));
        this.buildings.push(new Building(2540-300,-643+450/2,600,2));
        this.buildings.push(new Building(2540-300,343+450/2,600,3));
        this.buildings.push(new Building(2540-300,890+450/2,600,4));

        this.buildings.push(new Building(1875-400,-1175+450/2,800,5));
        this.buildings.push(new Building(1875-400,-643+450/2,800,6));
        this.buildings.push(new Building(1875-400,343+450/2,800,7));
        this.buildings.push(new Building(1875-400,890+450/2,800,8));

        this.buildings.push(new Building(978-300,-1175+450/2,600,9));
        this.buildings.push(new Building(978-300,-643+450/2,600,10));
        this.buildings.push(new Building(978-300,343+450/2,600,11));
        this.buildings.push(new Building(978-300,890+450/2,600,12));

        this.buildings.push(new Building(306-490,-1175+450/2,970,13));
        this.buildings.push(new Building(306-490,-643+450/2,970,15));
        //this.buildings.push(new Building(306-490,343+450/2,970,100));
        this.buildings.push(new Building(306-490,890+450/2,970,16));

        //this.buildings.push(new Building(-769-450,-1175+450/2,900,1));
        this.buildings.push(new Building(-769-450,-643+450/2,900,2));
        this.buildings.push(new Building(-769-450,343+450/2,900,3));
        //this.buildings.push(new Building(-769-450,890+450/2,900,4));

        this.buildings.push(new Building(-1764-250,-1175+450/2,500,6));
        this.buildings.push(new Building(-1764-250,-643+450/2,500,7));
        this.buildings.push(new Building(-1764-250,343+450/2,500,8));
        this.buildings.push(new Building(-1764-250,890+450/2,500,10));

        this.buildings.push(new Building(-2434-250,-1175+450/2,500,11));
        this.buildings.push(new Building(-2434-250,-643+450/2,500,12));
        this.buildings.push(new Building(-2434-250,343+450/2,500,13));
        this.buildings.push(new Building(-2434-250,890+450/2,500,14));


        this.trees=[];
        for(var i=0;i<7;i++){
            this.trees.push(new Tree(1));
        }
        for(var i=0;i<7;i++){
            this.trees.push(new Tree(2));
        }
        for(var i=0;i<7;i++){
            this.trees.push(new Tree(3));
        }
        for(var i=0;i<7;i++){
            this.trees.push(new Tree(4));
        }
        for(var i=0;i<7;i++){
            this.trees.push(new Tree(5));
        }

        this.detect=false;

        this.r=true;
        this.l=true;
        this.u=true;
        this.d=true;

        this.p=0;

        this.score=createElement('h1');

        this.zoom=0
        camera.zoom=0.1;
    }

    form(){
        form.display();
    }

    game(){

        this.r=true;
        this.l=true;
        this.u=true;
        this.d=true;

        this.pos.html(this.player.x+"____"+this.player.y);
        this.pos.position(1500*0.4,768*0);

        if(frameCount%30===0){
            this.Vcars.push(new VCar());
        }
        if(frameCount%30===0){
            this.Hcars.push(new HCar());
        }

        if(frameCount%50===0){
            this.pedestrians.push(new Pedestrian());
        }
        
        imageMode(CORNER);
        image(roads,-1500*2,-768*2,1500*4,768*4);
        camera.x=this.player.x;
        camera.y=this.player.y;

        this.player.frameDelay=10;

        camera.zoom=camera.zoom+this.zoom;

        if(dist(-145,115,this.player.x,this.player.y)<200){
            score--;
            this.player.x=1500/2;
            this.player.y=600/2;
        }
        if(dist(-1140,115,this.player.x,this.player.y)<200){
            score--;
            this.player.x=1500/2;
            this.player.y=600/2;
        }
        
        for(var l=0;l<this.buildings.length;l++){

            this.buildings[l].img();
                if(this.player.y>this.buildings[l].y-450/2 && this.player.y<this.buildings[l].y+450/2 && this.player.x<this.buildings[l].x+this.buildings[l].w/2 && this.player.x>this.buildings[l].x-this.buildings[l].w/2){
                   this.p=1;
                }

                if(this.p===1){
                    score--;
                    this.player.x=1500/2;
                    this.player.y=600/2;
                    this.player.setVelocity(0,0);
                    this.p=0;
                }
        for(var j=0;j<this.g.length;j++){
            this.g[j].touch();
            if(this.g[j].garbage.y>this.buildings[l].y-450/2 && this.g[j].garbage.y<this.buildings[l].y+450/2 && this.g[j].garbage.x<this.buildings[l].x+this.buildings[l].w/2 && this.g[j].garbage.x>this.buildings[l].x-this.buildings[l].w/2){
                this.g[j].garbage.x=random(-1500*2,1500*4);
                    this.g[j].garbage.y=random(-768*2,768*4);
                    if(dist(this.g[j].garbage.x,this.g[j].garbage.y,game.player.x,game.player.y)<700){
                        this.g[j].garbage.x=random(-1500*2,1500*4);
                        this.g[j].garbage.y=random(-768*2,768*4);
                    }
            }
                for (var h=0;h<this.Hcars.length;h++){
                this.Hcars[h].Properties();
                if(dist(this.Hcars[h].x,this.Hcars[h].y,this.g[j].garbage.x,this.g[j].garbage.y)<70){
                    this.g[j].garbage.x=random(-1500*2,1500*4);
                    this.g[j].garbage.y=random(-768*2,768*4);
                    if(dist(this.g[j].garbage.x,this.g[j].garbage.y,this.Hcars[h].x,this.Hcars[h].y)<700){
                        this.g[j].garbage.x=random(-1500*2,1500*4);
                        this.g[j].garbage.y=random(-768*2,768*4);
                    }
                }
            
            for (var i=0;i<this.Vcars.length;i++){
                this.Vcars[i].Properties();
                if(dist(this.Vcars[i].x,this.Vcars[i].y,this.g[j].garbage.x,this.g[j].garbage.y)<70){
                    this.g[j].garbage.x=random(-1500*2,1500*4);
                    this.g[j].garbage.y=random(-768*2,768*4);
                    if(dist(this.g[j].garbage.x,this.g[j].garbage.y,this.Vcars[i].x,this.Vcars[i].y)<700){
                        this.g[j].garbage.x=random(-1500*2,1500*4);
                        this.g[j].garbage.y=random(-768*2,768*4);
                    }
                }

                if(dist(this.Vcars[i].x,this.Vcars[i].y,this.Hcars[h].x,this.Hcars[h].y)<80){
                    this.Vcars[i].g=1;
                }
            
            for(var k=0;k<this.pedestrians.length;k++){
                this.pedestrians[k].display();

                if(dist(this.Vcars[i].x,this.Vcars[i].y,this.pedestrians[k].body.x,this.pedestrians[k].body.y)<70){
                    this.pedestrians[k].body.destroy();
                }

                if(dist(this.Hcars[h].x,this.Hcars[h].y,this.pedestrians[k].body.x,this.pedestrians[k].body.y)<70){
                    this.pedestrians[k].body.destroy();
                }

                if(this.player.y>this.buildings[l].y-450/2 && this.player.y<this.buildings[l].y+450/2 && this.player.x<this.buildings[l].x+this.buildings[l].w/2 && this.player.x>this.buildings[l].x-this.buildings[l].w/2){
                    this.pedestrians[k].body.destroy();
                }

            }
        }
        }
        }
    }

        this.citizen.display();

        this.zoomIn.position(1500*0,768*0);
        this.zoomOut.position(1500*0.03,768*0);

        this.zoomIn.mousePressed(()=>{
            camera.zoom=camera.zoom+0.1;
        })
        this.zoomOut.mouseReleased(()=>{
            this.zoom=0.0;
        })
        if(camera.zoom>4){
            this.zoom=0;
        }
        this.zoomOut.mousePressed(()=>{
            this.zoom=-0.1;
            console.log("p")
         })
         if(camera.zoom<-100){
             this.zoom=0.02;
         }

        this.score.html("Score :"+score);
        this.score.position(1500*0.8,768*0);

        this.player.frameDelay=1;

        drawSprites();
    }
}