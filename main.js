class Main {
    constructor() {
      this.step1 = new Menu(this);
      this.step2 = new Game(this);
      this.step3 = new Leaderboard(this);
      this.step4 = new Endgame(this);
      this.switchView("step1");
    }
    
    switchView(name) {
      this.step1.hide();
      this.step2.hide();
      this.step3.hide();
      this.step4.hide();
      
      if(name === "step1") {
        this.step1.show();
        return;
      }
      
      if(name === "step2") {
        this.step2.show();
        return;
      }
      
      if(name === "step3") {
        this.step3.show();
        return;
      }
      this.step4.show();
    }
  }



