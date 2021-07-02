import { connect } from "react-redux";
import InputSearch from "./InputSearch";
import { changeSearchWords, clearSearch } from "../../redux/card-reduser";
import { BoxSearch } from "../../style/style";
import ClearSearch from "../ClearSearch/ClearSearch";

const InputSearchContainer = (props) => {
  return (
    <BoxSearch>
      <InputSearch
        changeSearchWords={props.changeSearchWords}
        searchWords={props.searchWords}
        clearSearch={props.clearSearch}
      />
      <ClearSearch clearSearch={props.clearSearch} />
    </BoxSearch>
  );
};

const mapStateToProps = (state) => ({
  searchWords: state.cardReduser.searchWords,
});

export default connect(mapStateToProps, { changeSearchWords, clearSearch })(
  InputSearchContainer
);
