// app/Elements/page.tsx

"use client";

import type { JSX } from "react";
import Header from "../components/Header";
import PageHeader from "../components/elements/PageHeader";
import Typography from "../components/elements/Typography";
import TextContent from "../components/elements/TextContent";
import TextLists from "../components/elements/TextLists";
import Table from "../components/elements/Table";
import Buttons from "../components/elements/Buttons";
import Forms from "../components/elements/Forms";
import ImageGrid from "../components/elements/ImageGrid";
import ImageAlignment from "../components/elements/ImageAlignment";

function Elements(): JSX.Element {
  return (
    <>
      <Header />
      <section>
        <PageHeader title="Elements" />

        {/* Content */}
        <Typography />
        <hr className="major" />

        {/* Elements */}
        <h2 id="elements">Elements</h2>
        <div className="row gtr-200">
          <div className="col-6 col-12-medium">
            {/* Text stuff */}
            <TextContent />

            {/* Lists */}
            <TextLists />

            {/* Blockquote */}
            <h3>Blockquote</h3>
            <blockquote>
              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
              Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis
              in faucibus vestibulum. Blandit adipiscing eu felis iaculis
              volutpat ac adipiscing accumsan eu faucibus.
            </blockquote>

            {/* Table */}
            <Table />
          </div>
          <div className="col-6 col-12-medium">
            {/* Buttons */}
            <Buttons />

            {/* Form */}
            <Forms />

            {/* Image */}
            <ImageGrid />

            <ImageAlignment />

            {/* Box */}
            <h3>Box</h3>
            <div className="box">
              <p>
                Felis sagittis eget tempus primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
                felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum
                primis in faucibus vestibulum.
              </p>
            </div>

            {/* Preformatted Code */}
            <h3>Preformatted</h3>
            <pre>
              <code>
                {`i = 0;

                  while (!deck.isInOrder()) {
                      print 'Iteration ' + i;
                      deck.shuffle();
                      i++;
                  }

                  print 'It took ' + i + ' iterations to sort the deck.';`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default Elements;
