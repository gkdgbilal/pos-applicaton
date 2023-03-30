import { Table } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../components/header/Header'

const CustomerPage = () => {
    const [billItems, setBillItems] = useState([])
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
                <h1 className='text-4xl text-center font-bold mb-4'>Customers</h1>
                <Table
                    dataSource={billItems}
                    columns={columns}
                    bordered
                    pagination={false}
                    scroll={{
                        x: 1000,
                        y: 300
                    }}
                />
            </div>
        </>
    )
}

export default CustomerPage