import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log("User email: ", enteredValue.email);
    console.log("User password: ", enteredValue.password);
  }

  function handleInputValues(identifier, event) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  }

  return (
    /* The elegant way to prevent the default behavior of form submission:
         - specify the onSubmit = {handleSubmit} in the form element,
         - call the prevenDefault() method of the form event in the handleSubmit function
    */
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputValues("email", event)}
            value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputValues("password", event)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
