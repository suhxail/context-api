import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

function CreateStudent() {

    const { students, addStudent } = useContext(GlobalContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [course,setCourse] = useState('')
    
    const navigate = useNavigate()

    const courses = ["Web Development", "Android Development", "Testing"]

   

    const handleAddButton = (e) => {
        e.preventDefault()
        const newStudent = {
            id: students.length + 1,
            name,
            email,
            mobileNumber,
            course,
            mentor : []
        }
        addStudent(newStudent)
        navigate('/')
    }

    return (
        <div className='container'>
            <h3 className='create-text'>Create Student</h3>
            <form className='create-form'>

                <label className='create-label'>Name:</label>
                <input className='create-input' placeholder='Enter name' type='text' required onChange={(e) => setName(e.target.value)} value={name} name='name' />


                <label className='create-label'>Email:</label>
                <input className='create-input' placeholder='Enter email' type='email' required onChange={(e) => setEmail(e.target.value)} value={email} name='email' />


                <label className='create-label'>Mobile Number:</label>
                <input className='create-input' placeholder='Enter mobile number' type='number' maxLength={10} required onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} name='mobileNumber' />


                <label className='create-label'>Course:</label>
                <select className='create-input' onChange={(e) => setCourse(e.target.value)} value={course} name='course' required>
                    <option>Select your course</option>
                    <option>{courses[0]}</option>
                    <option>{courses[1]}</option>
                    <option>{courses[2]}</option>
                </select>
                <br />
                <button className='btn btn-success' onClick={handleAddButton} type='submit'  >
                    Add Student
                </button>
            </form>
        </div>
    )
}

export default CreateStudent