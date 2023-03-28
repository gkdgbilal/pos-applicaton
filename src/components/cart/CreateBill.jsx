import { Button, Card, Form, Input, Modal, Select } from 'antd'
import React from 'react'

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    }

    return (
        <Modal
            title="Create Bill"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null}
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item
                    label='Customer Name'
                    name={'customerName'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input customer name',
                        }
                    ]}
                >
                    <Input
                        placeholder='Customer Name'
                    />
                </Form.Item>
                <Form.Item
                    label='Phone Number'
                    name={'phoneNumber'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input phone number',
                        }
                    ]}
                    maxLength={11}
                >
                    <Input
                        placeholder='Phone Number'
                    />
                </Form.Item>
                <Form.Item
                    label='Payment Method'
                    name={'paymentMethod'}
                    rules={[
                        {
                            required: true,
                            message: 'Please select payment method',
                        }
                    ]}
                >
                    <Select placeholder='Payment Method'>
                        <Select.Option value='Cash'>Cash</Select.Option>
                        <Select.Option value='Credit Card'>Credit Card</Select.Option>
                    </Select>
                </Form.Item>
                <Card className='w-full'>
                    <div className='flex justify-between'>
                        <span>Sub Total</span>
                        <span>549.5$</span>
                    </div>
                    <div className='flex justify-between my-2'>
                        <span>Tax Total 8%</span>
                        <span className='text-red-600'>+43.5$</span>
                    </div>
                    <div className='flex justify-between'>
                        <b>Total</b>
                        <b>549.5$</b>
                    </div>
                    <div className='flex justify-end'>
                        <Button
                            className='mt-4'
                            type='primary'
                            // onClick={() => setIsModalOpen(false)}
                            htmlType='submit'
                        >
                            Checkout
                        </Button>
                    </div>
                </Card>
            </Form>
        </Modal>
    )
}

export default CreateBill