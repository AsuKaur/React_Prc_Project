import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Footer.css";
import "./Button.css";
import "./City.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mssg: "",
  add: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  mssg: Yup.string().required("Required"),
  add: Yup.string().required("Required"),
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <div className="input-areas ">
          <label className="cards__item__text" htmlFor="firstName">
            First Name
          </label>
          <br />
          <Field
            className="inputfield"
            name="firstName"
            type="text"
            id="firstName"
          />
          <ErrorMessage name="firstName" />
        </div>
        <div className="input-areas">
          <label className="cards__item__text" htmlFor="lastName">
            Last Name
          </label>
          <br />
          <Field
            className="inputfield"
            name="lastName"
            type="text"
            id="lastName"
          />

          <ErrorMessage name="lastName" />
        </div>
        <div className="input-areas">
          <label className="cards__item__text" htmlFor="email">
            Email
          </label>
          <br />
          <Field className="inputfield" name="email" type="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="input-areas">
          <label className="cards__item__text" htmlFor="mssg">
            Message
          </label>
          <br />
          <Field
            className="inputfield"
            name="mssg"
            type="text"
            component="textarea"
            id="mssg"
          />
          <ErrorMessage name="mssg" />
        </div>
        {/* <div className="input-areas">
          <label className='cards__item__text' htmlFor="mssg">Message</label>
          <Field name="mssg">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input id="mssg" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="mssg" />
          </div>*/}

        <button
          type="submit"
          className="form-element cards__item__text btn btn--primary btn--medium"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
