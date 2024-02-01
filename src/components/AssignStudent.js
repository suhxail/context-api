import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

function AssignStudent() {

    const { students, mentors, assignMentor, assignStudent } = useContext(GlobalContext)

    const [student, setStudent] = useState([]);
    const [mentor, setMentor] = useState([]);
    const [viewSelectedStudent, setViewSelectedStudent] = useState({})
    const [viewSelectedMentor, setViewSelectedMentor] = useState({})

    const navigate = useNavigate()

    const handleAssignButton = () => {
        if (student && mentor) {
            console.log(viewSelectedStudent, viewSelectedMentor)
            assignStudent(viewSelectedStudent, viewSelectedMentor)
            assignMentor(viewSelectedMentor, viewSelectedStudent)
            navigate('/');
        } else {
            alert('Please select a student and a mentor');
        }
    }

    const handleStudentChange = (e) => {
        const selectedStudent = students.find((s) => s.id == e.target.value)
        console.log(selectedStudent)
        setViewSelectedStudent(selectedStudent)
    }

    const handleMentorChange = (e) => {
        console.log(mentors)
        const selectedMentor = mentors.find((m) => m.name == e.target.value)
        console.log(selectedMentor)
        setViewSelectedMentor(selectedMentor)
    }

    return (
        <div className='container'>
            <h4 className='dashboard-text'>Assign student to mentor</h4>
            <div className='create-form'>
                <div>
                    <p className='create-label'>Mentor</p>
                    <select className='create-input' onChange={handleMentorChange} >
                        <option>Select mentor</option>

                        {
                            mentors && mentors.map(data => (<option key={data.id} value={data.name} >{data.name}</option>))
                        }

                    </select>

                </div>

                <div>
                    <p className='create-label'>Student</p>
                    <select className='create-input' onChange={handleStudentChange} >
                        <option>Select student</option>
                        {
                            students && students.map(data => (<option key={data.id} value={data.id}>{data.name}</option>))
                        }

                    </select>
                </div>
                <br />
                <div>
                    <button onClick={handleAssignButton} >Assign student</button>
                </div>
            </div>
        </div>
    );
}

export default AssignStudent