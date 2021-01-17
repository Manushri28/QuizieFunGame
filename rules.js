class Rules {

    constructor() {
      this.button = createButton('Ok, Continue');
      this.title = createElement('h1');

    }
    hide(){
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("𝕽𝖚𝖑𝖊𝖘 & 𝕽𝖊𝖌𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘");
      this.title.position(370, 20);

      this.button.position(700, 500);
      this.button.style('font-size', '30px');
      this.button.style('color', 'white');
      this.button.style('background', 'black');

      this.button.mousePressed(()=>{
        gameState = 1
    });
  
    }
  }
  