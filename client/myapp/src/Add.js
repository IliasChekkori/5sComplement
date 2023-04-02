import React, { useState } from 'react';
import './Add.css';
import { useNavigate } from "react-router-dom";
import { AiFillHome} from "react-icons/ai";
import { AiFillMessage} from "react-icons/ai";
import { MdAccountCircle} from "react-icons/md";

const AddListing = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [marketPrice, setMarketPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [pictures, setPictures] = useState([]);
  const navigate = useNavigate();  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      _id: 123, // replace with the actual user ID
      user_id: 0,
      name,
      picture: pictures[0], // assuming only one picture is selected
      location,
      description,
      price: marketPrice,
      weight,
      quantity,
      __v: 0,
    };

    try {
      const response = await fetch('http://localhost:5020/listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const listings = await response.json();
      console.log('Listings:', listings);
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handlePictureSelect = (event) => {
    const files = event.target.files;
    const pictureUrls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        pictureUrls.push(reader.result);
        if (pictureUrls.length === files.length) {
          setPictures(pictureUrls);
        }
      };
    }
  };
  const handleGoHome = () => {
    navigate('/home');
  }
  const addStylesheet = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './Add.css';
    document.head.appendChild(link);
  };

  addStylesheet();

  return (
    <div className="add-listing-form">
         <div className="navbar">
  <button onClick={() => navigate("/home")}><AiFillHome /></button>
  <button onClick={() => navigate("/profile")}><MdAccountCircle /></button>
  <button onClick={() => navigate("/messages")}><AiFillMessage/></button>
</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Description
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          Weight (lbs)
          <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
        <label>
          Quantity
          <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <label>
          Market price
          <input type="number" value={marketPrice} onChange={(event) => setMarketPrice(event.target.value)} />
        </label>
        <label>
          Location
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <label>
          Image
          <br />
          <input type="file" accept="image/*" multiple onChange={handlePictureSelect} />
        </label>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default AddListing;