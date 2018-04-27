'use strict';

const logger = require('../lib/logger');
const Painting = require('../model/painting');
const storage = require('../lib/storage');
const response = require('../lib/response');

module.exports = function routePainting(router) {
  router.post('/api/v1/painting', (req, res) => {
    logger.log(logger.INFO, 'PAINTING-ROUTE: POST /api/v1/painting');
    try {
      const newPainting = new Painting(req.body.title, req.body.content);
      storage.create('Painting', newPainting)
        .then((painting) => {
          response.sendJSON(res, 201, painting);
          return undefined;
        });
    } catch (err) {
      logger.log(logger.ERROR, `PAINTING-ROUTE: There was a bad request ${err}`);
      response.sendText(res, 400, err.message);
      return undefined;
    }
    return undefined;
  });
  router.get('/api/v1/painting', (req, res) => {
    if (req.url.query.id) {
      storage.fetchOne('Painting', req.url.query.id)
        .then((item) => {
          response.sendJSON(res, 200, item);
        })
        .catch((err) => {
          logger.log(logger.ERROR, err, JSON.stringify(err));

          response.sendText(res, 404, err.message);
        });
    } else {
      storage.fetchAll('Painting')
        .then((item) => {
          response.sendJSON(res, 200, item);
        })
        .catch((err) => {
          logger.log(logger.ERROR, err, JSON.stringify(err));
          response.sendText(res, 404, err.message);
        });
    }
  });
  router.delete('/api/v1/painting', (req, res) => {
    storage.delete('Painting', req.url.query.id)
      .then(() => {
        response.sendText(res, 204, 'No content in the body');
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.ERROR, err, JSON.stringify(err));
        response.sendText(res, 404, 'Resource not found');
        return undefined;
      });
    return undefined;
  });
};
