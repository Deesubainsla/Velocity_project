import { Children, createContext, useState } from "react";

const mycontext = createContext();

const MycontextProvider = ({children})=>{
    const saveuser = localStorage.getItem('token');
    const currstate = saveuser? saveuser:null;
    const saverole = localStorage.getItem('role');
    const currrole = saverole?saverole:null;

    const [user, setuser] = useState(currstate);
    const [role, setrole] = useState(currrole);

    return(
        <mycontext.Provider value={{user, setuser, role, setrole}}>
            {children}
        </mycontext.Provider>
    )
}

export {mycontext, MycontextProvider}