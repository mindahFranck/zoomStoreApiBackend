const { Request, Response, NextFunction } = require=("express");
const { AnyZodObject } = require=("zod");
const schema = AnyZodObject
const validateResource =
  () =>
  (req, res, next) => {
    try {
      JSON.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      console.log(e)
      return res.status(400).send(e.errors);
    }
  };

module.exports = {validateResource};
