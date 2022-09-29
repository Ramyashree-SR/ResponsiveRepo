import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import Paper from "@mui/material/Paper";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
// import { DatePicker, Space } from "antd";

function ResponseForm(props) {
  const [studentForm, setStudentform] = useState([{
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Dob: "",
    Gender: "",
    Street: "",
    StreetLine: "",
    City: "",
    State: "",
    Pincode: "",
    PhoneNumber: "",
    MobileNumber: "",
    Company: "",
    Course: "",
    AddComment: "",
  }]);

  let updateChange = (e) => {
    setStudentform({
      ...studentForm,
      [e.target.name]: e.target.value,
    });
  };

//   const GetLocalData = () => {
//     let data = localStorage.getItem('studentForm')
//     if (data) {
//       return JSON.parse(localStorage.getItem('studentForm'))
//     } else {
//       return []
//     }
// }

  // const [localData, setLocalData] = useState(GetLocalData())
  

 let saveData = () => {
    // e.preventDefalult()
    // console.log(studentForm);
    //  const  data=[...localData]
    //  data.push(studentForm)
    //  setLocalData(data)
    
    // localStorage.setItem('studentForm', JSON.stringify(data))
    props.getData(studentForm)
    setStudentform({
      ...studentForm,
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Dob: "",
      Gender: "",
      Street: "",
      StreetLine: "",
      City: "",
      State: "",
      Pincode: "",
      PhoneNumber: "",
      MobileNumber: "",
      Company: "",
      Course: "",
      AddComment: "",
    });
  };

  return (
    <div>
      {/* <Paper className="form"> */}
      <Container fluid="md">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Row>
            <Col className="whole">
              <h1>Student Registration Form</h1>
              <h5 style={{ color: "rgb(87, 84, 84)" }}>
                Fill out the form carefully for Register
              </h5>
              <br />
              <br />
              <h5>Student Name</h5>
              <br />
              <Row>
                <Col md={4}>
                  <input
                    style={{ width: "200px" }}
                    name="FirstName"
                    value={studentForm.FirstName}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />

                  <h6 style={{ fontSize: "small" }}>FirstName</h6>
                </Col>
                <Col md={4}>
                  <input
                    style={{ width: "200px" }}
                    name="MiddleName"
                    value={studentForm.MiddleName}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />

                  <h6 style={{ fontSize: "small" }}>MiddleName</h6>
                </Col>
                <Col md={4}>
                  <input
                    style={{ width: "200px" }}
                    name="LastName"
                    value={studentForm.LastName}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />
                  <h6 style={{ fontSize: "small" }}>LastName</h6>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <h5>Birth Date</h5>
                  <br />
                  <Row className="date">
                    <Col md={4}>
                      <input
                        style={{ width: "300px" }}
                        type="date"
                        name="Dob"
                        value={studentForm.Dob}
                        onChange={(e) => {
                          updateChange(e);
                        }}
                      />
                      <h6 style={{ fontSize: "small" }}>Date month year</h6>
                    </Col>
                    <Col md={8}>
                      <Form.Select
                        aria-label="Default select example"
                        name="Gender"
                        value={studentForm.Gender}
                        onChange={(e) => {
                          updateChange(e);
                        }}
                      >
                        <option>Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Form.Select>
                      <h6 style={{ fontSize: "small" }} placeholder="Gender">
                        Gender
                      </h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Row>
                  <h5>Address</h5>
                  <br />
                  <Col>
                    <input
                      type="textarea"
                      style={{ width: "100%" }}
                      name="Street"
                      value={studentForm.Street}
                      onChange={(e) => {
                        updateChange(e);
                      }}
                    />
                    <h6 style={{ fontSize: "small" }}>Street Address</h6>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <input
                      type="textarea"
                      style={{ width: "100%" }}
                      name="StreetLine"
                      value={studentForm.StreetLine}
                      onChange={(e) => {
                        updateChange(e);
                      }}
                    />
                    <h6 style={{ fontSize: "small" }}>Street Address Line 2</h6>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col md={6}>
                    <input
                      type="text"
                      style={{ width: "300px" }}
                      name="City"
                      value={studentForm.City}
                      onChange={(e) => {
                        updateChange(e);
                      }}
                    />
                    <h6 style={{ fontSize: "small" }}>City</h6>
                  </Col>
                  <Col md={6}>
                    <input
                      type="text"
                      style={{ width: "300px" }}
                      name="State"
                      value={studentForm.State}
                      onChange={(e) => {
                        updateChange(e);
                      }}
                    />
                    <h6 style={{ fontSize: "small" }}>State /Province</h6>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <input
                      type="number"
                      style={{ width: "100%" }}
                      name="Pincode"
                      value={studentForm.Pincode}
                      onChange={(e) => {
                        updateChange(e);
                      }}
                    />
                    <h6 style={{ fontSize: "small" }}>Pincode/Zip Code</h6>
                  </Col>
                </Row>
              </Row>
              <br />
              <br />
              <Row>
                <Col md={6}>
                  <h6>Phone Number</h6>
                  <br />
                  <input
                    type="tel"
                    style={{ width: "300px" }}
                    name="PhoneNumber"
                    value={studentForm.PhoneNumber}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <h6>Mobile Number</h6>
                  <br />
                  <input
                    type="tel"
                    style={{ width: "300px" }}
                    name="MobileNumber"
                    value={studentForm.MobileNumber}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <h6>Company</h6>
                  <br />
                  <input
                    style={{ width: "300px" }}
                    name="Company"
                    value={studentForm.Company}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <h6>Courses</h6>
                  <br />
                  {/* <input style={{ width: "300px" }} /> */}
                  <Form.Select
                    aria-label="Default select example"
                    name="Course"
                    value={studentForm.Course}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  >
                    <option>Please Select</option>
                    <option value="1">PCME</option>
                    <option value="s">PCMCs</option>
                    <option value="3">PCMB</option>
                    <option value="4">COMMERCE</option>
                  </Form.Select>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <h6>Additional Comments</h6>
                  <br />
                  <textarea
                    placeholder="Type here,.."
                    style={{ width: "100%" }}
                    name="AddComment"
                    value={studentForm.AddComment}
                    onChange={(e) => {
                      updateChange(e);
                    }}
                  />
                </Col>
              </Row>

              <hr />
              <Row>
                <Col md={6}>
                  <button
                    style={{
                      background: " rgb(51, 172, 51)",
                      color: "white",
                      width: "200px",
                      outlineColor: "white",
                    }}
                    onClick={saveData}
                  >
                    Submit AppliCation
                  </button>
                </Col>
                <Col md={6}>
                  <button
                    style={{
                      background: " rgb(51, 172, 51)",
                      color: "white",
                      width: "200px",
                      outlineColor: "white",
                    }}
                  >
                    Clear Fields
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
      {/* </Paper> */}
    </div>
  )
}

export default ResponseForm;
