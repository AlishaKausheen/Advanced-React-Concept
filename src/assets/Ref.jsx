import React, { useState,useEffect , useRef } from "react";
export const Ref = () => {
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    const inputRef= useRef()
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    function focus() {
        inputRef.current.focus();
        
    }
    return (
        <div>
            <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current}</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}