import React from 'react'
import { Container, Snackbar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProductList from 'modules/products/components/ProductList'
// import ProductDetails from 'modules/products/components/ProductDetails'
// import Cart from 'modules/cart/components/Cart'
const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />
        <ProductList />
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Snackbar
          open
          message="Helloworld"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
