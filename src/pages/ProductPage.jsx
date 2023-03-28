import React from 'react'
import Header from '../components/header/Header'
import EditProduct from '../components/products/EditProduct'

const ProductPage = () => {
    return (
        <>
            <Header />
            <div className='px-6'>
                <h1
                    className='text-4xl font-bold text-center mt-4'
                >
                    Products
                </h1>
                <EditProduct />
            </div>
        </>
    )
}

export default ProductPage