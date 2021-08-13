class Menu extends View {
    constructor(main) {
        super(main, "[data-js-section-menu]")
        this.leaderboard = new Leaderboard();
        this.showGame = this.showGame.bind(this);
        this.showLeaderboard = this.showLeaderboard.bind(this);

        this.$container = document.querySelector("[data-js-section-menu]");
        this.btn = this.$container.querySelector("[data-js-opennewgame]");
        this.btn2 = this.$container.querySelector("[data-js-openleaderboard]");
    }

    
    setupEvents() {
        this.btn.addEventListener("click", this.showGame);
        this.btn2.addEventListener("click", this.showLeaderboard);
    }

    showGame() {
        this.main.switchView("step2");
        new Game;
    }

    showLeaderboard() {
        this.hideMenu();
        this.leaderboard.openLeaderboard();
    }

    hideMenu() {
        this.removeEvents();
        this.$container.classList.remove("active");
    }

    removeEvents() {
        this.btn.removeEventListener("click", this.showGame);
        this.btn2.removeEventListener("click", this.showLeaderboard);
    }
}




