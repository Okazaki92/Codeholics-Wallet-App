import { useState } from "react";
import TeamMember from "../TeamMember/TeamMember";
import styles from "./Footer.module.css";
import { teamMembersList } from "../TeamMember/TeamMembersList";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setModalOpen(false);
  };
  const openTeamModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={openTeamModal}>Pokaż Listę Zespołu</button>
      {modalOpen && (
        <div className={styles.modal}>
          <div>
            <h2>Hello there! 👋</h2>
            <p>
              💡 Our project get your attention? <br />
              👇 Then you can find more information about us below
            </p>
          </div>
          <div>
            <h2>Who we are? 🎓</h2>
            <ul>
              <li>
                ✔️ A tight-knit, creative and talented team of full stack
                developers who are creating apps for different users.
              </li>
              <li>✔️ We are GoIT course graduates.</li>
              <li>
                ✔️ We will be happy to make your dream come true and help you
                achieve success in your business, using modern technical
                knowledge and agile technologies.
              </li>
            </ul>
          </div>
          <div>
            <h2>What we do? 👨‍💻</h2>
            <ul>
              <li>
                ✔️ We develop websites and web applications using the latest
                technologies that help our clients to develop and be
                competitive.
              </li>
              <li>
                ✔️ Our documentation is simple, beautiful, and easy for
                everyone.
              </li>
            </ul>
          </div>
          <div>
            <h2>Why we care? 📄</h2>
            <ul>
              <li>
                ✔️ Because better documentation means easier understanding,
                faster coding, less time to solve problems and bigger
                satisfaction when everything is done.
              </li>
            </ul>
          </div>
          <div>
            <h2>Some things About Us</h2>
          </div>
          <button onClick={closeModal}>Zamknij</button>
          <div>
            {teamMembersList.map((member, index) => (
              <div key={index}>
                <button onClick={() => openModal(member)}>
                  Pokaż Informacje o {member.name}
                </button>
              </div>
            ))}
          </div>
          {selectedMember && (
            <TeamMember
              name={selectedMember.name}
              role={selectedMember.role}
              goals={selectedMember.goals}
              difficulties={selectedMember.difficulties}
              hobbies={selectedMember.hobbies}
              linkedin={selectedMember.linkedin}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
