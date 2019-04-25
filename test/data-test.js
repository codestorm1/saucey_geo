const expect = require('chai').expect;

const dataStore = require('../data-store');

describe('Data Store Tests', (() => {
  it('should store and retrieve an object in Redis', (async () => {
    const shamu = {
      type: 'killer whale',
      age: 5,
      lastFeedDate: 'Jan 06 2018',
      size: { length: 30, weight: 8 },
    };
    await dataStore.save('whale', shamu);
    const retreivedWhale = await dataStore.load('whale');
    expect(retreivedWhale).to.deep.equal(shamu);
  }));
}));

