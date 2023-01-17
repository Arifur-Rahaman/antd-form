import { Button, Rate, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://fakestoreapi.com/products')
        if (data) {
          setLoading(false)
        }
        const dataWithKey = data.map(element => ({ ...element, key: element.id }));
        setProducts(dataWithKey)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      render: (_, record) => {
        return <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
          <img src={record?.image} alt="Product" style={{ height: '40px', width: '40px' }} />
          <p>{record?.title}</p>
        </div>
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => <Rate allowHalf defaultValue={rating?.rate} disabled />
    },
    {
      title: 'Price ($)',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditFilled />} size={'large'} onClick={() => navigate(`/products/${record.id}`)} />
          <Button danger icon={<DeleteFilled />} size={'large'} />

        </Space>
      ),
    },
  ];

  if (loading) {
    return <p>Loaddin........</p>
  }
  return (
    <Table columns={columns} dataSource={products} />
  )
};
export default ProductsScreen;