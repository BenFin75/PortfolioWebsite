import { useEffect } from "react"
import { MdOutlineContactMail, MdOutlineListAlt, MdOutlineFolderShared, MdMenu } from "react-icons/md";
import { WiDayRainMix } from "react-icons/wi";
import { BsGlobe2, BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../img/logo1.svg";

const home = <MdOutlineListAlt size="40"/>;
const projects = <MdOutlineFolderShared size="40"/>;
const gis = <BsGlobe2 size="40"/>;
const weather = <WiDayRainMix size="40"/>;
const resume = <MdOutlineContactMail size="40"/>;
const linkedin = <BsLinkedin size="40"/>;
const github = <BsGithub size="40"/>;
const menu = <MdMenu size="40"/>;

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

  const openMenu = () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
  }

  return ( 
    <div className="fixed top-0 left-0 h-24 md:h-screen w-screen md:w-36 m-0
                    flex md:flex-col items-center justify-between
                      bg-sideBarPrimary shadow-lg">
      <div className="logo justify-start">
        <img src={logo} alt="" className="h-32 w-32" />
      </div>
      <div className="hidden md:flex md:flex-col">
        <SidebarIcon icon={home} id="home" pageName="Home" changePage={changePage} dropDown={false} />
        {/* <SidebarIcon icon={projects} id="coding" pageName="Coding Projects" changePage={changePage} dropDown={false} />
        <SidebarIcon icon={gis} id="gis" pageName="GIS Projects" changePage={changePage} dropDown={false} /> */}
        <SidebarIcon icon={weather} id="weather" pageName="Whats the Weather?" changePage={changePage} dropDown={false} />
        <SidebarIcon icon={resume} id="resume" pageName="Resume" changePage={changePage} dropDown={false} />
      </div>
      <div className="links flex md:flex-col">
        <SidebarLink icon={github} link="https://github.com/benfin75" />
        <SidebarLink icon={linkedin} link="https://linkedin.com/in/benfin75" />
      </div>
      <div className="menu text-sideBarSecondary pr-7 md:hidden" onClick={() => openMenu()}>{menu}</div>
      <div className="dropdown hidden md:hidden fixed top-24 right-0 px-4 rounded-bl-xl bg-sideBarPrimary flex flex-col">
        <div className="menu">
          <SidebarIcon icon={home} id="home" pageName="Home" changePage={changePage} dropDown={openMenu}/>
          {/* <SidebarIcon icon={projects} id="coding" pageName="Coding Projects" changePage={changePage} dropDown={openMenu} />
          <SidebarIcon icon={gis} id="gis" pageName="GIS Projects" changePage={changePage} dropDown={openMenu} /> */}
          <SidebarIcon icon={weather} id="weather" pageName="Whats the Weather?" changePage={changePage} dropDown={openMenu} />
          <SidebarIcon icon={resume} id="resume" pageName="Resume" changePage={changePage} dropDown={openMenu} />
        </div>
      </div>
    </div>
   );
}

const SidebarIcon = ({ icon, id, pageName, changePage, dropDown }) => {
  return (
    <div className="sidebar-icon group" id={id} onClick={(pageName) => {changePage(pageName); dropDown();}}>
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