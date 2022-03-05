class Question {

  constructor() {
    
    
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.input2.class("invisibleStyle");
    this.button.class("invisibleStyle");
    
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    
    
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
  }

  display(){
    

    this.question.html("Question:- What goes up and down but cannot walk? " );
    this.question.position(150, 80);
    this.question.class("textStyle");

    this.option1.html("1: Stairs " );
    this.option1.position(150, 100);
    this.option1.class("text")

    this.option2.html("2: Time " );
    this.option2.position(150, 120);
    this.option2.class("text")

    this.option3.html("3: Balloon " );
    this.option3.position(150, 140);
    this.option3.class("text")

    this.option4.html("4: Houses" );
    this.option4.position(150, 160);
    this.option4.class("text")
    
    this.input2.position(350, 230);
    this.input2.class("inputStyle");
    this.button.position(290, 300);
    this.button.class("inputStyle");

    
    
    
  }
//to handle submit button
  handleButton(){
    this.button.mousePressed(()=>{
      x = this.input2.value();

      if(x !== undefined){
      
      console.log(this.input2.value());
     
      if(x === "1"){
        ans = true;
      }
      
      console.log(ans);
     
    }

    });

  }
}