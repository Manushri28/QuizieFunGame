class EQ3ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Magneto');
        this.wrongAnswer = createButton('Magenta');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'hotpink');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'white');
      this.wrongAnswer.style('background', 'purple');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Magneto is the right answer", 300, 300);
        gameState = 4;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Magneto is the right answer", 300, 300);
        gameState = 4;

    });

    }
  }
  