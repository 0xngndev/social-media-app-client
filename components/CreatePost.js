//TODO: Find a way to properly center the form
//In the page
//Also, add Svgs at the sides
//And loading
//Add error if user is already logged in
//Add "X" upper right corner and give it the close function

import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorDiv } from "./styles/ErrorDiv";
import { Field, useFormik, FormikProvider } from "formik";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { FormStyles, MainWrapper } from "./styles/FormStyles";
import { QUERY_ALL_FABLES } from "./DiscoveryFeed";

const LOGIN_ACCOUNT_MUTATION = gql`
  mutation createPost($body: String!, $title: String!) {
    createPost(body: $body, title: $title) {
      id
      title
      body
      author {
        username
        id
      }
    }
  }
`;

const CreatePost = ({ close }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [register] = useMutation(LOGIN_ACCOUNT_MUTATION, {
    refetchQueries: [{ query: QUERY_ALL_FABLES }],
  });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      body: "",
      title: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required("Body must be provided."),
      title: Yup.string().required("Title must be provided"),
    }),
    onSubmit: async (values) => {
      const { body, title } = values;

      try {
        const { data } = await register({
          variables: {
            body,
            title,
          },
        });

        setSuccessMessage(`Success! Creating Post...`);
        setTimeout(() => {
          setSuccessMessage(null);
          router.push("/feed");
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
    <FormikProvider value={formik}>
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
          <h2>Create Post</h2>
          <div className="div-divider"></div>
          <fieldset>
            {errorMessage && showErrorMessage()}
            {successMessage && showSuccessMessage()}
            <label htmlFor="title">
              Title
              <input
                id="title"
                placeholder="Title"
                type="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </label>
            {formik.touched.title && formik.errors.title ? (
              <ErrorDiv>
                <p>{"ERROR: " + formik.errors.title}</p>
              </ErrorDiv>
            ) : null}
            <label htmlFor="body">
              Body
              <Field
                as="textarea"
                required
                id="body"
                placeholder="Body"
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
              />
            </label>

            {formik.touched.body && formik.errors.body ? (
              <ErrorDiv>
                <p>{"ERROR: " + formik.errors.body}</p>
              </ErrorDiv>
            ) : null}

            <button type="submit">Create</button>
          </fieldset>
        </FormStyles>
      </MainWrapper>
    </FormikProvider>
  );
};

export default CreatePost;
