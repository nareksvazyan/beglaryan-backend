'use strict';

/**
 * misson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::misson.misson');
