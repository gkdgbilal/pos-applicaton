import { useEffect, useState } from "react";
import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";

const HomePage = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [search, setSearch] = useState('')

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/categories/get-all')
            const data = await response.json()
            data && setCategories(() => data.map(category => ({
                ...category,
                value: category.title,
            })))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

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
        <>
            <Header
                setSearch={setSearch}
            />
            <div className='home px-6 flex md:flex-row flex-col justify-between gap-10'>
                <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] pb-10">
                    <Categories
                        categories={categories}
                        setCategories={setCategories}
                        setFilteredProducts={setFilteredProducts}
                        products={products}
                    />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px]">
                    <Products
                        categories={categories}
                        filteredProducts={filteredProducts}
                        products={products}
                        setProducts={setProducts}
                        search={search}
                    />
                </div>
                <div className='cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border'>
                    <CartTotals />
                </div>
            </div>
        </>

    )
}

export default HomePage