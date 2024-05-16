import { addNumbers } from "ws-core";

class UserAge {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  increment() {
    this.value = addNumbers(this.value, 1);
  }
}

export { UserAge };
