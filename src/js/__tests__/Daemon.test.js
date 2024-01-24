import { Daemon } from "../Daemon";

test.each([
  [
    'Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.',
    "W",
    "Daemon",
  ],
  ["Ошибка! Human - неизвестный тип персонажа.", "Сева", "Human"],
  [
    'Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.',
    "Максимилиан",
    "Daemon",
  ],
])(
  "should throw error %s with name: %s and type: %s",
  (errorText, name, type) => {
    expect(() => {
      new Daemon(name, type);
    }).toThrow(errorText);
  }
);

test.each([
  [8, 3],
  [0, 11],
  [10, 1],
])("should set attack %i when distance %i", (expected, distance) => {
  const daemon = new Daemon("Саша");
  daemon.setAttack(distance);
  expect(daemon.getAttack()).toBe(expected);
});

test.each([
  [5, 2],
  [0, 5],
  [10, 1],
])("should set stoned %i when distance %i", (expected, distance) => {
  const daemon = new Daemon("Саша");
  daemon.setStoned(distance);
  expect(daemon.getStoned()).toBe(expected);
});
