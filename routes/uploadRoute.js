const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();



  /**
   * @openapi
   * '/api/upload':
   *  post:
   *     tags:
   *     - Upload image
   *     summary: upload images
   *     requestBody:
   *      required: true
   *      content:
   *        multipart/form-data:
   *           schema:
   *              $ref: '#/components/schemas/uploadInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/uploadResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post(
  "/",
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id",  deleteImages);

module.exports = router;
