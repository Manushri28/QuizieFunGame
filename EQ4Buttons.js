class EQ4ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Scoffed');
        this.wrongAnswer = createButton('Mocked');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'black');
      this.correctAnswer.style('background', 'lightsalmon');

      this.wrongAnswer.position(650, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'black');
      this.wrongAnswer.style('background', 'deepskyblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Yes! Scoffed is the right answer", 350, 320)
        gameState = 5;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("black")
        frameRate(1)
        text("Oops! Scoffed is the right answer", 350, 320)
        gameState = 5;

    });

    }
  }
  