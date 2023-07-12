function Nav(props) {
  const { intro, profilo, contact, resume } = props;

  function setStatus(num) {
    //console.log(intro[1], profilo, contact, resume);
    switch (num) {
      case 3:
        intro[1](false);
        profilo[1](false);
        contact[1](false);
        resume[1](true);
        break;
      case 1:
        intro[1](false);
        profilo[1](true);
        contact[1](false);
        resume[1](false);
        break;
      case 2:
        intro[1](false);
        profilo[1](false);
        contact[1](true);
        resume[1](false);
        break;
      default:
        intro[1](true);
        profilo[1](false);
        contact[1](false);
        resume[1](false);
    }
  }
  return (
    <>
      <button id="intro" disabled={intro[0]} onClick={() => setStatus(0)}>
        About Me
      </button>
      <button id="portfolio" disabled={profilo[0]} onClick={() => setStatus(1)}>
        Portfolio
      </button>
      <button id="contact" disabled={contact[0]} onClick={() => setStatus(2)}>
        Contact
      </button>
      <button id="Resume" disabled={resume[0]} onClick={() => setStatus(3)}>
        Resume
      </button>
    </>
  );
}

export default Nav;
