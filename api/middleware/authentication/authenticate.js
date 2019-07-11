/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const statusCodes = require('../../helpers/status_codes');

dotenv.config();

const { SECRET } = process.env;

const authentication = (request, response, next) => {
  try {
    const header = request.headers.authorization;
    if (!header || header === '')
      return response
        .status(401)
        .json({ status: statusCodes.unAuthorized, error: 'Authentication failed' });

    const token = jwt.verify(header, SECRET);
    request.decode = token;
    next();
  } catch (e) {
    return response.status(401).json({ status: statusCodes.unAuthorized, error: 'Invalid token!' });
  }
};

module.exports = authentication;
