const moment = require('moment');
const statusCodes = require('../helpers/status_codes');
const utils = require('../helpers/shared');
const dummyData = require('../Data');

class PropertyAdsController {
  /**
   * creates new account
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof AccountController
   */

  static createPropertyAd(request, response) {
    const { owner, price, state, city, address, type, imageURL } = request.body;

    const propertyData = {
      id: utils.getNextId(data.account),
      owner,
      price,
      state,
      city,
      address,
      type,
      imageURL
    };
    data.properties.push(propertyData);

    return response.status(201).json({
      status: statusCodes.created,
      data: {
        id,
        status,
        type,
        state,
        city,
        address
      }
    });
  }

  /**
   * View Property
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof PropertyController
   */
  // eslint-disable-next-line consistent-return
  static viewProperty(request, response) {
    const data = utils.searchProperty(dummyData.properties);

    return response.status(200).send({ status: statusCodes.success, data });
  }

  /**
   * View Single Property
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof PropertyController
   */
  // eslint-disable-next-line consistent-return
  static viewSingleProperty(request, response) {
    let { propID } = request.params;
    propID = parseInt(propID);

    const foundProp = utils.searchById(propID, dummyData.properties);

    if (!foundProp) {
      return response.status(404).json({
        status: statusCodes.notFound,
        error: 'Property Type does not exist'
      });
    }

    const data = dummyData.properties.filter(member => member.id === propID);
    return response.status(200).send({ status: statusCodes.success, data });
  }

  /**
   * View Single Property
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof PropertyController
   */
  // eslint-disable-next-line consistent-return
  static viewPropertyByType(request, response) {
    const { type } = request.query.type;

    return response.status(200).send({ status: statusCodes.success, type });

    //  const foundProp = utils.searchByType(type, dummyData.properties);
    /*
    if (!foundProp) {
      return response.status(404).json({
        status: statusCodes.notFound,
        error: 'Property Type does not exist'
      });
    }
    

    const data = dummyData.properties.filter(typeData => typeData.type === type);
    return response.status(200).send({ status: statusCodes.success, data });
    */
  }

  /**
   * changes account status
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof AccountController
   */
  // eslint-disable-next-line consistent-return
  static changePropertyAdStatus(request, response) {
    const { status } = request.body;
    let { accountNumber } = request.params;
    accountNumber = parseInt(accountNumber, 10);

    const foundAccount = utils.searchByAccount(accountNumber, data.account);

    if (!foundAccount) {
      response.status(404).json({
        status: statusCodes.notFound,
        error: 'Account number does not exist'
      });
    }
    foundAccount.status = status;

    response.status(200).json({
      status: statusCodes.success,
      data: {
        accountNumber,
        status
      }
    });
  }

  /**
   * Delete account
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof AccountController
   */
  // eslint-disable-next-line consistent-return
  static deletePropertyAd(request, response) {
    let { accountNumber } = request.params;
    accountNumber = parseInt(accountNumber, 10);

    const foundAccount = utils.searchByAccount(accountNumber, data.account);

    if (!foundAccount) {
      return response.status(404).json({
        status: statusCodes.notFound,
        error: 'Account number does not exist'
      });
    }

    const index = data.account.indexOf(foundAccount);

    data.account.splice(index, 1);
    return response
      .status(200)
      .send({ status: statusCodes.success, message: 'Account successfully deleted' });
  }
}

module.exports = PropertyAdsController;
