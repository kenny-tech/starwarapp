import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

const SearchResult = () => {
    return (
        <React.Fragment>
            <Header />
            <Row>
                <Col md={3}>
                    <div className="mt-2 ml-2">
                        <Sidebar/>
                    </div>
                </Col>
                <Col md={9}>
                    <div style={{margin: '20px'}}>
                        <h1>This is the Search Result page</h1>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SearchResult;