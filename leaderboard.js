class Leaderboard extends View{

    constructor(main)
    {
        super(main, "[data-js-section-leaderboard]")


        this.goback = this.goback.bind(this)  
        this.openLeaderboard = this.openLeaderboard.bind(this)
        this.$container = document.querySelector("[data-js-section-leaderboard]");
        this.$btn_menu = document.querySelector("[data-js-leaderboard-prev]");
    }

    setupEvents(){
        this.$btn_menu.addEventListener("click", this.goback)
    }

    removeEvents()
    {
        this.$btn_menu.removeEventListener("click", this.goback)
    }

    openLeaderboard()
    {
        this.setupEvents();
        this.getallLeaderboardEntrys();
        this.$container.classList.add("active");
    }
    goback()
    {
        location.reload();
    }

    compare(a, b){
        if ( a.trys < b.trys){
            return -1
    }
    if(a.trys > b.trys)
    {
        return 1
    }
    return 0

    }


    getallLeaderboardEntrys()
    {
        let elemname = document.querySelectorAll("[data-js-lb-name]")
        let elemtry = document.querySelectorAll("[data-js-lb-try]")
        let elemtime = document.querySelectorAll("[data-js-lb-time]")
        const res = localStorage.getItem('leaderboard');
        const resJSON = JSON.parse(res);
        this.$lbname = document.querySelector("[data-js-lb-name]")
     

        console.log(resJSON.sort(this.compare));

        let sorteduserarr = resJSON.sort(this.compare);

        if(sorteduserarr.length === 10)
        {
            console.log(sorteduserarr.length);
            sorteduserarr.pop();
        }
 
/*
        for (let i = 0; i < 10; i++)
        {
            elemname[i].innerText = sorteduserarr[i].username
            elemtry[i].innerText = sorteduserarr[i].trys
            elemtime[i].innerText = sorteduserarr[i].time
        }
*/

        sorteduserarr.forEach(function(element, i) {
            elemname[i].innerText = element.username;
            elemtry[i].innerText = element.trys;
            elemtime[i].innerText = element.time;
            
        });

        

    }

    

}

new Main();