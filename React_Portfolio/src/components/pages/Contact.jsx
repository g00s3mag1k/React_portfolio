import { useState } from "react";
import '../../App.css';

function Form() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {

      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "name") {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
};
  
    const handleFormSubmit = (e) => {

      e.preventDefault();
  
      if (!validateEmail(email) || !name) {
        setErrorMessage("Email or username is invalid");
        return;
      }
      if (!message) {
        setErrorMessage(`Message is required`);
        return;
      }
  
      setName("");
      setEmail("");
};

    return (
      <div className="container">
        <h1><b>Contact</b></h1>
        <form className="form" onSubmit={handleFormSubmit}>
        <label>Email adress : 
          <div>
            <input
              value={email}
              name="email"
              size="40"
              onChange={handleInputChange}
              type="text"
              placeholder="email"/>
          </div>
        </label>
        <label>Name : 
          <div>
            <input 
              value={name}
              name="name"
              size="40"
              onChange={handleInputChange}
              type="text"
              placeholder="name"/>
          </div>
        </label>
        <label>Message : 
          <div>
            <textarea
              value={message}
              name="message"
              rows="8" cols="40"
              onChange={handleInputChange}/>
          </div>
        </label>
          <button type="submit" style={{color:'white'}}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
};
  
export default Form;