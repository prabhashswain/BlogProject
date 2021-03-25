const app = require('express');
const { homeController } = require('../controllers/homeController');

const homeRouter = app.Router()

homeRouter.get('/',homeController)

module.exports = homeRouter