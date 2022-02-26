import React, { useEffect } from 'react'
import styles from './DashBoard.module.css'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Container, Grid } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'

import { fetchAsyncGetDaily, selectDaily } from '../covidSlice'
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import SwithCountry from "../SwitchCountry/SwitchCountry";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}))

const DashBoard: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const daily = useSelector(selectDaily)

  //ブラウザ起動時に日本をデフォルト値として非同期関数を動作させる
  useEffect(() =>{
    dispatch(fetchAsyncGetDaily('Japan'))
  }, [dispatch])

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live DashBoard
          </Typography>
          <div>
            <Typography variant="body1">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>
        <div className={styles.container}>
          <SwithCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default DashBoard