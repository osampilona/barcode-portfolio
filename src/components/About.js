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
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>1</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis modi exercitationem perferendis sint laborum beatae incidunt
            porro tenetur, quae iste ut odio eius optio. Reprehenderit eum
            asperiores tempora quaerat vero. Nihil inventore, fugiat praesentium
            cumque deserunt autem architecto eos consequuntur, quas libero odio
            impedit expedita at quaerat quam maxime nesciunt ratione. Corporis
            possimus ut, et aliquam eos accusamus ipsam omnis similique saepe
            minima iste nulla obcaecati tenetur culpa. Distinctio.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>2</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tempora repellat ducimus voluptates. Temporibus, eveniet totam
            voluptatem soluta deserunt nisi doloribus ullam iure sequi ipsum sit
            fugiat tenetur, provident modi similique? Fugiat eaque quasi,
            voluptates eius laborum tempora alias unde minus laudantium
            temporibus provident dignissimos sunt maiores, dolore inventore
            commodi quam mollitia eum dolores ratione. Corporis eos magni culpa
            molestiae expedita optio, temporibus maiores ex error modi rerum
            placeat, impedit omnis, ullam ducimus architecto sunt soluta illum
            qui et officia unde praesentium iste ut? Dolores tenetur, impedit
            quod error odio quaerat sint reprehenderit facilis quidem, placeat
            cum, velit praesentium explicabo!
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>3</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cupiditate ex tempore repellendus qui! Recusandae mollitia
            temporibus minus tenetur neque reprehenderit libero eius illum!
            Fugit at iure dolorem earum est ab nisi, hic ipsam doloribus
            praesentium laudantium libero quaerat cumque velit veritatis quas
            aperiam iste ea officia vel blanditiis aliquid?
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>4</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis modi exercitationem perferendis sint laborum beatae incidunt
            porro tenetur, quae iste ut odio eius optio. Reprehenderit eum
            asperiores tempora quaerat vero. Nihil inventore, fugiat praesentium
            cumque deserunt autem architecto eos consequuntur, quas libero odio
            impedit expedita at quaerat quam maxime nesciunt ratione. Corporis
            possimus ut, et aliquam eos accusamus ipsam omnis similique saepe
            minima iste nulla obcaecati tenetur culpa. Distinctio.
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>5</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            aliquid, sequi praesentium totam illum optio cum ipsam nisi omnis
            quos facilis officiis molestiae perferendis sint repudiandae
            nesciunt dolorem, magni non, neque fuga qui voluptatum vero.
            Repellendus, velit illo. Reprehenderit sed deleniti magni veniam
            dolorum, laudantium eaque voluptatum impedit illo a adipisci
            perferendis, neque placeat earum maiores fugit saepe accusantium sit
            eum! Sequi voluptatibus ducimus neque quidem dolorum, enim
            praesentium dignissimos, consectetur esse perspiciatis odit quisquam
            deserunt! Nostrum, voluptatum. Veniam reiciendis molestiae quae,
            vitae, exercitationem sed soluta officiis optio est quo deserunt
            modi illum beatae? Laboriosam quo ipsum repellat! Ex, aut!
          </p>
        </div>
      </section>
      <section className="description-container">
        <div className="title-box">
          <div className="title">
            <h3>This is title</h3>
          </div>
          <div className="number-box">
            <div className={`number ${antimode}`}>6</div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis modi exercitationem perferendis sint laborum beatae incidunt
            porro tenetur, quae iste ut odio eius optio. Reprehenderit eum
            asperiores tempora quaerat vero. Nihil inventore, fugiat praesentium
            cumque deserunt autem architecto eos consequuntur, quas libero odio
            impedit expedita at quaerat quam maxime nesciunt ratione. Corporis
            possimus ut, et aliquam eos accusamus ipsam omnis similique saepe
            minima iste nulla obcaecati tenetur culpa. Distinctio.
          </p>
        </div>
      </section>
      {/* <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
