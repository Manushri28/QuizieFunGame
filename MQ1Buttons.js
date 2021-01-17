class MQ1ButtonForm {

    constructor() {
        this.correctAnswer = createButton('110');
        this.wrongAnswer = createButton('230');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'mediumaquamarine');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'pink');
      this.wrongAnswer.style('background', 'mediumslateblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! 110 is the right answer", 300, 300);
        gameState = 6;
        score += 1

    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! 110 is the right answer", 300, 300);
        gameState = 6;
    });

    }
  }
  