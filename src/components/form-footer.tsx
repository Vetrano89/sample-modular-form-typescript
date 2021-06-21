import React, { ReactElement, FC, useContext } from 'react';
import { createStyles, withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ReactComponent as BackArrow } from '../img/back-arrow.svg';
import { isInitialStep } from '../helpers/step-helpers';
import { Context } from '../App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonText: {
      color: 'white'
    },
    button: {
      width: 85,
      height: 48,
      textTransform: 'none'
    }
  }),
);

interface FormFooterProps {
  canContinue: boolean
}

export const FormFooter: FC<FormFooterProps> = ({ canContinue }): ReactElement => {
  const classes = useStyles();
  const contextValue = useContext(Context);
  const { currentStep, currentSubStepIndex, incrementStep, decrementStep } = contextValue;

  return (
    <FooterContainer>
      <Button
        className={classes.button}
        color="primary"
        startIcon={<BackArrow />}
        onClick={decrementStep}
        disabled={isInitialStep(currentStep, currentSubStepIndex)}
        size="large"
      >
        Back
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        disableElevation
        onClick={incrementStep}
        disabled={!canContinue}
      >
        <p className={classes.buttonText}>Next</p>
      </Button>
    </FooterContainer>
  );
}

export default FormFooter;

const FooterContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: `${theme.spacing(3)}px ${theme.spacing(6)}px`,
    },
  }),
)(Box);