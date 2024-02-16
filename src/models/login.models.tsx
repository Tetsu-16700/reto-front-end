// se importa desde la biblioteca Yup
import { object, string } from "yup";

export const loginSchema = object({
  // se le da propiedades a email y password
  email: string()
    .required("Email is required")
    .email("Must be a valid email address."),
  password: string().required("Password is required"),
});
