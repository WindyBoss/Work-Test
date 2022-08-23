/** @format */

import { MainImageContainer } from "./MainImage.styled";

export default function MainImage({ image, alt }) {
  return (
    <MainImageContainer>
      <img src={image} alt={alt} height="100%" width="auto" />
    </MainImageContainer>
  );
}
