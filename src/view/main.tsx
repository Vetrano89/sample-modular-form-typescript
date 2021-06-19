import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TopNav from '../components/top-nav';
import SignupContainer from '../components/signup-container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Main: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      {/* Router/Main view */}
      <SignupContainer renderMain={() => <div />}
        tip={{
          title: 'Cloud Architects are in high demand!',
          body: "Refer a cloud architect and earn 10% of what they earn in their first 12 months on Sagetap!"
        }} />
    </div>
  );
}

export default Main;