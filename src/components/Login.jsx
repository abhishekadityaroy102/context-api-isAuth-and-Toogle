
import axios from "axios";
import { useContext, useState } from "react";
import { Authcontext } from "../Context/Authcontext";



export const Login = () => {
  const [state,toogle, handleisAuth] = useContext(Authcontext);
  const [formstate, setformstate] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformstate({ ...formstate, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", formstate)
      .then((res) => handleisAuth(res.data.token))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formstate.email}
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formstate.password}
          onChange={handlechange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};