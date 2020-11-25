class Form{
    constructor(){
        this.input=createInput('Name');
        this.submit=createButton('Submit');
        this.name;
        this.greeting=createElement('h2');
    }

    display(){
        this.submit.position(windowWidth/2,windowHeight/2)
        this.input.position(windowWidth/2,windowHeight/3);
        this.submit.mousePressed(()=>{
            this.input.hide();
            this.submit.hide();
            this.name=this.input.value();
            gameState=1;
        })
        
    }
}