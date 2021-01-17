class SQ3ButtonForm {

    constructor() {
        this.correctAnswer = createButton('No');
        this.wrongAnswer = createButton('Cannot Say');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'violet');

      this.wrongAnswer.position(650, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'white');
      this.wrongAnswer.style('background', 'mediumslateblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Yes! No is the right answer", 300, 300);
        gameState = 12;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Oops! No is the right answer", 300, 300);
        gameState = 12;

    });

    }
  }
  