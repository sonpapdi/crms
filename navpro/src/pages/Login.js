import React from 'react';
// import './App.css';
import Axios from "axios";
import { useState } from "react";
import '../css/Login.css';
import { Button, Table, Form, Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './Singup';
// import BootstrapTable from 'react-bootstrap-table-next';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [employeeList, setEmployeeList] = useState([]);


    const addlogin = () => {
        Axios.post("http://localhost:8001/login", {
            email: email,
            password: password,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    email: email,
                    password: password,

                },
            ]);
        });
    };
    const getlogin = () => {
        Axios.get("http://localhost:8001/login").then((response) => {
            setEmployeeList(response.data);
        });
    };
    return (

        <div className="App">
            <div className="information">
                <div class="row" className="Title">
                    Login user
                    </div>

                <div class='row' className="intext">

                    <label>Email:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="login">
                <br />
                <button onClick={addlogin}>Log in</button>
                <br />
                <br />
                {/* <Button onClick={getlogin}>Show Employees</Button> */}
                <br></br>
                <button> create New User</button>
                <div>
                    <Table class="table table-bordered table-dark">
                        <tr>
                            <th>Email  </th>
                            <th>Password </th>

                        </tr>
                    </Table>

                </div>

                {employeeList.map((val, key) => {
                    return (
                        <div className="login">
                            <div>
                                <Table class="table table-bordered table-dark">

                                    <tr>
                                        <td>{val.email}</td>
                                        <td> {val.password}</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    );

                }
                )
                }
            </div>
        </div>

    );
}
export default Login;





