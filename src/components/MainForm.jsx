import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const MainForm = ({ data }) => {

    const [initData] = useState(data || {
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
    })

    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <Form
            {...layout}
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            initialValues={initData}
            validateMessages={validateMessages}>
            <Form.Item shouldUpdate
                name="title"
                label="Title"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item shouldUpdate
                name="price"
                label="Price"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Input type='number' />
            </Form.Item>
            <Form.Item shouldUpdate
                name="description"
                label="Description"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item shouldUpdate
                name="image"
                label="Image"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item shouldUpdate
                name="category"
                label="Category"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};
export default MainForm;