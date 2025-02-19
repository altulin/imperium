import { FC } from "react";

const ImageWebp: FC = () => {
  return (
    <picture>
      <source
        media="(max-width: 768px)"
        type="image/png"
        srcSet="/img/location-768.png"
      />
      <source
        type="image/webp"
        srcSet="
                  /img/webp/location.webp    1x,
                  /img/webp/location@2x.webp 2x
                "
      />
      <img
        src="/img/location.png"
        srcSet="/img/location.png 1x, /img/location@2x.png 2x"
        alt="location"
        width="1920"
        height="1452"
      />
    </picture>
  );
};
export default ImageWebp;
