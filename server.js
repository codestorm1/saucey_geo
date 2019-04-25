const restify = require('restify');

const server = restify.createServer();

function getInventory(req, res, next) {
  res.json({"inventory": 0});
  next();
}

// {
//   "point":[{lng},{lat}]
// }

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

server.post('/inventory', ((req, res, next) => {
    if (req.body.point) {
        const lat = req.body.point[0];
        const long  = req.body.point[1];
        console.log(lat + ": " + long);
        res.json({"inventory": 0});
      } else {
        res.send(400, {response: 'field lat and long are required'});
    }
    return next();
}));


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
