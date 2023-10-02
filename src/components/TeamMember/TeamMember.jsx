const TeamMember = ({
  name,
  avatar,
  role,
  goals,
  difficulties,
  hobbies,
  linkedin,
  github,
}) => {
  return (
    <div>
      <h2>
        {name} - {role}
      </h2>
      <img src={avatar} alt="avatar" className={name} />
      <h3>Project Goals:</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <h3>Project Difficulties:</h3>
      <ul>
        {difficulties.map((difficulty, index) => (
          <li key={index}>{difficulty}</li>
        ))}
      </ul>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h3>My Socials</h3>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
    </div>
  );
};

export default TeamMember;
