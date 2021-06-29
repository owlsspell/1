import "./App.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import CountryCardsContainer from "./component/CountryCards/CountryCardsContainer";
import InputSearchContainer from "./component/Input/InputSearchContainer";
import CountryPageContainer from "./component/CountryPage/CountryPageContainer";

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/card/:nameCountry"
          render={() => <CountryPageContainer />}
        />
        <Route
          path="/country"
          render={() => (
            <div>
              <InputSearchContainer />
              <CountryCardsContainer />
            </div>
          )}
        />
        <Route exact path="/">
          <Redirect to="/country" />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
