class SpQ3ButtonForm {

    constructor() {
        this.correctAnswer = createButton('No');
        this.wrongAnswer = createButton('Cannot Say');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'red');
      this.correctAnswer.style('background', 'peachpuff');

      this.wrongAnswer.position(300, 450);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'green');
      this.wrongAnswer.style('background', 'navajowhite');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("lime")
        frameRate(1)
        text("Yes! No is the right answer", 300, 550);
        gameState = 20;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("lime")
        frameRate(1)
        text("Oops! No is the right answer", 300, 550);
        gameState = 20;

    });

    }
  }
  