const moment = require('moment');
const statusCodes = require('../helpers/status_codes');
const utils = require('../helpers/shared');
const data = require('../Data');

class FlagController {
  /**
   * creates new account
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof AccountController
   */

  static createFlag(request, response) {
    const { type } = request.body;
    const { id, firstName, lastName, email } = request.decode;

    const accountData = {
      id: utils.getNextId(data.account),
      accountNumber: utils.generateAccountNumber(data.account),
      createdOn: moment().format(),
      owner: id,
      type,
      status: 'draft',
      balance: 0.0
    };
    data.account.push(accountData);

    return response.status(201).json({
      status: statusCodes.created,
      data: {
        accountNumber: accountData.accountNumber,
        firstName,
        lastName,
        email,
        type: accountData.type,
        openingBalance: accountData.balance
      }
    });
  }
}
module.exports = FlagController;
