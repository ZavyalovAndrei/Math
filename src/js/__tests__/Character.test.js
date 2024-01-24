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
  character.setAttack(5);
  expect(character.getAttack()).toBeNaN();
})

test('should set stoned "undefined"', () => {
  const character = new Character('Вова', 'Bowerman');
  character.setStoned(3);
  expect(character.getStoned()).toBeNaN();
})