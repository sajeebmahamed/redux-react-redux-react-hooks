export const patientState = {
    patients: []
}
export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = [...state.patients, newPatient]
            return { patients: allPatient }
        case 'REMOVE_PATIENT': 
            const remainignPatient = state.patients.filter(patient=> patient.id !== action.id)
            const newState = { patients: remainignPatient }
            return newState
        default:
            return state
    }
}