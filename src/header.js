import Nav from "./nav";
import { useState } from "react";
import Intro from "./nav_pages/intro";
import Project from "./project";
import Contacts from "./nav_pages/contact";
import Resume from "./nav_pages/resume";

function Header() {
  const [intro, setIntro] = useState(true);
  const [profilo, setProfilo] = useState(false);
  const [contact, setContact] = useState(false);
  const [resume, setResume] = useState(false);

  return (
    <>
      <h1>Welcome to my page</h1>
      <Nav
        intro={[intro, setIntro]}
        profilo={[profilo, setProfilo]}
        contact={[contact, setContact]}
        resume={[resume, setResume]}
      />
      {intro && <Intro />}
      {profilo && <Project />}
      {contact && <Contacts />}
      {resume && <Resume />}
    </>
  );
}

export default Header;
