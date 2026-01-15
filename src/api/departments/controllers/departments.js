'use strict';

/**
 * departments controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::departments.departments');
