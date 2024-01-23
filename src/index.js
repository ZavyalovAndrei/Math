import { ErrorRepository } from "./js/ErrorRepository.js";

const errors = new ErrorRepository();
console.log(errors.translate(202));
