import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const { id } = useParams()
    const [employee, setEmployee] = useState()

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const responnse = await axios.get(`http://localhost:5000/api/employee/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setEmployee(responnse.data.employee)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchEmployee();
    }, []);

    return (
        <div>
            <h2></h2>
            <div>
                <img src={`http://localhost:5000/${employee.userId.profileImage}`} />
            </div>
            <div>

            </div>
        </div>
    )
}

export default View