module.exports = function(app) {
  var express = require('express');
  var footagesRouter = express.Router();

  footagesRouter.get('/', function(req, res) {
    res.send({
      'footages': []
    });
  });

  footagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  footagesRouter.get('/:id', function(req, res) {
    res.send({
      'footages': {
        id: req.params.id
      }
    });
  });

  footagesRouter.put('/:id', function(req, res) {
    res.send({
      'footages': {
        id: req.params.id
      }
    });
  });

  footagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/footages', footagesRouter);
};
