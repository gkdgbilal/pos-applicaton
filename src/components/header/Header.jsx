import { Input, Badge } from 'antd';
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    FileTextOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between item-center gap-10'>
                <div className='logo flex items-center'>
                    <Link to="/home">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </Link>
                </div>
                <div className='header-search flex-1 flex justify-center py-1'>
                    <Input
                        size="large"
                        placeholder="Search Products"
                        prefix={<SearchOutlined />}
                        className='rounded-full max-w-[800px]'
                    />
                </div>
                <div className='menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1'>
                    <Link to='/home' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                        <HomeOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Home
                        </span>
                    </Link>
                    <Badge count={5} offset={[0, 6]} className='md:flex hidden'>
                        <Link to='/cart' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                            <ShoppingCartOutlined className='md:text-2xl text-xl' />
                            <span className='md:text-xs text-[10px]'>
                                Cart
                            </span>
                        </Link>
                    </Badge>
                    <Link to='/bills' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                        <FileTextOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Bills
                        </span>
                    </Link>
                    <Link to='/customers' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                        <UserOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Customers
                        </span>
                    </Link>
                    <Link to='/statistic' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                        <BarChartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Statistics
                        </span>
                    </Link>
                    <Link to='/' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
                        <LogoutOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>
                            Logout
                        </span>
                    </Link>
                </div>
                <Badge count={5} offset={[0, 6]} className='md:hidden flex'>
                    <Link to='/' className='menu-links flex flex-col hover:text-[#40a9ff] transition-all duration-150'>
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