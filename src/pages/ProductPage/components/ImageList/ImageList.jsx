/** @format */

import {
  ListImageContainer,
  ListItem,
  SmallImageContainer,
} from "./ImageList.styled";

export default function ImageList({ gallery, onClick }) {
  return (
    <ListImageContainer>
      {gallery.map((image) => {
        return (
          <ListItem key={image} onClick={() => onClick(image)}>
            <SmallImageContainer>
              <img src={image} alt={image} height="85" width="auto" />
            </SmallImageContainer>
          </ListItem>
        );
      })}
    </ListImageContainer>
  );
}
