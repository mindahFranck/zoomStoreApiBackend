const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

  /**
   * @openapi
   * '/api/product':
   *  post:
   *     tags:
   *     - Products
   *     summary: create product
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/ProductInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ProductResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
    router.post("/",  createProduct);
  /**
   * @openapi
   * '/api/product/{id}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single priduct by Id
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of  product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/ProductResponse'
   *       404:
   *         description: product not found   
   */
router.get("/:id", getaProduct);
router.put("/wishlist", addToWishlist);
router.put("/rating",  rating);
  /**
   * @openapi
   * '/api/product/{id}':
   *  put:
   *     tags:
   *     - Products
   *     summary: Update a single user
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of  product
   *        required: true
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schema/ProductInput' 
   */
router.put("/:id",  updateProduct);
  /**
   * @openapi
   * '/api/product/{id}':
   *  delete:
   *     tags:
   *     - Products
   *     summary: Delete a product
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of product
   *        required: true
   *     responses:
   *       200:
   *         description: product deleted
   *       403:
   *         description: Forbidden
   *       404:
   *         description: product not found  
   */
router.delete("/:id",  deleteProduct);
  /**
   * @openapi
   * '/api/product':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get all product
   *     responses:
   *      200:
   *        description: Get all product
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ProductResponse'
   *      403:
   *        description: Forbidden 
   */
router.get("/", getAllProduct);

module.exports = router;
