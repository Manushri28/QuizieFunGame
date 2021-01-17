class MQ4ButtonForm {

    constructor() {
        this.correctAnswer = createButton('8');
        this.wrongAnswer = createButton('7');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(600, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'turquoise');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'black');
      this.wrongAnswer.style('background', 'lightcoral');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! 8 is the right answer", 350, 320)
        gameState = 9;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! 8 is the right answer", 350, 320)
        gameState = 9;

    });

    }
  }
  