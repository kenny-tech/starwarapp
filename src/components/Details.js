import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons';

import Header from './Header';
import Sidebar from './Sidebar';

const Details = () => {

    const location = useLocation();
    const { name } = location.state;
    const [person, setPerson] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);
    const [favourite, setFavourite] = useState([]);

    useEffect(() => {
        getPerson();
    }, []); 

    const getPerson = () => {
        let data = JSON.parse(localStorage.getItem("people")).find(person => person.name === name);
        console.log(data);
        setPerson(data);
    }

    const handleFavouriteClick = (name) => {
        try {
            setIsFavourite(!isFavourite);
            
            if(!favourite.includes(name)){          // check whether name has been added to favourite
                favourite.push(name);               // add to favourite because name doesn't exists
            }else{
                favourite.splice(favourite.indexOf(name), 1);  // remove from favourite
            }
            localStorage.setItem("favourites", JSON.stringify(favourite));
        } catch (error) {
            console.log(error);
        } 
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
                        <h2>{name} <span onClick={() => handleFavouriteClick(person.name)}>{isFavourite? <StarFill color="royalblue" size={30} />: <Star color="royalblue" size={30} />}</span></h2>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td>Gender</td>
                                    <td>{person.gender}</td>
                                </tr>
                                <tr>
                                    <td>Year of Birth</td>
                                    <td>{person.birth_year}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{person.height}</td>
                                </tr>
                                <tr>
                                    <td>Hair Color</td>
                                    <td>{person.hair_color}</td>
                                </tr>
                                <tr>
                                    <td>Skin Color</td>
                                    <td>{person.skin_color}</td>
                                </tr>
                                <tr>
                                    <td>Mass</td>
                                    <td>{person.mass}</td>
                                </tr>
                            </tbody>
                        </Table>   
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Details;