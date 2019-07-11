const propertyController = require('../controllers/property_controller');
const propertyValidation = require('../middleware/validation/propertyads_validation');
const authenticate = require('../middleware/authentication/authenticate');

const API_VERSION = '/api/v1';

const propertyAdsRoute = app => {
  app.post(
    `${API_VERSION}/property`,
    authenticate,
    propertyValidation.validateCreate,
    propertyController.createPropertyAd
  );
  app.get(`${API_VERSION}/property`, propertyController.viewProperty);
  app.get(`${API_VERSION}/property/:propID`, propertyController.viewSingleProperty);
  app.get(`${API_VERSION}/property/search`, propertyController.viewPropertyByType);
  app.patch(
    `${API_VERSION}/property/:propertyId`,
    authenticate,
    propertyValidation.validateStatusChange,
    propertyController.changePropertyAdStatus
  );
  app.delete(
    `${API_VERSION}/property/:propertyId`,
    authenticate,
    propertyController.deletePropertyAd
  );
};

module.exports = propertyAdsRoute;
