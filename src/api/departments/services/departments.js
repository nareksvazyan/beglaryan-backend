'use strict';

/**
 * departments service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::departments.departments');
