class LQ3ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Solid');
        this.wrongAnswer = createButton('Ice');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'white');
      this.correctAnswer.style('background', 'midnightblue');

      this.wrongAnswer.position(300, 450);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'blue');
      this.wrongAnswer.style('background', 'gold');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Solid is the right answer", 300, 550);
        gameState = 16;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Solid is the right answer", 300, 550);
        gameState = 16;

    });

    }
  }
  