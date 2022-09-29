import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Col, Container, Row } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Row>
        <Col md={3} className="side">
          <Row style={{ justifyContent: "center" }}>
            <Avatar
              size={128}
              icon={
                <img
                  src="./assets/girlimage.jpg"
                  alt="girl"
                  style={{ borderRadius: "100%" }}
                  height="100px"
                  width="100px"
                />
              }
              style={{ textAlign: "center" }}
            />
          </Row>
          <Row>
            <h3 style={{ textAlign: "center" }}>About Me</h3>
            <p style={{ fontSize: "small", textAlign: "center" }}>
              <br />
              MERN Stack Developer
              <br />
              Good Listner,Quick Learner
              <br />
              Associate Software Engineer Seeking an entry level opportunity
              with an esteemed organization where I can utilize my skills &
              enhance learning in the field of work & build a long term career.
              <br />
            </p>
          </Row>
          <Row>
            <br />
            <hr />
            <h3 style={{ textAlign: "center" }}>Website and Social Links</h3>
            <h6 style={{ textAlign: "center" }}>www.associates@34mal.in</h6>
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            <Row>
              <Col>
                <h1 style={{ textAlign: "left" }}>
                  RamyaShree S<br /> Ramesh
                </h1>
                <h4>UI/Ux Designer</h4>
              </Col>
              <Col>
                <ul style={{ listStyle: "none", textAlign: "right" }}>
                  <li>Mysore</li>
                  <li>9876543217</li>
                  <li>ramyashree4856@gmail.com</li>
                  <li>jhgfds@mail.in</li>
                </ul>
              </Col>
              <hr />
            </Row>
          </Row>
          <Row>
            <h4>WorK Experience</h4>
          </Row>
          <br />
          <Row className="data">
            <Col>
              <h5 style={{ textAlign: "left" }}>
                Test Yantra Software Solutions.
              </h5>
              <p style={{ textAlign: "left" }}> Software Developer .</p>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ textAlign: "left" }}>Professional </h4>
              <p style={{ textAlign: "left" }}>
                Overall 1.6 years of professional <br />
                work experience in development
                <br /> of Web & Enterprise Applications. dolorum.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{ textAlign: "left" }}>Languages  </h5>
              <p style={{ textAlign: "left" }}>HTML 5, CSS  3 with                                                                                                          JavaScript (ES6), SQL 5.5.
.</p>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ textAlign: "left" }}>Professional </h4>
              <p style={{ textAlign: "left" }}>
                Experience in Web development using
                <br /> technologies like HTML, CSS, JavaScript <br />
                and React JS.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{ textAlign: "left" }}>Frameworks </h5>
              <p style={{ textAlign: "left" }}>React JS (17.x) with Redux.</p>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ textAlign: "left" }}>Professional </h4>
              <p style={{ textAlign: "left" }}>
                Excellent Analytical and Communication skills.
                <br />
                Self-directed and highly motivated
                <br /> team player with a great ethic
                <br /> and a Can-do attitude.
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h5 style={{ textAlign: "left" }}>BSc</h5>
              <p style={{ textAlign: "left" }}>
                -in computer science.
                <br /> NIE First Grade College, Mysore .
              </p>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ textAlign: "left" }}>SES (School Expert System) </h4>
              <p style={{ textAlign: "left" }}>
                This project focuses on keeping all areas of the school running
                smoothly, including recording student attendance, scheduling
                exams for both academic and non-academic topics, processing the
                results, and publishing the results for parents to view online
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{ textAlign: "left" }}>MCA</h5>
              <p style={{ textAlign: "left" }}>
                Department of studies in Computer Science,
                <br /> University of Mysore, Manasagangotri, Mysore
              </p>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h4 style={{ textAlign: "left" }}>Mr, Mrs CART( E-commerce)</h4>
              <p style={{ textAlign: "left" }}>
                Mr, Mrs Cart is an E-commerce (Electronic Commerce) that
                connects Multi suppliers to customers (B2C model -
                business-to-consumer). The application had a facility of
                supplier, reseller, customer & admin modules for overall
                engagements. dolorum.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Resume;
