import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

function CreateMentor() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [course, setCourse] = useState('')

    const courses = ["Web Development", "Android Development", "Testing"]

    const { mentors, addMentor } = useContext(GlobalContext)

    const navigate = useNavigate()

    const handleAddButton = (e) => {
        e.preventDefault()
        const newMentor = {
            id: mentors.length + 1,
            name,
            email,
            mobileNumber,
            course,
            students : []
        }
        addMentor(newMentor)
        navigate('/')
    }


    return (
        <div className='container'>
            <h3 className='create-text'>Create Mentor</h3>
            <form className='create-form'>

                <label className='create-label'>Name:</label>
                <input className='create-input' placeholder='Enter name' type='text' required onChange={(e) => setName(e.target.value)} name='name' value={name} />


                <label className='create-label'>Email:</label>
                <input className='create-input' placeholder='Enter email' type='email' required onChange={(e) => setEmail(e.target.value)} name='email' value={email} />


                <label className='create-label'>Mobile Number:</label>
                <input className='create-input' placeholder='Enter mobile number' type='number' required onChange={(e) => setMobileNumber(e.target.value)} name='mobileNumber' value={mobileNumber} />


                <label className='create-label'>Course:</label>
                <select className='create-input' onChange={(e) => setCourse(e.target.value)} value={course} name='course'>
                    <option>Select your course</option>
                    <option>{courses[0]}</option>
                    <option>{courses[1]}</option>
                    <option>{courses[2]}</option>
                </select>
                <br />
                <button className='btn btn-success' onClick={handleAddButton}>
                    Add Mentor
                </button>


            </form>
        </div>
    )
}

export default CreateMentor