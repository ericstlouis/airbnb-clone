import React, {useState} from 'react';
import './App.css';
import {Navbar, Hero, Card} from "./components";

function App() {
  const Data = [
    {
      id: 1,
      image: '',
      status: 'Sold out',
      country: 'USA',
      bio: '1000',
      price: '$500',
      review: 'Visit the country side',
    },
    {
      id: 2,
      image: '',
      status: 'online',
      country: 'Bahamas',
      bio: 'A beautiful archipelagos island',
      price: '$190',
      review: '242',
    },
    {
      id: 3,
      image: '',
      status: 'offline',
      country: 'Russia',
      bio: 'A Nice spot for mountain biking',
      price: '$50',
      review: '10',
    },
  ];
  const [cardItem, setCardItem] = useState(Data)


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card item={cardItem} />
    </div>
  );
}

export default App;
