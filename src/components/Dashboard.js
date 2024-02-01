import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

function Dashboard() {

    const navigate = useNavigate();

    const { students, deleteStudent } = useContext(GlobalContext);
    const { mentors, deleteMentor } = useContext(GlobalContext)
   

    return (
        <div>
            <div className="col text-start">
                <h4 className='dashboard-text'>Student List</h4>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-primary">
                            <th>Sl no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Course</th>
                            <th>Mentor</th>
                            <th>Actions</th>
                        </tr>
                        {
                            students && students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.mobileNumber}</td>
                                    <td>{student.course}</td>                                   
                                    <td>
                                        {
                                            student.mentor && student.mentor.map((data, id) => {
                                                console.log(student.mentor)
                                                if (student.mentor.length !== null) {
                                                    return <p key={id}>{data}</p>
                                                }  else  {
                                                    return ""
                                                }
                                            })
                                        }
                                    </td>
                                    {student ?
                                        <td>
                                            <button className="btn btn-primary" onClick={() => {navigate(`edit-student/${student.id}`);console.log(student.mentor)}}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                                        </td>
                                        : ""
                                    }

                                </tr>
                            ))
                        }


                    </thead>
                </table>
            </div>

            <div className="col text-start">
                <h4 className='dashboard-text' >Mentor List</h4>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-primary">
                            <th>Sl no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Course</th>
                            <th>Students</th>
                            <th>Actions</th>
                        </tr>
                        {
                            mentors && mentors.map(mentor => (
                                <tr key={mentor.id}>
                                    <td>{mentor.id}</td>
                                    <td>{mentor.name}</td>
                                    <td>{mentor.email}</td>
                                    <td>{mentor.mobileNumber}</td>
                                    <td>{mentor.course}</td>
                                    <td> {
                                        mentor.students && mentor.students.map((data, id) => {
                                            if (mentor.students.length !== null) {
                                                return <p key={id}>{data}</p>
                                            }
                                        })
                                    }
                                    </td>
                                    {
                                        mentor ?
                                            <td>
                                                <button className="btn btn-primary" onClick={() => navigate(`edit-mentor/${mentor.id}`)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => deleteMentor(mentor.id)}>Delete</button>
                                            </td>
                                            : ""

                                    }

                                </tr>
                            ))
                        }
                    </thead>
                </table>
            </div>
        </div >
    )
}

export default Dashboard