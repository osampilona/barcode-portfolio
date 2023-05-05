import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";
import ToggleIcon from "./ToggleIcon";

const About = () => {
  const { mode, antimode } = useTheme();

  return (
    <div className={`container ${mode}`}>
      <div className="icon">
        <ToggleIcon />
      </div>
      <Navbar />
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>Who I am</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>1</div>
          </div>
        </div>
        <div className="text">
          <p>
            My name is Martina Miljak and I come from Croatia. Ever since I was
            little, I was somewhat of a creative dreamer. I pursued my love of
            art by studying History of Art at the University of Zadar, where I
            gained my MA degree. My primary occupation was conservation of
            architectural heritage, however later I got a job as an assistant
            curator and museum pedagogist. After a while, I decided to try
            something new and started to work as a sales representative and
            content creator at a small IT comapny in Croatia. Three years ago I
            decided to move to Aalborg, Denmark to study Automation Engineering
            at UCN. Today I live in Copenhagen and work as a Frontend developer
            at Falck.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>What I do</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>2</div>
          </div>
        </div>
        <div className="text">
          <p>
            In the last two years I am pursuing my career as a Frontend
            Developer. It is very interesting to see digital products build and
            grow. I want to specialize myself as a frontend developer with wide
            range of tools and technologies. That means I can take
            responsabilities for the entire frontend, starting with taking
            requsts from business, understanding needs of content creators,
            collaboration with UX/UI designers, aligment with backend developers
            and data scientist, and making test plans with manual and automation
            testers. Next to that, I like to experiment with new tools, such as
            Storybook and introducing it to the stakeholders.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>Previous experience</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>3</div>
          </div>
        </div>
        <div className="text">
          <p>
            <strong>Internship x2</strong>
            <br></br>
            During my studies, I had an internship at Sørig Group, an automation
            company near Aalborg. There I worked on creating a program for
            running two large warehouses at a pat food factory in France and one
            smaller factory in the US. After graduation, I wanted to do
            something new and put my independent education to use, so I worked
            as web developer at "yTalent", a small startup from Copenhagen. I
            worked there for three months as a UX/UI designer and frontend
            developer. We created a new UI for the company web and built it in
            code.
            <br></br>
            <strong>Junior Frontend developer</strong>
            <br></br>
            Moving forward, I found Junior frontend position in another startup
            "WordPay" where I worked with Next.js and concentrating mostly on
            developing pixel perfect, mobile first, dynamic and responsive
            companies website.
            <br></br>
            <strong>Frontend developer</strong>
            <br></br>
            Few mothes later, I was offered Frontend possition at Falck A/S.
            Joining Falck was great opportunity to learn and grow on many
            fields. I started my education as an Optimizely developer and
            started to collaborate with backend developers on C# and .NET CORE
            codebase, but still not directly working with it. This has been very
            chalenging journey, leading frontend on two platforms, documenting
            current state and doing health checks, to lead code migration with
            advanced refactoring of frontend from Blazor to React and
            Typescript.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>My approach</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>4</div>
          </div>
        </div>
        <div className="text">
          <p>
            As a Frontend developer, I am always aiming to have quality
            codebase. That starts with the folder structure and organizing
            files. Next to that, development goals are mobile-first,
            responsiveness and reusable components. After working with the
            Opimizely CMS and creating page templates, together with blocks for
            editors, I've learned how to better understand business requirements
            and sales team needs. When receiving change requests and creating
            User Stories, I am looking for clarifing needs from business
            department, prepared design from UX designer and aligment with
            Product Owner on what is realistic and duable, preferably to be done
            in one sprint time (2 weeks).
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>What people say</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>5</div>
          </div>
        </div>
        <div className="text">
          <p>
            Based on the feedback from my previous jos, managers, colleagues and
            friends, I think I can say I am a loyal employee, colleague and a
            friend. I am also persistant, goal-oriented and love to have
            structure in my daily tasks. I deeply believe that listening to your
            colleagues and engaging in a constructive dialogue with them is a
            key for a good workplace, as it leads to common understanding.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>What to expect</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>6</div>
          </div>
        </div>
        <div className="text">
          <p>
            You can expect a creative observer with a flare for organization and
            problem solving. I am a detailed researcher who loves to brainstorm
            and discuss ideas. I would say my moto is "Less is more". As a
            frontend developer, I enjoy every chance to learn even more and
            enhance my development skills. However, I am also interested in more
            organization positions such as Product Owner or Project Manager for
            Development teams.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
