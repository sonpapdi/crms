import React from 'react';
// import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import '../css/Leadmaster.css';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function Leadmaster() {
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



    const addleadmaster = () => {
        Axios.post("http://localhost:8001/leadmaster", {
            companyname: companyname,
            gstno: gstno,
            panno: panno,
            emailid: emailid,
            website: website,
            phoneno: phoneno,
            faxno: faxno,
            contactperson: contactperson,
            contactpersondesignation: contactpersondesignation,
            statename: statename,
            cityname: cityname,
            invoiceaddress: invoiceaddress,
            notes: notes,
            invoicesource: invoicesource,
            assignto: assignto,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                // {
                //     companyname: companyname,
                //     gstno: gstno,
                //     panno: panno,
                //     emailid: emailid,
                //     website: website,
                //     phoneno: phoneno,
                //     faxno: faxno,
                //     contactperson: contactperson,
                //     contactpersondesignation: contactpersondesignation,
                //     statename: statename,
                //     cityname: cityname,
                //     invoiceaddress: invoiceaddress,
                //     notes: notes,
                //     invoicesource: invoicesource,
                //     assignto: assignto,
                // },
            ]);
        });
    };

    const getleadmaster = () => {
        Axios.get("http://localhost:8001/leadmaster").then((response) => {
            setEmployeeList(response.data);
        });
    };

    const updateleadmasterGSTNO = ({ id, companyname, panno, }) => {
        Axios.put("http://localhost:8001/leadmaster", { gstno: newGSTNO, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                companyname: val.companyname,
                                gstno: newGSTNO,
                                panno: val.panno,
                                emailid: val.emailid,
                                website: val.website,
                                phoneno: val.phoneno,
                                faxno: val.faxno,
                                contactperson: val.contactperson,
                                contactpersondesignation: val.contactpersondesignation,
                                statename: val.statename,
                                cityname: val.cityname,
                                invoiceaddress: val.invoiceaddress,
                                notes: val.notes,
                                invoicesource: val.invoicesource,
                                assignto: val.assignto
                            }
                            : val;
                    })
                );
                <Redirect to="/L" />
            }
        );
    };
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
                <h1>Lead User</h1>
                <div className="row">
                    <div className="companyName">
                        <label htmlFor="companyName">companyName</label>
                        <input
                            // placeholder="CompanyName"
                            type="text" onChange={(event) => {
                                setCompanyName(event.target.value);
                            }}
                            name="companyName"
                        />
                    </div>

                    <div className="gstno">
                        <label htmlFor="gstno">GSTNo</label>
                        <input
                            // placeholder="gstno"
                            type="text" onChange={(event) => {
                                setGSTNO(event.target.value);
                            }}
                            name="gstno"
                        />
                    </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                    <div className="panno">
                        <label htmlFor="panno">panno</label>
                        <input
                            // placeholder="panno"
                            type="text" onChange={(event) => {
                                setPanNO(event.target.value);
                            }}
                            name="panno"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="emailid">
                        <label htmlFor="emailid">emailid</label>
                        <input
                            // placeholder="emailid"
                            type="text" onChange={(event) => {
                                setEmailld(event.target.value);
                            }}
                            name="emailid"
                        />
                    </div>
                    <div className="website">
                        <label htmlFor="website"> WebSite</label>
                        <input
                            // placeholder="website"
                            type="text"
                            onChange={(event) => {
                                setWebSite(event.target.value);
                            }}
                            name="website"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="phoneno">
                        <label htmlFor="phoneno">phoneno</label>
                        <input
                            // placeholder="phonenumber"
                            type="number"
                            onChange={(event) => {
                                setPhoneNo(event.target.value);
                            }}
                            name="phoneno"
                        />
                    </div>

                    <div className="faxno">
                        <label htmlFor="faxno"> faxno</label>
                        <input
                            // placeholder="faxno"
                            type="number"
                            onChange={(event) => {
                                setFaxNo(event.target.value);
                            }}
                            name="faxno"
                        />
                    </div>

                    <div className="contactperson">
                        <label htmlFor="contactperson">contactperson</label>
                        <input
                            // placeholder="contactperson"
                            type="text"
                            onChange={(event) => {
                                setContactPerson(event.target.value);
                            }}
                            name="contactperson"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="contactpersondesignation">
                        <label htmlFor="contactpersondesignation"> contactpersondesignation</label>
                        <input
                            // placeholder="contactpersondesignation"
                            type="text"
                            onChange={(event) => {
                                setContactPersonDesignation(event.target.value);
                            }}
                            name="contactpersondesignation"
                        />
                    </div>
                    <div className="statename">
                        <label htmlFor="statename">statename</label>
                        <input
                            // placeholder="statename"
                            type="text"
                            onChange={(event) => {
                                setStateName(event.target.value);
                            }}
                            name="statename"
                        />
                    </div>

                    <div className="cityname">
                        <label htmlFor="cityname">cityname</label>
                        <input
                            // placeholder="cityname"
                            type="text"
                            onChange={(event) => {
                                setCityName(event.target.value);
                            }}
                            name="cityname"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="invoiceaddress">
                        <label htmlFor="invoiceaddress">invoiceaddress</label>
                        <input
                            // placeholder="invoiceaddress"
                            type="text"
                            onChange={(event) => {
                                setInvoiceAddress(event.target.value);
                            }}
                            name="invoiceaddress"
                        />
                    </div>



                    <div className="notes">
                        <label htmlFor="notes">notes</label>
                        <input
                            // placeholder="notes"
                            type="text"
                            onChange={(event) => {
                                setNotes(event.target.value);
                            }}
                            name="notes"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="invoicesource">
                        <label htmlFor="invoicesource">invoicesource</label>
                        <input
                            // placeholder="invoicesource"
                            type="text"
                            onChange={(event) => {
                                setInvoiceSource(event.target.value);
                            }}
                        />
                    </div>


                    <div className="assignto">
                        <label htmlFor="assignto">assignto</label>
                        <input
                            type="text"
                            onChange={(event) => {
                                setAssignTo(event.target.value);
                            }}
                        />

                    </div>     </div>
            </div>
            <div className="leadmaster">
                <br />
                <button onClick={addleadmaster}>Add Employee</button>
                <br />
                <br />
                {/* <button onClick={getleadmaster}>Show Employees</button> */}

                {employeeList.map((val, key) => {
                    return (
                        <div className="leadmaster">

                            <div className="leadmaster">
                                <Table striped bordered hover size="sm">
                                    <tbody>
                                        <tr>
                                            <td>{val.companyname}</td>
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


                                            <td> <input
                                                type="text"
                                                placeholder=".."
                                                onChange={(event) => {
                                                    setNewGSTNO(event.target.value);
                                                }}
                                            />
                                                <button
                                                    onClick={() => {
                                                        updateleadmasterGSTNO(val);
                                                    }}
                                                >
                                                    {" "}
                              Update
                             </button> </td>
                                            <td>  <button
                                                onClick={() => {
                                                    deleteleadmaster(val.id);
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






                            {/* <div>
                                <h3>CompanyName: {val.companyname}</h3>
                                <h3>GSTNO: {val.gstno}</h3>
                                <h3>PanNo: {val.panno}</h3>
                                <h3>Emailld: {val.emailid}</h3>
                                <h3>WebSite: {val.website}</h3>
                                <h3>PhoneNo: {val.phoneno}</h3>
                                <h3>FaxNo: {val.faxno}</h3>
                                <h3>ContactPerson: {val.contactperson}</h3>
                                <h3>ContactPersonDesignation: {val.contactpersondesignation}</h3>
                                <h3>StateName: {val.statename}</h3>
                                <h3>CityName: {val.cityname}</h3>
                                <h3>InvoiceAddress: {val.invoiceaddress}</h3>
                                <h3>Notes: {val.notes}</h3>
                                <h3>InvoiceSource: {val.invoicesource}</h3>
                                <h3>AssignTo: {val.assignto}</h3>
                            </div> */}
                            {/* <div>
                                <input
                                    type="text"
                                    placeholder="2000..."
                                    onChange={(event) => {
                                        setNewGSTNO(event.target.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        updateEmployeeGSTNO(val.id);
                                    }}
                                >
                                    {" "}
                              Update
                             </button>
                                <button
                                    onClick={() => {
                                        deleteEmployee(val.id);
                                    }}
                                >
                                    Delete
                                 </button>

                            </div> */}
                        </div>
                    );
                })}



            </div>
        </div>
    );
}
export default Leadmaster;