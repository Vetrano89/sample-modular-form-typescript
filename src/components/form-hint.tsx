import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const FormHint = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      fontSize: 11,
      paddingTop: theme.spacing(1),
      color: '#717171'
    },
  }),
)(Box);

export default FormHint;