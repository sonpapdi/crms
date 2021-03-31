import React from 'react';
// import "./App.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import '../css/Leadmaster.css';
import axios from "../api";
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const LeadmasterUpdate = (val) => {
    // const [companyname, setCompanyName] = useState(0);
    // const [gstno, setGSTNO] = useState(0);
    // const [panno, setPanNO] = useState(0);
    // const [emailid, setEmailld] = useState(0);
    // const [website, setWebSite] = useState(0);
    // const [phoneno, setPhoneNo] = useState(0);
    // const [faxno, setFaxNo] = useState(0);
    // const [contactperson, setContactPerson] = useState(0);
    // const [contactpersondesignation, setContactPersonDesignation] = useState(0);
    // const [statename, setStateName] = useState(0);
    // const [cityname, setCityName] = useState(0);
    // const [invoiceaddress, setInvoiceAddress] = useState(0);
    // const [notes, setNotes] = useState(0);
    // const [invoicesource, setInvoiceSource] = useState(0);
    // const [assignto, setAssignTo] = useState(0);

    // const [newGSTNO, setNewGSTNO] = useState(0);

    // const [employeeList, setEmployeeList] = useState([]);

    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        companyname: "",
        gstno: "",
        panno: "",
        emailid: "",
        website: "",
        phoneno: "",
        faxno: "",
        contactperson: "",
        contactpersondesignation: "",
        statename: "",
        cityname: "",
        invoiceaddress: "",
        notes: "",
        invoicesource: "",
        assignto: "",
    });

    const {
        companyname,
        gstno,
        panno,
        emailid,
        website,
        phoneno,
        faxno,
        contactperson,
        contactpersondesignation,
        statename,
        cityname,
        invoiceaddress,
        notes,
        invoicesource,
        assignto } = user;


    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8001/leadmaster/${id}`);
        setUser(result.data);
    };

    return (

        <div className="wrapper">
            <div className="form-wrapper">
                {/* <h1>Lead User</h1> */}
                <form onSubmit={e => onSubmit(e)}>
                    <div className="row">

                        <div className="companyName">
                            <label htmlFor="companyName">companyName</label>
                            <input
                                // placeholder="CompanyName"
                                type="text"
                                value={companyname}
                                onChange={e => onInputChange(e)}
                                name="companyname"
                            />
                        </div>

                        <div className="gstno">
                            <label htmlFor="gstno">GSTNo</label>
                            <input
                                // placeholder="gstno"
                                type="text"
                                value={gstno}
                                onChange={e => onInputChange(e)}
                                name="gstno"
                            />
                        </div>
                        {/* </div> */}
                        {/* <div className="row"> */}
                        <div className="panno">
                            <label htmlFor="panno">panno</label>
                            <input
                                // placeholder="panno"
                                type="text"
                                value={panno}
                                onChange={e => onInputChange(e)}
                                name="panno"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="emailid">
                            <label htmlFor="emailid">emailid</label>
                            <input
                                // placeholder="emailid"
                                type="text"
                                value={emailid}
                                onChange={e => onInputChange(e)}
                                name="emailid"
                            />
                        </div>
                        <div className="website">
                            <label htmlFor="website"> WebSite</label>
                            <input
                                // placeholder="website"
                                type="text"
                                value={website}
                                onChange={e => onInputChange(e)}
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
                                value={phoneno}
                                onChange={e => onInputChange(e)}
                                name="phoneno"
                            />
                        </div>

                        <div className="faxno">
                            <label htmlFor="faxno"> faxno</label>
                            <input
                                // placeholder="faxno"
                                type="number"
                                value={faxno}
                                onChange={e => onInputChange(e)}
                                name="faxno"
                            />
                        </div>

                        <div className="contactperson">
                            <label htmlFor="contactperson">contactperson</label>
                            <input
                                // placeholder="contactperson"
                                type="text"
                                value={contactperson}
                                onChange={e => onInputChange(e)}
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
                                value={contactpersondesignation}
                                onChange={e => onInputChange(e)}
                                name="contactpersondesignation"
                            />
                        </div>
                        <div className="statename">
                            <label htmlFor="statename">statename</label>
                            <input
                                // placeholder="statename"
                                type="text"
                                value={statename}
                                onChange={e => onInputChange(e)}
                                name="statename"
                            />
                        </div>

                        <div className="cityname">
                            <label htmlFor="cityname">cityname</label>
                            <input
                                // placeholder="cityname"
                                type="text"
                                value={cityname}
                                onChange={e => onInputChange(e)}
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
                                value={invoiceaddress}
                                onChange={e => onInputChange(e)}
                                name="invoiceaddress"
                            />
                        </div>



                        <div className="notes">
                            <label htmlFor="notes">notes</label>
                            <input
                                // placeholder="notes"
                                type="text"
                                value={notes}
                                onChange={e => onInputChange(e)}
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
                                value={invoicesource}
                                onChange={e => onInputChange(e)}
                            />
                        </div>


                        <div className="assignto">
                            <label htmlFor="assignto">assignto</label>
                            <input
                                type="text"
                                value={assignto}
                                onChange={e => onInputChange(e)}
                            />

                        </div>     </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>

        </div>

    );
};
export default LeadmasterUpdate;