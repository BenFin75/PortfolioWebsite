import { useEffect } from "react"
import { MdOutlineContactMail, MdOutlineListAlt, MdOutlineFolderShared } from "react-icons/md";
import { WiDayRainMix } from "react-icons/wi";
import { BsGlobe2, BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../img/logo1.svg"

const home = <MdOutlineListAlt size="40"/>;
const projects = <MdOutlineFolderShared size="40"/>;
const gis = <BsGlobe2 size="40"/>;
const weather = <WiDayRainMix size="40"/>;
const resume = <MdOutlineContactMail size="40"/>;
const linkedin = <BsLinkedin size="40"/>;
const github = <BsGithub size="40"/>;

const Sidebar = ({ currentPage, setCurrentPage }) => {

  useEffect(() => {
    document.querySelectorAll('.sidebar-icon').forEach(button => button.classList.remove('clicked'));
    console.log(currentPage)
    let currentPageButton = document.querySelector('#' + currentPage)
    if (currentPageButton) {
      currentPageButton.classList.add('clicked')
    }
  }, [currentPage]) 

  const changePage = (e) => {
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
    setCurrentPage(buttonClicked.id)
  }

  return ( 
    <div className="fixed top-0 left-0 h-screen w-36 m-0
                    flex flex-col items-center justify-between
                      bg-sideBarPrimary shadow-lg">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col">
        <SidebarIcon icon={home} id="home" pageName="Home" changePage={changePage}/>
        <SidebarIcon icon={projects} id="coding" pageName="Coding Projects" changePage={changePage} />
        <SidebarIcon icon={gis} id="gis" pageName="GIS Projects" changePage={changePage} />
        <SidebarIcon icon={weather} id="weather" pageName="Whats the Weather?" changePage={changePage} />
        <SidebarIcon icon={resume} id="resume" pageName="Resume" changePage={changePage} />
      </div>
      <div className="links">
      <SidebarLink icon={github} link="https://github.com/benfin75" />
      <SidebarLink icon={linkedin} link="https://linkedin.com/in/benfin75" />
      </div>
    </div>
   );
}

const SidebarIcon = ({ icon, id, pageName, changePage }) => {
  return (
    <div className="sidebar-icon group" id={id} onClick={(pageName) => changePage(pageName)}>
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