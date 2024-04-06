import Input from "../Components/Input";
import Header from "../Components/Header";
import Button from "../Components/Button";
import person_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

const Signup = ({ setType }) => {
  return (
    <>
      <Header text="Sign Up!" />
      <div className="inputs">
        <Input type={"text"} icon={person_icon} placeholder={"Name"} />
        <Input type={"email"} icon={email_icon} placeholder={"Email"} />
        <Input
          type={"password"}
          icon={password_icon}
          placeholder={"Password"}
        />
      </div>
      <div className="buttons-container">
        <Button text={"Sign up"} />
        <Button text={"Login"} />
      </div>
    </>
  );
};

export default Signup;
