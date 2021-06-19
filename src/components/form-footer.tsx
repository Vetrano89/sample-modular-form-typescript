import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ReactComponent as BackArrow } from '../img/back-arrow.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
      minHeight: 'auto' //Override min-height on Material-UI toolbar
    }
  }),
);

interface TopNavProps {
  title?: string
}

export const FormFooter: FC<TopNavProps> = ({ title = 'Description and title' }): ReactElement => {
  const classes = useStyles();

  return (
    <FlexBox>
      <Button
        color="secondary"
        startIcon={<BackArrow />}
      >
        Back
      </Button>
      <Button variant="contained" color="primary" disableElevation>
        Next
      </Button>
    </FlexBox>
  );
}

export default FormFooter;

/* Custom styled component */

/* TODO: Make a generic Flex component? */
const FlexBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`
    },
  }),
)(Box);