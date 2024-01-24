import { Character } from './Character';
0
export class Magician extends Character {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attackDefault = 20;
        this.attack = this.attackDefault;
        this.defence = 40;
    }
}