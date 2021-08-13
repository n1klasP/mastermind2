class Game extends View {
    constructor(main) {
        super(main, "[data-js-section-game]")
        this.code = new Code();
        this.time = new Timer();
        this.endgame = new Endgame();
        this.trys = 0;
        this.gametime = 0;
        this.startGame = this.startGame.bind(this);
        this.checkTry = this.checkTry.bind(this);
        this.goback = this.goback.bind(this);
        this.$container = document.querySelector("[data-js-section-game]");
        this.$startbutton = document.querySelector("[data-js-gamecode-startgame]");
        this.$codesubmit = this.$container.querySelector("[data-js-gamecode-submit]")
        this.$code = this.$container.querySelector("[data-js-gamecode]");
        this.$prevbutton = document.querySelector("[data-js-gameprev]")
    }

    showTry(){
        let historyparent = document.querySelector("[data-js-historyparent]")
        let historyentry = document.querySelector("[data-js-historyentry]")
        const clone = historyentry.cloneNode(true);
        clone.querySelector("[data-js-historysignal]").innerText = this.code.numberwithCorrectPosition + " " + this.code.numberwithWrongPosition;
        clone.querySelector("[data-js-historycode]").innerText = this.$code.value;
        
        historyparent.appendChild(clone);
        
    }

    hideGame() {
            this.$container.classList.remove("active");
            this.endgame.showgameendScreen(this.trys, this.gametime);
    }
    removeEvents() {
        this.$startbutton.removeEventListener("click", this.startGame);
        this.$codesubmit.removeEventListener("click", this.checkTry);
    }

    setupEvents() {
        this.$startbutton.addEventListener("click", this.startGame)
        this.$codesubmit.addEventListener("click", this.checkTry)
        this.$prevbutton.addEventListener("click", this.goback)
    }
    startGame() {
        this.$startbutton.classList.remove("active");
        this.code.generateCode();
        this.time.startTimer();
    }
    goback()
    {
        this.main.switchView("step1");
    }


    checkTry() {

        let test2 = this.$code.value;
        let testlength = test2.length;
        console.log(testlength);
        if(testlength == 4)
        {
            

        this.trys++;
        document.querySelector("[data-js-gamecode]");
        let test = document.querySelector("[data-js-gamecode]").value;
        const myArr = test.split("");

        // this.code = new Code();
       const res = this.code.checkCode(myArr)
        this.showTry();
        if (res) {
            this.gametime = this.time.stopTimer();
            this.hideGame();
        }
    }
    if(testlength != 4)
    {
        alert("Maximal 4 Zahlen sind erlaubt");
    }
}


}
