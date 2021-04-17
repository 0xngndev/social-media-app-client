//TODO: Find a way to properly center the form
//In the page
//Also, add Svgs at the sides
//And loading
//Add "X" upper right corner and give it the close function
//See if u can refetch onSubmission cause reload is super hacky

import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorDiv } from "./styles/ErrorDiv";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { FormStyles, MainWrapper } from "./styles/FormStyles";
import RegisterForm from "./RegisterForm";
import Router from "next/router";

const LOGIN_ACCOUNT_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      token
    }
  }
`;

const LoginForm = ({ close }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authenticateUser] = useMutation(LOGIN_ACCOUNT_MUTATION);
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username must be provided."),
      password: Yup.string().required("Password must be provided"),
    }),
    onSubmit: async (values) => {
      const { username, password } = values;

      try {
        const { data } = await authenticateUser({
          variables: {
            username,
            password,
          },
        });

        setSuccessMessage(`Success! Redirecting...`);

        const { token } = data.login;
        localStorage.setItem("token", token);

        setTimeout(() => {
          setSuccessMessage(null);
          router.push("/feed");
          Router.events.on("routeChangeComplete", () => {
            Router.reload();
          });
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
        <RegisterForm />
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
            <h2>Login</h2>
            <div className="div-divider"></div>
            <fieldset>
              {errorMessage && showErrorMessage()}
              {successMessage && showSuccessMessage()}
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
              <button type="submit">Login</button>
              <div className="div-divider"></div>
              <div className="div-register">
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setLoginOrRegister(true)}>
                    Register now.
                  </span>
                </p>
              </div>
            </fieldset>
          </FormStyles>
        </MainWrapper>
      )}
    </>
  );
};

export default LoginForm;
