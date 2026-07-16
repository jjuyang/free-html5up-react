// src/components/elements/ImageGrid.tsx

import type { JSX } from "react";
import Image from "next/image";
import { galleryImages } from "../../data/galleryImageData";

function ImageGrid(): JSX.Element {
  return (
    <>
      <h3>Image</h3>

      <h4>Fit</h4>
      <span className="image fit">
        {/* fill 속성을 사용하고, 부모 요소가 position: relative를 갖도록 해야 합니다. */}
        {/* CSS에서 .image.fit에 position: relative와 aspect-ratio를 지정하는 것을 권장합니다. */}
        <Image src="/images/pic11.jpg" alt="fit-image" fill />
      </span>
      <div className="box alt">
        <div className="row gtr-50 gtr-uniform">
          {galleryImages.map((imageSrc: string, index: number) => {
            const finalSrc = imageSrc.startsWith("/")
              ? imageSrc
              : `/${imageSrc}`;

            return (
              <div className="col-4" key={index}>
                <span className="image fit">
                  {/* 여기도 마찬가지로 fill 속성을 적용합니다. */}
                  <Image
                    src={`${finalSrc}`}
                    alt={`갤러리 이미지 ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }} // 이미지가 잘리지 않고 채워지도록 설정
                  />
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
