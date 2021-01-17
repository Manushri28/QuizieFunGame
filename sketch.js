const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var score1, score2, score3, score4, finalScore;
var gameState = 0;
var form;
var rules;
var score = 0;
var EQ1, EQ2, EQ3, EQ4;
var MQ1, MQ2, MQ3, MQ4;
var SQ1, SQ2, SQ3, SQ4;
var LQ1, LQ2, LQ3, LQ4;
var SPQ1, SPQ2, SPQ3, SPQ4;
var headingHighlight;


function preload(){

  intoBg = loadImage("introImg.jpg");
  rulesIMG = loadImage("rules.jpg");
  mathBg = loadImage("mathsBackground.jpg");
  SciBg = loadImage("scienceBackground.jpg");
  englishBg = loadImage("englishBackground.jpg");
  spaceBg = loadImage("spaceBackground.jpg");
  resultIMG = loadImage("resultFeedback.png")
  logicalReasoningBg = loadImage("logicalReasoningBackground.jpg");

}


function setup(){
  createCanvas(1000,600);

  headingHighlight = createSprite(545, 60, 300, 40)
  headingHighlight.shapeColor = "lightgreen"
  form = new Form();

  rules = new Rules();

  EQ1 = new EQ1ButtonForm();
  EQ2 = new EQ2ButtonForm();
  EQ3 = new EQ3ButtonForm();
  EQ4 = new EQ4ButtonForm();

  MQ1 = new MQ1ButtonForm();
  MQ2 = new MQ2ButtonForm();
  MQ3 = new MQ3ButtonForm();
  MQ4 = new MQ4ButtonForm();

  SQ1 = new SQ1ButtonForm();
  SQ2 = new SQ2ButtonForm();
  SQ3 = new SQ3ButtonForm();
  SQ4 = new SQ4ButtonForm();

  LQ1 = new LQ1ButtonForm();
  LQ2 = new LQ2ButtonForm();
  LQ3 = new LQ3ButtonForm();
  LQ4 = new LQ4ButtonForm();

  SPQ1 = new SpQ1ButtonForm();
  SPQ2 = new SpQ2ButtonForm();
  SPQ3 = new SpQ3ButtonForm();
  SPQ4 = new SpQ4ButtonForm();



  }

