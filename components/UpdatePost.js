//TODO: Abstract

import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorDiv } from "./styles/ErrorDiv";
import { Field, useFormik, FormikProvider } from "formik";
import { gql, useMutation } from "@apollo/client";
import { FormStyles, MainWrapper } from "./styles/FormStyles";
import { QUERY_ALL_FABLES } from "./DiscoveryFeed";
import { QUERY_FOLLOWS_FABLES } from "./FablesFeed";
import { QUERY_SINGLE_USER_ID } from "./SingleUserPage";

const UPDATE_POST_MUTATION = gql`
  mutation updatePost($postId: ID!, $body: String!, $title: String!) {
    updatePost(postId: $postId, body: $body, title: $title) {
      id
    }
  }
`;

const UpdatePost = ({
  postId,
  close,
  userId,
  userPage,
  discoveryPage,
  feedPage,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [updatePostUserPage] = useMutation(UPDATE_POST_MUTATION, {
    refetchQueries: [
      {
        query: QUERY_SINGLE_USER_ID,
        variables: {
          userId,
        },
      },
    ],
  });

  const [updatePostDiscovery] = useMutation(UPDATE_POST_MUTATION, {
    refetchQueries: [
      {
        query: QUERY_ALL_FABLES,
        variables: {
          sortBy: "NEWEST",
          page: 1,
          limit: 3,
        },
      },
    ],
  });

  const [updatePostFeed] = useMutation(UPDATE_POST_MUTATION, {
    refetchQueries: [
      {
        query: QUERY_FOLLOWS_FABLES,
        variables: {
          sortBy: "NEWEST",
          page: 1,
          limit: 3,
        },
      },
    ],
  });

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
        if (discoveryPage) {
          const { data } = await updatePostDiscovery({
            variables: {
              postId,
              body,
              title,
            },
          });
        }
        if (feedPage) {
          const { data } = await updatePostFeed({
            variables: {
              postId,
              body,
              title,
            },
          });
        }
        if (userPage) {
          const { data } = await updatePostUserPage({
            variables: {
              postId,
              body,
              title,
            },
          });
        }

        setSuccessMessage(`Success! Updating Post...`);
        setTimeout(() => {
          setSuccessMessage(null);
          close();
        }, 2000);
        setErrorMessage(null);
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
          <h2>Update Post</h2>
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

            <button type="submit">Update</button>
          </fieldset>
        </FormStyles>
      </MainWrapper>
    </FormikProvider>
  );
};

export default UpdatePost;
