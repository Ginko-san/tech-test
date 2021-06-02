import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, Form } from 'formik';
import Paper from '@material-ui/core/Paper';
import ProfileDetails, { getInitialFormValues } from '../components/ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  parseField: {
    width: '100%',
  },
}));

const ProfileForm = ({ dataSubmited }) => {
  let handleValues;
  const classes = useStyles();

  const [stringToParse, setStringToParse] = useState('');

  useEffect(() => {
    setStringToParse(dataSubmited);
  }, [dataSubmited]);

  const onClick = () => {
    const valuesParsed = stringToParse.split('|');
    const valuesObject = getInitialFormValues(valuesParsed);
    handleValues(valuesObject);
    // eslint-disable-next-line no-alert, no-undef
    if (dataSubmited !== stringToParse) alert('Original data is different from parsed');
  };

  const bindFormikProps = (formikProps) => {
    handleValues = formikProps.setValues;
  };

  return (
    <Paper className={classes.root} variant="outlined">
      <Box m={2}>
        <TextField
          name="toBeParsed"
          label="String to parse"
          value={stringToParse}
          onChange={(e) => {
            e.preventDefault();
            setStringToParse(e.target.value);
          }}
          className={classes.parseField}
          required
        />
      </Box>
      <Formik
        initialValues={getInitialFormValues()}
      >
        {(formikProps) => {
          bindFormikProps(formikProps);

          return (
            <Form noValidate autoComplete="off">
              <ProfileDetails form={formikProps} onClick={onClick} actionLabel="Split" disableFields />
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

ProfileForm.propTypes = {
  dataSubmited: PropTypes.string.isRequired,
};

export default ProfileForm;
