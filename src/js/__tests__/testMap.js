import ErrorRepository from '../modJS';

test('check error', () => {
  const checkError = new ErrorRepository();
  expect(checkError.translate(1)).toEqual('Неверно задано имя персонажа');
  expect(checkError.translate(2)).toEqual('В выбранной расе отсутствует данный класс');
  expect(checkError.translate(3)).toEqual('Невозможно удалить данного персонажа');
  expect(() => checkError.translate(4)).toThrow(Error);
});
