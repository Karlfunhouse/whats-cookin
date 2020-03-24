class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
  };
};

if (typeof module !== 'undefined') {
module.exports = User;
}
