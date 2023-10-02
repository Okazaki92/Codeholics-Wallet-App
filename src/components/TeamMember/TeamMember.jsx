import styles from "../Footer/Footer.module.css";
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
    <div className={styles.teamInfo}>
      <h2 className={styles.headerName}>
        {name} - {role}
      </h2>
      <img src={avatar} alt="avatar" className={name} />
      <h3 className={styles.header}>Project Goals:</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <h3 className={styles.header}>Project Difficulties:</h3>
      <ul>
        {difficulties.map((difficulty, index) => (
          <li key={index}>{difficulty}</li>
        ))}
      </ul>
      <h3 className={styles.header}>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h3 className={styles.header}>My Socials</h3>
      <ul>
        <li>
          <a
            className={styles.link}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamMember;
