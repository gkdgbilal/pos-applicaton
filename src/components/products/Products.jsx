import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import AddProduct from './AddProduct'
import { useNavigate } from 'react-router-dom'

const Products = ({ categories }) => {
    const [products, setProducts] = useState([])
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate()

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

    return (
        <div className='product-wrapper grid grid-cols-card gap-4'>
            {
                products.map(product => (
                    <ProductItem
                        product={product}
                        key={product._id}
                    />
                ))
            }
            <div
                className='product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[184px]'
                onClick={() => setIsAddModalOpen(true)}
            >
                <PlusOutlined
                    className='md:text-2xl text-white'
                />
            </div>
            <div
                className='product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[184px]'
                onClick={() => navigate('/products')}
            >
                <EditOutlined
                    className='md:text-2xl text-white'
                />
            </div>
            <AddProduct
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                categories={categories}
                products={products}
                setProducts={setProducts}
            />
        </div>
    )
}

export default Products