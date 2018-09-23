const animal = {
  hello() {
    return `Hello, my name is ${this.name}`;
  }
};

const mouse = {
  ...animal,
  name: "Mickey"
};

module.exports = {
  mouse
};
