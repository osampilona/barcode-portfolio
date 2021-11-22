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
            My name is Martina Brzica and I come from Croatia. From the moment I
            was aware about world around me I was a dreamer. Creative one. First
            I studied History of Art at the University of Zadar, and there I
            gained MA degree. My primary occupation in that field was
            conservation of architectural heritage, but later I got a job as
            assistant currator and museum pedagogist. After a while, I decided
            to try something new and I started to work as sales representative
            and content creator in a small IT comapny in Croatia. Later on, two
            years ago, I have decided to move to Aalborg, Denmark to study
            Automation Engineering at UCN. Now I live in Copenhagen, learning
            Danish and looking for a job.
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
            Since we live in some challenging times, I faced lockdowns because
            of Corona and I spent my days in hyggelig apartment in Nørresundby
            next to the fjord. I was always interested in designing webpages, so
            I decided to learn more about it and started few online courses. In
            the beginning it was just designing and prototyping, but later I
            wanted to build something by myself and started to learn HTML, CSS
            and JavaScript. And then I wanted to learn React.js, which was great
            thing for developing web apps.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>Who hires me</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>3</div>
          </div>
        </div>
        <div className="text">
          <p>
            During my studies, I had an internship in automation company Sørig
            Group near Aalborg. My task there was to build program for running
            two big storages in pat food factory in France and one smaller
            factory in USA. After graduation, I wanted to do something new and
            put my self-learning into use, so I worked as web developer in a
            small startup from Copenhagen, yTalent. I worked there for three
            months as UX/UI designer and frontend developer. We made new UI for
            company webpage and built it in code.
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
            As an UX/UI designer I use all of my theoretical knowledge about art
            and design, from my History of Art studies. For all my projects I am
            using dotted journal, Adobe CC or Figma. Since I am amateur
            photographer, I use a lot Photoshop and Lightroom, but for some more
            graphic projects and ideas I use Illustrator. For designing and
            prototyping, most of the time I use Adobe XD (because of cloud), but
            for some projects Figma as well. After I have prepared design, I
            start to code. At the moment, React.js with Context is my favourite
            tool. For that I am using Visual Studio Code (VS Code), Git, GitHub
            and Netlify. I would love to concentrate at Frontend, but with the
            time and Backend, so I can be Fullstack one day.
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
            Taking recommendations from all of my preivous job, managers,
            colleagues and friends, first of all, they would say that I am loyal
            employee, colleague and a friend. Second thing would be that I am
            persistant, goal oriented and detailed. And finaly, that I am
            open-minded. I deeply believe that listening and dialog are one of
            the best things that can happen between colleagues which leads to
            common understanding, especially in small but fast growing
            companies.
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
            You can expect creative observer with flare for organization and
            solving problems. As from UX/UI designer, you could find me as a
            detailed researcher who brainstorm and discuss ideas. I would say
            that my moto would be "Less is more". As from a frontend developer,
            you could find in me a person who want to get a chance to learn and
            practice more. Someone who is looking for a good mentor and strive
            for more.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
