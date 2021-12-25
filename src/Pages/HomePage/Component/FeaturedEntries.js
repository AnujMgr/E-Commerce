import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { VscGift } from "react-icons/vsc";
import { StyleFeaturedEntries } from "../HomeStyle/HomeStyle";

function FeaturedEntries() {
  return (
    <StyleFeaturedEntries>
      <div>
        <IoPricetagOutline size={30} />
        <h3>
          <b>Discover</b> Our Collection
        </h3>
      </div>
      <div>
        <VscGift size={30} />
        <h3>
          <b>Huge</b> Discount for All
        </h3>
      </div>
    </StyleFeaturedEntries>
  );
}

export default FeaturedEntries;
