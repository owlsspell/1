import { connect } from "react-redux";
import CountryCards from "./CountryCards";
import {
  setCountries,
  selectCardCountry,
  deleteCountryCard,
} from "../../redux/card-reduser";
import SelectedCards from "../SelectedCards/SelectedCards";

const CountryCardsContainer = (props) => {
  const handleChange = (event) => {
    return event.target.checked;
  };

  return (
    <div>
      {props.selectedCards.length !== 0 ? (
        <SelectedCards
          selectedCards={props.selectedCards}
          handleChange={handleChange}
          deleteCountryCard={props.deleteCountryCard}
          // style={style}
        />
      ) : (
        ""
      )}
      {props.isClear ? (
        ""
      ) : (
        <CountryCards
          countries={props.countries}
          setCountries={props.setCountries}
          searchWords={props.searchWords}
          selectCardCountry={props.selectCardCountry}
          selectedCards={props.selectedCards}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.cardReduser.countries,
    searchWords: state.cardReduser.searchWords,
    selectedCards: state.cardReduser.selectedCards,
    isClear: state.cardReduser.isClear,
  };
};
export default connect(mapStateToProps, {
  setCountries,
  selectCardCountry,
  deleteCountryCard,
})(CountryCardsContainer);
