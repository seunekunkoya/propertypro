const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

dotenv.config();

const { SECRET } = process.env;

const common = {
  /**
   * @description - generates a new id
   * @param {object} data
   * @returns {int} id
   */
  getNextId(data) {
    const lastId = data[data.length - 1].id;
    return lastId + 1;
  },

  /**
   * @description - encypt password
   * @param {object} password
   * @returns {object} hashPassword
   */

  hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  },

  /**
   * @description - validate password
   * @param {string} password
   * @param {string} hashPassword
   * @returns {boolean} boolean
   */
  validatePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  },

  /**
   * @description - assigns token
   * @param {object} payload
   * @returns {object} token
   */
  jwtToken(payload) {
    const token = jwt.sign(payload, SECRET, {
      expiresIn: '24h' // expires in 24 hours
    });
    return token;
  },

  /**
   * @description - search by email
   * @param {string} email
   * @param {object} data
   * @returns {object} foundEmail
   */
  searchByType(searchType, data) {
    const type = data.filter(eachData => eachData.type === searchType);
    return type;
  },

  /**
   * @description - search by id
   * @param {int} id
   * @param {object} data
   * @returns {object} foundId
   */
  searchById(searchId, data) {
    //  const found = data.some(eachData => eachData.id === searchId);
    const found = data.find(eachData => eachData.id === searchId);
    return found;
  },

  /**
   * @description - return all properties
   * @param {object} data
   * @returns {object} all properties
   */
  searchProperty(data) {
    return data;
  },
  /**
   * @description - validates email
   * @param {string} emaIl;
   * @returns {Boolean} isValid
   */
  emailValidator(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = reg.test(email);
    return isValid;
  },

  /**
   * @description - validates email
   * @param {string} emaIl;
   * @returns {Boolean} isValid
   */
  phoneNoValidator(phoneNo) {
    const reg = /^\d{11}$/;
    const isValid = reg.test(phoneNo);
    return isValid;
  }
};

module.exports = common;
