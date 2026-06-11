// src/components/elements/ImageAlignment.tsx

import type { JSX } from "react";

function ImageAlignment(): JSX.Element {
  return (
    <> 
      <h4>Left &amp; Right</h4>
      <p>
        <span className="image left">
          <img src="/images/pic01.jpg" alt="" />
        </span>
        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
        sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
        faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
        ac adipiscing accumsan eu faucibus. Integer ac pellentesque
        praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
        ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante
        ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
        iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
        pellentesque praesent.
      </p>
      <p>
        <span className="image right">
          <img src="/images/pic02.jpg" alt="" />
        </span>
        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
        sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
        faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
        ac adipiscing accumsan eu faucibus. Integer ac pellentesque
        praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
        ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante
        ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
        iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
        pellentesque praesent.
      </p>
    </>
  );
} 

export default ImageAlignment;