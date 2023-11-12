import { useState } from "react";

const ControlledInputs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email);
    }
    return <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled Input</h4>
        <div className="form-row">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="" id="name" className="form-input" value={name} onChange={(e)=>{setName(e.target.value)}}/>

        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="" id="email" className="form-input" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
    </form>


};
export default ControlledInputs;