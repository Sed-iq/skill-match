import { ReactNode } from "react";
import Nav_bar from "../components/nav_bar";
import useNavStore from "../stores/nav-state";
import Courses from "./courses";
import Jobs from "./jobs";
import { FaCircle } from "react-icons/fa";
import CommunityImg from "../assets/hero_section.png";
import CourseraLogo from "../assets/Coursera_logo_(2020) 1.png";
import UdemyLogo from "../assets/Udemy_logo 1.png";
import YoutubeLogo from "../assets/new-youtube-logo-logo-svgrepo-com 1.png";
import FreeCodeCampLogo from "../assets/FreeCodeCamp_logo 1.png";
import CodeWithMoshLogo from "../assets/logo 1.png";
import Course_card from "../components/course_card";
import WebLogo from "../assets/world-wide-web_841364 1.png";
import AndroidLogo from "../assets/android_robot.png";
import NodeLogo from "../assets/node_js_logo.png";
import Job_card from "../components/job_card";

const HomeScreens: ReactNode[] = [<Home />, <Courses />, <Jobs />];

function Home({}) {
  return (
    <div className=" px-[2em]">
      {/* Hero section */}
      <div className="flex mb-[1em] py-[1.5em] justify-between">
        <div className="space-y-4 w-[40%]">
          <div className="flex space-x-2 items-center">
            <FaCircle className="text-[0.36em] text-blue-700" />
            <p className="lexend-bold text-sm text-blue-700 ">
              E-Learning platform
            </p>
          </div>
          <div>
            <p className="lexend-bold text-[2.2em]">
              Get Top-Notch Courses in Tech, Job opportunities and{" "}
              <span className="text-[var(--primary-color)]">Freelancing.</span>
            </p>
            <p className="">
              Here at{" "}
              <span className="lexend-bold">
                <span className="text-[var(--primary-color)]">Skill</span>
                Match
              </span>{" "}
              we offer top-notch to break you into Tech or to take your existing
              skills to the max, we also provide jobs postings and freelancing
              opportunities for our users.
            </p>
          </div>
        </div>
        <div className="flex w-[60%] justify-center items-center">
          <img alt="" className="w-[24em]" srcSet={CommunityImg} />
        </div>
      </div>

      <div className="mb-[3em]">
        <div className="mb-[0.7em]">
          <SectionHeading
            title="Popular Courses"
            subTitle={
              <p className="text-sm text-gray-600">
                Get trending HOT courses in tech space to jump on and start
                building
              </p>
            }
          />
        </div>
        <div className="flex items-center mb-[3em] space-x-[5em]">
          <img srcSet={CourseraLogo} className="w-[6em]" />
          <img srcSet={UdemyLogo} className="w-[4em]" />
          <img srcSet={YoutubeLogo} className="w-[6em]" />
          <img srcSet={FreeCodeCampLogo} className="w-[6em]" />
          <img srcSet={CodeWithMoshLogo} className="w-[6em]" />
        </div>

        {/* courses list */}
        <div className="flex space-y-3 items-start justify-start flex-wrap space-x-10">
          <Course_card
            title="Web Development"
            icon={<img srcSet={WebLogo} className="w-[1.3em] h-[1.3em]" />}
            link=""
            description="Get roadmaps on web development, from Zero to Hero, Topics ranging from HTML, CSS, JavaScript and other frameworks to boot."
          />
          <Course_card
            title="Mobile App Development"
            icon={<img srcSet={AndroidLogo} className="w-[1.3em] h-[1.3em]" />}
            description="Hop into the world of mobile development, get started now and build functionality driven mobile applications, with Flutter, Swift and Java"
            link=""
          />
          <Course_card
            title="Backend Development"
            icon={<img srcSet={NodeLogo} className="w-[1.3em] h-[1.3em]" />}
            description="Learn to build scalable server-side applications with our comprehensive course, covering programming languages, database management, API design, and cloud platforms."
            link=""
          />
        </div>
      </div>

      {/* Job pre-section */}
      <div className="mb-[3em]">
        <div className="mb-[3em]">
          <SectionHeading
            title="Freelancing?"
            subTitle={
              <div className="">
                <p className="text-sm text-gray-600">
                  Apply for jobs on{" "}
                  <span className="lexend-bold">
                    <span className="text-[var(--primary-color)]">Skill</span>
                    Match
                  </span>{" "}
                </p>
                <p className="text-sm text-gray-600">
                  freelance with job postings on the platform and get noticed by
                  companies looking to hire.
                </p>
              </div>
            }
          />
        </div>
        <div className="flex items-start justify-start flex-wrap space-x-7">
          <Job_card
            message="Finance website required"
            price="500"
            link="https://www.upwork.com/jobs/~021882555367239211057"
            description="I require somebody to design a website where users will select a stock market portfolio , a finance API will need to be incorporated to track real time stock prices, and portfolio performance. Each user will need to log in and to be able to track the performance of their portfolio."
          />
          <Job_card
            message="Frontend Developer with Expertise in React, Next.js, TailwindCSS"
            price="15 per hour"
            link="https://www.upwork.com/jobs/~021881877715130150068"
            description="We are seeking a highly skilled and experienced Frontend Developer to join our team on a freelance basis. The ideal candidate will have a strong command of modern frontend and backend technologies, including React.js, Next.js, TailwindCSS, ShadCN, HTML, CSS, JavaScript, TypeScript, and Redux."
          />
          <Job_card
            message="Senior React/Next.js Developer for E-Commerce Team"
            price="1,500 per month"
            link="https://www.upwork.com/nx/proposals/job/~021881446625622866588/apply/"
            description="We are seeking a highly skilled Senior React/Next.js Developer to join our e-commerce development team. The ideal candidate will have a proven track record in building scalable web applications using React and Next.js. Your role will involve Refactoring the next.js code base from daisyui to Shadcn/ui withTailwind CSS."
          />
        </div>
      </div>
    </div>
  );

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
}

export default () => {
  const navStore = useNavStore();
  return (
    <div>
      <Nav_bar />
      {HomeScreens[navStore.current_select]}
    </div>
  );
};
