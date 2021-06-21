import React, { FC, ReactElement, ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { FormikProps } from 'formik';
import { CloudProvider } from '../view/cloud-provider-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const marks = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
    label: '100%'
  },
];

function valuetext(value: number) {
  return `${value}%`;
}

interface PercentSliderProps {
  name: string;
  // TODO: Define all possible fields and allow an object with any of those fields (instead of any)
  // eslint-disable-next-line
  formik: FormikProps<any>
}

export const PercentSlider: FC<PercentSliderProps> = ({ name, formik }): ReactElement => {
  const classes = useStyles();
  const value = formik.values.cloudProviders.find((cp: CloudProvider) => cp.name === name).percentage;

  // TODO: Slider has a ChangeEvent type with {}, investigate further to find correct way of typing 
  // eslint-disable-next-line
  const handleOnChange = (event: ChangeEvent<{}>, newPercentValue: number | number[]): void => {
    if (value !== newPercentValue) {
      formik.setFieldValue('cloudProviders', formik.values.cloudProviders.map((cp: CloudProvider) => {
        if (cp.name === name) {
          return { name: cp.name, percentage: newPercentValue };
        } else {
          return cp;
        }
      }))
    }
  }

  console.log(value);

  return (
    <div className={classes.root}>
      <Slider
        // I would pull in Lodash for undefined/null checking but direct comparison works as well
        // https://stackoverflow.com/a/3390468/7754472 ES5
        value={value === undefined ? 100 : value}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        onChange={handleOnChange}
        valueLabelDisplay="on"
      />
    </div>
  );
}

export default PercentSlider