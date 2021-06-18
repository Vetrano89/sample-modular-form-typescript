import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import ProgressBar from './progress-bar';
import { ReactComponent as SageTapIcon } from '../img/sage-tap-icon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    titleIconContainer: {
      justifyContent: 'space-between',
      width: '100%'
    },
    menuButton: {
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

interface TopNavProps {
  title?: string
}

export const TopNav: FC<TopNavProps> = ({ title = 'Description and title' }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters className={classes.toolbar}>
          <FlexBox className={classes.titleIconContainer}>
            <FlexBox>
              <Icon className={classes.menuButton} aria-label="logo">
                <SageTapIcon />
              </Icon>
              <Typography variant="h6" className={classes.title} color="textPrimary">
                {title}
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
      <ProgressBar value={10}></ProgressBar>
    </div>
  );
}

export default TopNav;

/* Custom styled component */

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