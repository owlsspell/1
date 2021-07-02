import { NavLink } from "react-router-dom";
import { Checkbox, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCountries } from "../../api/api";
import { Box, Button, Card, CardContent } from "../../style/style";

const CountryCards = (props) => {
  useEffect(() => {
    getCountries().then((countries) => props.setCountries(countries));
  }, []);

  let filteredCountries = (letter) => {
    let arrS = props.countries.filter((country) => {
      let name = country.name;

      return name.toLowerCase().indexOf(letter.toLowerCase()) > -1;
    });

    return arrS;
  };
  let filterArr = filteredCountries(props.searchWords);

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    props.countries.map((country) => {
      if (event.target.ariaLabel === country.name) {
        let index = props.countries.findIndex((i) => i === country);
        props.selectCardCountry(country, index);
      }
    });
  };

  return (
    <div>
      {filterArr.map((country) => {
        return (
          <Box key={country.numericCode}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Name: {country.name}
                </Typography>
                <Typography color="textSecondary">
                  Calling Code: {country.callingCodes}
                </Typography>
                <NavLink to={"/card/" + country.name}>
                  <Button size="small">Learn More</Button>
                </NavLink>
              </CardContent>
              <CardContent>
                <Checkbox
                  name={country.name}
                  checked={checked[country.name]}
                  onChange={handleChange}
                  inputProps={{ "aria-label": country.name }}
                />
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
};

export default CountryCards;
