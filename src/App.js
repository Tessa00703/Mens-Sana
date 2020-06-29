import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MyCardWrapper from "./MyCardWrapper";
import CreateCard from "./CreateCard";
import BottomNav from "./BottomNav";

const App = () => {
  const [cardContent, setCardContent] = useState([
    {
      text:
        "Hello there!!! Put on your brightest smile :D new day, new chances!! Are you ready to rock today?"
    },
    {
      text: "Will you do what it takes to keep that awesome smile on your face?"
    },
    {
      text: "Did you know how proud I am of You?"
    },
    {
      text: "Can you promise yourself to be the best version of yourself today?"
    },
    {
      text:
        "Will you remember that even the strongest storm didn't last forever?"
    }
  ]);

  return (
    <>
      <Switch>
        <Route path="/cards">
          <MyCardWrapper cardContent={cardContent} />
        </Route>
        <Route path="/newCard">
          <CreateCard setCardContent={setCardContent} />
        </Route>
      </Switch>
      <BottomNav />
    </>
  );
};

export default App;
