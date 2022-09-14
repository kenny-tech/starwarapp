import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

const Homepage = () => {
    return (
        <Row>
            <Header />
            <Col md={3}>
                <div className="mt-2 ml-2">
                    <Sidebar/>
                </div>
            </Col>
            <Col md={9}>
                <div style={{margin: '20px'}}>
                    <h1>This is the homepage</h1>
                </div>
            </Col>
        </Row>
    )
}

export default Homepage;