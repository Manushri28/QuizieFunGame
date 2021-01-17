class EQ1ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Cleanliness');
        this.wrongAnswer = createButton('Cleaning');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'dodgerblue');

      this.wrongAnswer.position(300, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'pink');
      this.wrongAnswer.style('background', 'indigo');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Cleanliness is the right answer", 300, 300);
        gameState = 2;
        score += 1
    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Cleanliness is the right answer", 300, 300);
        gameState = 2;
    });

    }
  }
  