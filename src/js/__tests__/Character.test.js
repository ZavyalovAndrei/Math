import { Character } from "../Character";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Magician'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Daemon'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Character(name, type)}).toThrow(errorText);
  
});

test('should set attack "undefined"', () => {
  const character = new Character('Вова', 'Bowerman');
  expect(character.getAttack(5)).toBeNaN();
})

test('should set atrtack with stoned "undefined"', () => {
  const character = new Character('Вова', 'Bowerman');
  character.setStoned()
  expect(character.getAttack(8)).toBeNaN();
})