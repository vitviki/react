import Input from "../Components/Input";
import Header from "../Components/Header";
import Button from "../Components/Button";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  return (
    <>
      <Header text="Login" />
      <div className="inputs">
        <Input type={"email"} icon={email_icon} placeholder="Email" />
        <Input type={"password"} icon={password_icon} placeholder="Password" />
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click here</span>
      </div>
      <div className="buttons-container">
        <Button text="Login" />
        <Button text="Sign up" />
      </div>
    </>
  );
};

export default Login;
