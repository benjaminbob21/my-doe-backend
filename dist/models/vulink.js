"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatteryData = void 0;
var _sequelize = require("sequelize");
var _database = require("../database.js");
var BatteryData = exports.BatteryData = _database.sequelize.define("BatteryData", {
  DateTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  BatteryLevel: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  StationID: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  },
  Baro: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  Temperature: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  Easting: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  Northing: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  }
});