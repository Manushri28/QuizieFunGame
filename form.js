class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h1');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("𝐐𝐔𝐈𝐙𝐈𝐄 𝐅𝐔𝐍 𝐆𝐀𝐌𝐄");
      this.title.position(400, 20);

      this.button.position(700, 400);
      this.button.style('font-size', '30px');
      this.button.style('color', 'black');
      this.button.style('background', 'darkturquoise');

      this.input.position(300, 300);
      this.input.style('font-size', '30px');
      this.input.style('color', 'pink');
      this.input.style('background', 'rebeccapurple');

      this.button.mousePressed(()=>{
        gameState = "rules"
    });
  
    }
  }
  