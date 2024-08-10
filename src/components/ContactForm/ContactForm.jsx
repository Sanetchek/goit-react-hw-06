import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onFormSubmit }) {
  const fieldId = useId()

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Max symbols 50!")
      .required("This field is required!"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 227-91-26"
      )
      .required("This field is required!")
  });

  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit({
      ...values,
      id: nanoid()
    })
    resetForm()
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={`name-${fieldId}`}>Name</label>
          <Field type="text" id={`name-${fieldId}`} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.field}>
          <label htmlFor={`number-${fieldId}`}>Phone Number</label>
          <Field type="text" id={`number-${fieldId}`} name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}










