import React from 'react';


const BookATable = () => (
  <section id="book-a-table" className="book-a-table section">
    <div className="container section-title">
      <h2>RESERVATION</h2>
      <p>Book a Table</p>
    </div>
    <div className="container">
      <form action="forms/book-a-table.php" method="post" className="php-email-form">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6"><input type="text" name="name" placeholder="Your Name" required /></div>
          <div className="col-lg-4 col-md-6"><input type="email" name="email" placeholder="Your Email" required /></div>
          <div className="col-lg-4 col-md-6"><input type="text" name="phone" placeholder="Your Phone" required /></div>
          <div className="col-lg-4 col-md-6"><input type="date" name="date" placeholder="Date" required /></div>
          <div className="col-lg-4 col-md-6"><input type="time" name="time" placeholder="Time" required /></div>
          <div className="col-lg-4 col-md-6"><input type="number" name="people" placeholder="# of people" required /></div>
        </div>
        <div className="form-group mt-3">
          <textarea name="message" rows="5" placeholder="Message"></textarea>
        </div>
        <div className="text-center mt-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your booking request was sent.</div>
          <button type="submit">Book a Table</button>
        </div>
      </form>
    </div>
  </section>
);

export default BookATable;
