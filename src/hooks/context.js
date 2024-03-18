import { createContext, useState } from "react";

let AccountContext = createContext();
let AccountContextProvider = ({children}) => {

    let [account, setAccount] = useState({
        fname: "julven",
        lname: "condor",
        bday: "1990-07-07",
        gender: "male"
    })

    let fieldCheck = (data) => {

        // console.log(data)
        let valid = true;

        Object.keys(data).forEach((x,i) => {
            console.log(x, data[x], !data[x])
            if(!data[x]) valid = false;
        });

        if(!valid) return false;
        return true;
    
    }

    return (
        <AccountContext.Provider value = {{account, setAccount, fieldCheck}}>
            {children}
        </AccountContext.Provider>
    )


}

export const context = {AccountContext, AccountContextProvider}