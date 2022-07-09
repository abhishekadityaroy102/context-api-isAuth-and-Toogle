import { useContext, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import { Login } from "./Login";
const dark={
    color:"white",
    background:"black"
  }
  const light={
    color:"black",
    background:"white"
  }
export const Navbar = () => {
  const [state,toogle,handleisAuth,handleToogle,handlelogout]=useContext(Authcontext)
  return (
    <div>
      <button style={toogle ? dark:light} onClick={handlelogout}>{state.isAuth ? "LOGOUT" : "Login"}</button>
      <button onClick={handleToogle}>{!toogle ? "Dark":"LIGHT"}</button>
      {state.isAuth ? (
        <div style={toogle ?dark:light}>
            <h2>Login Successfully !</h2>
          <h2> Your token is :{state.token}</h2>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
};