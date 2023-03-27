import React from 'react'
import { Form, Input, Button, Carousel, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const LoginPage = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout="vertical">
                        <Form.Item
                            label="E-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "E-mail is required!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Password is required!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name='remember'
                            valuePropName='checked'
                        >
                            <div className="flex justify-between items-center">
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                                <Link to="/forgot-password" className="float-right text-blue-600">
                                    Forgot password?
                                </Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                size="large"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center absolute left-0 bottom-10 w-full">
                        Don't have an account?&nbsp;
                        <Link to="/register" className="text-blue-600">
                            Sign up now
                        </Link>
                    </div>
                </div>
                <div className="xl:w-4/6 lg:w-3/5 md:2-1/2 md:flex sm:hidden bg-[#6c63ff] h-full">
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full'>
                            <Carousel
                                className='!h-full px-6'
                                autoplay
                            >
                                <AuthCarousel
                                    imgSrc='images/responsive.svg'
                                    title='Responsive'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam'
                                />
                                <AuthCarousel
                                    imgSrc='images/statistic.svg'
                                    title='Statistics'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam'
                                />
                                <AuthCarousel
                                    imgSrc='images/customer.svg'
                                    title='Customer Satisfaction'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam'
                                />
                                <AuthCarousel
                                    imgSrc='images/admin.svg'
                                    title='Manager Panel'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam'
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage