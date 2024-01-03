import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    handleInputBlur:handleEmailBlur ,
    handleInputChange:handleEmailChange ,
    value: emailValue,
    hasError: emailError
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty (value)
  });

  const {
    handleInputBlur:handlePasswordBlur,
    handleInputChange:handlePasswordChange,
    value:passwordValue,
    hasError: passwordError
  } = useInput('', (value) => {
    return hasMinLength(value, 6)
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(emailError || passwordError){
      return
    }

    console.log(emailValue, passwordValue)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
            label="email" 
            id="email" 
            type="email" 
            name="email" 
            onBlur={handleEmailBlur}
            onChange={handleEmailChange} 
            value={emailValue} 
            error={emailError && 'Please enter a valid email'}
        />

        <Input 
            label="password" 
            id="password" 
            type="password" 
            name="password" 
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange} 
            value={passwordValue}
            error={passwordError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
