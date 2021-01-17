class EQ2ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Coding');
        this.wrongAnswer = createButton('Star');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'crimson');

      this.wrongAnswer.position(650, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'teal');
      this.wrongAnswer.style('background', 'limegreen');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Coding is the right answer", 300, 300)
        gameState = 3;
        score += 1

    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Coding is the right answer", 300, 300);
        gameState = 3;

    });

    }
  }
  