import React from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import "./styles.css";

const wrapperStyle = {
  backgroundColor: "#024773",
  fontFamily: "sans-serif",
  padding: "50px 50px",
  border: "10px solid",
  textAlign: "cover",
  lineHeight: "1.5"
  //display: "inline-block",
  //verticalAlign: "middle"
};
const cardStyleOne = {
  backgroundColor: "#00000",
  fontFamily: "sans-serif",
  textAlign: "center",
  Border: "10px solid #e7e7e7",
  borderRadius: "15px",
  Overflow: "hidden",
  Position: "absolute"
  //padding: "10px 50px"
};

const cardStyleTwo = {
  backgroundColor: "#024773",
  backgroundImage: "./src/img/1.jpg",
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "inline-block",
  Width: "90vw",
  maxWidth: "400px",
  Height: "70vh",
  Border: "10px solid #e7e7e7",
  borderRadius: "15px",
  Overflow: "hidden",
  Position: "absolute"
};
const MyEndCard = () => {
  return (
    <div>
      You are much stronger than you think! And I promise you, that you will
      make it!
    </div>
  );
};

const MyCardWrapper = ({ cardContent }) => {
  return (
    <CardWrapper style={wrapperStyle}>
      {cardContent.map((card, index) => {
        return (
          <Card
            key={card.text}
            style={index % 2 === 0 ? cardStyleOne : cardStyleTwo}
          >
            {card.text}
          </Card>
        );
      })}
      <MyEndCard />
    </CardWrapper>
  );
};

export default MyCardWrapper;
