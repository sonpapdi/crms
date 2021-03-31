import React from 'react';
// import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import '../css/Login.css';

function Home() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState(0);
    const [wage, setWage] = useState(0);

    const [newWage, setNewWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = () => {
        Axios.post("http://localhost:8001/employees", {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    name: name,
                    age: age,
                    country: country,
                    position: position,
                    wage: wage,
                },
            ]);
        });
    };

    const getEmployees = () => {
        Axios.get("http://localhost:8001/employees").then((response) => {
            setEmployeeList(response.data);
        });
    };

    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:8001/employees", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: val.age,
                                position: val.position,
                                wage: newWage,
                            }
                            : val;
                    })
                );
            }
        );
    };
    const deleteemployees = (id) => {
        Axios.delete(`http://localhost:8001/employees/${id}`).then((response) => {
            setEmployeeList(
                employeeList.filter((val) => {
                    return val.id != id;
                })
            );
        });
    };

    return (
        <div className="App">
            <div className="information">
                <div class="row" className="Title">
                
                        User Information
                          
                </div>
                                 {/* <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                        
                                       
                                        <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form.Row>
                                 </Form> */}
                <div class='row' className="intext">

                    <label>Name:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <br />
                    <label>Age:</label>
                    <input
                        type="number"
                        onChange={(event) => {
                            setAge(event.target.value);
                        }}
                    />
                    <br />
                    <label>Country:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    />
                    <br />
                    <label>Position:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setPosition(event.target.value);
                        }}
                    />
                    <br />
                    <label>Wage:</label>
                    <input
                        type="number"
                        onChange={(event) => {
                            setWage(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="login">
                <br />
                <button onClick={addEmployee}>Add Employee</button>
                <br />
                <button onClick={getEmployees}>Show Employees</button>
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name  </th>
                                <th>Age </th>
                                <th>Country </th>
                                <th>Position </th>
                                <th>wage </th>
                            </tr>
                        </thead >
                    </Table>
                </div>
                {employeeList.map((val, key) => {
                    return (
                        <div className="employee">
                            <Table striped bordered hover size="sm">
                                <tbody>
                                    <tr>
                                        <td>{val.name}</td>
                                        <td> {val.age}</td>
                                        <td> {val.country}</td>
                                        <td> {val.position}</td>
                                        <td> {val.wage}</td>
                                        <td> <input
                                            type="text"
                                            placeholder=".."
                                            onChange={(event) => {
                                                setNewWage(event.target.value);
                                            }}
                                        />
                                            <button
                                                onClick={() => {
                                                    updateEmployeeWage(val.id);
                                                }}
                                            >
                                                {" "}
                              Update
                             </button> </td>
                                        <td>  <button
                                            onClick={() => {
                                                deleteemployees(val.id);
                                            }}
                                        >
                                            Delete
                                 </button></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
export default Home;