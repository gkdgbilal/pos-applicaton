import { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import StatisticCard from '../components/statistics/StatisticCard'
import { Area, Pie } from '@ant-design/plots';

const StatisticPage = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const asyncFetch = () => {
        fetch('http://localhost:5000/api/bills/get-all')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    useEffect(() => {
        asyncFetch();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products/get-all')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const config = {
        data,
        xField: 'customerName',
        yField: 'subTotal',
        xAxis: {
            range: [0, 1],
        },
    };

    const config2 = {
        appendPadding: 10,
        data: data,
        angleField: 'subTotal',
        colorField: 'customerName',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'Total\nValue',
            },
        },
    };

    const totalAmount = data.reduce((acc, item) => {
        return acc + item.totalAmount;
    }, 0);

    return (
        <>
            <Header 
                setSearch={setSearch}
            />
            <div className='px-6 md:pb-0 pb-20'>
                <h1 className='text-4xl text-center font-bold mb-4'>Statistics</h1>
                <div className='statistic-section'>
                    <h2 className='text-lg'>
                        Welcome, <span className='text-green-700 font-bold text-xl'>Admin</span>
                    </h2>
                    <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4 overflow-auto'>
                        <StatisticCard
                            title='Total Customer'
                            amount={data?.length}
                            img='images/user.png'
                        />
                        <StatisticCard
                            title='Total Earnings'
                            amount={`${totalAmount.toFixed(2)}$`}
                            img='images/money.png'
                        />
                        <StatisticCard
                            title='Total Sales'
                            amount={data?.length}
                            img='images/sale.png'
                        />
                        <StatisticCard
                            title='Total Products'
                            amount={products?.length}
                            img='images/product.png'
                        />
                    </div>
                    <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
                        <div className='lg:w-1/2 lg:h-full h-72'>
                            <Area {...config} />
                        </div>
                        <div className='lg:w-1/2 lg:h-full h-72'>
                            <Pie {...config2} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticPage