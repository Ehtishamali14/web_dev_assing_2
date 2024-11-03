import React from 'react';


const EventItem = ({ image, title, price, description, listItems }) => (
  <div className="swiper-slide event-item">
    <div className="row gy-4">
      <div className="col-lg-6">
        <img src={image} className="img-fluid" alt={title} />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>{title}</h3>
        <div className="price">
          <p><span>{price}</span></p>
        </div>
        <p className="fst-italic">{description}</p>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}><i className="bi bi-check2-circle"></i> <span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Events = () => {
  const eventData = [
    {
      image: 'assets/img/events-slider/events-slider-1.jpg',
      title: 'Birthday Parties',
      price: '$189',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      listItems: ['Ullamco laboris nisi', 'Duis aute irure dolor', 'Ullamco laboris nisi']
    },
    // add more event objects as needed
  ];

  return (
    <section id="events" className="events section">
      <img className="slider-bg" src="assets/img/events-bg.jpg" alt="" />
      <div className="container">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            {eventData.map((event, index) => (
              <EventItem key={index} {...event} />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
