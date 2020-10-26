import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import axios from "axios";

import FormikField from "./FormikField";
import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const emailAddresses = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string()
    .lowercase()
    .email("Must be a valid email!")
    .notOneOf(emailAddresses, "Email already taken!")
    .required("Required!"),
  password: Yup.string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")
    .matches(numericRegex, "one number required!")
    .min(8, "Minimum 8 characters required!")
    .required("Required!"),
});

function App() {
  const handleSubmit = (values, { resetForm }) => {
    alert("Ready to Submit?");
    const val = {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data: values,
    };
    const check = {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data: {
        email: values.email,
      },
    };
    axios.post(`/user/12345`, check).then((res) => {
      res.data.status == "OK"
        ? axios.post(`/user/12345`, val).then(() => {
            console.log("Done");
          })
        : alert("Chose a new Email");
    });
    resetForm();
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="firstName" label="First Name" required />
              <FormikField name="lastName" label="Last Name" required />
              <FormikField name="email" label="Email" required />
              <FormikField
                name="password"
                label="Password"
                required
                type="password"
              />
              <Button
                variant="contained"
                color="inherit"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
