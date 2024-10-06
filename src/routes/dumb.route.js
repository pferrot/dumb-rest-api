const express = require("express");
const constants = require("../../constants");
const router = express.Router();

const dumbController = require('../controllers/dumb.controller');

router.get('/:param1', async (req, res) => {
  try {
    const { param1 } = req.params;

    const dumb = await dumbController.readDumb(param1);

    res.status(constants.HTTP_STATUS_CODES.SUCCESS).json({
      dumb,
      message: 'Dumb read successfully!'
    });
  }
  catch (err) {
    res.status(constants.ERROR_MESSAGES.INTERNAL_SERVER_ERROR).json({
      dumb: null,
      message: err.message || 'Something went wrong while reading dumb!'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { property1, property2, property3, property4 } = req.body;

    console.log("before");
    const dumb = await dumbController.createDumb({
      property1,
      property2,
      property3,
      property4
    });

    console.log("dumb");

    res.status(constants.HTTP_STATUS_CODES.SUCCESS).json({
      dumb,
      message: 'Dumb created successfully!'
    })
  }
  catch (err) {
    console.log(err);
    if (err.message === constants.ERROR_MESSAGES.BAD_REQUEST) {
      return res.status(constants.HTTP_STATUS_CODES.BAD_REQUEST).json({
        dumb: null,
        message: err.message || 'Something went wrong while creating a new dumb!'
      });
    }
    return res.status(constants.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      dumb: null,
      message: err.message || 'Something went wrong while creating a new dumb!'
    });
  }
});

router.put('/', async (req, res) => {
  try {
    const { property1 } = req.body;

    const dumb = await dumbController.updateDumb(property1);
    res.status(constants.HTTP_STATUS_CODES.SUCCESS).json({
      dumb,
      message: 'Dumb updated successfully!'
    });
  }
  catch (err) {
    if (err.message === constants.ERROR_MESSAGES.BAD_REQUEST) {
      return res.status(constants.HTTP_STATUS_CODES.BAD_REQUEST).json({
        dumb: null,
        message: err.message || 'Something went wrong while creating a new dumb!'
      });
    }
    return res.status(constants.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      dumb: null,
      message: err.message || 'Something went wrong while creating a new dumb!'
    });
  }
});

module.exports = router;
