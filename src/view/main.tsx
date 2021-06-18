import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TopNav from '../components/top-nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Main: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      {/* Router/Main view */}
    </div>
  );
}

export default Main;