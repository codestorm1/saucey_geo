const turf = require('@turf/turf');
var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});

const points = turf.points([
  [-46.6318, -23.5523],
  [-46.6246, -23.5325],
  [-46.6062, -23.5513],
  [-46.663, -23.554],
  [-46.643, -23.557]
]);

var searchWithin = turf.polygon([[
  [-46.653,-23.543],
  [-46.634,-23.5346],
  [-46.613,-23.543],
  [-46.614,-23.559],
  [-46.631,-23.567],
  [-46.653,-23.560],
  [-46.653,-23.543]
]]);

var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);


const polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });

// Note order: longitude, latitude.
const point1 = turf.point([-73.988214, 40.749128]);

const point2 = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    // Note order: longitude, latitude.
    coordinates: [-73.988214, 40.749128]
  },
  properties: {}
};

