class GuessingGame {
  constructor() {}

  setRange(start, end) {
    this.start = start; // минимальное значение диапазона
    this.end = end; // максимальное значение диапазона
  }

  guess() {
    this.idea = Math.floor((this.end + this.start) / 2 + 0.5); // среднее значение и округляем
    return this.idea; // текущее предположение
  }

  lower() {
    return (this.end = this.idea); // если предположение слишком высокое, обновляем максимальное значение
  }

  greater() {
    return (this.start = this.idea); // если предположение слишком низкое, обновляем минимальное значение
  }
}

module.exports = GuessingGame;
