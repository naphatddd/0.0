import React, { useState, useEffect } from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import CategroyList from './CategoryList'
import ProductItem from './ProductItem'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true)
      const { data } = await axios.get(
        `/products`
      )
      setProducts(data)
      setIsLoading(false)
    }
    loadProduct()
  }, [])

  return (
    <>
      <Typography variant="h2" component="h1" className={classes.root}>
        All Products
      </Typography>
      <CategroyList />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={products.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
