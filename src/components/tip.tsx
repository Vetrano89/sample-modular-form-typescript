import React, { ReactElement, FC, ReactNodeArray } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { ReactComponent as LightbulbIcon } from '../img/lightbulb-icon.svg';
import reactStringReplace from 'react-string-replace';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 308,
      border: '1px solid #DCE0E0',
      borderRadius: 4,
      boxSizing: 'border-box'
    },
    cardContent: {
      padding: theme.spacing(6)
    },
    tipIcon: {
      height: 32,
      width: 32,
      paddingBottom: theme.spacing(4)
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
  tertiary?: () => ReactElement; // To render custom components after the tip body
}

export const Tip: FC<TipProps> = ({ title, body }): ReactElement => {
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
            {highlightMarkedText(body)}
          </Typography>
        </FlexBox>
      </CardContent>
    </Card >
  );
}

/* Custom styled component for #highlightMarkedText */
const HighlightedText = withStyles(() =>
  createStyles({
    root: {
      color: '#00A0FF',
      display: 'inline'
    },
  }),
)(Typography);

/* Dynamically highlight any text that starts or ends with @ */
function highlightMarkedText(text: string): ReactNodeArray {
  const startsAndEndsWithAtSymbolRegEx = /[@_]{1}([^@_]+)[@_]{1}/g;
  return reactStringReplace(text, startsAndEndsWithAtSymbolRegEx, (match, i) => (
    <HighlightedText key={i}>{match}</HighlightedText>
  ));
}

export default Tip;

const FlexBox = withStyles(() =>
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