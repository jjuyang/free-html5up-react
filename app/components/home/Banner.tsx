// src/components/Banner.tsx
import type { JSX } from "react";
import PageHeader from "../elements/PageHeader";
import Button from "../elements/Button";

function Banner(): JSX.Element {
  return (
    <section id="banner">
      <div className="content">
        <PageHeader title="Hi, I’m Editorial by HTML5 UP" subtitle="A free and fully responsive site template" />
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
        <ul className="actions">
          <li><Button text="Learn More" size="big" to="#" /></li>
        </ul>
      </div>
      <span className="image object">
        <img src="/images/pic10.jpg" alt="" />
      </span>
    </section>
  );
}

export default Banner;