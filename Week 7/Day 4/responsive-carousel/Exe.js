import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div>

      <h1>My Travel Carousel</h1>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Hong_Kong_Skyline.jpg"
            alt="Hong Kong"
          />
          <p className="legend">Hong Kong</p>
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Macau_skyline.jpg"
            alt="Macao"
          />
          <p className="legend">Macao</p>
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Tokyo_Tower_and_surroundings.jpg"
            alt="Japan"
          />
          <p className="legend">Japan</p>
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Las_Vegas_Strip.jpg"
            alt="Las Vegas"
          />
          <p className="legend">Las Vegas</p>
        </div>

      </Carousel>

    </div>
  );
}

export default App;