// import React from 'react';
// import "./App.css";
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import '../css/LeadmasterView.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import ScrollIntoView from 'react-scroll-into-view'
import { FaDivide } from 'react-icons/fa';
import ReactDOM from "react-dom";
import LeadmasterUpdate from './LeadmasterUpdate'
import { Link } from "react-router-dom";
import axios from "axios";

function LeadmasterView() {

    const [companyname, setCompanyName] = useState(0);
    const [gstno, setGSTNO] = useState(0);
    const [panno, setPanNO] = useState(0);
    const [emailid, setEmailld] = useState(0);
    const [website, setWebSite] = useState(0);
    const [phoneno, setPhoneNo] = useState(0);
    const [faxno, setFaxNo] = useState(0);
    const [contactperson, setContactPerson] = useState(0);
    const [contactpersondesignation, setContactPersonDesignation] = useState(0);
    const [statename, setStateName] = useState(0);
    const [cityname, setCityName] = useState(0);
    const [invoiceaddress, setInvoiceAddress] = useState(0);
    const [notes, setNotes] = useState(0);
    const [invoicesource, setInvoiceSource] = useState(0);
    const [assignto, setAssignTo] = useState(0);
    const [newGSTNO, setNewGSTNO] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);
    const [isAuth, setIsAuth] = useState(true);
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    if (!isAuth) {
        return <Redirect to="/Leadmaster" />
    }
    const UpdateCall = (val) => {
        if (val)
            return <LeadmasterUpdate values={val} />

    }

    const getleadmaster = () => {
        Axios.get("http://localhost:8001/leadmaster/").then((response) => {
            setEmployeeList(response.data);
        });
    };

    // const updateleadmasterid = (id) => {
    //     Axios.put("http://localhost:8001/leadmaster", { val: id }).then(
    //         (response) => {
    //             setEmployeeList(
    //                 employeeList.map((val) => {
    //                     return val.id == id
    //                         ? {
    //                             id: val.newid,
    //                             companyname: val.companyname,
    //                             gstno: val.gstno,
    //                             panno: val.panno,
    //                             emailid: val.emailid,
    //                             website: val.website,
    //                             phoneno: val.phoneno,
    //                             faxno: val.faxno,
    //                             contactperson: val.contactperson,
    //                             contactpersondesignation: val.contactpersondesignation,
    //                             statename: val.statename,
    //                             cityname: val.cityname,
    //                             invoiceaddress: val.invoiceaddress,
    //                             notes: val.notes,
    //                             invoicesource: val.invoicesource,
    //                             assignto: val.assignto
    //                         }
    //                         : val;
    //                 })
    //             );
    //         }
    //     );
    // };
    const deleteleadmaster = (id) => {
        Axios.delete(`http://localhost:8001/leadmaster/${id}`).then((response) => {
            setEmployeeList(
                employeeList.filter((val) => {
                    return val.id != id;
                })
            );
        });
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <div >
                    <h1>Lead User</h1>



                    <Table>
                        <tr>
                            <td>
                                <button onClick={getleadmaster}>Show Employees</button>
                            </td>
                            <br />
                            <td>
                                {/* 
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={handleChange}
                                />
                                {searchResults.map(getleadmaster => (
                                    <li>{getleadmaster}</li>
                                ))} */}

                                {/* <input
                                    type="text"
                                    placeholder="Search Here"
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                /> */}
                                {/* <h5 className="Title">Search Employee</h5> */}
                                <br />
                                <br />
                            </td>
                            <td>
                                <button onClick={() => setIsAuth(false)}>Add Employee </button>
                            </td>
                        </tr>
                    </Table>
                    <br />
                    <br />
                    <div class="table-container">

                        <Table striped bordered hover size="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>companyname  </th>
                                    <th>gstno </th>
                                    <th>panno </th>
                                    <th>emailid </th>
                                    <th>website </th>
                                    <th>phoneno </th>
                                    <th>faxno </th>
                                    <th>contactperson </th>
                                    <th>contactpersondesignation </th>
                                    <th>statename </th>
                                    <th>cityname </th>
                                    <th>invoiceaddress </th>
                                    <th>notes </th>
                                    <th>invoicesource </th>
                                    <th>assignto </th>

                                </tr>
                            </thead>


                            {employeeList.map((val, index) => {
                                return (

                                    <tbody >
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td >{val.companyname}</td>
                                            <td> {val.gstno}</td>
                                            <td> {val.panno}</td>
                                            <td> {val.emailid}</td>
                                            <td> {val.website}</td>
                                            <td> {val.phoneno}</td>
                                            <td> {val.faxno}</td>
                                            <td> {val.contactperson}</td>
                                            <td> {val.contactpersondesignation}</td>
                                            <td> {val.statename}</td>
                                            <td> {val.cityname}</td>
                                            <td> {val.invoiceaddress}</td>
                                            <td> {val.notes}</td>
                                            <td> {val.invoicesource}</td>
                                            <td> {val.assignto}</td>
                                            <td>
                                                {/* <input
                                                type="text"
                                                // placeholder=".."
                                                onChange={(event) => {
                                                    setNewGSTNO(event.target.value);
                                                }}
                                            /> */}
                                                {/* <button
                                                    onClick={() => LeadmasterUpdate(val.id)
                                                    }
                                                >
                                                    {" "}
                                              edit
                                            </button> */}

                                                <button
                                                    class="btn btn-outline-primary mr-2"
                                                    onClick={() => UpdateCall(val)}
                                                >
                                                    Edit
                                                 </button>
                                            </td>

                                            <td>  <button
                                                onClick={() => {
                                                    deleteleadmaster(val.id);
                                                }}
                                            >
                                                Delete
                                 </button></td>
                                        </tr>

                                    </tbody>

                                );

                            })}

                        </Table>

                    </div>

                </div>
            </div>
        </div >

    );
}

export default LeadmasterView;