import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    students: [
        {
            id: 1,
            name: "Student1",
            email: "student1@gmail.com",
            mobileNumber: "1111111111",
            course: "Web Development",
            mentor: ["Mentor1"]
        },
        {
            id: 2,
            name: "Student2",
            email: "student2@gmail.com",
            mobileNumber: "222222222",
            course: "Testing",
            mentor: ["Mentor3"]
        },
        {
            id: 3,
            name: "Student3",
            email: "student3@gmail.com",
            mobileNumber: "333333333",
            course: "Android Development",
            mentor: ["Mentor2"]
        },
        {
            id: 4,
            name: "Student4",
            email: "student4@gmail.com",
            mobileNumber: "4444444444",
            course: "Web Development",
            mentor: ["Mentor1"]
        },
    ],

    mentors: [{
        id: 1,
        name: "Mentor1",
        email: "mentor1@gmail.com",
        mobileNumber: "1111111111",
        course: "Web Development",
        students: ["Student1", "Student4"]
    },
    {
        id: 2,
        name: "Mentor2",
        email: "mentor2@gmail.com",
        mobileNumber: "2222222222",
        course: "Android Development",
        students: ["Student3"]
    },
    {
        id: 3,
        name: "Mentor3",
        email: "mentor3@gmail.com",
        mobileNumber: "3333333333",
        course: "Testing",
        students: ["Student2"]
    }
    ]

};

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteStudent = (id) => {
        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
    }

    const deleteMentor = (id) => {
        dispatch({
            type: 'DELETE_MENTOR',
            payload: id
        })
    }

    const addStudent = (student) => {
        dispatch({
            type: 'ADD_STUDENT',
            payload: student
        })
    }

    const addMentor = (mentor) => {
        dispatch({
            type: 'ADD_MENTOR',
            payload: mentor
        })
    }

    const editStudent = (student) => {
        dispatch({
            type: 'EDIT_STUDENT',
            payload: student
        })
    }

    const editMentor = (mentor) => {
        dispatch({
            type: 'EDIT_MENTOR',
            payload: mentor
        })
    }    

    const assignStudent = (student,mentor) => {
        console.log(student)
        dispatch({
            type: 'ASSIGN_STUDENT',
            payload: {student,mentor}          
        })        
    }

    const assignMentor = (mentor) => {
        dispatch({
            type : 'ASSIGN_MENTOR',
            payload : mentor 
        })
    }


   
    return (
        <GlobalContext.Provider value={{
            students: state.students,
            mentors: state.mentors,
            deleteStudent,
            deleteMentor,
            addStudent,
            addMentor,
            editStudent,
            editMentor,
            assignStudent,
            assignMentor
        }
        }>
            {children}
        </GlobalContext.Provider>
    )
} 