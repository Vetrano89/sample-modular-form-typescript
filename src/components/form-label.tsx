import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const FormLabel = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      fontSize: 16,
      paddingBottom: theme.spacing(3),
    },
  }),
)(Box);

export default FormLabel;