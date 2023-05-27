let user = {
  name: 'Mate',
  lastName: 'Naran',
  password: 'mate123',
};

class User {
  constructor(name) {
    this.name = name;
  }

  async create() {
    await Users.create(user);
  }
}
