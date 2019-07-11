const userController = require('../controllers/user_controller');
const userValidation = require('../middleware/validation/user_validation');

const API_VERSION = '/api/v1';

const userRoute = app => {
  app.post(`${API_VERSION}/auth/signup`, userValidation.validateSignup, userController.signup);
  app.post(`${API_VERSION}/auth/signin`, userValidation.validateSignin, userController.signin);
};

module.exports = userRoute;
