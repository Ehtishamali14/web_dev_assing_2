import React from 'react';

const Menu = () => {
  return (
    <section className="menu-area section-gap" id="coffee">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">What kind of Coffee we serve for you</h1>
              <p>Who are in extremely love with eco-friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            "Cappuccino",
            "Americano",
            "Espresso",
            "Macchiato",
            "Mocha",
            "Coffee Latte",
            "Piccolo Latte",
            "Ristretto",
            "Affogato",
          ].map((coffee, index) => (
            <div key={index} className="col-lg-4">
              <div className="single-menu">
                <div className="title-div justify-content-between d-flex">
                  <h4>{coffee}</h4>
                  <p className="price float-right">$49</p>
                </div>
                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
