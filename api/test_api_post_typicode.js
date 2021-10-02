const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../utils/typicode');
const data = require('../data/schema_typicode');
const payload = require('../helper/payload_typicode');
const scenario = require('../tests/testcase_post_typicode');

describe(`${scenario.testcase.description}`, async () => {
  it(`${scenario.testcase.positive.case1}`, async () => {
    // tempat kita nge test
    let response = await api.postTypicode(payload.payloadPostTypiCode);
    expect(response.status).to.equal(201, 'Status Response');
    // expect(response.body).to.be.jsonSchema(data.getTypiCodeScheme);
  });
});
