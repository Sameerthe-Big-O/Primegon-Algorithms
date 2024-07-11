class HasTable {
  constructor(size) {
    this.data = new Array(size);
  }
  set(key, value) {
    const location = this.hash(key);
    if (!this.data[location]) {
      this.data[location] = [key, value];
    } else {
      this.data[location].push([key, value]);
      console.log(this.data);
    }
  }
  get(keyOf) {
    const location = this.data[this.hash(keyOf)];
    if (!location) return `reference error ${keyOf} property doesn't exist`;
    if (Array.isArray(location) && location[0] === key) return location;
    if (location.length > 2) {
      for (let a = 2; a < location.length; a++) {
        let [key] = location[a];
        if (keyOf === key) {
          return location[a];
        } else {
          return `reference error ${key} property doesn't exist`;
        }
      }
    }
  }
  hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
      console.log(
        hash,
        "charactearcode",
        key.charCodeAt(index),
        "after multiplying",
        key.charCodeAt(index) * index,
        "after    remidner of number",
        (hash + key.charCodeAt(index) * index) % this.data.length
      );
    }
    return hash;
  }
}
