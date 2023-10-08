/**
 * @openapi
 * components:
 *  schemas:
 *    OrderInput:
 *      type: object
 *      required:
 *        - product
 *        - orderStatus
 *        - orderby
 *      properties:
 *        product:
 *          type: array
 *        orderStatus:
 *          type: string
 *          default: Not Processed
 *        orderby:
 *          type: string
 *          default: user
 *    OrderResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        product:
 *          type: array
 *        orderStatus:
 *          type: string
 *        orderby:
 *          type: string
 */
const createorderSchema = object({
    body: object({

    }),
  });
  
  
  
  
  
  export default { createorderSchema }