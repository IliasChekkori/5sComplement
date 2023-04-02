import './Home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
/*

*/
function Home () {

    const [listingsArray, setListingsArray] = useState([]);

    useEffect(() => {
      async function getListings() {
        try {
          const response = await fetch("http://localhost:5020/listing");
          const data = await response.json();
          setListingsArray(data);
        } catch (error) {
          console.log(error);
        }
      }
      getListings();
    }, []);

console.log(listingsArray); // this will log an empty array


  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setItem] = useState("");
  const navigate = useNavigate();  

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

  const filteredData = listingsArray.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function goToMessage(){
    navigate("/message");
  }
  function goToAdd(){
    navigate("/add");
  }
  return (
    <div className={`page ${showPopup ? 'blurred' : ''}`}>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <button onClick={ () => goToAdd()}> + (ADD LISTING)</button>
      </div>
      <div className="item-container">
        {filteredData.map((item) => (
          <div key={item.listing_id} className="item" onClick={() => popUp(item)}>
            <h2>{item.name}</h2>
            <img src={item.picture} className = "IMG" alt={item.name} />
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
