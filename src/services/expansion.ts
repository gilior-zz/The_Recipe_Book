import {Injectable} from '@angular/core';



declare global {
  interface Array<T> {
    remove(elem: T): T[];
  }
}

if (!Array.prototype.remove) {
  Array.prototype.remove = function (elem) {
    let index = this.indexOf(elem);
    return this.splice(index, 1);
  }
}
@Injectable()
export class ExpansionService {

  constructor() {
  }
}
