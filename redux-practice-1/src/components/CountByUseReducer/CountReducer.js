import React, { useReducer } from 'react';
const initialState = {
    count : 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT' :
            return { count: state.count - 1 }
        default:
            return state 
    }
}
const CountReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);
    return (
        <div>
            { state.count }
            <button onClick={ ()=> dispatch({ type: 'INCREMENT' }) } > add </button>
            <button onClick={ ()=> dispatch({ type: 'DECREMENT' }) } >  remove </button>
        </div>
    );
};

export default CountReducer;