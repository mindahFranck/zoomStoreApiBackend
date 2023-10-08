/**
 * @openapi
 * components:
 *  schemas:
 *    uploadInput:
 *      type: object
 *      required:
 *        - images
 *      in:
 *        formData
 *      properties: 
 *        images:
 *          type: file
 *    uploadResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        url:
 *          type: string
 */