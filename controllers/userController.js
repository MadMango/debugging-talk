const faker = require("faker");

const generateRandomUser = () => ({
  name: faker.name.firstName(),
  department: faker.commerce.department(),
  email: faker.internet.email(),
});

const users = {
  1: generateRandomUser(),
  2: generateRandomUser(),
  3: generateRandomUser(),
};

const getAllUsers = () => users;
const getUserName = (userNameID) => {
  const userName = users[userNameID].name;
  return userName;
};

module.exports = { getAllUsers, getUserName };
