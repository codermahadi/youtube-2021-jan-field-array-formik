import { Card, CardContent } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ values }) => (
            <Form>
              <h1>Hello YouTube!</h1>
              
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
