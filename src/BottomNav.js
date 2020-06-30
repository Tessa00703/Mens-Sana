import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
/* import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";*/
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ViewCarouselSharpIcon from '@material-ui/icons/ViewCarouselSharp';
import PublishIcon from '@material-ui/icons/Publish';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleNewCard = () => {
    history.push("/newCard");
  };

  const handleSeeCards = () => {
    history.push("/cards");
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        onClick={() => handleSeeCards()}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        onClick={() => handleNewCard()}
        label="Create Card"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        label="My Cards"
        onClick={() => handleSeeCards()}
        icon={<ViewCarouselSharpIcon/>}
      />
       <BottomNavigationAction
        label="Post"
        onClick={() => handleSeeCards()}
        icon={<PublishIcon />}
      />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
