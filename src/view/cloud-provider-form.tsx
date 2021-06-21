import React, { ReactElement, FC, ChangeEvent, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { FormProps } from '../config/form-config';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { ReactComponent as AwsIcon } from '../img/aws-icon.svg';
import { ReactComponent as AzureIcon } from '../img/azure-icon.svg';
import { ReactComponent as OracleIcon } from '../img/oracle-icon.svg';
import { FormikProps } from 'formik';
import PercentSlider from '../components/percent-slider';

/* TODO: Move this to a better common location*/
export interface CloudProvider {
  name: 'aws' | 'azure' | 'oracle';
  percentage: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    paddingTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    width: '100%'
  },
  formLabel: {
    width: '100px'
  }
}));

export const CloudProviderForm: FC<FormProps> = ({ formik, setHasErrors }): ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const noProviderSelected = formik.values.cloudProviders.length === 0;
    const totalPercentSelected = getPercentSelected(formik);
    setHasErrors(noProviderSelected || totalPercentSelected !== 100);
  }, [formik])

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCloudProvider = event.target.value;
    const hasSelectedCloudProvider = cloudProviderSelected(selectedCloudProvider, formik);
    if (hasSelectedCloudProvider) {
      formik.setFieldValue('cloudProviders', formik.values.cloudProviders.filter(
        (cp: CloudProvider) => cp.name !== selectedCloudProvider)
      );
    } else {
      formik.setFieldValue('cloudProviders', [...formik.values.cloudProviders, { name: selectedCloudProvider, percentage: 100 }]);
      formik.handleChange(event);
    }
  }

  /* TODO: create a reusable component to represent the checkbox and percent slider combo */

  const awsSelected = cloudProviderSelected('aws', formik);
  const oracleSelected = cloudProviderSelected('oracle', formik);
  const azureSelected = cloudProviderSelected('azure', formik);

  /* TODO: add to yup schema */
  const percentError = formik.values.cloudProviders.length && getPercentSelected(formik) !== 100
    ? 'Ensure your cloud providers add up to 100%'
    : '';

  console.log(formik);

  return (
    <div className={classes.form}>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={classes.formLabel}
            control={<Checkbox checked={awsSelected} onChange={handleOnChange} value="aws" />}
            label={<Icon><AwsIcon /></Icon>}
          />
          {awsSelected && <PercentSlider formik={formik} name="aws" />}
          <FormControlLabel
            className={classes.formLabel}
            control={<Checkbox checked={azureSelected} onChange={handleOnChange} value="azure" />}
            label={<Icon><AzureIcon /></Icon>}
          />
          {azureSelected && <PercentSlider formik={formik} name="azure" />}
          <FormControlLabel
            className={classes.formLabel}
            control={<Checkbox checked={oracleSelected} onChange={handleOnChange} value="oracle" />}
            label={<Icon><OracleIcon /></Icon>}
          />
          {oracleSelected && <PercentSlider formik={formik} name="oracle" />}
        </FormGroup>
        {/* TODO: prevent error from showing before form is touched */}
        <FormHelperText error>{percentError || formik.errors.cloudProviders}</FormHelperText>
      </FormControl>
    </div >
  );
}

export default CloudProviderForm;

/* TODO: Move this to a better common location*/
// TODO: Define all possible fields and allow an object with any of those fields (instead of any)
// eslint-disable-next-line
export function cloudProviderSelected(cloudProvider: string, formik: FormikProps<any>): boolean {
  return formik.values.cloudProviders.some(
    (cp: CloudProvider) => cp.name === cloudProvider
  );
}

// TODO: Define all possible fields and allow an object with any of those fields (instead of any)
// eslint-disable-next-line
export function getPercentSelected(formik: FormikProps<any>): number {
  return formik.values.cloudProviders.reduce((acc: number, cp: CloudProvider) => {
    acc = acc + cp.percentage;
    return acc;
  }, 0)
}