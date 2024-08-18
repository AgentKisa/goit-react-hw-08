import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { selectAuthIsError } from "../../redux/auth/selectors";

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthIsError);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    if (logIn.fulfilled.match(resultAction)) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
        {error && <div className={css.error}>Incorrect name or password!</div>}
      </Form>
    </Formik>
  );
}
