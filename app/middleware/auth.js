const response = require('../response/index');
const httpStatus = require('http-status');
const { env } = require('../constant/index');
// This function is used for validate API key

exports.verifyApiKey = (req, res, next) => {
  try {
    const ApiKey = req.headers['x-api-key'];
    if (!ApiKey) {
      return response.error(req, res, { msgCode: 'MISSING_API_KEY' }, httpStatus.UNAUTHORIZED);
    }

    if (ApiKey !== env.API_KEY) {
      return response.error(req, res, { msgCode: 'INVALID_API_KEY' }, httpStatus.UNAUTHORIZED);
    }
    return next();
  } catch (error) {
    return response.error(req, res, { msgCode: 'INTERNAL_SERVER_ERROR' }, httpStatus.INTERNAL_SERVER_ERROR);
  }
};

