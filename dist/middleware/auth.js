"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.verifyLogout = exports.jwtCheck = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("dotenv/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Middleware function to handle some request.
 * @param {import('express').Response} res - The response object. 
 */

var jwtCheck = exports.jwtCheck = function jwtCheck(userId, res) {
  var token = _jsonwebtoken["default"].sign({
    userId: userId
  }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d"
  });
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000
  });
};
jwtCheck.propTypes = {
  userId: _propTypes["default"].string.isRequired
};

/**
 * Middleware function to handle some request.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').Request} req - The response object.
 * @param {import("express").NextFunction} next - The response object.
 * 
 */

var verifyToken = exports.verifyToken = function verifyToken(req, res, next) {
  var token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized!"
    });
  }
  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET_KEY);
    /**
    * Middleware function to handle some request.
    * @param {import("jsonwebtoken").JwtPayload} decoded - The response object.
    * 
    */
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized!"
    });
  }
};

/**
 * Middleware function to handle some request.
 * @param {import('express').Response} res - The response object. 
 */
var verifyLogout = exports.verifyLogout = function verifyLogout(req, res) {
  res.cookie("auth_token", "", {
    expires: new Date(0)
  });
  res.send();
};