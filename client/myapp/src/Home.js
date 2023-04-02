import './Home.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
/*

*/
function Home () {

    const listingsArray = [];

    fetch("http://localhost:5020/listing").then(response => response.json())
    .then(data => {
    // Assign the fetched data to listingsArray
    listingsArray.push(...data);
    //console.log(listingsArray);
  });

console.log(listingsArray); // this will log an empty array


  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setItem] = useState("");
  const navigate = useNavigate();  
  const dummyData = [
    {
      listing_id: 1241,
      name: "Hay stack",
      list_name: "Naod",
      picture: "base 64 string",
      poster: "Billy Farmer",
      location: "Bethlehem",
      description: "string",
      price: 1,
      weight: 2,
      quantity: 3,
    },
    {
      listing_id: 1242,
      name: "Wheat Field",
      list_name: "Naod",
      picture: "base 64 string",
      poster: "Jane Doe",
      location: "New York",
      description: "string",
      price: 2,
      weight: 3,
      quantity: 4,
    },
    {
      listing_id: 1243,
      list_name: "Naod",
      name: "Corn Farm",
      picture: "base 64 string",
      poster: "John Smith",
      location: "Chicago",
      description: "string",
      price: 3,
      weight: 4,
      quantity: 5,
    }
  ];

  function popUp(list){
    setShowPopup(true);
    setItem(list);
    //alert(listId);
  }

  function closePopup() {
    setShowPopup(false);
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function goToMessage(){
    navigate("/message");
  }

  return (
    <div className={`page ${showPopup ? 'blurred' : ''}`}>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="item-container">
        {filteredData.map((item) => (
          <div key={item.listing_id} className="item" onClick={() => popUp(item)}>
            <h2>{item.name}</h2>
            <img src={item.picture} alt={item.name} />
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <p>Weight: {item.weight}</p>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
        <button className="close-button" onClick={closePopup}>X</button>
        <h2>{selectedItem.name}</h2>
        <img src={selectedItem.picture} alt={selectedItem.name} />
        <p>Location: {selectedItem.location}</p>
        <p>Price: {selectedItem.price}</p>
        <p> Description: {selectedItem.description}. Their are {selectedItem.quantity} avaialble. </p>
        <p>Weight: {selectedItem.weight}</p>
        <button onClick={ () => goToMessage()}> Contact the Seller</button>
      </div>
      )}
    </div>
  );
}

export default Home;
