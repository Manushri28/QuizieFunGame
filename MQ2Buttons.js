class MQ2ButtonForm {

    constructor() {
        this.correctAnswer = createButton('9');
        this.wrongAnswer = createButton('5');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(600, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'yellowgreen');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'teal');
      this.wrongAnswer.style('background', 'darkturquoise');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! 9 is the right answer", 300, 340)
        gameState = 7;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! 9 is the right answer", 300, 340);
        gameState = 7;

    });

    }
  }
  