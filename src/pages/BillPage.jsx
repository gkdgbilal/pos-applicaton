import { Button, Table } from 'antd';
import React, { useState, useEffect } from 'react'
import PrintBill from '../components/bills/PrintBill';
import Header from '../components/header/Header'

const BillPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [billItems, setBillItems] = useState([])
    const [customer, setCustomer] = useState({})
    const [search, setSearch] = useState('')

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Phone Number',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt) => <span>{new Date(createdAt).toLocaleDateString()}</span>
        },
        {
            title: 'Payment Method',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (totalAmount) => <span>
                {
                    new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(totalAmount)
                }
            </span>
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => <Button
                type='link'
                className='pl-0'
                onClick={() => {
                    setIsModalOpen(true)
                    setCustomer(record)
                }}
            >
                Print
            </Button>
        },
    ];

    const getBills = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/bills/get-all')
            const parseData = await res.json();
            setBillItems(parseData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getBills()
    }, []);

    return (
        <>
            <Header
                setSearch={setSearch}
            />
            <div className='px-6'>
                <h1 className='text-4xl text-center font-bold mb-4'>Bills</h1>
                <Table
                    dataSource={billItems}
                    columns={columns}
                    bordered
                    pagination={false}
                    rowKey={record => record._id}
                    scroll={{
                        x: 1000,
                        y: 300
                    }}
                />
            </div>
            <PrintBill
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                customer={customer}
            />
        </>
    )
}

export default BillPage