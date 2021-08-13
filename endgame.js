class Endgame extends View {

    constructor(main) {
        super(main, "[data-js-section-gamefinish]")
        this.Leaderboard = new Leaderboard(main);
        this.addLeaderboardentry = this.addLeaderboardentry.bind(this);
        this.showgameendScreen = this.showgameendScreen.bind(this);
        this.$container = document.querySelector("[data-js-section-gamefinish]");
        this.$playagain = document.querySelector("[data-js-gamefinish-again]");
        this.$menu = document.querySelector("[data-js-gamefinish-menu]")
        this.$leaderboardentry = document.querySelector("[data-js-gamefinish-leaderboardentry]")
        this.$username = document.querySelector("[data-js-gamefinish-username]")
        this.$btn_back = document.querySelector("[data-js-leaderboard-prev]");
        this.gomenu = this.gomenu.bind(this);
        this.try = 0;
        this.time = 0;
        this.entrys = {
            user: []
        };
        this.entrys2 = {
            user: []
        }

    }

    showgameendScreen(number, time) {
        this.$container.classList.add("active");
        this.setupEvents();
        this.try = number;
        this.time = time;
    }

    hidegameendScreen()
    {
        this.$container.classList.remove("active");
    }

    setupEvents() {
        this.$leaderboardentry.addEventListener("click", this.addLeaderboardentry)
        this.$btn_back.addEventListener("click", this.gomenu)
    }

    gomenu()
    {
        location.reload();
    }

    removeEvents(){
        this.$leaderboardentry.removeEventListener("click", this.addLeaderboardentry)
    }
    addLeaderboardentry() {
        let username = document.querySelector("[data-js-gamefinish-username]").value;
        console.log(username + this.try+this.time);
        const newARRAY = [];


        const test = localStorage.getItem('leaderboard');

        if(test === null)
        {

            newARRAY.push({
                "username": username,
                "trys": this.try,
                "time": this.time
            })
    
            localStorage.setItem('leaderboard', JSON.stringify(newARRAY))
        }

        

        if(test != null)
        {

        const testJSON = JSON.parse(test);

        testJSON.push({
            "username": username,
            "trys": this.try,
            "time": this.time
        })

        localStorage.setItem('leaderboard', JSON.stringify(testJSON))
    }

    this.hidegameendScreen();
    this.Leaderboard.openLeaderboard();
        

    }


}
