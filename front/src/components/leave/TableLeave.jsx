import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "../../utils/LeaveHelper";

const TableLeave = () => {

    const [leaves, setLeaves] = useState([])


    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/leave', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(response.data)
                if (response.data.success) {
                    let sno = 1;
                    const data = await response.data.leaves.map((leave) => (
                        {
                            _id: leave._id,
                            sno: sno++,
                            employeeId: leave.employeeId.employeeId,
                            name: leave.employeeId.userId.name,
                            leaveType: leave.leaveType,
                            department: leave.employeeId.departmentname,
                            days: new Date(leave.endDate).getDate() - new Date(leave.startDate).getDate(),
                            status: leave.status,
                            action: (<LeaveButtons _id={leave._id} />),
                        }
                    ));
                    setLeaves(data);
                }
                console.log(response.data.leaves);
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        }
        fetchLeaves()
    }, [])


    const customStyles = {
        rows: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
            },
        },
        headRow: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                fontWeight: "600",
            },
        },
        pagination: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
            },
        },
    };


    return (
        <>
            {leaves ? (
                <div className="p-6 bg-gray-900 text-white">
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold">Manage Leaves</h3>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <input
                            type="text"
                            placeholder="Search by department name"
                            className="w-full max-w-md px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        />

                        <div className="flex space-x-4">
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200">
                                Pending
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                                Approved
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                                Rejected
                            </button>
                        </div>
                    </div>

                    <DataTable
                        columns={columns}
                        data={leaves}
                        customStyles={customStyles}
                        pagination
                        highlightOnHover
                        responsive />


                </div>
            ) : <div>Loading ....</div>}
        </>
    );
};

export default TableLeave;