function draw(){
    background(0);


    if(gameState === 0){
      background(intoBg);
      form.display();
      headingHighlight.display();
    }

    if(gameState === "rules"){
      textSize(25);
      fill("black")
      background(rulesIMG);
      text("🌸😃👏👐🌸 Hello 👋! I hope you will enjoy the quiz. Here are some of its rules : \n ❅ There are 5 sections- English : 🔠 🔡 🔤, Maths : 📈 📉 📊 🔟, \n Science : 😷 🐠 ⚛ 📡 🔊 💡, Logical reasoning : ⌚ ⌛  and \n Astronomy : 💫 ☄ 🌠 🌟 🚀 ⭐. \n ✪	You will have to click on your answer. \n ❂	You will automatically be shown the right answer and whether you are \ncorrect or not. \n ⦿	At the end of the quiz you will be given a Report Card. It will show your score \nand feedback. \n\n 😄	To continue click on the button on the bottom right corner 👇.", 30, 150)
      form.hide();
      rules.display();
    }

    //*==========================================================*\\
    //                       ENGLISH                              \\
    //*==========================================================*\\

    if(gameState === 1){
      background(englishBg);
      form.hide();

      textSize(38)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q1: What is the noun form of-\n" + "CLEAN ?", 200, 150);

      rules.hide();
      EQ1.display();

    }

    if(gameState === 2){
      background(englishBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q2: Which of the following is a verb ?\n" + "1) Coding\n"+"2) Star", 200, 150);

      rules.hide();
      EQ1.hide();
      EQ2.display();

    }

    if(gameState === 3){
      background(englishBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q3: Which of the following word is spelled as - \n" + "mag-nee-toh ?", 200, 150);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.display();

    }

    if(gameState === 4){
      background(englishBg);

      textSize(29)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q4: Which of the following word means LAUGHED \n MOCKINGLY ?\n\n" + "1) Scoffed\n"+"2) Mocked", 200, 150);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.display();

    }

    //*==========================================================*\\
    //                       MATHS                              \\
    //*==========================================================*\\

    if(gameState === 5){
      background(mathBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 720, 200)
      text("Q5: 10 * 8 + [70 - {2 * (28-8)}] ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.display()

    }

    if(gameState === 6){
      background(mathBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 720, 200)
      text("Q6: A = {14, 55, 86 , 7, 20} \n B = {abc, def, pqr , xyz, 20} \n∴ n(A∪B) = ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide()
      MQ2.display()

    }


    if(gameState === 7){
      background(mathBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 720, 200)
      text("Q7: 55% of 550 is ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.display();

    }


    if(gameState === 8){
      background(mathBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 720, 300)
      text("Q8: How many Prime Numbers are there between \n 10 - 40 ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.display();

    }

    //*==========================================================*\\
    //                       Science                              \\
    //*==========================================================*\\

    if(gameState === 9){
      background(SciBg);

      textSize(30)
      fill("white")
      text("Score : " + score, 800, 100)
      text("Q9: Can sound waves generate heat ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.display();

    }

    if(gameState === 10){
      background(SciBg);

      textSize(30)
      fill("white")
      text("Score : " + score, 800, 100)
      text("Q10: Are two atoms of the same element identical ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.display();


    }

    if(gameState === 11){
      background(SciBg);

      textSize(30)
      fill("white")
      text("Score : " + score, 800, 100)
      text("Q11: Do koalas eat honey like other bears ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.display();


    }

    if(gameState === 12){
      background(SciBg);

      textSize(30)
      fill("white")
      text("Score : " + score, 800, 100)
      text("Q12: The purest form of iron is ?", 200, 200);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.display();



    }



    //*==========================================================*\\
    //                      Logical reasoning                     \\
    //*==========================================================*\\

    if(gameState === 13){
      background(logicalReasoningBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q13: Look at this series: 2, 1, (1/2), (1/4), …\n What number should come next ?", 200, 100);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.display();


    }

    if(gameState === 14){
      background(logicalReasoningBg);

      textSize(30)
      fill("black")      
      text("Score : " + score, 800, 100)
      text("Q14: Pick the odd man out - \n 1) Comet        3) Universe  \n 2) Planet ", 200, 120);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.display();

    }

    if(gameState === 15){
      background(logicalReasoningBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q15: Melt : Liquid :: Freeze : ? \n 1) Ice \n 2) Solid", 200, 120);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.display();

    }

    if(gameState === 16){
      background(logicalReasoningBg);

      textSize(30)
      fill("black")
      text("Score : " + score, 800, 100)
      text("Q16: Paw : Cat :: Hoof : ? \n 1) Lamb \n 2) Horse", 200, 120);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.display();


    }

    //*==========================================================*\\
    //                        Space                               \\
    //*==========================================================*\\

    if(gameState === 17){
      background(spaceBg);

      textSize(30)
      fill("lime")
      text("Score : " + score, 800, 100)
      text("Q17: Can a star turn into a planet ?", 200, 100);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.hide();
      SPQ1.display();

    }

    if(gameState === 18){
      background(spaceBg);

      textSize(30)
      fill("lime")      
      text("Score : " + score, 800, 100)
      text("Q18: Can gravity form waves ?", 200, 120);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.hide();
      SPQ1.hide();
      SPQ2.display();


    }

    if(gameState === 19){
      background(spaceBg);

      textSize(30)
      fill("lime")
      text("Score : " + score, 800, 100)
      text("Q19: Is Pluto a planet ?", 200, 120);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.hide();
      SPQ1.hide();
      SPQ2.hide();
      SPQ3.display();

    }

    if(gameState === 20){
      background(spaceBg);

      textSize(30)
      fill("deeppink")
      text("Score : " + score, 800, 100)
      text("Q20: Are Pluto, Eris, Haumea, Ceres, MakeMake \n Dwarf Planets ?", 200, 160);

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.hide();
      SPQ1.hide();
      SPQ2.hide();
      SPQ3.hide();
      SPQ4.display();


    }


    //*==========================================================*\\
    //                        Result                              \\
    //*==========================================================*\\

    if(gameState === 21){
      background(resultIMG);

      textSize(30)
      fill("black");
      textFont("Georgia");
      textStyle(BOLD);
      text("Report Card", 300, 50);
      text("Score : ", 100, 200);
      text(score, 400, 200);
      text("Feedback :", 100, 405);
      text("Thank you for attempting the quiz !", 100, 405);

      if(score <= 7 && score > 0){
        text("Ok, not so good, just many more of \n quizs are required for more \n pratice. That's all. You \n may become a Quiz \n Master ♛ one day !", 400, 405);
      }
  
      if(score <= 10 && score > 7){
      text("You have done well, just more of \n quizs are required \n for more pratice. That's \n all. You may become a \n Quiz Master ♛ one day !", 400, 405);
      }

      if(score <= 15 && score > 10){
        text("Very Good !, just keep on praticing \n a bit. That's all. You may become a \n Quiz Master ♛ one day !", 400, 430);
      }

      if(score <= 20 && score > 15){
        text("Excellent, Superb ! Keep on prati - \n cing & that's it ! You may become a \n Quiz Master ♛ one day !", 400, 430);
      }

      rules.hide();
      EQ1.hide();
      EQ2.hide();
      EQ3.hide();
      EQ4.hide();
      MQ1.hide();
      MQ2.hide();
      MQ3.hide();
      MQ4.hide();
      SQ1.hide();
      SQ2.hide();
      SQ3.hide();
      SQ4.hide();
      LQ1.hide();
      LQ2.hide();
      LQ3.hide();
      LQ4.hide();
      SPQ1.hide();
      SPQ2.hide();
      SPQ3.hide();
      SPQ4.hide();


    }



}
