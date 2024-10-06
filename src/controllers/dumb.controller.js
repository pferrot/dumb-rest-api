const constants = require('../../constants');
const { Dumb } = require('../models/dumb.model');

exports.createDumb = async function (dumbObj) {
  if (!dumbObj || !dumbObj.property1 || !dumbObj.property2 || (!dumbObj.property3 && dumbObj.property3 !== 0) || !dumbObj.property4) {
    throw new Error(constants.ERROR_MESSAGES.BAD_REQUEST);
  }
  const { property1, property2, property3, property4 } = dumbObj;

  let dumb = new Dumb(property1, property2, property3, property4);
  return dumb;
}

exports.updateDumb = async function (property1) {
  if (!property1) {
    throw new Error(constants.ERROR_MESSAGES.BAD_REQUEST);
  }

  let dumb = new Dumb(property1, null, null, null);
  return dumb;
}

exports.readDumb = async function (param1) {
  if (!param1) {
    throw new Error(constants.ERROR_MESSAGES.BAD_REQUEST);
  }
  return new Dumb(param1, null, null, null);
}
