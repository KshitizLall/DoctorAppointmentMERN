import React from "react";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="authentication">
        <Row>
          <Col>
            <div class="vert-move">
              <img
                src="https://i.ibb.co/sQrnW3j/consultancy.png"
                alt="consultancy"
                border="0"
                width="100%"
                height="400"
              />
            </div>
          </Col>
          <Col>
            <div className="authentication-form card p-3">
              <h1 className="card-title">Welcome Back</h1>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input placeholder="Password" type="password" />
                </Form.Item>

                <Button
                  className="primary-button my-2 full-width-button"
                  htmlType="submit"
                >
                  LOGIN
                </Button>
                <p>Don't have an account?</p>
                <Link to="/register">SIGN UP</Link>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="homepage">
        <Row>
          <Col span={12} offset={6}>
            <h1> Benefits of Online Consultation </h1>
            <Divider>Consult Top Doctors 24x7</Divider>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <Divider orientation="left">Convenient and Easy</Divider>
            <p>
              Start an instant consultation within 2 minutes or do video
              consultation at the scheduled time.
            </p>
            <Divider orientation="right">100% Safe Consultations</Divider>
            <p>
              Be assured that your online consultation will be fully private and
              secured.
            </p>
            <Divider orientation="left">Similar Clinic Experience</Divider>
            <p>
              Experience clinic-like consultation through a video call with the
              doctor. Video consultation is available only for beta as of now.
            </p>
            <Divider orientation="right">Free Follow-up</Divider>
            <p>
              Get a valid digital prescription and a 7-day, free follow-up for
              further clarifications.
            </p>
          </Col>
        </Row>
        <Row>
          <div class="vert-move">
            <img
              src="https://i.ibb.co/XjnMxjQ/doctor-sitting-on-ball.png"
              alt="consultancy"
              border="0"
              width="100%"
              height="550"
            />
          </div>
        </Row>
      </div>
    </>
  );
}
export default Login;
