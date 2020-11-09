import React from 'react';
import { FaGithub } from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => (
  <footer className="footer">
    <p>
      Made by <a href="https://www.szymonrucinski.pl">Szymon Ruciński</a>
    </p>
    <p>
      <a href="https://github.com/szymonrucinski/">
      <FontAwesomeIcon icon={FaGithub} />
      </a>
    </p>
  </footer>
);