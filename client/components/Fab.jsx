import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButton(props) {
  const classes = useStyles();
  const ref= useRef(null)




  return (
    <div className={classes.root}>
      <Fab  ref={ref} color="primary" aria-label="add" size="small" onClick={() => console.log(ref.current)} >
        <AddIcon />
      </Fab>
    </div>
  );
}