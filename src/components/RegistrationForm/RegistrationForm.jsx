import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { selectAuthIsError } from "../../redux/auth/selectors";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthIsError);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    if (register.fulfilled.match(resultAction)) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
        {error && <div className={css.error}>Registration failed!</div>}
      </Form>
    </Formik>
  );
}
