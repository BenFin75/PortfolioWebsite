const Home = () => {
  return ( 
    <div className="home bg-mainPrimary flex-1 flex-col">
      <div className="intro flex-1 flex">
        <div className="text-area">
          <div className="name">
            Hi, my name is Ben Finley!
          </div>
          <div className="intro-blurb text-mainSecondary">
            I'm a web developer with a degree in geology. 
          </div>
        </div>
        <div className="headshot">
          <div className="img h-20 w-20 bg-mainSecondary"></div>
        </div>
      </div>
      <div className="education flex-1">
        <div className="fieldShot">Image Here</div>
        <div className="edu-blurb">
          I recently completed the Odin Project bootcamp. I have a degree in geology, with significant experience in the GIS field.
        </div>
      </div>
    </div>
   );
}
 
export default Home;