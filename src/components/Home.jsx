const Home = () => {
  return ( 
    <div className="home bg-mainPrimary flex-1 flex items-center pl-2 md:p-[8vw] justify-center">
      <div className="divider w-[3px] h-[75%] mt-6  bg-mainSecondary mr-3 flex-shrink-0 hidden md:flex lg:flex"></div>
      <div className="main-content flex flex-col">
        <div className="name place-self-start text-6xl font-medium mb-4 text-mainSecondary">
          Hi, I'm Ben Finley!
        </div>
        <div className="divider h-[3px] w-[75%] ml-[8rem] bg-mainSecondary hidden md:hidden lg:flex"></div>
        <div className="intro flex-1 flex mt-4 flex-col-reverse md:flex-row pb-6">
          <div className="text-area flex max-w-[50rem] md:pr-10 lg:pr-20 justify-center align-middle">
            <div className="intro-blurb flex items-center text-mainSecondary md:text-2xl lg:text-4xl">
              <span className="text-left">
              I am a web developer with experience from The Odin Project. I am passionate about creating unique and intuitive web designs which engage users, and  tell a story
              </span>
            </div>
          </div>
          <div className="headshot">
            <div className="img h-80 w-80 bg-mainSecondary"></div>
          </div>
        </div>
        <div className="education flex-1">
          <div className="img h-80 w-80 bg-mainSecondary">Image Here</div>
          <div className="text-area">
            <div className="text-title">
              I am passionate about the world around me.
            </div>
            <div className="edu-blurb">
            My formal eduaction is in the study of structural geology. I love to explore the land around me and discover new enaging stories and history.
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;