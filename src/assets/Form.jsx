const ControlledInputs = () => {
    return <form className="form">
        <h4>Controlled Input</h4>
        <div className="form-row">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="" id="name" className="form-input" />

        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="" id="email" className="form-input" />
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
    </form>


};
export default ControlledInputs;