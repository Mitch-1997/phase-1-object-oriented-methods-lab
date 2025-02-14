function BoardMember(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.veto = function (){
        return "No, I must disagree";
    }
    this.approve = function (){
        return "You can do that!";
    }
    this.doCharity = function(){
        return "I like to help people.";
    }
    this.releasePressStatement = function (){
        return "You will see great things from Scuber.";
    }
    this.sayHi = function(){
        return "Hi, my name is Mr. Polished. I am from New York, and I was trained in law.";
    }
}
polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
