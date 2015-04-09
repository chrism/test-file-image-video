module.exports = function(app) {
  var express = require('express');
  var imagesRouter = express.Router();

  imagesRouter.get('/', function(req, res) {
    res.send({
      'images': []
    });
  });

  imagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  imagesRouter.get('/:id', function(req, res) {
    res.send({
      'images': {
        id: req.params.id
      }
    });
  });

  imagesRouter.put('/:id', function(req, res) {
    res.send({
      'images': {
        id: req.params.id
      }
    });
  });

  imagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/images', imagesRouter);
};
