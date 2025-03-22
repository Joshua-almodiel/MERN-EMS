import React from 'react'
import { useNavigate } from 'react-router-dom'


export const columns = [
    {
        name: "S no",
        selector: (row) => row.sno,
        width: "135px",
    },
    {
        name: "Emp ID",
        selector: (row) => row.employeeId,
        width: "200px",
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "160px",
    },
    {
        name: "Leave Type",
        selector: (row) => row.leaveType,
        width: "175px",
    },
    {
        name: "Department",
        selector: (row) => row.department,
        width: "190px",
    },
    {
        name: "Days",
        selector: (row) => row.days,
        width: "190px",
    },
    {
        name: "Status",
        selector: (row) => row.status,
        width: "190px",
    },
    {
        name: "Action",
        selector: (row) => row.action,
        center: true,
    },
]


export const LeaveButtons = ({_id}) => {

    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/admin-dashboard/leave/${id}`)
    }

  return (
    <div>
        <button type='submit' onClick={() => handleView(_id)}>
            Leave
        </button>
    </div>
  )
}