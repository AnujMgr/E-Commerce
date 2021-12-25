import React from "react";
import { useParams } from "react-router";
import { StyleText, StyleWrap, StyleSpan } from "../../utils/CommonStyle";

function SearchPage() {
  const { query } = useParams();
  console.log(query);
  return (
    <StyleWrap margin="8em auto 3em">
      <StyleText fontSize="1.4rem" fontWeight="bold" letterSpacing="4px">
        SEARCH RESULT
      </StyleText>
      <StyleText fontSize="1rem" fontWeight="normal" margin="1rem auto">
        <StyleSpan color="#52b76b">1333 </StyleSpan>results found for "
        <StyleSpan color="#52b76b">{query}</StyleSpan>"
      </StyleText>
    </StyleWrap>
  );
}

export default SearchPage;
