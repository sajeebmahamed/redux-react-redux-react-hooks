import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../reducers/patientReducer';

const PatientCom = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState)
    console.log(state);
    return (
        <div>
            <h1> {state.patients.length} </h1>
        </div>
    );
};

export default PatientCom;