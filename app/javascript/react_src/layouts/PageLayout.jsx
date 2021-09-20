import React from "react"

function PageLayout(props) {
    return (
        <>
            <div style={{
                padding: "10px"
            }}>
                {props.children}
            </div>
        </>
    )
}

export default PageLayout