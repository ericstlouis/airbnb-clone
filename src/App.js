import React, {useState} from 'react';
import './App.css';
import {Navbar, Hero, Card} from "./components";

function App() {
  const Data = [
    {
      id: 1,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcountry-living.net%2Fwp-content%2Fuploads%2F2013%2F09%2Fcountry_home2.jpg&f=1&nofb=1https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcountry-living.net%2Fwp-content%2Fuploads%2F2013%2F09%2Fcountry_home2.jpg&f=1&nofb=1',
      status: 0,
      country: 'USA',
      bio: 'Enjoy the country life',
      price: '$500',
      reviews: '1000',
      alt: 'House on the country side',
      rating: '5',
    },
    {
      id: 2,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2F3dTqJwFBg7-l6o7gxgTjz5LhgVU%3D%2F2747x1826%2Ffilters%3Afill(auto%2C1)%2Fparadise-island-110180525-5c1d475b46e0fb000106e0b4.jpg&f=1&nofb=1',
      status: 10,
      country: 'Bahamas',
      bio: 'A beautiful archipelagos island',
      price: '$190',
      reviews: '242',
      alt: 'tropical island beach',
      rating: '24',
    },
    {
      id: 3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.it.atcdn.net%2Fwp-content%2Fuploads%2F2015%2F11%2Fshutterstock_279572969.jpg&f=1&nofb=1',
      status: 4,
      country: 'Switzerland',
      bio: 'A Nice spot for mountain biking',
      price: '$50',
      reviews: '10',
      alt: 'Mountains',
      rating: '2001',
    },
  ];
  const [cardItem, setCardItem] = useState(Data)


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="GroupCardrDiv">
        <Card item={cardItem} />
      </div>
    </div>
  );
}

export default App;
