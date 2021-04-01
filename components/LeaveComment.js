import React, { useState } from "react";
import * as Yup from "yup";
import { Field, useFormik, FormikProvider } from "formik";
import { gql, useMutation } from "@apollo/client";
import { MainWrapper } from "./styles/FormStyles";
import { QUERY_SINGLE_POST } from "./SingleFablePage";
import styled from "styled-components";

const ErrorDivComment = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: rgba(255, 16, 16, 0.53);
  border-radius: 3px;
  margin-bottom: 1rem;

  p {
    padding: 1rem;
    font-size: 1.3rem;
    line-height: 1;
    font-weight: 600;
    align-self: flex-start;
  }
`;

const LeaveCommentStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  vertical-align: middle;
  padding: 2rem;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    padding: 0;

    label {
      font-weight: 600;
      font-size: 1.4rem;

      textarea {
        display: block;
        margin-bottom: 2rem;
        min-width: 500px;
        border: 1px solid #b4b4b4;
        border-radius: 2px;
        min-height: 80px;

        &:focus {
          outline: none;
        }
      }
    }

    button {
      align-self: flex-end;
      border: none;
      outline: none;
      border-radius: 2px;
      background-color: var(--primaryColor);
      color: var(--offWhite);
      margin-top: 1rem;
      cursor: pointer;
      transition: 0.4s;
      width: 60px;
      margin-bottom: 0rem;

      &:hover {
        background-color: #46a049;
        transition: 0.4s;
      }
    }
  }
`;

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
    }
  }
`;

const LeaveComment = ({ postId }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION, {
    refetchQueries: [
      {
        query: QUERY_SINGLE_POST,
        variables: {
          postId,
        },
      },
    ],
  });

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required("Body must be provided."),
    }),
    onSubmit: async (values) => {
      const { body } = values;

      try {
        const { data } = await createComment({
          variables: {
            postId,
            body,
          },
        });

        setSuccessMessage(`Success! Leaving Comment...`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 1000);
      } catch (error) {
        setErrorMessage(error.message.replace("GraphQL error: ", ""));
      }
    },
  });

  const showErrorMessage = () => {
    return (
      <ErrorDivComment>
        <p>{errorMessage}</p>
      </ErrorDivComment>
    );
  };

  const showSuccessMessage = () => {
    return (
      <ErrorDivComment style={{ backgroundColor: "#46a049", color: "#fff" }}>
        <p>{successMessage}</p>
      </ErrorDivComment>
    );
  };

  return (
    <FormikProvider value={formik}>
      <MainWrapper styled={{ width: "100%" }}>
        <LeaveCommentStyles onSubmit={formik.handleSubmit}>
          <fieldset>
            {errorMessage && showErrorMessage()}
            {successMessage && showSuccessMessage()}
            <label htmlFor="body">
              Leave a comment
              {formik.touched.body && formik.errors.body ? (
                <ErrorDivComment>
                  <p>{"ERROR: " + formik.errors.body}</p>
                </ErrorDivComment>
              ) : null}
              <Field
                as="textarea"
                required
                id="body"
                placeholder="Write your comment here."
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
              />
            </label>

            <button type="submit">Post</button>
          </fieldset>
        </LeaveCommentStyles>
      </MainWrapper>
    </FormikProvider>
  );
};

export default LeaveComment;
