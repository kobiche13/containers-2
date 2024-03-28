export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Неверно задано имя персонажа'],
      [2, 'В выбранной расе отсутствует данный класс'],
      [3, 'Невозможно удалить данного персонажа'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
