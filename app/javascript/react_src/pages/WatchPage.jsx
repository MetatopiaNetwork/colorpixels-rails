import React from "react"
import 'shaka-player/dist/controls.css';
import AccountDisplay from "../components/AccountDisplay";
import EventHeader from "../components/EventHeader";
import LiveVideoWrapper from "../wrappers/LiveVideoWrapper";
import MintNftWrapper from "../wrappers/MintNftWrapper";
import ClipList from "../components/ClipList";
import {Col, Container, Row} from "react-bootstrap";

function WatchPage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={8}>
                        <EventHeader/>
                        <AccountDisplay/>
                        <LiveVideoWrapper/>
                        <MintNftWrapper/>
                    </Col>
                    <Col sm={4}>
                        <ClipList/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WatchPage