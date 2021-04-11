import React from 'react'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))
function Delivery() {
    const classes = useStyles()
  return (
    <form autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Information</Typography>
          <TextField
            variant="outlined"
            name="name"
            label="name"
            placeholder="Enter your name"
            fullWidth
          />
          <TextField
            variant="outlined"
            name="email"
            label="email"
            placeholder="Enter your email"
            fullWidth
          />
          <TextField
            multiline
            rows={4}
            variant="outlined"
            name="address"
            label="address"
            placeholder="Enter your address"
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Place Order
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export default Delivery
