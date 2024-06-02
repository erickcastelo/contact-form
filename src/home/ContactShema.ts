import * as yup from "yup";

export const contactSchema = yup
  .object({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please enter a valid email address"
      ),
    queryType: yup.string().required("Query Type is a required field"),
    message: yup.string().required("Message is a required field"),
    isConsent: yup
      .bool()
      .required()
      .oneOf([true], "To submit this form, please consent to being contact"),
  })
  .required();
