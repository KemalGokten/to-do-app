import React from 'react';


const TeamMember = ({ name, role, github, linkedin, imageUrl }) => (
  <div className="team-member">
    <div className="member-info">
      <h3>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
    <div className="member-image">
      <img src="../assets/images/kemal.jpg" alt={kemal} />
      <img src="../assets/images/kivanc.jpg" alt={kivanc} />
    </div>
  </div>
);

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>We are a team of developers who love to code. Ironhack is our bootcamp. We are based in Germany. We hope to see you in other projects.</p>

      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMember
          name="Kemal Gökten"
          role="Developer"
          github="https://github.com/KemalGokten"
          linkedin="https://linkedin.com/in/KemalGokten"
          imageUrl="https://via.placeholder.com/150" // Add image URL for Kemal
        />
        <TeamMember
          name="Kivanc Keskinbora"
          role="Developer"
          github="https://github.com/kingblocks"
          linkedin="https://linkedin.com/in/kivanckeskinbora"
          imageUrl="https://via.placeholder.com/150" // Add image URL for Kivanc
        />
      </div>
    </div>
  );
};

export default About;
