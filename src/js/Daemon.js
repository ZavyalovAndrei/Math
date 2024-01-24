import { Character } from './Character';

export class Daemon extends Character {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attackDefault = 10;
        this.attack = this.attackDefault;
        this.defence = 40;
    }
}