import React, { ReactElement, FC, useContext } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import ProgressBar from './progress-bar';
import { ReactComponent as SageTapIcon } from '../img/sage-tap-icon.svg';
import { Context } from '../App';
import { getStepProgress } from '../helpers/step-helpers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    titleIconContainer: {
      justifyContent: 'space-between',
      width: '100%'
    },
    sagetapIcon: {
      marginRight: theme.spacing(5),
      height: '34px', // Exact height from imported Figma asset
      width: '35px', // Exact width from imported Figma asset
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
      minHeight: 'auto' //Override min-height on Material-UI toolbar
    }
  }),
);

export const TopNav: FC = (): ReactElement => {
  const classes = useStyles();
  const context = useContext(Context);

  const { currentStep, currentSubStepIndex } = context;

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters className={classes.toolbar}>
          <FlexBox className={classes.titleIconContainer}>
            <FlexBox>
              <Icon className={classes.sagetapIcon} aria-label="logo">
                <SageTapIcon />
              </Icon>
              <Typography variant="h5" className={classes.title} color="textPrimary">
                {currentStep.title}
              </Typography>
            </FlexBox>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("Clicked save and exit");
              }}
            >
              Save and Exit
            </Link>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <ProgressBar value={getStepProgress(currentStep, currentSubStepIndex)}></ProgressBar>
    </div>
  );
}

export default TopNav;

/* TODO: Make a generic Flex component? */
const FlexBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  }),
)(Box);