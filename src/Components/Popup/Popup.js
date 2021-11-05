import React, { useEffect } from "react";
import styled from "styled-components";

function Popup(props) {
  const trigger = props.trigger;
  useEffect(() => {
    if (trigger === true) {
      setTimeout(() => {
        props.setTrigger(false);
      }, 1000);
    }
  }, [trigger]);

  return props.trigger ? (
    <Body
      onClick={() => {
        props.setTrigger(false);
      }}
    >
      {" "}
      <p>Added to library</p>
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
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;

  border: 2px solid green;
  border-radius: 2rem;
  transition: 1s;
  p {
    font-size: 2.4rem;
    color: green;
  }

  @media screen and (max-width: 450px) {
    width: 12rem;
    p {
      font-size: 1.8rem;
    }
  }
`;

// const CloseBtn = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
// `;
