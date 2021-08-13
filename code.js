class Code {

    constructor() {
        this.code = [];
        this.existNumber = 0;
        this.numberwithCorrectPosition = 0;
        this.numberwithWrongPosition = 0;
        this.newnumber = 0;
        this.testnumber = 0;
    }

    generateCode() {
        this.code = []
        while (this.code.length !== 4) {
            this.randomNumber = Math.floor(Math.random() * 10)
            this.rnd = this.randomNumber.toString();
            if (!this.code.includes(this.rnd)) {
                this.code.push(this.rnd);

            }
        }
        this.checkCode(0)
    }

    arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    checkCode(array) {

        this.numberwithCorrectPosition = 0;
        this.existNumber = 0;
        this.numberwithWrongPosition = 0;
        this.newnumber = 0;;

        console.log("Eingegebener Code:" + array);
        console.log("Generierter Code:" + this.code);

        let x;
        let y;

        for (let i = 0; i < array.length; i++) {
            x = array[i]
            y = this.code[i]
            if (x == y) {
                this.numberwithCorrectPosition++;
            }
            for (let j = 0; j < this.code.length; j++) {
                if (array[i] === this.code[j]) {
                    this.existNumber++;
                }
            }
        }

        this.numberwithWrongPosition = this.existNumber - this.numberwithCorrectPosition;

        if (this.existNumber === this.numberwithCorrectPosition) {
            this.numberwithWrongPosition = this.existNumber;
        }
        if(this.existNumber != this.numberwithCorrectPosition){
            this.numberwithWrongPosition = this.existNumber - this.numberwithCorrectPosition
        }


        let example = 4 - this.numberwithCorrectPosition - this.numberwithWrongPosition


        if (this.numberwithCorrectPosition === 4) {
            return true;
        }


        this.signal(this.numberwithWrongPosition, this.numberwithCorrectPosition, example)
    }

    signal(numberwithWrongPosition, numberwithCorrectPosition,example) {
        let signal = 0;

        let right = numberwithCorrectPosition

        let position = numberwithWrongPosition

        let wrong = example

        let elem = document.querySelectorAll("[data-js-dot-display]");

        for( let i = 0; i < 4; i++)
        {
        elem[i].classList.remove("green");
        elem[i].classList.remove("orange");
        elem[i].classList.remove("red");
        }


        for (let i = 0; i < right; i++) {
            elem[signal].classList.add("green")
            signal++
        }

        for (let i = 0; i < position; i++) {
            elem[signal].classList.add("orange")
            signal++;
        }

        for (let i = 0; i < example; i++) {
            elem[signal].classList.add("red")
            signal++;
        }



    }
}