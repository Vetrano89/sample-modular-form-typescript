import React, { ReactElement, FC, useContext } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Tip from './tip';
import Box from '@material-ui/core/Box';
import { Context } from '../App';
import FormContent from './form-content';

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
      paddingTop: theme.spacing(30),
      paddingLeft: theme.spacing(6)
    }
  }),
);

export const SignupContainer: FC = (): ReactElement => {
  const classes = useStyles();
  const context = useContext(Context);
  const { tip, renderSecondaryContent } = context.currentStep.subSteps[context.currentSubStepIndex];

  return (
    <SplitFlexBox>
      <div className={classes.main}>
        <FormContent />
      </div>
      <div className={classes.secondary}>
        {renderSecondaryContent && renderSecondaryContent()}
        {tip && (
          <div className={classes.tip}>
            <Tip {...tip} />
          </div>
        )}
      </div>
    </SplitFlexBox>
  );
}

export default SignupContainer;

const SplitFlexBox = withStyles(() =>
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