import React from 'react';
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    backgroundColor: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue"
  },
  paperStyle: {
    backgroundColor: "orange",
    height: "50px",
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        {/* xs mdを設定することでbreak pointの設定ができる */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>

      <Grid 
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>Demo</Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>Test</Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="space-around">
          <Grid item xs={3}>
            Grid with multiple breakpoints
            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.
            For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.
          </Grid>
          <Grid item xs={3}>
            Grid with multiple breakpoints
            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.
            For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.
          </Grid>
          <Grid item xs={3}>
            Grid with multiple breakpoints
            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.
            For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
