/* eslint-disable consistent-return */
const statusCodes = require('../../helpers/status_codes');

/**
 * @class AccountValidate
 */
class PropertyAdsValidate {
  static validateCreate(request, response, next) {
    const { owner, price, state, city, address, type, imageURL } = request.body;

    if (!type || type.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'No property type entered' });
    }

    if (!owner || owner.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'Owner ID is required' });
    }

    if (!price || price.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'Price cannot be empty' });
    }

    if (!state || state.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'State is required' });
    }

    if (!address || address.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'address is required' });
    }

    if (!city || city.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'address is required' });
    }

    if (!imageURL || imageURL.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'address is required' });
    }
    next();
  }

  static validateStatusChange(request, response, next) {
    const { status } = request.body;
    // eslint-disable-next-line no-unused-vars
    let { accountNumber } = request.params;
    accountNumber = parseInt(accountNumber, 10);

    if (!status || status.trim().length === 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'No request sent' });
    }

    if (status !== 'activate' && status !== 'deactivate') {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'Invalid request sent' });
    }

    next();
  }
}

module.exports = PropertyAdsValidate;
