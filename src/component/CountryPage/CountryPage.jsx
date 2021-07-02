import { CardHeader, CardContent } from "@material-ui/core";
import { Box, CardCountry, CardMedia, Stamp } from "../../style/style";

const CountryPage = (props) => {
  let card = props.countries.find((country) => {
    return country.name === props.nameCountry;
  });
  if (!card) {
    card = props.selectedCards.find((country) => {
      return country.name === props.nameCountry;
    });
  }

  if (card) {
    localStorage.setItem("card", JSON.stringify(card));
  }

  localStorage.setItem(
    "selected",
    JSON.stringify(
      props.selectedCards.length > 0
        ? props.selectedCards.find((c) => c.name === props.nameCountry) ?? false
        : false
    )
  );
  let cardLocal = localStorage.getItem("card");
  let selectedLocal = localStorage.getItem("selected");
  cardLocal = JSON.parse(cardLocal);
  if (!card) {
    card = cardLocal;
  }
  selectedLocal = JSON.parse(selectedLocal);
  return (
    <div>
      <Box>
        <CardCountry>
          <CardHeader title={card.name} />
          {selectedLocal ? <Stamp>Country selected</Stamp> : ""}
          <CardMedia src={card.flag} />
          <CardContent>
            <p>Calling Codes: {card.callingCodes}</p>
            <p>Region: {card.region}</p>
            <p>
              Time zones:{" "}
              {card.timezones.map((zone, index) => {
                return <li key={index}>{zone}</li>;
              })}
            </p>
            <p>Currencies: {card.currencies[0].symbol}</p>
          </CardContent>
        </CardCountry>
      </Box>
    </div>
  );
};

export default CountryPage;
