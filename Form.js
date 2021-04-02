class Form{
    constructor(){
        
        this.button = createButton("PLAY");
        this.input = createInput('Name');
        this.greeting = createElement('h3');
        this.title = createElement('h2') //h1,h2,h3,--h6
    }
    hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();
        this.title.hide();



    }





    display(){
        
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-50,0);

       
        this.input.position(displayWidth/2-40,displayHeight/2-80);

       
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{     //anonymous means no function name
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);
             
           
            this.greeting.html("Hello"+ name) ;
            this.greeting.position(displayWidth/2-70,displayHeight/4)
            

        })
    }
}