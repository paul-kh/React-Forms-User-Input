import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  // didEdit below means when losing focus on input field
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    (didEdit.email && !isEmail(enteredValue.email)) ||
    (didEdit.email && !isNotEmpty(enteredValue.email));
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log("User email: ", enteredValue.email);
    console.log("User password: ", enteredValue.password);
  }

  function handleInputChange(identifier, event) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));

    // As soon as user start ediding, error message should go away
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
