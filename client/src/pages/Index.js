import { Col, Divider, Row } from "antd";
import React from "react";

function Index() {
  return (
    <>
      <div className="homepage">
        <Row>
          <Col span={12} offset={6}>
            <h2> Benefits of Online Consultation </h2>
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
      <div>
        
      </div>
    </>
  );
}

export default Index;
