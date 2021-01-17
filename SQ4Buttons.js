class SQ4ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Wrought Iron');
        this.wrongAnswer = createButton('Pig Iron');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(300, 350);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'white');
      this.correctAnswer.style('background', 'blueviolet');

      this.wrongAnswer.position(550, 350);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'black');
      this.wrongAnswer.style('background', 'cadetblue');

      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Yes! Wrought Iron is the right answer", 350, 320)
        gameState = 13;
        score += 1


    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("white")
        frameRate(1)
        text("Oops! Wrought Iron is the right answer", 350, 320)
        gameState = 13;

    });

    }
  }
  