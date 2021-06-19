import React, { ReactElement, FC, useContext } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { ReactComponent as BackArrow } from '../img/back-arrow.svg';
import { isInitialStep } from '../helpers/step-helpers';
import { Context } from '../App';

export const FormFooter: FC = (): ReactElement => {
  const contextValue = useContext(Context);
  const { currentStep, currentSubStepIndex, incrementStep, decrementStep } = contextValue;

  return (
    <FlexBox>
      <Button
        color="secondary"
        startIcon={<BackArrow />}
        onClick={decrementStep}
        disabled={isInitialStep(currentStep, currentSubStepIndex)}
      >
        Back
      </Button>
      <Button variant="contained" color="primary" disableElevation onClick={incrementStep}>
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