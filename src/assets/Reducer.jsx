// it gives you more concrete way to handle complex states
// it gives you set action that you can form on your state to convert 
//your new state to a new version of the state based on the action that you sended
import React, { useReducer } from "react";
const ACTION = {
    INCREMENT: 'increment',
    DECREMENT : 'decrement'
}
function reducer(state, action) {
    switch (action.type) {
 case  ACTION.INCREMENT :
        return {
        count: state.count + 1
            }
        case ACTION.DECREMENT:
            return {
                count: state.count-1
            }
        default:
            return state
}
}
export const Reducer = () => {
const [state,dispatch] = useReducer(reducer,{count:0})
    function increment() {
        dispatch({type : ACTION.INCREMENT});
    }
    function decrement() {
        dispatch({ type:ACTION.DECREMENT})        
    }
    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
)
}