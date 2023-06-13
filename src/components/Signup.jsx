import { useState } from "react";
import FormAction from "./FormAction";
import Input from "./Input";
import Select from "./Select";
import AuthService from "../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUserType] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [profile_img, setProfileImg] = useState("");

  const registerMessage = () => {
    toast.success("Registration was successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const errorMessage = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(
        full_name,
        email,
        user_type,
        password1,
        password2,
        profile_img
      ).then(
        () => {
          setTimeout(() => {
            registerMessage();
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        <Input
          id="full_name"
          placeholder="Full Name"
          type="text"
          required
          name="full_name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          id="email-address"
          placeholder="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          id="user_type"
          name="user_type"
          required
          value={user_type}
          onChange={(e) => setUserType(e.target.value)}
        />

        <Input
          id="password1"
          placeholder="Password"
          type="password"
          required
          name="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <Input
          id="password2"
          placeholder="Confirm Password"
          type="password"
          required
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <Input
          id="profile_img"
          type="file"
          required
          name="profile_img"
          onChange={(e) => setProfileImg(e.target.files[0])}
        />
        {profile_img && (
          <div>
            <img
              alt="not fount"
              width={"200px"}
              src={URL.createObjectURL(profile_img)}
            />
            <br />
            <button onClick={() => setProfileImg(null)}>Remove</button>
          </div>
        )}
        <FormAction text="Signup" type="button" onClick={handleSubmit} />
      </div>
    </form>
  );
};
export default Signup;
