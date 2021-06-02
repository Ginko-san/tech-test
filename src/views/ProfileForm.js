import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import Paper from '@material-ui/core/Paper';
import ProfileDetails, { validationSchema, getInitialFormValues } from '../components/ProfileDetails';
import db from '../firebase.config';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const ProfileForm = ({ setDataSubmited }) => {
  let handleSubmitForm;
  const classes = useStyles();

  const onSubmitData = async (values) => {
    try {
      const collectionRef = db.collection('profiles');
      await collectionRef.add(values);

      const concatenatedData = Object.values(values).join('|');
      setDataSubmited(concatenatedData);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(err);
    }
  };

  const bindFormikProps = (formikProps) => {
    handleSubmitForm = formikProps.submitForm;
  };

  return (
    <Paper className={classes.root} variant="outlined">
      <Formik
        initialValues={getInitialFormValues()}
        validationSchema={validationSchema}
        onSubmit={onSubmitData}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikProps) => {
          bindFormikProps(formikProps);

          return (
            <Form noValidate autoComplete="off">
              <ProfileDetails form={formikProps} onClick={handleSubmitForm} />
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

ProfileForm.propTypes = {
  setDataSubmited: PropTypes.func.isRequired,
};

export default ProfileForm;
