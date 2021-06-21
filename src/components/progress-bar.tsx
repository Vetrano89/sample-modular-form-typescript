import React, { FC, ReactElement } from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

/* TODO: Remove border-radius when progress complete  */

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  progressBar: {
    backgroundColor: 'transparent',
    height: 9,
  }
});

interface ProgressBarProps {
  value?: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RoundedLinearProgress className={classes.progressBar} variant="determinate" value={value} />
    </div>
  );
}

export default ProgressBar

const RoundedLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 10,
    },
    colorPrimary: {
      backgroundColor: '#C4C4C446',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);