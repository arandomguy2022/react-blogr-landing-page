import React from "react";
import "../css/mainpage.css";
import designImg from "../images/illustration-editor-mobile.svg";
import designImgPc from "../images/illustration-editor-desktop.svg";
import illustationPhone from "../images/illustration-phones.svg";
import laptopImg from "../images/illustration-laptop-mobile.svg";
import laptopImgPc from "../images/illustration-laptop-desktop.svg";
export default function Mainpage() {
  return (
    <main>
      <div className="desktop-design">
        <section className="design">
          <h2>Designed for the future</h2>
          <img src={designImg} alt="" className="mobile" />
          <img src={designImgPc} alt="" className="pc" />
        </section>
        <section className="intro texts">
          <h2> Introducing an extensible editor</h2>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </section>
        <section className="content texts">
          <h2> Robust content management</h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </section>
      </div>
      <section className="infrastructure">
        <img src={illustationPhone} alt="illustration" />

        <div>
          <h2> State of the Art Infrastructure</h2>
          <p>
            {" "}
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
      <div className="wrapper">
        <div className="laptop">
          <img src={laptopImg} alt="" className="mobile" />
          <img src={laptopImgPc} alt="" className="pc" />
        </div>
        <div className="down-text">
          <section className="texts">
            <h2>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </section>
          <section className="texts tooling">
            <h2>Powerful tooling</h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
