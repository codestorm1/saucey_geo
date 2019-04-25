const assert = require('assert');
const expect = require('chai').expect;

const polygon = require('../polygon-points.json');
const server = require('../geometry-server');

const knownInside = [
  {
    x: -118.3828353881836,
    y: 34.079109226606356
  },
  {
    x: -118.33030700683594,
    y: 34.09602708232169
  },
  {
    x: -118.4028353881836,
    y: 34.0650209226606356
  },
  {
    x: -118.3214,
    y: 34.0521

  }
];

const knownOutside = [
  {
    x: -118.33000,
    y: 34.11969051767928
  },
  {
    x: -118.4028353881836,
    y: 34.0650209226606356
  }
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

//   describe('Determine whether a point is in a polgon', (() => {
//     it('should return true when the point is inside the polygon', (() => {
//       knownInside.forEach(point => {
//         console.log('THE REAL POINT-=>', point.x, point.y)
//         expect(server.pointInPolygon(polygon, point)).to.be.true;
//       });
//     }));

//     it('should return false when the point is outside the polygon', (() => {
//       knownOutside.forEach((point) => {
//         console.log('-=>', point.x, point.y)
//         expect(server.pointInPolygon(polygon, point)).to.be.false;
//       });
//     }));
//   }));

 