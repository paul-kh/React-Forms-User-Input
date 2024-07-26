import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log("submitted");
    console.log("User email: ", enteredEmail);
    console.log("User password: ", enteredPassword);

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsInvalid) {
      setEmailIsInvalid(true);
      return; // make sure we don't submit form data to backend
    }

    //clear error message
    setEmailIsInvalid(false);

    console.log("Sending HTTP request....");
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
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
