class SpQ2ButtonForm {

    constructor() {
        this.correctAnswer = createButton('Yes');
        this.wrongAnswer = createButton('No');
    }
    hide(){
        this.correctAnswer.hide();
        this.wrongAnswer.hide();
    }
  
    display(){

      this.correctAnswer.position(650, 450);
      this.correctAnswer.style('font-size', '40px');
      this.correctAnswer.style('color', 'maroon');
      this.correctAnswer.style('background', 'lightpink');

      this.wrongAnswer.position(200, 450);
      this.wrongAnswer.style('font-size', '40px');
      this.wrongAnswer.style('color', 'black');
      this.wrongAnswer.style('background', 'chocolate');


      this.correctAnswer.mousePressed(()=>{
        textSize(30)
        fill("lime")
        frameRate(1)
        text("Yes! Yes is the right answer", 300, 550)
        gameState = 19;
        score += 1

    });
      this.wrongAnswer.mousePressed(()=>{
        textSize(30)
        fill("lime")
        frameRate(1)
        text("Oops! Yes is the right answer", 300, 550);
        gameState = 19;

    });


    }
  }
  