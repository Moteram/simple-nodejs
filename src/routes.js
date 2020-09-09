const express = require('express');
const routes = express.Router();
const Productcontroller = require('./controllers/ProductController');

routes.get('/products', Productcontroller.index);
routes.post('/products', Productcontroller.store);
routes.get('/products/:id', Productcontroller.show);
routes.put('/products/:id', Productcontroller.update);
routes.delete('/products/:id', Productcontroller.destroy);

module.exports = routes;