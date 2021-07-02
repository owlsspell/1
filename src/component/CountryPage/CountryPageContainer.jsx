import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CountryPage from "./CountryPage";
import { setCountries } from "../../redux/card-reduser";

const CountryPageContainer = (props) => {
  let nameCountry = props.match.params.nameCountry;

  return (
    <CountryPage
      countries={props.countries}
      nameCountry={nameCountry}
      setCountries={props.setCountries}
      selectedCards={props.selectedCards}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.cardReduser.countries,
    selectedCards: state.cardReduser.selectedCards,
  };
};

export default connect(mapStateToProps, { setCountries })(
  withRouter(CountryPageContainer)
);
