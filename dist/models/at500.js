"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaterQualityDataSecond = void 0;
var _sequelize = require("sequelize");
var _database = require("../database.js");
var WaterQualityDataSecond = exports.WaterQualityDataSecond = _database.sequelize.define("WaterQualityDataSecond", {
  DateTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  Salinity: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  TotalDissolvedSolids: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  StationID: {
    type: _sequelize.DataTypes.STRING,
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