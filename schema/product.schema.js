/**
 * @openapi
 * components:
 *  schemas:
 *    ProductInput:
 *      type: object
 *      required:
 *        - title
 *        - slug
 *        - description
 *        - price
 *        - category
 *        - brand
 *        - quantity
 *        - color
 *        - images
 *      properties:
 *        id:
 *          type: string
 *          default: ""
 *        title:
 *          type: string
 *          default: title
 *        slug:
 *          type: string
 *          default: title
 *        description:
 *          type: string
 *          default: description
 *        price:
 *          type: number
 *        category:
 *          type: string
 *          default: category
 *        brand:
 *          type: string
 *          default: brand
 *        quantity:
 *          type: number
 *        color:
 *          type: array
 *          default: [white, black, blue, purple]
 *        images:
 *          type: object
 *          properties:
 *            public_id:
 *               type: string
 *            url:
 *               type: string
 *    ProductResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        description:
 *          type: string
 *        price:
 *          type: number
 *        category:
 *          type: string
 *        brand:
 *          type: string
 *        quantity:
 *          type: number
 *        color:
 *          type: array
 *        images:
 *          type: object
 *          properties:
 *            public_id:
 *               type: string
 *            url:
 *               type: string
 */