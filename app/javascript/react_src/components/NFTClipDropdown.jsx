import React from "react"
import {Dropdown} from "react-bootstrap";

function NFTClipDropdown() {
    return (
        <>


            <div className="dropdown" style={{display: "none", marginLeft: "10px"}}>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Quick NFT Clip
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="">Last 10 seconds</Dropdown.Item>
                        <Dropdown.Item href="">Last 20 seconds</Dropdown.Item>
                        <Dropdown.Item href="">Last 30 seconds</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    )
}

export default NFTClipDropdown