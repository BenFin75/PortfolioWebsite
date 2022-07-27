import headshot from '../img/headshot.png';
import lava from '../img/lava.png'

const Home = () => {
  return ( 
    <div className="home bg-mainPrimary flex-1 flex items-center pl-2 pt-8 md:pt-8 md:px-[8vw] justify-center">
      <div className="divider w-[3px] h-[50%] mt-6  bg-mainSecondary mr-3 flex-shrink-0 hidden md:flex lg:flex"></div>
      <div className="main-content flex flex-col">
        <div className="name place-self-start text-6xl font-semibold mb-4 text-mainSecondary">
          Hi, I'm Ben Finley!
        </div>
        <div className="divider h-[3px] w-[65%] ml-[9rem] bg-mainSecondary hidden md:hidden lg:flex"></div>
        <div className="intro flex-1 flex mt-4 flex-col-reverse md:flex-row pb-6">
          <div className="text-area flex max-w-[50rem] md:pr-10 lg:pr-20 justify-center align-middle">
            <div className="intro-blurb flex items-center text-mainSecondary md:text-2xl lg:text-4xl">
              <span className="text-left">
              I am a web developer with experience from The Odin Project. I am driven to create unique and intuitive web designs which can engage users and are able to tell a story.
              </span>
            </div>
          </div>
          <div className="headshot place-self-center">
            <div className="img h-80 w-80 bg-mainSecondary flex justify-center items-center">
              <img src={headshot} alt="Me with a wooden Pokeball" className='h-[95%] w-[95%]'/>
            </div>
          </div>
        </div>
        <div className="education flex-1 flex mt-4 flex-col pb-2 md:flex-row">
          <div className="img h-80 w-80 flex justify-start items-end flex-shrink-0 place-self-center bg-mainSecondary">
            <img src={lava} alt="Me infront for a lava flow in Iceland" 
                  className="w-[90%] h-[90%] mb-3 ml-2"
            />
          </div>
          <div className="text-area flex flex-col max-w-[50rem] md:pl-10 lg:pl-18 align-middle">
            <div className="text-center text-mainSecondary font-bold md:text-2xl lg:text-3xl">
              I am passionate about the world around me.
            </div>
            <div className="edu-blurbbintro-blur flex flex-1 items-center text-mainSecondary md:text-2xl lg:text-4xl">
            <span className="text-left">
            My formal eduaction is in the study of structural geology. I love to explore the land around me and discover new intriguing stories and history.
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;