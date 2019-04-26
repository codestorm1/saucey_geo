const turf = require('@turf/turf');

const dataStore = require('./data-store');

let polygon;
let couriers;

async function init() {
  polygon = await dataStore.load('polygon');
  couriers = await dataStore.load('couriers');
  return {
    polygon,
    couriers
  };
}

function pointInMap(point) {
  const points = turf.points([point]);
  const searchWithin = turf.polygon([polygon.coordinates]);    
  const pointsIn = turf.pointsWithinPolygon(points, searchWithin);
  try {
    if (!pointsIn.features[0]) {
      return false;
    }
    const foundPoint = pointsIn.features[0].geometry.coordinates;
    return (foundPoint[0] === point[0] && foundPoint[1] === point[1]);
  } catch (err) {
    console.log(err);
    return false;
  }
}

function getInventory(point) {
  if (!pointInMap(point)) {
    return 0;
  }
  return couriers.reduce((total, courier) => {
    if (pointInMap(courier.coordinates)) {
      return total + courier.inventory.sku_1;
    }
    return total;
  }, 0);
}

module.exports = {
  init,
  getInventory
};
