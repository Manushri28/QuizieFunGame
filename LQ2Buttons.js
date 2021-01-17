class LQ2ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Universe');
        this.wrongAnswer1 = createButton('Planet');
        this.wrongAnswer2 = createButton('Comet');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer1.hide();
        this.wrongAnswer2.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'goldenrod');

      this.wrongAnswer1.position(200, 450);
      this.wrongAnswer1.style('font-size', '40px');
      this.wrongAnswer1.style('color', 'teel');
      this.wrongAnswer1.style('background', 'khaki');

      this.wrongAnswer2.position(400, 450);
      this.wrongAnswer2.style('font-size', '40px');
      this.wrongAnswer2.style('color', 'teal');
      this.wrongAnswer2.style('background', 'emraldgreen');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Universe is the right answer", 300, 550)
        gameState = 15;
        score += 1

    });
      this.wrongAnswer1.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Universe is the right answer", 300, 550);
        gameState = 15;

    });

    this.wrongAnswer2.mousePressed(()=>{
      textSize(30)
      fill("black")
      frameRate(1)
      text("Oops! Universe is the right answer", 300, 550);
      gameState = 15;

  });


    }
  }
  