import React, { useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";

import Header from './Header';
import Sidebar from './Sidebar';   

const Home = () => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPeople();
    }, []); 

    const getPeople = async () => {
        try {
            await axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                // console.log(response.data.results);
                localStorage.setItem("people", JSON.stringify(response.data.results));
                setPeople(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })  
        } catch (error) {
            console.log(error);
        } 
    }

    let filtering, filterPeople, filteredPeople;
    filterPeople = localStorage.getItem('filtering');
    if(filterPeople){
        filtering = 1;
        filteredPeople = JSON.parse(localStorage.getItem("filteredPeople"));
    }else{
        filtering = 0;
        filteredPeople = JSON.parse(localStorage.getItem("people"));
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
                            { filtering === 1 ? (<ListGroup variant="flush">
                                {
                                    filteredPeople.map(person => {
                                        return (
                                            <Link to="/details" state={{ name: person.name}}>
                                                <ListGroup.Item>{person.name}</ListGroup.Item>
                                            </Link>
                                        )
                                    })
                                }
                            </ListGroup>) : (<ListGroup variant="flush">
                                {
                                    people.map(person => {
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

export default Home;