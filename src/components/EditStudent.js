import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

function EditStudent() {

    const navigate = useNavigate()

    const courses = ["Web Development", "Android Development", "Testing"]

    const { editStudent, students } = useContext(GlobalContext)
    const { id } = useParams()


    const [selectedStudent, setSelectedStudent] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        course: '',
        mentor: ''
    })

    const currentStudentId = id
    console.log(currentStudentId)

    useEffect(() => {
        const studentId = currentStudentId
        const selectedStudent = students.find(student => student.id === Number(studentId))
        setSelectedStudent(selectedStudent)
        console.log(selectedStudent)
    }, [currentStudentId, students])

    const handleUpdate = (e) => {
        e.preventDefault();
        editStudent(selectedStudent)
        navigate('/')
    }
    const handleChange = (e) => {
        e.preventDefault()
        setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <h3 className='edit-text'>Edit Student</h3>
            <form className='edit-form'>

                <label className='edit-label'>Name:</label>
                <input className='edit-input' placeholder='Enter name' type='text' required name='name' value={selectedStudent.name} onChange={handleChange} />


                <label className='edit-label'>Email:</label>
                <input className='edit-input' placeholder='Enter email' type='email' required name='email' value={selectedStudent.email} onChange={handleChange} />


                <label className='edit-label'>Mobile Number:</label>
                <input className='edit-input' placeholder='Enter mobile number' type='number' maxLength={10} required name='mobileNumber' value={selectedStudent.mobileNumber} onChange={handleChange} />


                <label className='edit-label'>Course:</label>
                <select className='edit-input' onChange={handleChange} name='course' value={selectedStudent.course}>
                    <option>Select your course</option>
                    <option>{courses[0]}</option>
                    <option>{courses[1]}</option>
                    <option>{courses[2]}</option>
                </select>

                <label className='edit-label'>Mentor:</label>
                <table >
                    <thead >
                        <tbody >
                            <tr >
                                <td>
                                    {
                                        selectedStudent.mentor && selectedStudent.mentor.map((data, id) => {
                                            if (data !== null) {
                                                return <div className='edit-label'>
                                                    <label className='edit-mentor-label'> {data}</label>
                                                </div>
                                            }

                                        })
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>

                <button type='submit' className="btn btn-success" onClick={handleUpdate} >
                    Update
                </button>
                <br />
                <button type='submit' className="btn btn-danger" onClick={() => navigate('/')} >
                    Go Back
                </button>
            </form>
        </div>
    )
}

export default EditStudent