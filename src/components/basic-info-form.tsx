import React, { ReactElement, FC, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormProps } from '../config/form-config';
import FormLabel from './form-label';
import FormHint from './form-hint';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { hasErrors } from '../helpers/form-helpers';

const fields = [
  'firstName',
  'lastName',
  'jobTitle',
  'industry',
  'companySize',
  'location',
];

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const BasicInfoForm: FC<FormProps> = ({ formik, setHasErrors }): ReactElement => {
  const classes = useStyles();
  console.log('Formik');
  console.log(formik);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formTouched = Object.keys(formik.touched).length > 0;
    formik.handleChange(event);
    setHasErrors(!formTouched && hasErrors(formik, fields));
  }

  return (
    <>
      <div className={classes.form}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <FormLabel>First Name</FormLabel>
            <TextField
              autoComplete="fname"
              id="firstName"
              name="firstName"
              onChange={handleOnChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              autoFocus
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Last Name</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="lastName"
              name="lastName"
              autoComplete="lname"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Job Title</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="jobTitle"
              name="jobTitle"
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            />
            <FormHint>e.g. Cloud Security Architect</FormHint>
            <FormHelperText error>
              {formik.touched.jobTitle && formik.errors.jobTitle}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Industry</FormLabel>
            <Select
              variant="outlined"
              id="industry"
              name="industry"
              value={formik.values.industry}
              error={formik.touched.industry && Boolean(formik.errors.industry)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            >
              <MenuItem value="financialServices">
                Financial Services
              </MenuItem>
              <MenuItem value="notFinancialServices">
                Not Financial Services
              </MenuItem>
              <MenuItem value="secretFinancialServices">
                Secret (Financial) Services
              </MenuItem>
            </Select>
            <FormHelperText error>
              {formik.touched.industry && formik.errors.industry}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Company Size</FormLabel>
            <Select
              variant="outlined"
              id="companySize"
              name="companySize"
              value={formik.values.companySize}
              error={formik.touched.companySize && Boolean(formik.errors.companySize)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            >
              <MenuItem value="underFifty">
                Less than 50 Employees
              </MenuItem>
              <MenuItem value="fiftyToHundred">
                50-100 Employees
              </MenuItem>
              <MenuItem value="65535">
                65535 Employees
              </MenuItem>
            </Select>
            <FormHelperText error>
              {formik.touched.companySize && formik.errors.companySize}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Location</FormLabel>
            <Autocomplete
              id="location"
              options={['San Francisco, CA', 'Philadelphia, PA', 'New York, NY', 'Chicago, IL', 'Klingonii']}
              value={formik.values.location}
              onChange={(e, value) => formik.setFieldValue("location", value)}
              onBlur={formik.handleBlur}
              renderInput={(params) => <TextField
                {...params}
                variant="outlined"
                id="location"
                name="location"
                error={formik.touched.location && Boolean(formik.errors.location)}
              />}
            />
            <FormHint>e.g. San Francisco, CA</FormHint>
            <FormHelperText error>
              {formik.touched.location && formik.errors.location}
            </FormHelperText>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default BasicInfoForm;