import box5 from '../../../public/box5.png'
import box4 from '../../../public/box4.png'
import box3 from '../../../public/box3.png'
import box2 from '../../../public/box2.png'
import box1 from '../../../public/box1.png'

interface jobopenings{
    id:number;
    jobtitle:string;
    jobdescription:string;
    jobrequirements:string;
    joblocation:string;
    jobduration:string;
}

interface howtoapply{
  id:number;
  heading:string;
  description:string;
  image:string,
}

export const Openings1:jobopenings[] =[
    {
        id:1,
        jobtitle:"sales and Marketing",
        jobdescription:"Develop and execute strategic marketing plans, engage with potential clients, and drive sales growth. Collaborate with various teams to enhance brand visibility and market penetration.",
        jobrequirements:"Bachelor’s degree in Marketing, Business, or related field; proven experience in sales and marketing; excellent communication and negotiation skills.",
        joblocation:"Bangalore",
        jobduration:"Full - Time"
      },
      {
        id:2,
        jobtitle:"Frontend Developer",
        jobdescription:"Design and implement user-facing features for our products. Ensure a seamless and engaging user experience through clean and efficient code.",
        jobrequirements:"Bachelor’s degree in Computer Science or related field; proficiency in HTML, CSS, JavaScript, and modern frontend frameworks like React.",
        joblocation:"Indore",
        jobduration:"Full - Time"
      },
]

export const Openings2:jobopenings[] =[
      {
        id:3,
        jobtitle:"Backend - Developer",
        jobdescription:"Build and maintain server-side logic, ensuring high performance and responsiveness of applications. Develop APIs and integrate third-party services.",
        jobrequirements:"Bachelor’s degree in Computer Science or related field; strong understanding of server-side languages such as Node.js, Python, or Java; experience with database management and cloud services.",
        joblocation:"Indore",
        jobduration:"Full - Time"
      },
      {
        id:4,
        jobtitle:"Full Stack Developer",
        jobdescription:"Work on both the frontend and backend of our applications, creating seamless end-to-end solutions. Collaborate with cross-functional teams to deliver robust and scalable products.",
        jobrequirements:"Bachelor’s degree in Computer Science or related field; proficiency in both frontend and backend technologies; experience with full stack frameworks and libraries.",
        joblocation:"Indore",
        jobduration:"Full - Time"
      }
]

export const Howtoapply = [
  {
    id:1,
    heading:"Browse Open Positions",
    description:"Review the roles we’re currently hiring for.",
    image:box1,
 },
 {
  id:2,
  heading:"Submit Your Application",
  description:"Fill out our online application form and upload your resume along with a cover letter.",
  image:box2,
},
{
  id:3,
  heading:"Interview Process:",
  description:"If your application meets our requirements, we will reach out to schedule interviews.",
  image:box3,
},
{
  id:4,
  heading:"Join the Team:",
  description:"Successful candidates will receive an offer and begin their journey with Flipr.",
  image:box4,
}
]