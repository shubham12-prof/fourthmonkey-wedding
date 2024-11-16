import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'Diwesh Joshi',
    position: 'Director | Principal Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s',
    bio: "A visionary individual with a background in Product and Industrial design...",
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'linkedin', link: 'https://linkedin.com' },
      { platform: 'envelope', link: 'mailto:example@example.com' }
    ]
  }, 
  {
    name: 'Ishita',
    position: 'Director | COO | Product Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s',
    bio: 'A visionary individual with a background in Product and Industrial design...',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'linkedin', link: 'https://linkedin.com' },
      { platform: 'envelope', link: 'mailto:example@example.com' }
    ]
  },
  {
    name: 'Bhavneet',
    position: 'Director | COO | Product Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s',
    bio: 'A visionary individual with a background in Product and Industrial design...',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'linkedin', link: 'https://linkedin.com' },
      { platform: 'envelope', link: 'mailto:example@example.com' }
    ]
  },
  {
    name: 'Bhavneet',
    position: 'Director | COO | Product Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s',
    bio: 'A visionary individual with a background in Product and Industrial design...',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'linkedin', link: 'https://linkedin.com' },
      { platform: 'envelope', link: 'mailto:example@example.com' }
    ]
  },
  {
    name: 'Bhavneet',
    position: 'Director | COO | Product Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m6aE6Z5rz9CkX-D-zn0sJlAZikxJjbUsgg&s',
    bio: 'A visionary individual with a background in Product and Industrial design...',
    socials: [
      { platform: 'facebook', link: 'https://facebook.com' },
      { platform: 'linkedin', link: 'https://linkedin.com' },
      { platform: 'envelope', link: 'mailto:example@example.com' }
    ]
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamSection;
