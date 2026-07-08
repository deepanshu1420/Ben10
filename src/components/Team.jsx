import React from "react";
import "./Team.css";

const Team = ({ teamRef }) => {
  return (
    <div className="team-section">
      <section className="team" ref={teamRef}>
        <div className="team-image">
          <img src="/images/team.png" alt="Ben, Gwen and Kevin" />
        </div>

        <div className="team-content">
          <h1>The Alien Force Team</h1>

          <p>
            Ben Tennyson, Gwen Tennyson, and Kevin Levin form one of the most
            powerful teams in the universe. Together they battle the Highbreed,
            DNAliens, Forever Knights, and countless alien threats using the
            Omnitrix, advanced magic, and incredible strength.
          </p>

          <p>
            While Ben leads with the Omnitrix, Gwen supports the team with her
            powerful Anodite magic, and Kevin brings unmatched combat skills
            and the ability to absorb materials, making the trio nearly
            unstoppable.
          </p>

          <button className="team-btn">
            Explore Team
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>
          <span className="footer-line">
            © 2026 Ben 10 Alien Force.{" "}
          </span>
          <span className="footer-line">
            Made with ❤️ by{" "}
            <a
            href="https://github.com/deepanshu1420"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            >
            Deepanshu Sharma
            </a>.
          </span>
        </p>
      </footer>
      </div>
  );
};

export default Team;