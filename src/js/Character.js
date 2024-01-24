const NAME_LENGTH_MIN = 2;
const NAME_LENGTH_MAX = 10;
const CORRECT_TYPE = [
  "Bowerman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];
const DISTANCE_CORRECTION = 10;

export class Character {
  constructor(name, type) {
    if (name.length < NAME_LENGTH_MIN) {
      throw new Error(
        'Ошибка! Имя "' +
          name +
          '" слишком кототкое, должно быть не менее 2-х символов.'
      );
    } else if (name.length > NAME_LENGTH_MAX) {
      throw new Error(
        'Ошибка! Имя "' +
          name +
          '" слишком длинное, должно быть не более 10-и символов.'
      );
    } else {
      this.name = name;
    }
    if (CORRECT_TYPE.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Ошибка! " + type + " - неизвестный тип персонажа.");
    }

    this.health = 100;
    this.level = 1;
    this.attackDefault = undefined;
    this.defence = undefined;
    this.attack = this.attackDefault;
    this.stoned = 0;
  }

  setAttack(distance) {
    let result =
      this.attackDefault * (1 - (distance - 1) / DISTANCE_CORRECTION);
    if (result < 0) {
      result = 0;
    }
    this.attack = result;
  }

  getAttack() {
    return this.attack;
  }

  setStoned(distance) {
    this.getAttack(distance);
    let result = this.attack - Math.log2(distance) * 5;
    if (result < 0) {
      result = 0;
    }
    this.stoned = result;
  }

  getStoned() {
    return this.stoned;
  }
}
