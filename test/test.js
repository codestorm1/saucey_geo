const assert = require('assert');
const expect = require('chai').expect;

const polygon = require('../polygon-points.json');
const geospatial = require('../geospatial');

const knownInside = [
  [
    -118.3828353881836,
    34.079109226606356
  ],
  [
    -118.33030700683594,
    34.09602708232169
  ],
  // [
  //   -118.4028353881836,
  //   34.0650209226606356
  // ],
  [
    -118.3214,
    34.0521
  ]
];

const knownOutside = [
  [
    -118.33000,
    34.11969051767928
  ],
  [
    -118.4028353881836,
    34.0650209226606356
  ]
];

// describe.skip('Server', (() => {
//   it('should be able to load the server and its functions', (() => {
//     assert(!!server);
//     assert(typeof server.pointInPolygon === "function");
//   }));
// }));

// describe('left/right', (() => {
//   describe('Determine whether a point is left or right of a line', (() => {
//     it('should know if a point is left or right of a line - right quadrant', (() => {
//       const linePoint1 = { x: 0, y: 10 };
//       const linePoint2 = { x: 10, y: 0 };
//       let point = { x: 4.999, y: 5 };
//       server.isLeft(linePoint1, linePoint2, point);
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
//       point = { x: 15, y: 5 };
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.false;
//       point = { x: 11, y: 5 };
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.false;
//       point = { x: 9, y: 0 };
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
//     }));

//     it('should know if a point is left or right of a line - left quadrant', (() => {
//       const linePoint1 = { x: -10, y: 10 };
//       const linePoint2 = { x: 0, y: 0 };
//       let point = { x: -6, y: 5 };
//       server.isLeft(linePoint1, linePoint2, point);
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.true;
//       point = { x: -4, y: 5 };
//       server.isLeft(linePoint1, linePoint2, point);
//       expect(server.isLeft(linePoint1, linePoint2, point)).to.be.false;
//     }));
//   }));

describe('Determine available inventory for locations', (() => {
  it('should return 21 when the point is inside the polygon', (async () => {
    knownInside.forEach(async (point) => {
      await geospatial.init();
      const inv = await geospatial.getInventory(point);
      expect(inv).to.equal(21);
    });
  }));

  it('should return 0 when the point is outside the polygon', (async () => {
    knownOutside.forEach(async (point) => {
      await geospatial.init();
      const inv = await geospatial.getInventory(point);
      expect(inv).to.equal(0);
    });
  }));
}));

