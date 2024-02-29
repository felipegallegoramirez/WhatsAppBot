const { verifyToken } = require("../utils/token");
const boom = require('@hapi/boom');
const User = require("../models/user");

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      next(boom.badData("No have Token"));
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    if (tokenData._id) {
      next();
    } else {
      next(boom.unauthorized("Incorret Token"));
    }
  } catch (e) {
    next(boom.badRequest(e));
  }
};



const checkpermision = (permissions) => {
  return async (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        next(boom.badData("No have Token"));
        return;
      }
      const token = req.headers.authorization.split(" ").pop();
      const tokenData = await verifyToken(token);
      
      if (tokenData._id) {
        const user = await User.findById(tokenData._id);
        if(!user){
          next(boom.unauthorized("No user found"));
        }
        var ipguard = req.header('x-forwarded-for') || req.connection.remoteAddress;
        if (user.shop.id == req.params.shopid) {

          if (user.ips.includes(ipguard)) {
            if (user.shop.permissions.includes(permissions)) {
              next();
            }else{
              next(boom.unauthorized("No have Permissions"));
            }

          } else {
            next(boom.unauthorized("Stranger ip"));
          }

        }
        else {
          next(boom.unauthorized("Incorret Shop"));
        }
      } else {
        next(boom.unauthorized("Incorret Token"));
      }
    } catch (e) {
      next(boom.badRequest(e));
    }
  }
}

module.exports = { checkAuth, checkpermision };