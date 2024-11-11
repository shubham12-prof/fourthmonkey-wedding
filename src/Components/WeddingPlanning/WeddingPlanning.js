import React from 'react';
import './WeddingPlanning.css';

const WeddingPlanning = () => {
  return (
    <section className="wedding-planning">
      <h2>Complete Wedding Planning</h2>
      <div data-aos="fade-up" className="service-list">
        <div className="service">
          <h3>Conceptualizing and Storytelling</h3>
          <p>We create unique wedding stories and experiences tailored to your vision.</p>
        </div>
        <div className="service">
          <h3>Décor Designing and Planning</h3>
          <p>Our team designs beautiful, personalized décor that complements your style.</p>
        </div>
        <div className="service">
          <h3>Guest Management</h3>
          <p>We manage invitations, RSVPs, and ensure your guests are well taken care of.</p>
        </div>
        <div className="service">
          <h3>Catering</h3>
          <p>From gourmet meals to themed menus, we ensure your guests are delighted.</p>
        </div>
        <div className="service">
          <h3>Vendor Sourcing</h3>
          <p>We handle the sourcing and coordination of trusted vendors for your big day.</p>
        </div>
        <div className="service">
          <h3>Entertainment</h3>
          <p>We bring your celebration to life with curated entertainment options.</p>
        </div>
        <div className="service">
          <h3>Artist & Celebrity Management</h3>
          <p>From live performances to celebrity appearances, we coordinate all entertainment needs.</p>
        </div>
        <div className="service">
          <h3>Venue and Hospitality Management</h3>
          <p>We handle venue selection, accommodation, and guest hospitality with utmost care.</p>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlanning;
