import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { string } from "yup/lib/locale";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
  confirm: Yup.string().required("Confirming your password is required!"),
  age: Yup.number()
    .required("Age is required!")
    .min(16, "You must be at least 16 years!"),
  gender: Yup.string().required("Gender is required!"),
});

interface LoginFields {
  username: string;
  email: string;
  password: string;
  confirm: string;
  age: string;
  gender: string;
}

interface UseSignUpFormOptions {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useSignUpFormik = ({ onSubmit }: UseSignUpFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
      age: "",
      gender: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
