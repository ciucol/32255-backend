const bcrypt = require('bcrypt');

const createHash = password => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHashed = bcrypt.hashSync(password, salt);

  return passwordHashed;
};

const isValidPasswordMethod = (password, user) => {
  const isValid = bcrypt.compareSync(password, user.password);

  return isValid;
};

module.exports = {
  createHash,
  isValidPasswordMethod,
};
