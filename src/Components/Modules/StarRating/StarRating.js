import React from "react";
import { StyleStarRating } from "./StyleStar";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const StarRating = (props) => {
  const { id, star } = props;
  const createStar = (star, id) => {
    let stars = [];
    for (let i = 5; i > 0; i--) {
      if (i <= star) {
        stars.push(<BsFillStarFill size={"1.3rem"} key={i} />);
      } else {
        stars.push(<BsStar size={"1.3rem"} key={i} />);
      }
    }
    return stars;
  };

  return (
    <StyleStarRating hover>
      <span>({star}) </span>
      {createStar(star, id)}
    </StyleStarRating>
  );
};

export default StarRating;
