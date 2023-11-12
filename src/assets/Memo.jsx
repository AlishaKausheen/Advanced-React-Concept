
import React, { useState, useMemo } from "react";
// use Memo stands for memorization
export const Memo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // slow function will run only when the number changes beauty of memo hook
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number]);
    const themeStyle = {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    return (
        <div>
            <input type="number" value={number} onChange={e=>{
              setNumber(parseInt(e.target.value))
            }} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyle}>{ doubleNumber}</div>
        </div>
    )
    function slowFunction(num) {
        for (let i = 0; i <= 1000; i++) {
            return num * 2;
        }
    }
}