// src/components/elements/ImageGrid.tsx

import type { JSX } from "react";
import { galleryImages } from "../../data/galleryImageData"; 


function ImageGrid(): JSX.Element {

  return (
    <>
      <h3>Image</h3>
            
      <h4>Fit</h4>
      <span className="image fit">
        <img src="/images/pic11.jpg" alt="" />
      </span>
      <div className="box alt">
        <div className="row gtr-50 gtr-uniform">

          {galleryImages.map((imageSrc: string, index: number) => {
            
            const finalSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;

            return (
              <div className="col-4" key={index}>
                <span className="image fit">
                  <img src={`${finalSrc}`} alt={`갤러리 이미지 ${index + 1}`} />
                </span>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default ImageGrid;