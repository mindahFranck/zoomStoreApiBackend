const express = require("express");
const {validateResource, createorderSchema} = require("../middlewares/validateResource");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  getOrderByUserId,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
} = require("../controller/userCtrl");
// const , isAdmin } = require("../middleware");
const router = express.Router();

  /**
   * @openapi
   * '/api/user/register':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/register", createUser );
router.post("/forgot-password-token", forgotPasswordToken);

router.put("/reset-password/:token", resetPassword);

router.put("/password", updatePassword);
  /**
   * @openapi
   * '/api/user/login':
   *  post:
   *     tags:
   *     - User
   *     summary: Login a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/LoginUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/LoginUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", userCart);
router.post("/cart/applycoupon", applyCoupon);

  /**
   * @openapi
   * '/api/user/cart/cash-order':
   *  post:
   *     tags:
   *     - Order
   *     summary: create order
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/OrderInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/OrderResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

router.post("/cart/cash-order", createOrder);
  /**
   * @openapi
   * '/api/user/all-users':
   *  get:
   *     tags:
   *     - User
   *     summary: Get all users
   *     responses:
   *      200:
   *        description: Get all users
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      403:
   *        description: Forbidden
   */
router.get("/all-users", getallUser);

router.get("/get-orders", getOrders);
  /**
   * @openapi
   * '/api/user/getallorders':
   *  get:
   *     tags:
   *     - Order
   *     summary: Get all order
   *     responses:
   *      200:
   *        description: Get all order
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/OrderResponse'
   *      403:
   *        description: Forbidden 
   */
router.get("/getallorders",  getAllOrders);
  /**
   * @openapi
   * '/api/user/getorderbyuser/{id}':
   *  get:
   *     tags:
   *     - Order
   *     summary: Get all order for a user
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the user
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schemas/OrderResponse'
   *       404:
   *         description: order not found    
   */
router.get("/getorderbyuser/:id",  getOrderByUserId);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", getWishlist);
router.get("/cart", getUserCart);
  /**
   * @openapi
   * '/api/user/{id}':
   *  get:
   *     tags:
   *     - User
   *     summary: Get a single user by the userId
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the user
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/CreateUserResponse'
   *       404:
   *         description: user not found   
   */
router.get("/:id",  getaUser);
router.delete("/empty-cart", emptyCart);
  /**
   * @openapi
   * '/api/user/{id}':
   *  delete:
   *     tags:
   *     - User
   *     summary: Delete a user
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the user
   *        required: true
   *     responses:
   *       200:
   *         description: user deleted
   *       403:
   *         description: Forbidden
   *       404:
   *         description: user not found  
   */
router.delete("/:id", deleteaUser);
router.put(
  "/order/update-order/:id",
  
  updateOrderStatus
);
  /**
   * @openapi
   * '/api/user/edit-user':
   *  put:
   *     tags:
   *     - User
   *     summary: Update a single user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schema/CreateUserInput' 
   */
router.put("/edit-user", updatedUser);
router.put("/save-address", saveAddress);
router.put("/block-user/:id",  blockUser);
router.put("/unblock-user/:id",  unblockUser);

module.exports = router;
