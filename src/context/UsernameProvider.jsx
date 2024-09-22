import UsernameContext from "./UsernameContext";
import {useState} from "react";

const UsernameProvider = ({children}) => {

    const [username, setUsername] = useState("")

    return(
        <UsernameContext.Provider value={{username, setUsername}}>
            {children}
        </UsernameContext.Provider>
    )
}

export default UsernameProvider;