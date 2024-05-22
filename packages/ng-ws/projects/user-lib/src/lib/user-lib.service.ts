import { Injectable } from '@angular/core';
import { addNumbers } from 'jakelo123-core';

@Injectable({
  providedIn: 'root',
})
export class UserLibService {
  constructor() {}

  printNums(a: number, b: number) {
    return console.log(addNumbers(a, b));
  }
}
