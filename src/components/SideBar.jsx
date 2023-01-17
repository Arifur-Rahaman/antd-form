import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { RiProductHuntLine } from "react-icons/ri";
import { Layout, Menu, theme } from 'antd';
import ProductsScreen from '../pages/ProductsScreen';
import ProductAddScreen from '../pages/ProductAddScreen';
import ProductEditScreen from '../pages/ProductEditScreen';

const { Header, Sider, Content } = Layout;

const SideBar = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <RiProductHuntLine size={20}/>,
                            label: 'Products',
                            onClick: () => navigate('/')
                        },
                        {
                            key: '2',
                            icon: <PlusOutlined />,
                            label: 'Add Product',
                            onClick: ()=>navigate('/addProduct')
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Routes>
                        <Route path='/' element={<ProductsScreen />} />
                        <Route path='/products/:id' element={<ProductEditScreen/>} />
                        <Route path='/addProduct' element={<ProductAddScreen />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SideBar;