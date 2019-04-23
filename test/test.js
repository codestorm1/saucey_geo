const assert = require('assert');
const expect = require('chai').expect;

const polygon = require('../polygon-points.json');
const server = require('../server');

const knownInside = [
  {
    y: -118.3828353881836,
    x: 34.079109226606356
  },
  {
    y: -118.33030700683594,
    x: 34.09602708232169
  },
  {
    y: -118.4028353881836,
    x: 34.0650209226606356
  }
];

const knownOutside = [
  {
    y: -118.33000,
    x: 34.11969051767928
  },
  {
    y: -118.4028353881836,
    x: 34.0650209226606356
  }
];

describe('Server', (() => {
  it.skip('should be able to load the server and its functions', (() => {
    assert(!!server);
    assert(typeof server.pointInPolygon === "function");
  }));
}));

describe('Polygons', (() => {
  describe('Determine whether a point is in a polgon', (() => {

    it.skip('should know if a point is left or right of a line', (() => {
      const linePoint1 = { x: 0, y: 10 };
      const linePoint2 = { x: 10, y: 0 };
      let point = { x: 4.999, y: 5 };
      server.isLeft(linePoint1, linePoint2, point);
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
      point = { x: 15, y: 5 };
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.false;
      point = { x: 11, y: 5 };
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.false;
      point = { x: 9, y: 0 };
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
    }));

    it('should know if a point is left or right of a line', (() => {
      const linePoint1 = { x: -10, y: 10 };
      const linePoint2 = { x: 0, y: 0 };
      let point = { x: -4, y: 5 };
      server.isLeft(linePoint1, linePoint2, point);
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
      point = { x: -6, y: 5 };
      server.isLeft(linePoint1, linePoint2, point);
      expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
    }));

    it('should return true when the point is inside the polygon', (() => {
      knownInside.forEach(point => {
        console.log('THE REAL POINT-=>', point.y, point.x)
        expect(server.pointInPolygon(polygon, point)).to.be.true;
      });
    }));

    it('should return false when the point is outside the polygon', (() => {
      knownOutside.forEach((point) => {
        console.log('-=>', point.y, point.x)
        expect(server.pointInPolygon(polygon, point)).to.be.false;
      });
    }));
  }));
}));
