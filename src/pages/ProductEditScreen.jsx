import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import MainForm from '../components/MainForm'
function ProductEditScreen() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        if (data) {
          setLoading(false)
        }
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  if (loading) {
    return <p>Loaddin........</p>
  }
  console.log(product)
  return (
    <MainForm data={product}/>
  )
}

export default ProductEditScreen