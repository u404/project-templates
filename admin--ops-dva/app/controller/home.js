"use strict"

const { Controller } = require("egg")

class HomeController extends Controller {
  async index() {
    await this.ctx.render("home.tpl")
  }
}

module.exports = HomeController
