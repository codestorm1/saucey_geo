const Redis = require('ioredis');

const redis = new Redis();

async function save(key, object) {
  try {
      await redis.set(key, JSON.stringify(object));
  } catch (error) {
      console.error(`save error ${error}`);
  }
}

async function load(key) {
  try {
      return JSON.parse(await redis.get(key));
  } catch (error) {
    console.error(`load error ${error}`);
  }
}

function disconnect() {
  redis.disconnect();
}

module.exports = {
  save,
  load,
  disconnect
};
