import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TopNav from '../components/top-nav';
import SignupContainer from '../components/signup-container';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%',
    },
  }),
);

export const Main: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      {/* Main view */}
      <SignupContainer />
    </div>
  );
}

export default Main;