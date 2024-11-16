import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, position, image, bio, socials }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-photo" />
      <div className="member-info">
        <h3>{name}</h3>
        <p className="position">{position}</p>
        <p className="bio">{bio}</p>
        <div className="social-icons">
          {socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.platform}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
