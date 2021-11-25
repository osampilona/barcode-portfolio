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
            My name is Martina Brzica and I come from Croatia. Ever since I was
            little, I was somewhat of a creative dreamer. I pursued my love of
            art by studying History of Art at the University of Zadar, where I
            gained my MA degree. My primary occupation was conservation of
            architectural heritage, but I later got a job as an assistant
            curator and museum pedagogist. After a while, I decided to try
            something new and started to work as a sales representative and
            content creator at a small IT comapny in Croatia. Two years ago I
            decided to move to Aalborg, Denmark to study Automation Engineering
            at UCN. Today I live in Copenhagen, learning Danish and looking for
            a job.
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
            Due to the circumstances at large I have mostly been staying at home
            during the last year, and I have really been enjoying my hyggelig
            apartment in Nørresundby next to the fjord. I was always interested
            in web design, so I decided to learn more about it and started a few
            online courses. In the beginning it was just designing and
            prototyping, but I also wanted to try my hand at creating something
            of my own. That's why I started learning HTML, CSS and JavaScript. I
            also got proficient in React.js, which was great decidion for
            developing web apps.
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
            During my studies, I had an internship at Sørig Group, an automation
            company near Aalborg. There I worked on creating a program for
            running two large warehouses at a pat food factory in France and one
            smaller factory in the US. After graduation, I wanted to do
            something new and put my independent education to use, so I worked
            as web developer at yTalent, a small startup from Copenhagen. I
            worked there for three months as a UX/UI designer and frontend
            developer. We created a new UI for the company web and built it in
            code.
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
            As an UX/UI designer I use my vast theoretical knowledge about art
            and design from my History of Art studies. I normally work with
            dotted journal, Adobe CC or Figma. As an amateur photographer, I use
            Photoshop and Lightroom a lot, but I also know how to work in
            Illustrator for some more graphic projects and ideas. When designing
            and prototyping I mostly work in Adobe XD, but I am also comfortable
            working in Figma. After preparing the project design, I start to
            code. At the moment, React.js with Context is my favourite tool. I
            use Visual Studio Code (VS Code), Git, GitHub and Netlify. At the
            moment I would love to concentrate on Frontend, but with time I plan
            on working on my Backend skills as well, so I can be Fullstack one
            day.
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
            Based on the feedback from my previous work, managers, colleagues
            and friends, I think I can say I am a loyal employee, colleague and
            a friend. I am also persistant, goal-oriented and detailed. Finaly,
            I am open-minded. I deeply believe that listening to your colleagues
            and engaging in a constructive dialogue with them is a key for a
            good workplace, as it leads to common understanding, especially in
            small but fast growing companies.
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
            problem solving. As a UX/UI designer, I am a detailed researcher who
            loves to brainstorm and discuss ideas. I would say that my moto is
            "Less is more". As a frontend developer, I would love to get a
            chance to learn and practice more. I am someone who is looking for a
            good mentor and strive for development.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
