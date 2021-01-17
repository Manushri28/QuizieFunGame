class LQ4ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Horse');
        this.wrongAnswer = createButton('Lamb');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'white');
      this.correctAnswer.style('background', 'purple');

      this.wrongAnswer.position(650, 450);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'black');
      this.wrongAnswer.style('background', 'rosybrown');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Horse is the right answer", 350, 550)
        gameState = 17;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Horse is the right answer", 350, 550)
        gameState = 17;

    });

    }
  }
  