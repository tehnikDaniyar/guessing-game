class GuessingGame {
   setRange(min, max) {
      this.min = min;
      this.max = max;
   }

   guess() {
      this.currentGuess = Math.round((this.min + this.max) / 2);
      return this.currentGuess;
   }

   lower() {
      this.max = this.currentGuess;
   }

   greater() {
      this.min = this.currentGuess;
   }
}

module.exports = GuessingGame;
