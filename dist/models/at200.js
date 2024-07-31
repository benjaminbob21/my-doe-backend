"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaterQualityData = void 0;
var _sequelize = require("sequelize");
var _database = require("../database.js");
var WaterQualityData = exports.WaterQualityData = _database.sequelize.define("WaterQualityData", {
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
  pH: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  pHMV: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  SaturationOxygen: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  },
  PartialPressureOxygen: {
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
  },
  Temperature: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  }
});