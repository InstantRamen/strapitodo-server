'use strict';

/**
 * Todolist.js controller
 *
 * @description: A set of functions called "actions" for managing `Todolist`.
 */

module.exports = {

  /**
   * Retrieve todolist records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.todolist.fetchAll(ctx.query);
  },

  /**
   * Retrieve a todolist record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.todolist.fetch(ctx.params);
  },

  /**
   * Retrieve todolist records for the currently authenticated user. 
   * 
   * @return {Object|Array}
   */

  findMine: async (ctx) => {
    ctx.params.owner = ctx.state.user;
    return strapi.services.todolist.fetchAll(ctx.params);
  },

  /**
   * Create a todolist record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.todolist.add(ctx.request.body);
  },

  createMine: async (ctx) => {  
    ctx.request.body.owner = ctx.state.user;
    return strapi.services.todolist.add(ctx.request.body);
  },

  /**
   * Update a todolist record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.todolist.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Update a todolist record for the currently authenticated user
   *
   * @return {Object}
   */

  updateMine: async (ctx, next) => {
    ctx.request.body.owner = ctx.state.user;
    ctx.params.owner = ctx.state.user;
    return strapi.services.todolist.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a todolist record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.todolist.remove(ctx.params);
  },

  /**
   * Destroy a todolist record for the currently authenticated user. 
   *
   * @return {Object}
   */

  destroyMine: async (ctx, next) => {
    ctx.params.owner = ctx.state.user;
    return strapi.services.todolist.remove(ctx.params);    
  }
};
