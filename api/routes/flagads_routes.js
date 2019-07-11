const flagController = require('../controllers/flag_controller');
const flagValidation = require('../middleware/validation/flags_validation');
const authenticate = require('../middleware/authentication/authenticate');

const API_VERSION = '/api/v1';

const flagAdsRoute = app => {
  app.post(
    `${API_VERSION}/flag/:propertyId/`,
    authenticate,
    flagValidation.validateAmount,
    flagController.creditAccount
  );
};

module.exports = flagAdsRoute;
