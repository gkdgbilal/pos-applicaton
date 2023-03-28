import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react';
import './style.css'
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';


const Categories = ({ categories, setCategories }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    return (
        <ul className='flex md:flex-col gap-4 text-center text-lg'>
            <li className='category-item'>
                <span>All</span>
            </li>
            {
                categories.map(category => (
                    <li
                        className='category-item'
                        key={category._id}
                    >
                        <span>{category.title}</span>
                    </li>
                ))
            }
            <li
                className='category-item !bg-purple-800 hover:opacity-90'
                onClick={() => setIsAddModalOpen(true)}
            >
                <PlusOutlined />
            </li>
            <li
                className='category-item !bg-orange-800 hover:opacity-90'
                onClick={() => setIsEditModalOpen(true)}
            >
                <EditOutlined />
            </li>
            <AddCategory
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
            <EditCategory
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
        </ul>
    )
}

export default Categories