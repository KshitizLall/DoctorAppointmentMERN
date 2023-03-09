import React from "react"
import { Button, Col, Form, Input, Row } from 'antd'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {

        try {
            dispatch(showLoading())
            const response = await axios.post('/api/user/register', values);
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");

            }
            else {
                toast.error(response.data.message);
            }

        }
        catch (error) {
            dispatch(hideLoading())
            toast.error('Something went wrong');
        }
    };
    return (
        <div className="authentication">

            <Row>
                <Col>
                    <Col>
                        <div className="left-gif">
                            <img
                                src="https://i.pinimg.com/originals/b4/3d/b7/b43db78f64c8e26fb580bb7f00b66222.gif"
                                alt=""
                                width="100%"
                                height="400"
                            />
                        </div>
                    </Col>
                </Col>
                <Col>
                    <div className="authentication-form card p-3">
                        <h1 className="card-title">Nice to meet U</h1>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label='Name' name='name'>
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item label='Email' name='email'>
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item label='Password' name='password'>
                                <Input placeholder="Password" type="password" />
                            </Form.Item>

                            <Button className='primary-button my-2 full-width-button' htmlType="submit">REGISTER</Button>
                            <Link to='/login' className="anchor mt-2">CLICK HERE TO LOGIN</Link>
                        </Form>

                    </div>
                </Col>
            </Row>

        </div>
    )
}
export default Register
