import resume from '../img/Resume.pdf';



const Resume = () => {
  return (
    <div className="page flex w-full">
      <iframe src={resume} title='My Resume'
              className='w-full'
      ></iframe>
    </div>
  );
}
 
export default Resume;