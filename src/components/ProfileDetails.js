import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Field } from 'formik';

const useStyles = makeStyles(() => ({
  fieldBox: {
    width: '50%',
  },
  item: {
    width: '90%',
  },
}));

export const getInitialFormValues = (values = []) => ({
  name: values[0] || '',
  age: values[1] || '',
  isSingle: values[2] || false,
  birthday: values[3] || new Date().toLocaleDateString(),
  email: values[4] || '',
});

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Your name it is required.'),
  age: Yup.number().required('Your age it is required'),
  isSingle: Yup.boolean(),
  birthday: Yup.date().required('Your birthday it is required'),
  email: Yup.string()
    .email('This field needs to be filled with an email')
    .required('Your email it is essential for us'),
});

// eslint-disable-next-line max-len
const ProfileDetails = ({
  form: { values, errors, setFieldValue }, onClick, actionLabel, disableFields,
}) => {
  const classes = useStyles();

  const items = [
    {
      id: 'name',
      type: 'text',
      label: 'Your name',
      value: values.username,
      required: true,
    },
    {
      id: 'age',
      type: 'number',
      label: 'Your age',
      value: values.age,
      required: true,
    },
    {
      id: 'birthday',
      type: 'date-local',
      label: 'Birthday',
      value: values.birthday,
      required: true,
    },
    {
      id: 'email',
      type: 'email',
      label: 'Your email',
      value: values.email,
      required: true,
    },
    {
      id: 'isSingle',
      type: 'checkbox',
      label: 'Are you single?',
      value: values.isSingle,
      required: true,
    },
  ];

  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" my={1} mx={2} width={1}>
        {items.map((item) => (
          <Box key={item.id} className={classes.fieldBox}>
            {item.type !== 'checkbox' ? (
              <Field
                name={item.id}
                required={item.required}
              >
                {({ field }) => (
                  <TextField
                    type={item.type}
                    label={item.label}
                    className={classes.item}
                    value={values[item.id]}
                    error={!!errors[item.id]}
                    helperText={errors[item.id] || ''}
                    disabled={disableFields}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...field}
                  />
                )}
              </Field>
            ) : (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={values[item.id] === 'true'}
                    color="primary"
                    onChange={({ target }) => setFieldValue(item.id, target.checked.toString())}
                    name={item.id}
                  />
                )}
                disabled={disableFields}
                label={item.label}
              />
            )}
          </Box>
        ))}
      </Box>
      {onClick && (
        <Box display="flex" justifyContent="center" mt={3} mb={2}>
          <Button variant="contained" color="primary" onClick={() => onClick()}>
            {actionLabel}
          </Button>
        </Box>
      )}
    </>
  );
};

ProfileDetails.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  onClick: null,
  actionLabel: 'Submit',
  disableFields: false,
};

ProfileDetails.propTypes = {
  form: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    values: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  /**
   * Function in charge of form submit action
   */
  onClick: PropTypes.func,
  /**
   * Label string for action button
   */
  actionLabel: PropTypes.string,
  /**
   * Boolean in charge of disable fields if needed
   */
  disableFields: PropTypes.bool,
};

export default ProfileDetails;
