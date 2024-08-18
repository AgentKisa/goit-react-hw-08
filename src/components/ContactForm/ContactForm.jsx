import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const ContactForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Name must be more than 3 chars!")
      .max(50, "Name must be less than 50 chars"),
    number: Yup.string().required("Required!"),
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    dispatch(
      addContactThunk({
        name: data.name,
        number: String(data.number),
      })
    );
    actions.resetForm();
  };

  return (
    <div className={s.formContainer}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label>
            <span>Number:</span>
            <Field name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
