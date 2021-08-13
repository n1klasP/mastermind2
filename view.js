  class View {
    constructor(main, selector) {
      this.main = main;
      this.$container = document.querySelector(selector);
    }
    
    show() {
      this.setupEvents();
      this.$container.classList.add("active");
    }
    
    hide() {
      this.removeEvents();
      this.$container.classList.remove("active");
    }
  }
  