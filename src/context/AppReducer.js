import { useParams } from "react-router-dom"

export default (state, action) => {
    switch (action.type) {

        case 'DELETE_STUDENT':
            return {
                ...state,
                students: state.students.filter(student => {
                    return student.id !== action.payload
                })
            }

        case 'DELETE_MENTOR':
            return {
                ...state,
                mentors: state.mentors.filter(mentor => {
                    return mentor.id !== action.payload
                })
            }

        case 'ADD_STUDENT':
            return {
                ...state, students: [...state.students, action.payload]
            }

        case 'ADD_MENTOR':
            return {
                ...state, mentors: [...state.mentors, action.payload]
            }

        case 'EDIT_STUDENT': {
            const updateStudent = action.payload;

            const updatedStudent = state.students.map(student => {
                if (student.id === updateStudent.id) {
                    return updateStudent
                }
                return student
            })
            return {
                ...state,
                students: updatedStudent
            }
        }

        case 'EDIT_MENTOR': {
            const updateMentor = action.payload
            console.log(updateMentor)

            const updatedMentor = state.mentors.map(mentor => {
                if (mentor.id === updateMentor.id) {
                    return updateMentor
                }
                return mentor
            })
            return {
                ...state,
                mentors: updatedMentor
            }
        }

        case 'ASSIGN_STUDENT': {
            const assignStudent = action.payload
            console.log(assignStudent)

            let a = [];
            console.log(action.payload.mentor.id, action.payload.student.name)
            const updatedStudents = state.mentors.forEach(student => {
                console.log(student.id)
                if (student.id == action.payload.mentor.id) {
                    console.log("abc")
                    let c = []
                    a.push({ ...student, students: [...student?.students, action.payload.student.name] })
                } else {
                    a.push(student)
                }
            })

            let a1 = [];
            const updatedMentors = state.students.forEach(student => {
                if (student.id === action.payload.student.id) {
                    a1.push({ ...student, mentor: [...student?.mentor, action.payload.mentor.name] })
                } else {
                    a1.push(student)
                }
            })
            return { ...state, students: a1, mentors: a }

        }
        default:
            return state
    }
}