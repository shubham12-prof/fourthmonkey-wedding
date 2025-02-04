import React from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Diwesh Joshi",
    position: "Director | Principal Designer",
    image:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/man-portrait.jpg",
    bio: "A visionary individual with a background in Product and Industrial design A visionary individual with a background in Product and Industrial designA visionary individual with a background in Product and Industrial design...",
    socials: [
      { platform: "facebook", link: "https://facebook.com" },
      { platform: "linkedin", link: "https://linkedin.com" },
      { platform: "envelope", link: "mailto:example@example.com" },
    ],
  },
  {
    name: "Ishita",
    position: "Director | COO | Product Designer",
    image:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/man-portrait.jpg",
    bio: "A visionary individual with a background in Product and Industrial design A visionary individual with a background in Product and Industrial designA visionary individual with a background in Product and Industrial design....",
    socials: [
      { platform: "facebook", link: "https://facebook.com" },
      { platform: "linkedin", link: "https://linkedin.com" },
      { platform: "envelope", link: "mailto:example@example.com" },
    ],
  },
  {
    name: "Bhavneet",
    position: "Director | COO | Product Designer",
    image:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/man-portrait.jpg",
    bio: "A visionary individual with a background in Product and Industrial design A visionary individual with a background in Product and Industrial designA visionary individual with a background in Product and Industrial design...",
    socials: [
      { platform: "facebook", link: "https://facebook.com" },
      { platform: "linkedin", link: "https://linkedin.com" },
      { platform: "envelope", link: "mailto:example@example.com" },
    ],
  },
  {
    name: "Bhavneet",
    position: "Director | COO | Product Designer",
    image:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/man-portrait.jpg",
    bio: "A visionary individual with a background in Product and Industrial design A visionary individual with a background in Product and Industrial designA visionary individual with a background in Product and Industrial design...",
    socials: [
      { platform: "facebook", link: "https://facebook.com" },
      { platform: "linkedin", link: "https://linkedin.com" },
      { platform: "envelope", link: "mailto:example@example.com" },
    ],
  },
  {
    name: "Bhavneet",
    position: "Director | COO | Product Designer",
    image:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/man-portrait.jpg",
    bio: "A visionary individual with a background in Product and Industrial design A visionary individual with a background in Product and Industrial designA visionary individual with a background in Product and Industrial design...",
    socials: [
      { platform: "facebook", link: "https://facebook.com" },
      { platform: "linkedin", link: "https://linkedin.com" },
      { platform: "envelope", link: "mailto:example@example.com" },
    ],
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
