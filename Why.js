import React from 'react';
import menuImage1 from '../assets/img/menu/caesar.jpg';
import menuImage2 from '../assets/img/menu/tuscan-grilled.jpg';
import menuImage3 from '../assets/img/menu/mozzarella.jpg';
import menuImage4 from '../assets/img/menu/greek-salad.jpg';
import menuImage5 from '../assets/img/menu/spinach-salad.jpg';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section">
      <div className="container section-title" data-aos="fade-up">
        <h2>WHY US</h2>
        <p>Why Choose Our Restaurant</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <MenuItem imgSrc={menuImage1} title="Caesar Selections" price="$8.95" description="Lorem, deren, trataro, filede, nerada" />
          <MenuItem imgSrc={menuImage2} title="Tuscan Grilled" price="$9.95" description="Grilled chicken with provolone, artichoke hearts, and roasted red pesto" />
          <MenuItem imgSrc={menuImage3} title="Mozzarella Stick" price="$4.95" description="Lorem, deren, trataro, filede, nerada" />
          <MenuItem imgSrc={menuImage4} title="Greek Salad" price="$9.95" description="Fresh spinach, crisp romaine, tomatoes, and Greek olives" />
          <MenuItem imgSrc={menuImage5} title="Spinach Salad" price="$9.95" description="Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette" />
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ imgSrc, title, price, description }) => (
  <div className="col-lg-6 menu-item">
    <img src={imgSrc} className="menu-img" alt={title} />
    <div className="menu-content">
      <a href="#">{title}</a><span>{price}</span>
    </div>
    <div className="menu-ingredients">
      {description}
    </div>
  </div>
);

export default WhyUs;
