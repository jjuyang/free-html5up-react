// src/components/elements/TextLists.tsx
import type { JSX } from "react";
import Button from "./Button";

function TextLists(): JSX.Element {
  return (
    <>
      <h3>Lists</h3>
      <div className="row">
        <div className="col-6 col-12-small">
          <h4>Unordered</h4>
          <ul>
            <li>Dolor etiam magna etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis dolore viverra.</li>
          </ul>

          <h4>Alternate</h4>
          <ul className="alt">
            <li>Dolor etiam magna etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis feugiat viverra.</li>
          </ul>
        </div>
        <div className="col-6 col-12-small">
          <h4>Ordered</h4>
          <ol>
            <li>Dolor etiam magna etiam.</li>
            <li>Etiam vel lorem sed viverra.</li>
            <li>Felis dolore viverra.</li>
            <li>Dolor etiam magna etiam.</li>
            <li>Etiam vel lorem sed viverra.</li>
            <li>Felis dolore viverra.</li>
          </ol>

          <h4>Icons</h4>
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-tumblr">
                <span className="label">Tumblr</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h4>Definition</h4>
      <dl>
        <dt>Item1</dt>
        <dd>
          <p>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Lorem ipsum dolor.
          </p>
        </dd>
        <dt>Item2</dt>
        <dd>
          <p>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Lorem ipsum dolor.
          </p>
        </dd>
        <dt>Item3</dt>
        <dd>
          <p>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Lorem ipsum dolor.
          </p>
        </dd>
      </dl>

      <h4>Actions</h4>
      <ul className="actions">
        <li>
          <Button text="Default" variant="primary" to="#" />
        </li>
        <li>
          <Button text="Default" to="#" />
        </li>
      </ul>
      <ul className="actions small">
        <li>
          <Button text="Small" variant="primary" size="small" to="#" />
        </li>
        <li>
          <Button text="Small" size="small" to="#" />
        </li>
      </ul>
      <div className="row">
        <div className="col-6 col-12-small">
          <ul className="actions stacked">
            <li>
              <Button text="Default" variant="primary" to="#" />
            </li>
            <li>
              <Button text="Default" to="#" />
            </li>
          </ul>
        </div>
        <div className="col-6 col-12-small">
          <ul className="actions stacked">
            <li>
              <Button text="Small" variant="primary" size="small" to="#" />
            </li>
            <li>
              <Button text="Small" size="small" to="#" />
            </li>
          </ul>
        </div>
        <div className="col-6 col-12-small">
          <ul className="actions stacked">
            <li>
              <Button text="Default" variant="primary" fit={true} to="#" />
            </li>
            <li>
              <Button text="Default" fit={true} to="#" />
            </li>
          </ul>
        </div>
        <div className="col-6 col-12-small">
          <ul className="actions stacked">
            <li>
              <Button text="Small" variant="primary" size="small" fit={true} to="#" />
            </li>
            <li>
              <Button text="Small" size="small" fit={true} to="#" />
            </li>
          </ul>
        </div>
      </div>

      <h4>Pagination</h4>
      <ul className="pagination">
        <li>
          <Button text="Prev" disabled={true} />
        </li>
        <li>
          <Button text="1" variant="primary" to="#" isPaginationPage={true} />
        </li>
        <li>
          <Button text="2" to="#" isPaginationPage={true} />
        </li>
        <li>
          <Button text="3" to="#" isPaginationPage={true} />
        </li>
        <li>
          <span>&hellip;</span>
        </li>
        <li>
          <Button text="8" to="#" isPaginationPage={true} />
        </li>
        <li>
          <Button text="9" to="#" isPaginationPage={true} />
        </li>
        <li>
          <Button text="10" to="#" isPaginationPage={true} />
        </li>
        <li>
          <Button text="Next" to="#" />
        </li>
      </ul>
    </>
  );
}

export default TextLists; 