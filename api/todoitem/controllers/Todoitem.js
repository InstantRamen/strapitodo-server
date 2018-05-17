'use strict';

/**
 * Todoitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Todoitem`.
 */

module.exports = {

  /**
   * Retrieve todoitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.todoitem.fetchAll(ctx.query);
  },

  /**
   * Retrieve a todoitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.todoitem.fetch(ctx.params);
  },

  /**
   * Create a/an todoitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.todoitem.add(ctx.request.body);
  },

  /**
   * Update a/an todoitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.todoitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an todoitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.todoitem.remove(ctx.params);
  }
};
