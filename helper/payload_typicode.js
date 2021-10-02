var faker = require('faker');

const payloadPostTypiCode = {
  title: faker.lorem.word(1),
  body: faker.lorem.sentence(6),
  userId: faker.datatype.number(100),
};

module.exports = {
  payloadPostTypiCode,
};
