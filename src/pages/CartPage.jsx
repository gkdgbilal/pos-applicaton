import { Button, Card, message, Popconfirm, Table } from 'antd'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateBill from '../components/cart/CreateBill';
import Header from '../components/header/Header'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState('')
    const { cartItems, total, tax } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const columns = [
        {
            title: 'Product Image',
            dataIndex: 'img',
            key: 'img',
            width: 125,
            render: (img) => <img src={img} alt="" className='w-full h-20 object-cover' />
        },
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <span>{price.toFixed(2)}$</span>
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity, record) => (
                <div className='flex items-center'>
                    <Button
                        type='primary'
                        size='small'
                        className='w-full flex items-center justify-center !rounded-full'
                        icon={<PlusCircleOutlined />}
                        onClick={() => dispatch(increaseQuantity(record))}
                    />
                    <span className='font-bold w-6 inline-block text-center'>{quantity}</span>
                    <Button
                        type='primary'
                        size='small'
                        className='w-full flex items-center justify-center !rounded-full'
                        icon={<MinusCircleOutlined />}
                        onClick={() => {
                            if (quantity === 1) {
                                if (window.confirm('Are you sure you want to remove this item from cart?')) {
                                    dispatch(removeFromCart(record))
                                    message.success('Item removed from cart')
                                }
                            } else {
                                dispatch(decreaseQuantity(record))
                            }
                        }}
                    />
                </div>
            )
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (_, record) => <span>{(record.quantity * record.price).toFixed(2)}$</span>
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => <Popconfirm
                title='Are you sure you want to remove this item from cart?'
                onConfirm={() => {
                    dispatch(removeFromCart(record))
                    message.success('Item removed from cart')
                }}
                okText='Yes'
                cancelText='No'
            >
                <Button
                    type='link'
                    danger
                >
                    Remove
                </Button>
            </Popconfirm>
        },
    ];

    return (
        <>
            <Header
                setSearch={setSearch}
            />
            <div className='px-6'>
                <Table
                    dataSource={cartItems}
                    columns={columns}
                    bordered
                    pagination={false}
                    rowKey={record => record._id}
                    scroll={{
                        x: 1200,
                        y: 300
                    }}
                />
                <div className="cart-total flex justify-end mt-4">
                    <Card className='w-72'>
                        <div className='flex justify-between'>
                            <span>Sub Total</span>
                            <span>
                                {total > 0 ? total.toFixed(2) : 0}$
                            </span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span>Tax {tax}%</span>
                            <span className='text-red-600'>
                                {
                                    (total * tax) > 0
                                        ?
                                        `+${(total * tax).toFixed(2)}`
                                        :
                                        0
                                }
                                $
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <b>Total</b>
                            <b>
                                {total > 0 ? (total + (total * tax)).toFixed(2) : 0}$
                            </b>
                        </div>
                        <Button
                            className='mt-4 w-full'
                            size="large"
                            type='primary'
                            onClick={() => setIsModalOpen(true)}
                            disabled={cartItems.length === 0}
                        >
                            Checkout
                        </Button>
                    </Card>
                </div>
            </div>
            <CreateBill
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    )
}

export default CartPage