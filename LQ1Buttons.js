class LQ1ButtonForm {

    constructor() {
        this.correctAnswer = createButton('1/8');
        this.wrongAnswer = createButton('1/16');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'mediumorchid');

      this.wrongAnswer.position(650, 450);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'pink');
      this.wrongAnswer.style('background', 'lightcoral');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! 1/8 is the right answer", 300, 550);
        gameState = 14;
        score += 1

    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! 1/8 is the right answer", 300, 550);
        gameState = 14;
    });

    }
  }
  