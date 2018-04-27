export class Ingredient {
  constructor(public name: string, public amount: number) {
  }
}

export interface Recipe {
  name: string;
  description: string;
  difficulty: string
}
