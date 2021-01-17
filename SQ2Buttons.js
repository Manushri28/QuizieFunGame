class SQ2ButtonForm {

    constructor() {
        this.correctAnswer = createButton('No');
        this.wrongAnswer = createButton('Yes');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'mediumorchid');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'teal');
      this.wrongAnswer.style('background', 'lightsteelblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Yes! No is the right answer", 300, 300)
        gameState = 11;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Oops! No is the right answer", 300, 300);
        gameState = 11;

    });

    }
  }
  