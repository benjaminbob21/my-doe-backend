"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = require("sequelize");
var sequelize = exports.sequelize = new _sequelize.Sequelize("doe-project", "postgres", " ", {
  host: "localhost",
  dialect: "postgres"
});
sequelize.authenticate().then(function () {
  console.log("Connection to the database has been established successfully.");
})["catch"](function (err) {
  console.error("Unable to connect to the database:", err);
});