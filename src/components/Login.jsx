import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import FormAction from "./FormAction";
import { toast } from "react-toastify";
import AuthService from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginMessage = () => {
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const errorMessage = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          setTimeout(() => {
            loginMessage();
            navigate("/");
            window.location.reload();
          }, 1000);
        },
        (error) => {
          setTimeout(() => {
            errorMessage();
            console.log(error);
          }, 1000);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-8 space-y-6 ">
      <div className="">
        <Input
          id="email-address"
          placeholder="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <FormAction text="Login" type="button" onClick={handleLogin} />
    </form>
  );
};

export default Login;
