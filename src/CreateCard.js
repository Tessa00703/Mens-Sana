import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CreateCard = ({ setCardContent }) => {
  const [cardData, setCardData] = useState();
  const handleChange = e => {
    setCardData(e.target.value);
  };
  return (
    <div>
      <TextField
        style={{ width: "500px" }}
        id="new-card-creation"
        label="Standard"
        onChange={handleChange}
      />
      <Button
        onClick={() => setCardContent(cc => [...cc, { text: cardData }])}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </div>
  );
};

export default CreateCard;
