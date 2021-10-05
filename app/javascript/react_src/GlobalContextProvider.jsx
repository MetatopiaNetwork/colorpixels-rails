import React, {createContext, useState} from "react"

const GlobalContext = createContext(null);

function GlobalContextProvider(props) {
    const [var1, setVar1] = useState(null)
    return (
        <>
            <GlobalContext.Provider
                value={{var1, setVar1}}
            >
                {props.children}
            </GlobalContext.Provider>
        </>
    )
}

export {GlobalContextProvider, GlobalContext}