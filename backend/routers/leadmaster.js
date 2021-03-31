const express = require('express')
const router = express.Router()
const con = require('../config/db')
router.post("/", (req, res) => {
    // const userid = req.body.userid;
    // const brchid = req.body.brchid;
    // const compid = req.body.compid;
    const companyname = req.body.companyname;
    const gstno = req.body.gstno;
    const panno = req.body.panno;
    const emailid = req.body.emailid;
    const website = req.body.website;
    const phoneno = req.body.phoneno;
    const faxno = req.body.faxno;
    const contactperson = req.body.contactperson;
    const contactpersondesignation = req.body.contactpersondesignation;
    const statename = req.body.statename;
    const cityname = req.body.cityname;
    const invoiceaddress = req.body.invoiceaddress;
    const notes = req.body.notes;
    const invoicesource = req.body.invoicesource;
    const assignto = req.body.assignto;

    con.query("INSERT INTO leadmaster (companyname,gstno,panno,emailid,website,phoneno,faxno,contactperson,contactpersondesignation,statename,cityname,invoiceaddress,notes,invoicesource,assignto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [companyname, gstno, panno, emailid, website, phoneno, faxno, contactperson, contactpersondesignation, statename, cityname, invoiceaddress, notes, invoicesource, assignto], (err, result) => {

            if (err) console.log(err);
            else {
                res.send("Values Inserted");
            }
        }
    );
});
router.get("/", (req, res) => {
    con.query("SELECT * FROM leadmaster", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
// router.put("/", (req, res) => {
//     const id = req.body.id;
//     // const gstno = req.body.gstno;
//     con.query(
//         // "UPDATE leadmaster SET gstno = ? WHERE id = ?",
//         "UPDATE leadmaster  set WHERE id = ?",
//         // [gstno, id],
//         [id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM leadmaster WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
