import React, { ReactElement, FC } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { ReactComponent as LightbulbIcon } from '../img/lightbulb-icon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 308,
      border: '1px solid #DCE0E0',
      borderRadius: 4,
      boxSizing: 'border-box'
    },
    cardContent: {
      padding: theme.spacing(3)
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    tipIcon: {
      height: 32,
      width: 32,
      paddingBottom: theme.spacing(2)
    },
    title: {
      whiteSpace: 'nowrap',
      textAlign: 'left'
    },
    body: {
      textAlign: 'left'
    }
  }),
);

export interface TipProps {
  title: string;
  body: string;
  tertiary?: () => ReactElement;
}

export const Tip: FC<TipProps> = ({ title, body, tertiary }): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <FlexBox>
          <Icon className={classes.tipIcon} aria-label="logo">
            <LightbulbIcon />
          </Icon>
          <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.body} color="textSecondary" gutterBottom>
            {body}
          </Typography>
        </FlexBox>
      </CardContent>
    </Card >
  );
}

export default Tip;

/* Custom styled component */

/* TODO: Make a generic Flex component? */
const FlexBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column',
      width: '100%',
      height: '100%'
    },
  }),
)(Box);