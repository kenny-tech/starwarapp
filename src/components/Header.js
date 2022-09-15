import React, { useState } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';

const Header = () => {

    const [searchInput, setSearchInput] = useState("");
    let people = JSON.parse(localStorage.getItem("people"));

    const handleSearch = (e) => {
        let searchText = e.target.value;
        if(searchText === "") {
            localStorage.setItem("filteredPeople", JSON.stringify(people));
            console.log('Filtered people: ', people);
            localStorage.setItem("filtering", false);
        } else {
            setSearchInput(searchText);
            filterList(searchText);
            localStorage.setItem("filtering", true);
        }
    }

    const filterList = (searchText) => {        
        // filter people based on search text
        people = people.filter(function(person) {
            return person.name.toLowerCase().indexOf(searchText) !== -1;
        });
        console.log('Filtered people: ', people);
        localStorage.setItem("filteredPeople", JSON.stringify(people));
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Starwar App</Navbar.Brand>
            <Nav className="me-auto">
                <Form.Control type="text" defaultValue={searchInput} placeholder="Search" style={{width: "400px"}} onChange={(e) => handleSearch(e)} />
            </Nav>
      </Navbar>
    )
}

export default Header;