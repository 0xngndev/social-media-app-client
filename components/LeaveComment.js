import React, { useState } from "react";
import * as Yup from "yup";
import { Field, useFormik, FormikProvider } from "formik";
import { ErrorDivComment } from "./styles/ErrorDivComment";
import { gql, useMutation } from "@apollo/client";
import { LeaveCommentStyles } from "./styles/LeaveCommentStyles";
import { MainWrapper } from "./styles/FormStyles";
import { QUERY_SINGLE_POST } from "./SingleFablePage";

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
