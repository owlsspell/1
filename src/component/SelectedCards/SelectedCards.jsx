import { useEffect, useState } from "react";
import { Checkbox, Typography } from "@material-ui/core";
import { Box, Button, Card, CardContent } from "../../style/style";
import { NavLink } from "react-router-dom";

const SelectedCards = (props) => {
  const [checked, setChecked] = useState({});

  const handleChange = (event) => {};

  useEffect(() => {
    props.selectedCards.forEach((key) => {
      setChecked({ ...checked, [key.name]: true });
    });
  }, [props.selectedCards]);

  const deleteCard = (name) => {
    props.selectedCards.map((card) => {
      if (name === card.name) {
        let index = props.selectedCards.findIndex((i) => i === card);
        props.deleteCountryCard(card, index);
      }
    });
  };
  return (
    <div>
      {props.selectedCards.map((card) => {
        return (
          <Box key={card.numericCode}>
            <Card selected>
              {/* <NavLink path="/dialogs" render={() => <DialogsContainer />}> */}
              <CardContent>
                <Typography variant="h5" component="h2">
                  Name: {card.name}
                </Typography>
                <Typography color="textSecondary">
                  Calling Code: {card.callingCodes}
                </Typography>
                <NavLink to={"/card/" + card.name}>
                  <Button size="small">Learn More</Button>
                </NavLink>
              </CardContent>
              <CardContent>
                <Checkbox
                  name={card.name}
                  checked={checked[card.name] ?? checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": card.name }}
                />
                <div>
                  <Button
                    delete
                    onClick={() => {
                      deleteCard(card.name);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
};

export default SelectedCards;
