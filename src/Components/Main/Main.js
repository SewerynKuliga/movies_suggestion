import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/recommendations")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <section>
      <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={true}>
        {movies &&
          movies.map((movie) => (
            <Body key={movie.id}>
              <Title>
                {movie.title} ({movie.rating}/10)
              </Title>
              <Img src={movie.imageURL} alt="obrazek tytułowy" />
              <BtnsField>
                <Button style={{backgroundColor: "rgb(10,198,21)"}}>Accept</Button>
                <Button style={{backgroundColor: "rgb(215,2,2)"}}>Reject</Button>
              </BtnsField>
            </Body>
          ))}
      </Slider>
    </section>
  );
}

export default Main;

const Body = styled.div`
  height: 97vh;
  text-align: center;
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
  width: 40rem;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`;
const Button = styled.div`
  width: 10rem;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 3rem;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover{
    border-radius: 1rem;

  }
`;
