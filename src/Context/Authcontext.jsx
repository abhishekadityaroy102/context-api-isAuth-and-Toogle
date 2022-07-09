import { createContext, useState } from "react";


export const Authcontext = createContext();
export const Authcontextprovider = ({ children }) => {
  const [state, setstate] = useState({
    isAuth: false,
    token: null
  });
//   const dark={
//     color:"white",
//     background:"black"
//   }
//   const light={
//     color:"black",
//     background:"white"
//   }
  const [toogle, settoogle] = useState(true);

  const handleisAuth = (token) => {
    setstate({ ...state, isAuth: true, token: token });
  };
  const handleToogle = () => {
    settoogle(!toogle);
  };
  const handlelogout=()=>{
    setstate({...state,isAuth:false,token:null})
  }
  return (
    <Authcontext.Provider value={[state,toogle, handleisAuth, handleToogle,handlelogout]}>
      {children}
    </Authcontext.Provider>
  );
};