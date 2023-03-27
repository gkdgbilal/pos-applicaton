import React from 'react'
import { Form, Input, Button, Carousel } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const RegisterPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              label="Password Again"
              name={"passwordAgain"}
              rules={[
                {
                  required: true,
                  message: "Password Again is required!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Do you have an account?&nbsp;
            <Link to="/login" className="text-blue-600">
              Sign in now
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

export default RegisterPage