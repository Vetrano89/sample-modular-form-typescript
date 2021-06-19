import React, { ReactElement, FC, useContext } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Tip from './tip';
import Box from '@material-ui/core/Box';
import FormFooter from './form-footer';
import { Context } from '../App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '56%',
      height: '100%',
      position: 'relative',
    },
    secondary: {
      width: '44%',
      height: '100%',
      backgroundColor: 'rgba(235, 248, 255, 0.4)',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%'
    },
    tip: {
      paddingTop: theme.spacing(15),
      paddingLeft: theme.spacing(3)
    }
  }),
);

interface SignupContainerProps {
  renderMain: () => ReactElement;
  renderSecondary?: () => ReactElement;
}

export const SignupContainer: FC<SignupContainerProps> = ({ renderMain, renderSecondary }): ReactElement => {
  const classes = useStyles();
  const context = useContext(Context);

  const tip = context && context.currentStep.subSteps[context.currentSubStepIndex].tip;

  return (
    <SplitFlexBox>
      <div className={classes.main}>
        {renderMain()}
        <div className={classes.footer}>
          <FormFooter />
        </div>
      </div>
      <div className={classes.secondary}>
        {renderSecondary && renderSecondary()}
        {tip && <div className={classes.tip}>
          <Tip {...tip} /> </div>}
      </div>
    </SplitFlexBox>
  );
}

export default SignupContainer;

/* Custom styled component */

/* TODO: Make a generic Flex component? */
const SplitFlexBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
    },
  }),
)(Box);