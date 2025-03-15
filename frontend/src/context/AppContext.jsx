import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { foodMenu } from "../assets/assets";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const url =  "http://localhost:4000";
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const value = {
        food_list,
        foodMenu,
        url,
        token,
        setToken,
        user,
        setUser
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;