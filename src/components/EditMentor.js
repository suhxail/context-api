import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

function EditMentor() {
    const navigate = useNavigate()

    const [selectedMentor, setSelectedMentor] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        course: '',
        students: ''
    })

    const [a, setA] = useState(false)

    const { mentors, editMentor, students } = useContext(GlobalContext)

    const courses = ["Web Development", "Android Development", "Testing"]

    const { id } = useParams()

    const currentMentorId = id

    useEffect(() => {
        const mentorId = currentMentorId
        const selectedMentor = mentors.find(mentor => mentor.id === Number(mentorId))
        setSelectedMentor(selectedMentor)
    }, [currentMentorId, mentors, a])


    const handleUpdate = (e) => {
        e.preventDefault()
        editMentor(selectedMentor);
        navigate('/')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedMentor({ ...selectedMentor, [e.target.name]: e.target.value })
    } 

    let params = useParams()


    const handleDelete = async (i, ind) => {
        i.preventDefault();

        let mentorTemp = {};
        let studentTemp = {}

        mentors.map((mentor, index) => {
            if (Number(params.id) - 1 == index) {
                console.log(ind, index)
                mentorTemp = mentor                
            }
        })
        console.log("hello")
        console.log(mentorTemp)

        students.map((student) => {            
            if (student.name == mentorTemp.students[ind]) {
                studentTemp = student
            }
        })

        console.log(studentTemp)
        const a = mentorTemp.students.filter((student, index) => {
            if (student !== studentTemp.name) {
                return student
            }
        })
        console.log(a)

        const b = studentTemp.mentor.filter((mentor, index) => {
            if (mentor !== mentorTemp.name) {
                return mentor
            }
        })

        mentorTemp["students"] = a;
        studentTemp["mentor"] = b

        setA(!a)
         editMentor(a);
    }

    return (
        <div className='container'>
            <h3 className='edit-text'>Edit Mentor</h3>
            <form className='edit-form'>

                <label className='edit-label'>Name:</label>
                <input className='edit-input' placeholder='Enter name' type='text' required name='name' onChange={handleChange} value={selectedMentor.name} />


                <label className='edit-label'>Email:</label>
                <input className='edit-input' placeholder='Enter email' type='email' required name='email' onChange={handleChange} value={selectedMentor.email} />


                <label className='edit-label'>Mobile Number:</label>
                <input className='edit-input' placeholder='Enter mobile number' type='number' maxLength={10} required name='mobileNumber' onChange={handleChange} value={selectedMentor.mobileNumber} />


                <label className='edit-label'>Course:</label>
                <select className='edit-input' onChange={handleChange} value={selectedMentor.course} name='course'>
                    <option>Select your course</option>
                    <option>{courses[0]}</option>
                    <option>{courses[1]}</option>
                    <option>{courses[2]}</option>
                </select>
                <br />

                <label className='edit-label'>Students:</label>
                <table >
                    <thead >
                        <tbody >
                            <tr >
                                <td>
                                    {
                                        selectedMentor.students && selectedMentor.students.map((data, id) => {
                                            if (selectedMentor.students.length !== null) {
                                                return <div key={id} className='edit-label'>
                                                    <label className='edit-mentor-label'>{data}:</label>
                                                </div>
                                            }
                                        }

                                        )
                                    }
                                </td>
                                                                
                                <td>
                                    {
                                        selectedMentor.students && selectedMentor.students.map((data, id) => {
                                            // console.log(selectedMentor.students)
                                            if (data !== null) {
                                                return <div>
                                                    <button className='edit-mentor-btn' onClick={(e) => handleDelete(e, id)} >Delete</button>
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

export default EditMentor