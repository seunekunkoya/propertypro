/* eslint-disable consistent-return */
const statusCodes = require('../../helpers/status_codes');

/**
 * @class TransactionValidate
 */
class FlagsValidate {
  static validateAmount(request, response, next) {
    const { amount } = request.body;

    if (amount === undefined || amount === '' || amount === null) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'No amount entered' });
    }

    if (amount === 0 || amount < 0) {
      return response
        .status(400)
        .json({ status: statusCodes.badRequest, error: 'Amount is too low' });
    }

    next();
  }
}

module.exports = FlagsValidate;
