class SQ1ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Yes');
        this.wrongAnswer = createButton('Cannot Say');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'tomato');

      this.wrongAnswer.position(400, 300);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'pink');
      this.wrongAnswer.style('background', 'mediumslateblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Yes! Yes is the right answer", 300, 300);
        gameState = 10;
        score += 1

    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Oops! Yes is the right answer", 300, 300);
        gameState = 10;
    });

    }
  }
  