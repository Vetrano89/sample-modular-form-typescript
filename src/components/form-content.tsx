import React, { ReactElement, FC, useContext, useState } from 'react';
import FormFooter from './form-footer';
import Typography from '@material-ui/core/Typography';
import { Context } from '../App';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required.'),
  lastName: yup.string().required('Last name is required.'),
  jobTitle: yup.string().required('Job title is required.'),
  industry: yup.string().required('Industry is required.'),
  companySize: yup.string().required('Company size is required.'),
  location: yup.string().nullable().required('Location is required.'),
});

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textAlign: 'left',
  },
  formContent: {
    paddingTop: theme.spacing(20),
    minHeight: '750px'
  }
}));

export const FormContent: FC = (): ReactElement => {
  const classes = useStyles();
  const [hasError, setHasErrors] = useState(false);
  const context = useContext(Context);
  const { renderFormContent, title } = context.currentStep.subSteps[context.currentSubStepIndex];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      industry: '',
      companySize: '',
      location: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.formContent}>
        <Typography variant="h4" className={classes.title}>{title}</Typography>
        <Box>
          {renderFormContent && renderFormContent(formik, setHasErrors)}
        </Box>
      </Container>
      <FormFooter canContinue={!hasError} />
    </>

  );
}

export default FormContent;