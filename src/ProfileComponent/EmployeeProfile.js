import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employeeprofile = () => {

    const [empDetails, setempDetails] = useState([]);

    useEffect(async () => {
        await axios.get("http://122.160.49.247:1026/HRMS/EmployeeMaster/EmployeeProfile?Id=1").then(resp => {
            debugger;
            setempDetails(resp.data.responseData);
        });
    }, [])

    return (
        <div className="content-wrapper" style={{ 'min-height': 870 }} >

            <section className='content'>
                {
                    empDetails != null ?
                        empDetails.map((data) => (
                            <ul>
                                <li>{data.salutation}</li>
                                <li>{data.employeeName}</li>
                                <li>{data.empCode}</li>
                                <li>{data.joiningDate}</li>
                                <li>{data.employementStatus}</li>
                                <li>{data.officeEmailId}</li>
                                <li>{data.departmentName}</li>
                                <li>{data.designationName}</li>
                                <li>{data.legalEntity}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>
                                <li>{data.salutation}</li>

                            </ul>
                        )) : 'No  Record Found'
                }
            </section>

        </div >
    );
}

export default Employeeprofile;
