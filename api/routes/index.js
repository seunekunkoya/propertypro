const userRoutes = require('./user_routes');
const propertyAdsRoute = require('./propertyads_routes');
// const flagAdsRoute = require('./flagads_routes');

const route = app => {
  userRoutes(app);
  propertyAdsRoute(app);
  // flagAdsRoute(app);
};

module.exports = route;
