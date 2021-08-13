class Timer {

    constructor() {
        this.check = null;
        this.startTimer();
        this.cnt = 0;
    }

    startTimer() {
        if (this.check == null) {
            this.check = setInterval(() => {
                this.cnt += 1;
                //   console.log(this.cnt);
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.check);
        this.check = null;
      //  console.log("0");
        return this.cnt;
    }



}