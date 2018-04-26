interface Array<T> {
  removeItem: (item: T) => void;
}


Array.prototype.removeItem = (item: T) => {
  let index = this.ingredients.indexOf()
  this.ingredients.splice(index, 1);
}
