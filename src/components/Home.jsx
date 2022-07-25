const Home = () => {
  return ( 
    <div className="home bg-mainPrimary flex-1 flex p-[8vw]">
      <div className="divider w-1 h-[50%]  bg-mainSecondary mr-3"></div>
      <div className="main-content flex flex-col">
        <div className="name">
          Hi, I'm Ben Finley!
        </div>
        <div className="divider h-1 w-5 justify-self-center bg-mainSecondary"></div>
        <div className="intro flex-1 flex mt-4">
          <div className="text-area">
            <div className="intro-blurb text-mainSecondary">
            I am a web developer with experience from The Odin Project. I am passionate about creating engaging and intuitive web designs which engage users, and  tell a story
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