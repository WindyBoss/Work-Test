/** @format */
import { ReactComponent as Arrow } from "images/arrowUp.svg";

import {
  ImageSelectionContainer,
  ArrowContainer,
} from "./ImageSwitcher.styled";

export default function ImageSwitcher({ handleClick }) {
  return (
    <ImageSelectionContainer>
      <ArrowContainer
        data-action="decrement"
        rotate="rotate(90deg)"
        onClick={handleClick}
      >
        <Arrow width="12px" height="12px" fill="#fff" />
      </ArrowContainer>
      <ArrowContainer
        data-action="increment"
        rotate="rotate(-90deg)"
        onClick={handleClick}
      >
        <Arrow width="12px" height="12px" fill="#fff" />
      </ArrowContainer>
    </ImageSelectionContainer>
  );
}
