import React from 'react';
import { Row, Col,  Card, ListGroup } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

const SearchResult = () => {

    let filteredPeople = JSON.parse(localStorage.getItem("filteredPeople"));

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
                        <h3>Characters</h3>
                        <Card style={{ width: '50rem' }}>
                            { filteredPeople === null ? <p className="pl-20">No result found...</p> : (<ListGroup variant="flush">
                                {
                                    filteredPeople.map(person => {
                                        return (
                                            <Link to="/details" state={{ name: person.name}}>
                                                <ListGroup.Item>{person.name}</ListGroup.Item>
                                            </Link>
                                        )
                                    })
                                }
                            </ListGroup>)} 
                        </Card>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SearchResult;