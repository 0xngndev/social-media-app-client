//TODO: Find a way to properly center the form
//In the page
//Also, add Svgs at the sides
//And loading
//When refactoring, turn the errors into a custom hook

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import * as Yup from "yup";
import { MainWrapper, FormStyles } from "./styles/FormStyles";
import { ErrorDiv } from "./styles/ErrorDiv";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const REGISTER_ACCOUNT_MUTATION = gql`
  mutation register($input: RegisterInput) {
    register(registerInput: $input) {
      username
      email
      token
    }
  }
`;

const RegisterForm = ({ close }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [register] = useMutation(REGISTER_ACCOUNT_MUTATION);
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username must be provided."),
      email: Yup.string()
        .email("The email is not valid")
        .required("Email must be provided"),
      password: Yup.string()
        .required("Password must be provided")
        .min(6, "The password must be at least six characters long"),
    }),
    onSubmit: async (values) => {
      const { username, email, password } = values;

      try {
        const { data } = await register({
          variables: {
            input: {
              username,
              email,
              password,
            },
          },
        });

        setSuccessMessage(
          `User ${data.register.username} has been successfully created. You can now login...`
        );
        setTimeout(() => {
          setSuccessMessage(null);
          router.push("/");
          close();
        }, 2000);
      } catch (error) {
        setErrorMessage(error.message.replace("GraphQL error: ", ""));
      }
    },
  });

  const showErrorMessage = () => {
    return (
      <ErrorDiv>
        <p>{errorMessage}</p>
      </ErrorDiv>
    );
  };

  const showSuccessMessage = () => {
    return (
      <ErrorDiv style={{ backgroundColor: "#46a049", color: "#fff" }}>
        <p>{successMessage}</p>
      </ErrorDiv>
    );
  };

  return (
    <>
      {loginOrRegister ? (
        <LoginForm />
      ) : (
        <MainWrapper>
          <FormStyles onSubmit={formik.handleSubmit}>
            <div className="div-logo">
              <div>
                <span>F</span>
              </div>
              <span>
                500<span>Fables</span>
              </span>
            </div>
            <h2>Register</h2>
            <div className="div-divider"></div>
            <fieldset>
              {errorMessage && showErrorMessage()}
              {successMessage && showSuccessMessage()}
              <label htmlFor="email">
                Email
                <input
                  required
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </label>
              {formik.touched.email && formik.errors.email ? (
                <ErrorDiv>
                  <p>{"ERROR: " + formik.errors.email}</p>
                </ErrorDiv>
              ) : null}
              <label htmlFor="username">
                Username
                <input
                  required
                  id="username"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </label>

              {formik.touched.username && formik.errors.username ? (
                <ErrorDiv>
                  <p>{"ERROR: " + formik.errors.username}</p>
                </ErrorDiv>
              ) : null}

              <label htmlFor="password">
                Password
                <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </label>
              {formik.touched.password && formik.errors.password ? (
                <ErrorDiv>
                  <p>{"ERROR: " + formik.errors.password}</p>
                </ErrorDiv>
              ) : null}
              <button type="submit">Register</button>
              <div className="div-register">
                <p>
                  Already have an Account?{" "}
                  <span onClick={() => setLoginOrRegister(true)}>Login.</span>
                </p>
              </div>
            </fieldset>
          </FormStyles>
        </MainWrapper>
      )}
    </>
  );
};

export default RegisterForm;
