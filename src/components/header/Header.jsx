import { Input, Badge, message } from 'antd';
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    FileTextOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

const Header = ({ setSearch }) => {
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    const logOut = () => {
        if (window.confirm('Are you sure to logout?')) {
            localStorage.removeItem('currentUser')
            navigate('/login')
            message.success('Logout successfully!')
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between item-center gap-10'>
                <div className='logo flex items-center'>
                    <Link to="/">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </Link>
                </div>
                <div className='header-search flex-1 flex justify-center py-1'>
                    <Input
                        size="large"
                        placeholder="Search Products"
                        prefix={<SearchOutlined />}
                        className='rounded-full max-w-[800px]'
                        onChange={handleSearch}
                    />
                </div>
                <div className='menu-links'>
                    <Link to='/' className='menu-link '>
                        <HomeOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Home
                        </span>
                    </Link>
                    <Badge count={cart.cartItems.length} offset={[0, 0]} className='md:flex hidden'>
                        <Link to='/cart' className='menu-link '>
                            <ShoppingCartOutlined className='md:text-2xl text-xl' />
                            <span className='md:text-xs text-[10px]'>
                                Cart
                            </span>
                        </Link>
                    </Badge>
                    <Link to='/bills' className='menu-link '>
                        <FileTextOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Bills
                        </span>
                    </Link>
                    <Link to='/customers' className='menu-link '>
                        <UserOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Customers
                        </span>
                    </Link>
                    <Link to='/statistic' className='menu-link '>
                        <BarChartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Statistics
                        </span>
                    </Link>
                    <div
                        onClick={logOut}
                    >
                        <Link className='menu-link '>
                            <LogoutOutlined className='md:text-2xl text-xl' />
                            <span className='md:text-xs text-[10px]'>
                                Logout
                            </span>
                        </Link>
                    </div>
                </div>
                <Badge count={cart.cartItems.length} offset={[0, 0]} className='md:hidden flex'>
                    <Link to='/' className='menu-link '>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='md:text-xs text-[10px]'>
                            Cart
                        </span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}

export default Header