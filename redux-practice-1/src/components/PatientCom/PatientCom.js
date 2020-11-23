import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../reducers/patientReducer';

const PatientCom = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState)
    console.log(state);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            id: state.patients.length + 1,
            name: nameRef.current.value
        })
        console.log(nameRef.current.value)
        nameRef.current.value = ''
    }
    return (
        <div>
           {
               state.patients.map(patient=> <li
                key={patient.id}
                onClick={ () => dispatch({ type: 'REMOVE_PATIENT', id: patient.id }) }
               >
                {patient.name}
                
            </li>)
           }
            <form onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                    type="text"
                
                />
            </form>
        </div>
    );
};

export default PatientCom;