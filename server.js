
function isLeft(linePoint1, linePoint2, point) {
  // return ((b.x - a.x)*(c.y - a.y) - (b.y - a.y)*(c.x - a.x)) > 0;
  const isLeft = ((linePoint2.y - linePoint1.y) * (point.x - linePoint1.x) -
                  (linePoint2.x - linePoint1.x) * (point.y - linePoint1.y)) > 0;
  return isLeft;
}

function rayCrossesLine(linePoint1, linePoint2, point) {
  const y1 = linePoint1.y;
  const y2 = linePoint2.y;
  console.log('between? ', point.x, y1, y2);
  const between =  point.x >= Math.min(y1, y2) && point.y < Math.max(y1, y2);
  console.log('left? ', linePoint1, linePoint2, point);
  const left = isLeft(linePoint1, linePoint2, point);
  console.log('between', between, 'left', left);
  return between && left;
}

function countCrossings(polygonPointsArray, point) {
  let crossings = 0;
  polygonPoints = polygonPointsArray.map(point => ({x: point[0], y: point[1]}));
  const len = polygonPoints.length;
  for (let i = 0; i < len - 1; i++) {
    const nextPoint = (i !== len) ? polygonPoints[i + 1] : polygonPoints[0];
    crossings += rayCrossesLine(polygonPoints[i], nextPoint, point);
  }
  return crossings;
}

function pointInPolygon(polygonPoints, point) {
  const crossings = countCrossings(polygonPoints, point);
  console.log(crossings, crossings % 2 !== 0);
  return (crossings % 2 !== 0);
}

module.exports = {
  isLeft,
  pointInPolygon,
};
