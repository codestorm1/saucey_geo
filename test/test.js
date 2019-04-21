const assert = require('assert');

const polygon = require('../polygon-points.json');
const server = require('../server');

const knownInside = [
  {
    lat: -118.3828353881836,
    long: 34.079109226606356
  },
  {
    lat: -118.33030700683594,
    long: 34.09602708232169
  },
  {
    lat: -118.4028353881836,
    long: 34.0650209226606356
  }
];

const knownOutside = [
  {
    lat: -118.33000,
    long: 34.11969051767928
  },
  {
    lat: -118.4028353881836,
    long: 34.0650209226606356
  }
];


describe('Server', function () {
    it('should be able to load the server and its functions', function () {
      assert(!!server);
      assert(typeof server.pointInPolygon === "function");
  });
});

describe('Polygons', function () {
  describe('Determine whether a point is in a polgon', function () {

    it('should return true when the point is inside the polygon', function () {
      knownInside.forEach((point) => {
        assert.true(server.pointInPolygon(polygon, point));
      });
    });

    it('should return false when the point is outside the polygon', function () {
      knownOutside.forEach((point) => {
        assert.false(server.pointInPolygon(polygon, point));
      });
    });
  });
});
