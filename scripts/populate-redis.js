const dataStore = require('../data-store');

const polygon = require('../polygon-points.json');
const couriers = require('../couriers.json');

function pushData() {
  dataStore.save('polygon', polygon);
  dataStore.save('couriers', couriers);
}

pushData();
