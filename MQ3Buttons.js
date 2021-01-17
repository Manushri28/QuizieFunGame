class MQ3ButtonForm {

    constructor() {
        this.correctAnswer = createButton('302.5');
        this.wrongAnswer = createButton('115');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'lightpink');

      this.wrongAnswer.position(650, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'white');
      this.wrongAnswer.style('background', 'sandybrown');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! 302.5 is the right answer", 300, 300);
        gameState = 8;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! 302.5 is the right answer", 300, 300);
        gameState = 8;

    });

    }
  }
  