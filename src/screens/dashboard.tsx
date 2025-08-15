import { ReactNode } from "react";
import logo from "../assets/logo.svg";
import { CourseCategoryModel } from "../types/course_model";
import Course_card from "../components/course_card";
import MetaLogo from "../assets/Meta_Platforms_Inc._logo.png";
import { SiCoursera, SiGeeksforgeeks, SiYoutube } from "react-icons/si";
import Job_card from "../components/job_card";
import useLogoutDialogStore from "../stores/logout-store";
import Buttons from "../components/buttons";
import { NavigateFunction, useNavigate } from "react-router";
import { Toast } from "../utils/toast_utils";

const courseCategories: CourseCategoryModel[] = [
  {
    title: "Web Development",
    description: "Learn how to build websites from scratch",
    courses: [
      {
        title: "Meta Front-End Developer Professional Certificate",
        aurthor: "Meta (formally facebook)",
        logo: <img srcSet={MetaLogo} className="w-[2em] h-[1.3em]" />,
        description:
          "Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started. Taught by Meta Staff",
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer?action=enroll",
      },
      {
        title: "Build Web Apps with ASP.NET",
        aurthor: "Skill path",
        logo: <p className="text-xs font-mono">Skill Path</p>,
        description:
          "Jumpstart your career with this skill path, first by learning the C# language, then building web apps with ASP.NET Core and the Razor Pages. Includes .NET, C#, Web Apps, Back End, Razor Pages, and more.",
        link: "https://www.codecademy.com/learn/paths/build-web-apps-with-asp-net",
      },
      {
        title: "Learn JavaScript",
        aurthor: "Coursera",
        logo: <p className="text-xs font-mono">Code Academy</p>,
        description:
          "Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.",
        link: "https://www.codecademy.com/learn/introduction-to-javascript",
      },
      {
        title: "Introduction to HTML, CSS, & JavaScript",
        aurthor: "Skill path",
        logo: (
          <img
            srcSet="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/c0/87a10033a311e892619b85c6fd62bb/IBM-200x48.png?auto=format%2Ccompress&dpr=1&h=45"
            className="w-[2.5em] h-[0.7em]"
          />
        ),
        description: `This course is part of multiple programs: 
IBM Full Stack Software Developer Professional Certificate
IBM iOS and Android Mobile App Developer Professional Certificate
IBM Front-End Developer Professional Certificate
IBM Back-end JavaScript Developer Professional Certificate
IBM Full-Stack JavaScript Developer Professional Certificate
IBM AI Developer Professional Certificate`,
        link: "https://www.codecademy.com/learn/paths/build-web-apps-with-asp-net",
      },
      {
        title: "Build a Website using an API with HTML, JavaScript, and JSON",
        aurthor: "Coursera",
        logo: <p className="text-xs font-mono">Coursera</p>,
        description:
          "In this project, you’ll support a European travel agency’s effort to increase booking by building a webpage that provides visitors with a 7-day weather forecast for major European cities. Accomplishing this task will require you to retrieve real-time weather data from an external service. In creating the webpage, you’ll request, process, and present the weather data using HTML, JavaScript, and JSON.  There isn’t just one right approach or solution in this scenario, which means you can create a truly unique project that helps you stand out to employers.",
        link: "https://www.coursera.org/projects/showcase-build-a-website-api-html-javascript-json",
      },
    ],
  },
  {
    title: "Back-End Development",
    description:
      "Learn how to build the server-side infrastructure and logic that powers dynamic websites and web applications.",
    courses: [
      {
        title: "JAVA Backend Development",
        description:
          "This extensive Java Backend Development course is a 12-week guided program to equip you with the right skills and make you interview-ready. Not only this, get hands-on experience in building web apps like e-wallets, movie ticket booking, etc.",
        aurthor: "Geeksforgeeks",
        logo: <SiGeeksforgeeks className="text-green-700" />,
        link: "https://www.geeksforgeeks.org/courses/Java-backend-live",
      },
      {
        title: "Server-Side JavaScript with Node.js",
        description:
          "This is an intermediate level backend development course through which you can learn the basics of MongoDB, Node, and ES6 to improve your development skills and create your own REST API. This is the most comprehensive course in backend development for beginners.",
        aurthor: "Youtube",
        logo: <SiYoutube className="text-red-700" />,
        link: "https://www.youtube.com/watch?v=TlB_eWDSMt4&pp=ygUXbm9kZWpzIGJhY2tlbmQgdHV0b3JpYWw%3D",
      },
      {
        title: "GoLang backend tutorial",
        description:
          "In this backend master class, we’re going to learn everything about how to design, develop, and deploy a complete backend system from scratch using Golang, PostgreSQL, Docker, gRPC, Kubernetes.",
        aurthor: "Youtube",
        logo: <SiYoutube className="text-red-700" />,
        link: "https://www.youtube.com/playlist?list=PLy_6D98if3ULEtXtNSY_2qN21VCKgoQAE",
      },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Learn how to build and deploy mobile applications for Android, IOS, WatchOS and other portable devices",
    courses: [
      {
        title:
          "Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial",
        description:
          "Learn how to use Flutter in this complete course for beginners. Flutter is an open-source UI software development kit used to create cross-platform applications for iOS, Android, Windows, Mac, and more.",
        aurthor: "Youtube",
        logo: <SiYoutube className="text-red-700 text-3xl" />,
        link: "https://www.youtube.com/watch?v=VPvVD8t02U8&pp=ygUaZmx1dHRlciBkZXZlbG9wbWVudCBjb3VzZXM%3D",
      },
      {
        title: "Swift Mobile app development",
        description:
          "Learn how to use the swift programming to build and deploy ios applications to the appstore",
        aurthor: "Youtube",
        logo: <SiYoutube className="text-red-700" />,
        link: "https://www.youtube.com/playlist?list=PLSzsOkUDsvdu5Mm67aBYs2YPu2OM4mFzt",
      },
      {
        title: "React Native full course for beginners",
        description:
          "This React Native Course for beginners from @DaveGrayTeachesCode is an all-in-one tutorial full of over 4 hours of React Native code and instruction to help you learn the basics of mobile app development.",
        aurthor: "Youtube",
        logo: <SiYoutube className="text-red-700" />,
        link: "https://www.youtube.com/watch?v=sm5Y7Vtuihg",
      },
    ],
  },
];

const jobList: JobModel[] = [
  {
    title: "ReactJS Frontend Developer",
    description:
      "CardTonic - We are looking for a skilled react.js developer to join our development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.",
    link: "https://ng.indeed.com/viewjob?jk=c7e97804508f453a&from=shareddesktop",
  },
  {
    title: "Frontend Web Developer",
    description:
      "Tecton Studio - Tecton Studio is a dynamic and innovative design and development company, specializing in creating cutting-edge products and delivering outstanding solutions to our clients. Our projects span across a range of industries, and we are committed to fostering an environment where talent thrives and ideas flourish.",
    link: "https://ng.indeed.com/viewjob?jk=957ddc9b67ca54c8&from=shareddesktop",
  },
  {
    title: "UI/UX Designer",
    description:
      "Kenkeputa - As a UI/UX Engineer at Kenkeputa, you will play a critical role in shaping the design and usability of our mobile and web applications. You will collaborate with product managers, developers, and other stakeholders to create seamless, engaging, and user-friendly experiences tailored to the global market.",
    link: "https://www.jobberman.com/listings/uiux-designer-at-kenkeputa-np8px0",
  },
  {
    title: "DevOps Engineer",
    description:
      "Kenkeputa - As a DevOps Engineer, you will play a critical role in designing, implementing, and managing the infrastructure and deployment processes for our mobile and web applications. You’ll work closely with our development teams to ensure reliable, scalable, and secure solutions, enabling rapid iteration and delivery of high-quality applications.",
    link: "https://www.jobberman.com/listings/devops-engineer-at-kenkeputa-inc-pmrmd0",
  },
];

function DialogPrompt({navigate} : { navigate: NavigateFunction }) {
  return (
    <div
      id="outer-area"
      onClick={(e) => {
        // @ts-ignore
        if (e.target.id == "outer-area") {
          diaLogPromptStore.setShowModal(false);
        }
      }}
      className="w-full h-full flex items-center justify-center fixed z-50 bg-[#4949495e]"
    >
      <div className="w-[340px] py-5 px-5 bg-white rounded">
        <p className="text-xl font-bold">Logout</p>
        <div className="bg-gray-700 mb-2 p-[0.2px]"></div>
        <p className="text-sm mb-5 text-gray-700">
          Are you sure you want to logout? (you have to log back in to access
          these features)
        </p>
        <Buttons.primary_button onClick={()=> {
          localStorage.clear()
          navigate('/auth/signin')
          Toast.warning('Please signin to proceed')
        }}>
          <p className="text-sm text-white">Logout</p>
        </Buttons.primary_button>
      </div>
    </div>
  );
}
const diaLogPromptStore = useLogoutDialogStore.getState();
export default () => {
  const dialogStore = useLogoutDialogStore()
  const navigate = useNavigate()
  return (
    <div>
      {dialogStore.showModal ? <DialogPrompt navigate={navigate}/> : null}
      <Nav_bar />
      {courseCategories.map((item, index) => {
        return (
          <div className="py-[2em] px-[1.5em] space-y-6" key={index}>
            <SectionHeading
              title={item.title}
              subTitle={
                <div className="">
                  <p className="text-sm text-gray-600"></p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              }
            />

            <div className="flex flex-row space-x-4 space-y-4 flex-wrap">
              {item.courses.map((course, index) => {
                return (
                  <div key={index}>
                    <Course_card
                      title={course.title}
                      icon={course.logo}
                      link={course.link}
                      description={course.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="">
        <SectionHeading title="Job Listings" subTitle={<></>} />
      </div>
      <div className="flex py-[2em] space-x-6 px-[1.5em] space-y-6 flex-wrap">
        {jobList.map((jobs, index) => {
          return (
            <div key={index} className="">
              <Job_card
                description={jobs.description}
                link={jobs.link}
                message={jobs.title}
                price=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function SectionHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <div
          id="line"
          className="w-[6em] h-[0.22em] rounded bg-[var(--primary-color)]"
        ></div>
        <div className="flex flex-col items-start">
          <p className="lexend-bold text-2xl">{title}</p>
          {subTitle}
        </div>
      </div>
    </div>
  );
}

function LogoutUser() {}

function Nav_bar() {
  return (
    <div className="w-full top-0 sticky backdrop-blur-sm bg-[#ffffffa1] z-10 h-[4.7em] px-[2em] flex items-center justify-between border-b-2 border-gray-5001">
      <div>
        <img src="" alt="" srcSet={logo} className="w-[8em]" />
      </div>
      <div className="flex space-x-4">
        <p className="text-base text-gray-700">
          {" "}
          <span className="lexend-bold text-blue-700">
            {courseCategories.length}
          </span>{" "}
          course categories
        </p>
        <p className="text-base text-gray-700">
          {" "}
          <span className="lexend-bold text-blue-700">
            {jobList.length}
          </span>{" "}
          jobs
        </p>
        <button
        onClick={()=> {
          useLogoutDialogStore.getState().setShowModal(true);
        }}
        className="mx-3 bg-red-600 px-3 py-2 rounded text-xs font-bold text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
