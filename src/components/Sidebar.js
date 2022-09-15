import React, { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

const Sidebar = () => {

    const [isFavourite, setIsFavourite] = useState(false);
    const [favourite, setFavourite] = useState([]);
    let favourites = JSON.parse(localStorage.getItem("favourites"));

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
        <div style={{margin: '20px'}}>
            <h3>Favourites</h3>
            {
                favourites!==null ? null : <p>No Favourite found</p>
            }
            {
                favourites !== null? favourites.map(favourite => {
                    return (
                        <p>{favourite} <span onClick={() => handleFavouriteClick(favourite)}>{favourite? <StarFill color="royalblue" size={15} />: <Star color="royalblue" size={15} />}</span></p>
                    )
                }) : null
            }
        </div>
    )
}

export default Sidebar;