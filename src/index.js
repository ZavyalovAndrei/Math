import { Daemon } from "./js/Daemon.js";
import { Magician } from "./js/Magician.js";

const daemon = new Daemon().getAttack();
const magician = new Magician();
console.log(`Daemon attack: ${daemon.getAttack()} Magician attack: ${magician.getAttack()}`);
