const restify = require('restify');

const geospatial = require('./geospatial');

const server = restify.createServer();

async function getInventory(req, res, next) {
  if (req.body.point) {
    await geospatial.init();
    const inv = await geospatial.getInventory(req.body.point);
    if (inv === 0) {
      res.status(404);
      res.json({ "error": "unavailable at this location" });
      return;
    }
    res.json({ 'inventory': inv });
  } else {
    res.send(400, { response: 'field lat and long are required' });
  }

  return next();
}

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

server.post('/inventory', getInventory);


server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
