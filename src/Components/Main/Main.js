import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../Popup/Popup";
// import CheckIcon from "@mui/icons-material/Check";

function Main() {
  const [movies, setMovies] = useState(null);
  const [butttonPopup, setButtonPopup] = useState(false);

  const openPopup = () => {
    setButtonPopup(true);
  };

  // useEffect(() => {
  //   if (butttonPopup === true) {
  //     setTimeout(() => {
  //       setButtonPopup(false);
  //     }, 1000);
  //   }
  // }, [butttonPopup]);


  useEffect(() => {
    fetch("http://localhost:8000/recommendations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <Section>
      <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={true}>
        {movies &&
          movies.map((movie) => (
            <Body key={movie.id}>
              <Title>
                {movie.title} ({movie.rating}/10)
              </Title>
              <Img src={movie.imageURL} alt="obrazek tytułowy" />
              <BtnsField>
                <Button
                  style={{ backgroundColor: "rgb(20,200,20)" }}
                  onClick={openPopup}
                >
                  <p>Accept</p>
                  {/* <CheckIcon /> */}
                </Button>
                <Button style={{ backgroundColor: "rgb(200,20,20)" }}>
                  <p>Reject</p>
                </Button>
              </BtnsField>
            </Body>
          ))}
      </Slider>
      <Popup trigger={butttonPopup} setTrigger={setButtonPopup}></Popup>
    </Section>
  );
}

export default Main;
const Section = styled.section`
  min-width: 270px;
`;

const Body = styled.div`
  height: 97vh;
  text-align: center;

  @media screen and (max-width: 450px) {
    height: 50vh;
  }
`;
const Title = styled.h1`
  margin-top: 2rem;
  font-size: 4rem;
`;
const Img = styled.img`
  height: 70%;
  margin: 2rem auto;
  border-radius: 0.3rem;
`;
const BtnsField = styled.div`
  width: 38rem;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;

  @media screen and (max-width: 450px) {
    width: 25rem;
  }
`;
const Button = styled.div`
  width: 10rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 3rem;
  transition: 0.3s;
  cursor: pointer;

  svg {
    font-size: 2rem;
    /* display: none; */
  }

  &:hover {
    border-radius: 1rem;
  }

  &:focus p {
    font-size: 10rem;
  }
`;
