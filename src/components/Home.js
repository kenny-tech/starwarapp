import React, { useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";

import Header from './Header';
import Sidebar from './Sidebar';   

const Home = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        getPeople();
    }, []); 

    const getPeople = async () => {
        try {
            await axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                // console.log(response.data.results);
                setPeople(response.data.results);
                localStorage.setItem("people", response.data.results);
            })
            .catch((error) => {
                console.log(error);
            })  
        } catch (error) {
            console.log(error);
        } 
    }

    const handleGetDetails = (name) =>{
        console.log(name);
    }

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
                            <ListGroup variant="flush">
                                {
                                    people.map(person => {
                                        return (
                                            <Link to="/details">
                                                <ListGroup.Item>{person.name}</ListGroup.Item>
                                            </Link>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Card>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;