import React, { useEffect } from 'react';

function Home () {

  const dummyData = [
    {
      listing_id: 1241,
      name: "Hay stack",
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


  
  return (
    <div>
      {dummyData.map((item) => (
        <div key={item.listing_id}>
          <h2>{item.name}</h2>
          <img src={item.picture} alt={item.name} />
          <p>Location: {item.location}</p>
          <p>Price: {item.price}</p>
          <p>Weight: {item.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
