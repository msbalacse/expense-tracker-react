import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-2">
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <button type="submit" disabled={isSubmitting}>
                save
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UserProfile;
