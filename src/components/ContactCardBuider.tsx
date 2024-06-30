
// components/ContactCardBuilder.tsx

import React from 'react';
import { ContactCard } from './cards';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactInfo = [
  {
    iconGit: <FiGithub />,
    iconLinkedin: <FiLinkedin />,
    site: "Pau Garcia",
    usernameGit: "paugarcia32",
    usernameLinkedin: "paugarcia32",
    linkLinkedin: "https://www.linkedin.com/in/paugarcia32/",
    linkGit: "https://github.com/paugarcia32",
    linkImage: "https://avatars.githubusercontent.com/u/37461446?v=4" // URL de ejemplo de imagen
  },
  {
    iconGit: <FiGithub />,
    iconLinkedin: <FiLinkedin />,
    site: "Jordi Pompas",
    usernameGit: "jordipg05",
    usernameLinkedin: "jordipompas",
    linkGit: "https://github.com/jordipg05",
    linkLinkedin: "https://www.linkedin.com/in/jordipompas/",
    linkImage: "https://avatars.githubusercontent.com/u/100807571?v=4" // URL de ejemplo de imagen
  },
  {
    iconGit: <FiGithub />,
    iconLinkedin: <FiLinkedin />,
    site: "Jose Larrinzal",
    usernameGit: "jlarrinzal",
    usernameLinkedin: "jlarrinzal",
    linkGit: "https://github.com/jlarrinzal",
    linkLinkedin: "https://www.linkedin.com/in/jose-maria-larrinzal-jimenez-3915a6290/",
    linkImage: "https://avatars.githubusercontent.com/u/91834420?v=4" // URL de ejemplo de imagen
  }
];

const ContactCardBuilder: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-20">
      {contactInfo.map((info, index) => (
        <ContactCard
          key={index}
          iconGit={info.iconGit}
          iconLinkedin={info.iconLinkedin}
          site={info.site}
          usernameGit={info.usernameGit}
          usernameLinkedin={info.usernameLinkedin}
          linkGit={info.linkGit}
          linkLinkedin={info.linkLinkedin}
          linkImage={info.linkImage}
        />
      ))}
    </div>
  );
};

export default ContactCardBuilder;
