import { useNavigate } from "react-router-dom"


export const columns = [
    {
        name: "S no",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]

export const DepartmentButtons = ({_id}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex space-x-2">
                <button className="text-blue-500 hover:text-blue-600"
                    onClick={() => navigate(`/admin-dashboard/department/${_id}`)}>Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
            </div>
        </div>
    )
}

{/*code file 21 */ }