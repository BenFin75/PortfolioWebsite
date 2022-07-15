import { MdOutlineContactMail, MdOutlineListAlt, MdOutlineFolderShared } from "react-icons/md";
import { WiDayRainMix } from "react-icons/wi";
import { BsGlobe2, BsLinkedin, BsGithub } from "react-icons/bs";

const home = <MdOutlineListAlt size="40"/>;
const projects = <MdOutlineFolderShared size="40"/>;
const gis = <BsGlobe2 size="40"/>;
const weather = <WiDayRainMix size="40"/>;
const resume = <MdOutlineContactMail size="40"/>;
const linkedin = <BsLinkedin size="40"/>;
const github = <BsGithub size="40"/>;

const Sidebar = ({ setCurrentPage }) => {

  const changePage = (e) => {
    document.querySelectorAll('.sidebar-icon').forEach(button => button.classList.remove('clicked'));
    let buttonClicked;
    if (e.target.tagName !== 'DIV') {
      if (e.target.tagName !== 'svg') {
        buttonClicked = e.target.parentNode.parentNode;
      } else {
        buttonClicked = e.target.parentNode;
      }
    } else {
      buttonClicked = e.target;
    }
    buttonClicked.classList.add('clicked');

    switch (buttonClicked.id) {
      case 'Home' :
        setCurrentPage('home');
        break;
      case 'Coding Projects' :
        setCurrentPage('coding');
        break;
      case 'GIS Projects' :
        setCurrentPage('gis');
        break;
      case 'Whats The Weather' :
        setCurrentPage('weather');
        break;
      case 'Resume' :
        setCurrentPage('resume');
        break;
      default :
        break;
    }
  }

  return ( 
    <div className="fixed top-0 left-0 h-screen w-36 m-0
                    flex flex-col items-center
                      bg-sideBarPrimary shadow-lg">
      <div className="contents">
        <SidebarIcon icon={home} pageName="Home" changePage={changePage}/>
        <SidebarIcon icon={projects} pageName="Coding Projects" changePage={changePage} />
        <SidebarIcon icon={gis} pageName="GIS Projects" changePage={changePage} />
        <SidebarIcon icon={weather} pageName="Whats The Weather" changePage={changePage} />
        <SidebarIcon icon={resume} pageName="Resume" changePage={changePage} />
      </div>
      <div className="links mt-auto">
      <SidebarLink icon={github} link="https://github.com/benfin75" />
      <SidebarLink icon={linkedin} link="https://linkedin.com/in/benfin75" />
      </div>
    </div>
   );
}

const SidebarIcon = ({ icon, pageName, changePage }) => {
  return (
    <div className="sidebar-icon group" id={pageName} onClick={(pageName) => changePage(pageName)}>
      { icon }

      <span className="sidebar-page-name group-hover:scale-100">
        {pageName}
      </span>
    </div>
  )
}

const SidebarLink = ({ icon, link }) => {
  return (
    <a className="sidebar-link 
                text-sideBarSecondary hover:text-sideBarHover
                p-2"
                href={link} target="_blank" rel="noreferrer">
      { icon }
    </a>
  )
}

export default Sidebar;