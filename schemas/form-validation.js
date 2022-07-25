import * as Yup from "yup";

export const formValidation = Yup.object({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(255, "Must be 255 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(255, "Must be 255 characters or less")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(5, "Must be 5 characters or more")
    .max(255, "Must be 255 characters or less")
    .required("Required"),
  mail: Yup.string()
    .min(5, "Must be 5 characters or more")
    .max(200, "Must be 200 characters or less")
    .email("Invalid email address")
    .required("Required"),
  adress: Yup.string().max(1024, "Must be 1024 characters or less").nullable(),
  description: Yup.string()
    .max(1024, "Must be 1024 characters or less")
    .nullable(),
  imageUrl: Yup.string()
    .max(1024, "Must be 1024 characters or less")
    .nullable(),
});
