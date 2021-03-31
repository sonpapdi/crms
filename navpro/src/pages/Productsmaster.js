// import React from 'react';

// function Productsmaster() {
//     return (
//         <div className='Productsmaster'>
//             <h1>Productsmaster</h1>
//         </div>
//     );
// }

// export default Productsmaster;
// import React, { Component } from "react";
import '../css/Productsmaster.css';
import Axios from "axios";
import { useState } from "react";
import React from 'react';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;

//     // validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });

//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//         val === null && (valid = false);
//     });

//     return valid;
// };

function Productsmaster() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    // constructor(props) {
    //     super(props);

    //     this.state = {



    //         firstName: null,
    //         lastName: null,
    //         email: null,
    //         password: null,
    //         formErrors: {
    //             firstName: "",
    //             lastName: "",
    //             email: "",
    //             password: ""
    //         }
    //     };
    // }

    // handleSubmit = e => {
    //     e.preventDefault();

    //     if (formValid(this.state)) {
    //         console.log(`
    //     --SUBMITTING--
    //     First Name: ${this.state.firstName}
    //     Last Name: ${this.state.lastName}
    //     Email: ${this.state.email}
    //     Password: ${this.state.password}
    //   `);
    //     } else {
    //         console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    //     }
    // };


    const addProductsmaster = () => {
        Axios.post("http://localhost:8001/Productsmaster", {

            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,

                },
            ]);
        });
    };

    const getlogin = () => {
        Axios.get("http://localhost:8001/Productsmaster").then((response) => {
            setEmployeeList(response.data);
        });
    };

    // handleChange = e => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     let formErrors = { ...this.state.formErrors };

    //     switch (name) {
    //         case "firstName":
    //             formErrors.firstName =
    //                 value.length < 3 ? "minimum 3 characaters required" : "";
    //             break;
    //         case "lastName":
    //             formErrors.lastName =
    //                 value.length < 3 ? "minimum 3 characaters required" : "";
    //             break;
    //         case "email":
    //             formErrors.email = emailRegex.test(value)
    //                 ? ""
    //                 : "invalid email address";
    //             break;
    //         case "password":
    //             formErrors.password =
    //                 value.length < 6 ? "minimum 6 characaters required" : "";
    //             break;
    //         default:
    //             break;
    //     }

    //     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    // };

    // render() {
    //     const { formErrors } = this.state;

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                {/* <form onSubmit={this.handleSubmit} noValidate> */}
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        // className={formErrors.firstName.length > 0 ? "error" : null}
                        placeholder="First Name"
                        type="text" onChange={(event) => {
                            setfirstName(event.target.value);
                        }}
                        name="firstName"
                    // noValidate
                    // onChange={this.handleChange}
                    />
                    {/* {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                    )} */}
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        // className={formErrors.lastName.length > 0 ? "error" : null}
                        placeholder="Last Name"
                        type="text" onChange={(event) => {
                            setlastName(event.target.value);
                        }}
                        name="lastName"
                    // noValidate
                    // onChange={this.handleChange}
                    />
                    {/* {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )} */}
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        // className={formErrors.email.length > 0 ? "error" : null}
                        placeholder="Email"
                        type="email" onChange={(event) => {
                            setemail(event.target.value);
                        }}
                        name="email"
                    // noValidate
                    // onChange={this.handleChange}
                    />
                    {/* {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )} */}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        // className={formErrors.password.length > 0 ? "error" : null}
                        placeholder="Password"
                        type="password" onChange={(event) => {
                            setpassword(event.target.value);
                        }}
                        name="password"
                    // noValidate
                    // onChange={this.handleChange}
                    />
                    {/* {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )} */}
                </div>
                <div className="createAccount">
                    <Button type="submit" onClick={addProductsmaster}>Create Account</Button>
                    <Button onClick={getlogin}>Show Employees</Button>
                    <small>Already Have an Account?</small>
                </div>
                {/* </form> */}
            </div>
        </div>
    );
}
// }

export default Productsmaster;  