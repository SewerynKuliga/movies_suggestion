import React from "react";
import styled from "styled-components";

function Popup(props) {
  return props.trigger ? (
    <Body onClick={()=> {props.setTrigger(false)}}>
      {" "}
      <p>Added to library</p>
      {/* <CloseBtn>Close</CloseBtn> */}
      {props.children}
    </Body>
  ) : (
    ""
  );
}

export default Popup;

const Body = styled.div`
  position: absolute;
  display: flex;
  top: 11%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  width: 20rem;
  height: auto;
  justify-content: center;
  text-align: center;
  background-color: rgba(255,255,255, 0.9);
  margin: 0 auto;

  border: 2px solid green;
  border-radius: 2rem;
  transition: 0.1s;
  z-index: 5;
  p {
      font-size: 2.4rem;
      color: green;
  }
`;

// const CloseBtn = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
// `;
