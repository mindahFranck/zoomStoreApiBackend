import { number, object, string, TypeOf } from "zod";
 
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - firstname
 *        - lastname
 *        - email
 *        - mobile
 *        - password
 *        - passwordConfirmation
 *        - role
 *        - isBlocked
 *        - address
 *      properties:
 *        firstname:
 *          type: string
 *          default: jane
 *        lastname:
 *          type: string
 *          default: Jane Doe
 *        email:
 *          type: string
 *          default: string@gmail.com
 *        mobile:
 *          type: string
 *          default: +2376............ 
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *        role:
 *          type: string
 *          default: user
 *        isBlocked:
 *          type: boolean
 *          default: false
 *        address:
 *           type: string
 *           default: "yaounde"
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        firstname:
 *          type: string
 *        lastname:
 *          type: string
 *        email:
 *          type: string
 *        mobile:
 *          type: string
 *        role:
 *          type: string
 *        isBlocked:
 *          type: boolean
 *        address:
 *           type: string
 */



/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: string@gmail.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    LoginUserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        firstname:
 *          type: string
 *        lastname:
 *          type: string
 *        email:
 *          type: string
 *        mobile:
 *          type: string
 *        token:
 *          type: string
 */
const createUserSchema = object({
  body: object({
    firstname: string({
      required_error: "firstname is required",
    }),
    lastname: string({
      required_error: "last name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    mobile: string({
      required_error: "mobile is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),

  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});





export default { createUserSchema }