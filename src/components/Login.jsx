export default function Login() {
  function handleSubmit() {
    console.log("submitted");
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/*On the submit button below, we have to specify the type="button",
          so that the form will not auto submit the user's input by itself */}
        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
