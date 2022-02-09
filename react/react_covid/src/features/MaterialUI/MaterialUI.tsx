import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    backgroundColor: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue"
  }
})

const MaterialUI : React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      {/* propsよりuseStyleの適用を優先する */}
      <Typography className={classes.typoStyle} color="secondary" variant="h1" gutterBottom component="h2">
        Hello UI
      </Typography>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
